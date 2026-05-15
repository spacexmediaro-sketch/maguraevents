import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rateLimit';
import { sendContactEmail } from '@/lib/email';

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    '127.0.0.1'
  );
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = getClientIp(request);
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: `Prea multe cereri. Vă rugăm așteptați ${rateCheck.retryAfter} secunde.` },
      {
        status: 429,
        headers: { 'Retry-After': String(rateCheck.retryAfter) },
      }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Format de date invalid.' },
      { status: 400 }
    );
  }

  // Validate
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { error: 'Date invalide.', details: errors },
      { status: 422 }
    );
  }

  // Send email
  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json(
      { success: true, message: 'Cererea a fost trimisă cu succes.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API] Email send failed:', err);
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea cererii. Vă rugăm sunați-ne direct.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
