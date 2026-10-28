import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import net from 'node:net';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

// Execute from the project root. CHROME_PATH can point to a Chromium-compatible browser.
const candidates = [process.env.CHROME_PATH, process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, 'Google/Chrome/Application/chrome.exe'), process.env['PROGRAMFILES(X86)'] && path.join(process.env['PROGRAMFILES(X86)'], 'Google/Chrome/Application/chrome.exe'), 'google-chrome', 'chromium', 'chromium-browser'].filter(Boolean);
const chrome = candidates.find((candidate) => spawnSync(candidate, ['--version'], { stdio: 'ignore' }).status === 0);
if (!chrome) throw new Error('Chrome/Chromium não encontrado. Defina CHROME_PATH para o executável.');
if (typeof WebSocket === 'undefined') throw new Error('Este teste requer Node.js com WebSocket global (Node.js 22 ou superior).');

async function freePort() {
  const server = net.createServer();
  await new Promise((resolve, reject) => server.once('error', reject).listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  return port;
}

async function waitFor(check, label, timeout = 60000) {
  const deadline = Date.now() + timeout;
  let lastError;
  while (Date.now() < deadline) {
    try { const result = await check(); if (result) return result; } catch (error) { lastError = error; }
    await sleep(250);
  }
  throw new Error(`Tempo esgotado: ${label}${lastError ? ` (${lastError.message})` : ''}`);
}

function start(command, args) {
  const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'] });
  let logs = '';
  child.stdout.on('data', (data) => { logs = (logs + data).slice(-12000); });
  child.stderr.on('data', (data) => { logs = (logs + data).slice(-12000); });
  child.on('error', (error) => { logs += `\n${error.message}`; });
  return { child, logs: () => logs };
}

async function connect(url) {
  const ws = new WebSocket(url);
  await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
  let nextId = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    message.error ? request.reject(new Error(message.error.message)) : request.resolve(message.result);
  });
  ws.addEventListener('close', () => { for (const request of pending.values()) request.reject(new Error('Chrome fechou a ligação DevTools')); pending.clear(); });
  return {
    send(method, params = {}) {
      return new Promise((resolve, reject) => { const id = ++nextId; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
    },
    close: () => ws.close(),
  };
}

async function evaluate(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

const appPort = await freePort();
const browserPort = await freePort();
const profile = await mkdtemp(path.join(process.cwd(), '.cv-print-test-'));
const app = start(process.execPath, [path.join('node_modules', 'next', 'dist', 'bin', 'next'), 'dev', '--port', String(appPort), '--hostname', '127.0.0.1']);
const browser = start(chrome, ['--headless=new', '--disable-gpu', '--no-first-run', `--remote-debugging-port=${browserPort}`, `--user-data-dir=${profile}`, 'about:blank']);
let cdp;
try {
  const base = `http://127.0.0.1:${appPort}`;
  const debug = `http://127.0.0.1:${browserPort}`;
  await waitFor(async () => (await fetch(`${base}/cv`)).ok, 'servidor Next.js');
  await waitFor(async () => (await fetch(`${debug}/json/version`)).ok, 'Chrome DevTools');
  const target = await fetch(`${debug}/json/new?about:blank`, { method: 'PUT' }).then((response) => response.json());
  cdp = await connect(target.webSocketDebuggerUrl);
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'dark' }] });
  await cdp.send('Page.navigate', { url: base });
  await waitFor(() => evaluate(cdp, `location.origin === ${JSON.stringify(base)} && document.documentElement.dataset.theme === 'dark' && !!document.querySelector('#hero')`), 'tema do sistema');
  await waitFor(() => evaluate(cdp, `!!document.querySelector('button[aria-label="Ativar tema claro"]')`), 'controlo de tema');
  assert.equal(await evaluate(cdp, `(() => { document.querySelector('button[aria-label="Ativar tema claro"]').click(); return localStorage.getItem('portfolio_theme'); })()`), 'light');
  await waitFor(() => evaluate(cdp, `document.documentElement.dataset.theme === 'light' && !!document.querySelector('button[aria-label="Ativar tema escuro"]')`), 'alternância para tema claro');
  await cdp.send('Page.reload');
  await waitFor(() => evaluate(cdp, `document.readyState === 'complete' && document.documentElement.dataset.theme === 'light' && !!document.querySelector('button[aria-label="Ativar tema escuro"]')`), 'persistência do tema claro');
  assert.equal(await evaluate(cdp, `(() => { const hero = document.querySelector('#hero'); const rect = hero.getBoundingClientRect(); hero.dispatchEvent(new PointerEvent('pointermove', { bubbles: true, pointerType: 'mouse', clientX: rect.left + 120, clientY: rect.top + 80 })); return hero.style.getPropertyValue('--circuit-x'); })()`), '120px');
  assert.equal(await evaluate(cdp, `getComputedStyle(document.querySelector('.hero-circuit-layer')).pointerEvents`), 'none');
  assert.equal(await evaluate(cdp, `(() => { document.querySelector('button[aria-label="Ativar tema escuro"]').click(); return localStorage.getItem('portfolio_theme'); })()`), 'dark');
  for (const width of [320, 390]) {
    await cdp.send('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
    const nav = await evaluate(cdp, `(() => {
      const header = document.querySelector('header[role="banner"]');
      return [...header.querySelectorAll('a, button')].map(el => { const r = el.getBoundingClientRect(); return { label: el.getAttribute('aria-label') || el.textContent, width: r.width, height: r.height, left: r.left, right: r.right }; });
    })()`);
    for (const item of nav) {
      assert.ok(item.width >= 44 && item.height >= 44, `${width}px: alvo tátil pequeno: ${item.label}`);
      assert.ok(item.left >= 0 && item.right <= width, `${width}px: navegação cortada: ${item.label}`);
    }
  }
  await cdp.send('Emulation.clearDeviceMetricsOverride');
  for (const theme of ['light', 'dark']) {
    await evaluate(cdp, `document.documentElement.dataset.theme = '${theme}'`);
    await cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    const focus = await evaluate(cdp, `(() => { const el = document.querySelector('input[name="name"]'); el.focus(); const style = getComputedStyle(el); return { color: style.outlineColor, width: parseFloat(style.outlineWidth), style: style.outlineStyle }; })()`);
    assert.ok(focus.width >= 2 && focus.style !== 'none' && focus.color !== 'rgba(0, 0, 0, 0)', `${theme}: foco do formulário invisível`);
    const colors = await evaluate(cdp, `(() => { const style = getComputedStyle(document.documentElement); return [style.getPropertyValue('--error').trim(), style.getPropertyValue('--paper').trim()]; })()`);
    const luminance = (hex) => { const parts = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16) / 255).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4); return 0.2126 * parts[0] + 0.7152 * parts[1] + 0.0722 * parts[2]; };
    const values = colors.map(luminance);
    assert.ok((Math.max(...values) + 0.05) / (Math.min(...values) + 0.05) >= 4.5, `${theme}: contraste insuficiente da mensagem de erro`);
  }
  await evaluate(cdp, `document.documentElement.dataset.theme = 'dark'; document.querySelector('header nav button').focus(); document.querySelector('header nav button').click()`);
  await waitFor(() => evaluate(cdp, `document.activeElement?.id === 'lead-email'`), 'foco inicial no diálogo');
  for (let i = 0; i < 6; i++) {
    await cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    await cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
    assert.equal(await evaluate(cdp, `!!document.activeElement?.closest('[role="dialog"]')`), true, 'o foco saiu do diálogo');
  }
  for (let i = 0; i < 4; i++) {
    await cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, modifiers: 8 });
    await cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, modifiers: 8 });
    assert.equal(await evaluate(cdp, `!!document.activeElement?.closest('[role="dialog"]')`), true, 'o foco saiu do diálogo ao recuar');
  }
  await cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await waitFor(() => evaluate(cdp, `!document.querySelector('[role="dialog"]') && document.activeElement === document.querySelector('header nav button')`), 'retorno do foco');
  console.log('✓ navegação móvel, contraste, foco e teclado verificados');
  await cdp.send('Page.navigate', { url: `${base}/cv` });
  await waitFor(() => evaluate(cdp, `location.pathname === '/cv' && document.readyState === 'complete' && document.documentElement.dataset.theme === 'dark' && !!document.querySelector('.cv-page')`), 'carregamento do CV com tema escuro');
  assert.equal(await evaluate(cdp, `getComputedStyle(document.querySelector('.cv-page')).backgroundColor`), 'rgb(255, 255, 255)');
  console.log('✓ tema do sistema, alternância, persistência e efeito do hero verificados');

  for (const lang of ['pt', 'en']) {
    await evaluate(cdp, `localStorage.setItem('portfolio_lang', '${lang}'); location.reload();`);
    await waitFor(() => evaluate(cdp, `document.readyState === 'complete' && document.documentElement.lang === '${lang === 'pt' ? 'pt-PT' : 'en-GB'}' && document.querySelector('#cv-profile')?.textContent.includes(${JSON.stringify(lang === 'pt' ? 'Perfil profissional' : 'Professional profile')})`), `CV ${lang}`);
    // Verify the real print button calls window.print before emulating print media.
    assert.equal(await evaluate(cdp, `(() => { let called = false; window.print = () => { called = true; }; document.querySelector('button[aria-label*="${lang === 'pt' ? 'IMPRIMIR' : 'PRINT'}"]').click(); return called; })()`), true);
    await cdp.send('Emulation.setEmulatedMedia', { media: 'print' });
    const layout = await evaluate(cdp, `(() => {
      const main = document.querySelector('.cv-page');
      const box = main.getBoundingClientRect();
      const content = [...main.querySelectorAll('h1, h2, h3, p, li, a, span')].filter(el => getComputedStyle(el).display !== 'none' && el.getClientRects().length);
      return { text: main.textContent, sections: main.querySelectorAll('.cv-section').length, top: box.top, bottom: box.bottom, width: box.width, height: box.height, content: content.map(el => ({text: el.textContent, top: el.getBoundingClientRect().top, bottom: el.getBoundingClientRect().bottom, left: el.getBoundingClientRect().left, right: el.getBoundingClientRect().right})), left: box.left, right: box.right };
    })()`);
    assert.equal(layout.sections, 5, `${lang}: faltam secções do CV`);
    for (const text of ['GastroSpec Radar', 'DocFácil.pt', 'LeadPulse', 'Cognirav', 'Scrum Alliance', 'Kanban University', 'MASSIMUS', 'Mate Academy']) {
      assert.ok(layout.text.toLowerCase().includes(text.toLowerCase()), `${lang}: conteúdo em falta: ${text}`);
    }
    // A4 margins: 190 × 281 mm of printable content. Leave rounding tolerance.
    const mm = 96 / 25.4;
    assert.ok(Math.abs(layout.width - 190 * mm) < 2, `${lang}: largura de impressão incorreta`);
    assert.ok(layout.height <= 281 * mm + 2 && layout.height >= 275 * mm, `${lang}: conteúdo não ocupa uma página A4`);
    for (const item of layout.content) {
      assert.ok(item.top >= layout.top - 1 && item.bottom <= layout.top + 281 * mm + 1 && item.left >= layout.left - 1 && item.right <= layout.right + 1, `${lang}: conteúdo fora da área imprimível: ${item.text}`);
    }
    const { data } = await cdp.send('Page.printToPDF', { preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
    const pdf = Buffer.from(data, 'base64').toString('latin1');
    assert.equal((pdf.match(/\/Type\s*\/Page\b/g) || []).length, 1, `${lang}: o PDF deve ter exatamente uma página`);
    const mediaBox = pdf.match(/\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)\s*\]/);
    assert.ok(mediaBox && Math.abs(Number(mediaBox[1]) - 595.3) < 2 && Math.abs(Number(mediaBox[2]) - 841.9) < 2, `${lang}: o PDF deve ter formato A4 vertical`);
    console.log(`✓ ${lang}: PDF A4 com uma página, conteúdo e botão de impressão verificados`);
    await cdp.send('Emulation.setEmulatedMedia', { media: 'screen' });
  }
} catch (error) {
  console.error(error);
  console.error(`\nNext.js:\n${app.logs()}\nChrome:\n${browser.logs()}`);
  process.exitCode = 1;
} finally {
  cdp?.close();
  browser.child.kill();
  app.child.kill();
  await sleep(1000);
  await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 500 });
}
