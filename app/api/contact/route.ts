import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import type { ApiResponse } from '@/types';

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional().default(''),
});

type ContactData = z.infer<typeof contactSchema>;

function sanitize(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim();
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function parseContactData(payload: unknown): ContactData {
  const parsed = contactSchema.parse(payload);
  return {
    ...parsed,
    name: sanitize(parsed.name),
    email: sanitize(parsed.email).toLowerCase(),
    subject: sanitize(parsed.subject),
    message: sanitize(parsed.message),
    website: sanitize(parsed.website),
  };
}

function errorResponse(error: string, status: number): NextResponse<ApiResponse> {
  return NextResponse.json<ApiResponse>({ success: false, error }, { status });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const payload: unknown = await request.json();
    let data: ContactData;

    try {
      data = parseContactData(payload);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return errorResponse('Verifique os campos do formulário e tente novamente.', 400);
      }
      return errorResponse('Payload inválido.', 400);
    }

    // Honeypot: responde como sucesso sem revelar a deteção ao bot.
    if (data.website) {
      return NextResponse.json<ApiResponse>({
        success: true,
        message: 'Mensagem enviada com sucesso.',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[CONTACT_CONFIG_ERROR] RESEND_API_KEY não configurada.');
      return errorResponse('O serviço de contacto está temporariamente indisponível.', 503);
    }

    const formattedDate = new Date().toLocaleString('pt-PT', {
      timeZone: 'Europe/Lisbon',
      dateStyle: 'full',
      timeStyle: 'medium',
    });
    const name = escapeHtml(data.name);
    const email = escapeHtml(data.email);
    const subject = escapeHtml(data.subject);
    const message = escapeHtml(data.message).replace(/\n/g, '<br />');
    const from = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['tiagodearaujo13@gmail.com'],
        reply_to: data.email,
        subject: `[Portfólio] ${data.subject}`,
        html: `
          <!doctype html>
          <html lang="pt-PT">
            <body style="margin:0;background:#f4f4f4;padding:32px;color:#111;font-family:Arial,sans-serif;">
              <main style="max-width:620px;margin:auto;background:#fff;border:1px solid #161616;padding:32px;">
                <p style="font-family:monospace;font-size:11px;letter-spacing:.08em;color:#666;text-transform:uppercase;">PORTFÓLIO / NOVO CONTACTO</p>
                <h1 style="font-size:26px;margin:8px 0 24px;">${subject}</h1>
                <div style="border-left:3px solid #111;background:#fafafa;padding:16px;margin-bottom:24px;line-height:1.6;">
                  <p><strong>Nome:</strong> ${name}</p>
                  <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Data/Hora:</strong> ${escapeHtml(formattedDate)} (Lisboa)</p>
                </div>
                <div style="font-size:15px;line-height:1.7;white-space:normal;">${message}</div>
              </main>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error('[CONTACT_RESEND_ERROR]', response.status, providerError);
      return errorResponse('Não foi possível enviar a mensagem. Tente novamente dentro de instantes.', 502);
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Mensagem enviada com sucesso.',
    });
  } catch (error) {
    console.error('[CONTACT_ROUTE_ERROR]', error);
    return errorResponse('Erro interno ao processar a mensagem.', 500);
  }
}
