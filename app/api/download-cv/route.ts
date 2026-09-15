import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ApiResponse } from '@/types';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PDF_FILE_PATH = path.join(process.cwd(), 'public', 'assets', 'cv-tiago-francisco.pdf');

/**
 * Servidor seguro de PDF do CV via requisição GET.
 * Configura cabeçalhos de segurança e cache contínuo.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const fileBuffer = await fs.promises.readFile(PDF_FILE_PATH);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Tiago-Araujo-Fullstack-Dev.pdf"',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    const err = error as { code?: string; message?: string };
    console.error('[API_DOWNLOAD_CV_GET_ERROR]', err);

    if (err.code === 'ENOENT') {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Ficheiro PDF do CV não foi encontrado no servidor.',
        },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: 'Erro interno ao processar a solicitação de download.',
      },
      { status: 500 }
    );
  }
}

/**
 * Validação de lead e autorização de download via requisição POST.
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json().catch(() => ({}));
    const { email } = body;

    // 1. Validação estrita de entrada
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Por favor, introduza um endereço de e-mail válido.',
        },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('pt-PT', {
      timeZone: 'Europe/Lisbon',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // 2. Extração de telemetria da requisição
    const userAgent = req.headers.get('user-agent') || 'Desconhecido';
    const clientIp =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'IP Oculto';
    const city =
      req.headers.get('x-vercel-ip-city') || 'Localização não identificada';
    const country = req.headers.get('x-vercel-ip-country') || 'PT';

    // 3. Notificação via Resend (não-bloqueante — tolerante a falhas)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          cache: 'no-store',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Leads <onboarding@resend.dev>',
            to: ['tiagodearaujo13@gmail.com'],
            subject: `[Lead CV] Novo download: ${cleanEmail}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #111; }
                  .card { max-width: 560px; margin: 0 auto; background: #ffffff; border: 1px solid #161616; padding: 32px; border-radius: 0; }
                  .mono { font-family: monospace; font-size: 11px; letter-spacing: 0.05em; color: #555; text-transform: uppercase; }
                  h2 { font-size: 20px; font-weight: 700; margin: 8px 0 20px 0; color: #111; letter-spacing: -0.02em; }
                  .data-box { background: #fafafa; border-left: 3px solid #161616; padding: 14px 18px; margin: 20px 0; }
                  .data-row { font-size: 14px; margin-bottom: 8px; }
                  .data-row:last-child { margin-bottom: 0; }
                  .label { font-weight: 600; color: #333; }
                  .footer { font-size: 11px; color: #777; margin-top: 24px; border-top: 1px solid #e5e5e5; padding-top: 16px; }
                </style>
              </head>
              <body>
                <div class="card">
                  <div class="mono">PORTFÓLIO / TELEMETRIA DE LEADS 2026</div>
                  <h2>Novo Download de CV Autorizado</h2>
                  <p style="font-size: 14px; line-height: 1.5; color: #444;">Um visitante submeteu um e-mail para descarregar o seu Curriculum Vitae:</p>
                  
                  <div class="data-box">
                    <div class="data-row"><span class="label">E-mail:</span> <a href="mailto:${cleanEmail}" style="color: #111; font-weight: 600;">${cleanEmail}</a></div>
                    <div class="data-row"><span class="label">Data/Hora:</span> ${formattedDate} (Lisboa)</div>
                    <div class="data-row"><span class="label">Origem:</span> ${city}, ${country} (${clientIp})</div>
                  </div>

                  <div class="footer">
                    <p style="margin: 0;">Dispositivo: <span style="font-family: monospace; font-size: 10px;">${userAgent}</span></p>
                  </div>
                </div>
              </body>
              </html>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errData = await emailResponse.json();
          console.error('[RESEND_API_ERROR]', errData);
        } else {
          console.log(`[LEAD_NOTIFIED_SUCCESS] Email: ${cleanEmail}`);
        }
      } catch (emailErr) {
        console.error('[RESEND_DISPATCH_FAILED]', emailErr);
      }
    }

    console.log(
      `[CV_LEAD_CAPTURED] Email: ${cleanEmail} | Time: ${timestamp} | IP: ${clientIp} | City: ${city}, ${country}`
    );

    // 4. A autorização apenas regista o lead; o CV é visualizado e exportado pela página web.
    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Acesso ao CV autorizado com sucesso.',
    });
  } catch (error) {
    console.error('[API_ROUTE_POST_ERROR]', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Erro interno ao processar a solicitação.' },
      { status: 500 }
    );
  }
}
