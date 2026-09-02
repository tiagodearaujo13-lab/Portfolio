import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: 'Por favor, insira um endereço de e-mail válido.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const timestamp = new Date().toISOString();

    // 1. Notificação opcional via Webhook gratuito (Discord / Slack)
    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `📄 **Novo Download de CV no Portfólio!**\n**E-mail:** \`${cleanEmail}\`\n**Data:** \`${timestamp}\``,
          }),
        });
      } catch (webhookErr) {
        console.error('Falha ao enviar webhook de lead:', webhookErr);
      }
    }

    // 2. Log de telemetria visível no painel da Vercel
    console.log(`[CV_LEAD_CAPTURED] Email: ${cleanEmail} | Time: ${timestamp}`);

    return NextResponse.json({
      success: true,
      message: 'Acesso autorizado.',
      downloadUrl: '/assets/cv-tiago-francisco.pdf',
    });
  } catch (error) {
    console.error('Erro na rota de download de CV:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar a solicitação.' },
      { status: 500 }
    );
  }
}
