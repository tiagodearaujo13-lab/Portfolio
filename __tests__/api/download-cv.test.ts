import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { GET } from '@/app/api/download-cv/route';
import fs from 'fs';

describe('GET /api/download-cv', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('deve retornar status 200 com os cabeçalhos Content-Type e Content-Disposition corretos quando o ficheiro existe', async () => {
    const fakeBuffer = Buffer.from('%PDF-1.4 Fake PDF Content');
    vi.spyOn(fs.promises, 'readFile').mockResolvedValueOnce(fakeBuffer);

    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/pdf');
    expect(response.headers.get('Content-Disposition')).toContain(
      'attachment; filename="Tiago-Araujo-Fullstack-Dev.pdf"'
    );
    expect(response.headers.get('Cache-Control')).toContain('public');
  });

  it('deve retornar erro 404 com resposta JSON estruturada quando o ficheiro PDF não existe', async () => {
    const error = new Error('File not found');
    (error as { code?: string }).code = 'ENOENT';
    vi.spyOn(fs.promises, 'readFile').mockRejectedValueOnce(error);

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toEqual({
      success: false,
      error: 'Ficheiro PDF do CV não foi encontrado no servidor.',
    });
  });

  it('deve retornar erro 500 com resposta JSON estruturada em caso de exceção genérica no sistema de ficheiros', async () => {
    vi.spyOn(fs.promises, 'readFile').mockRejectedValueOnce(new Error('EACCES: permission denied'));

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({
      success: false,
      error: 'Erro interno ao processar a solicitação de download.',
    });
  });
});
