import nodemailer from 'nodemailer';
import { sanitizeString } from './validation';
import type { ContactFormData } from './validation';

const tipEvenimentLabel: Record<string, string> = {
  nunta:          'Nuntă',
  botez:          'Botez',
  majorat:        'Majorat',
  'zi-nastere':   'Zi de naștere',
  corporate:      'Eveniment corporate',
  'alt-eveniment': 'Alt eveniment',
};

const salonLabel: Record<string, string> = {
  'salon-1': 'Salon Crystal',
  'salon-2': 'Salon Royal',
  oricare:   'Oricare salon disponibil',
};

const meniuLabel: Record<string, string> = {
  'meniu-nunta':        'Meniu nuntă',
  'meniu-botez':        'Meniu botez',
  'meniu-majorat':      'Meniu majorat',
  'meniu-corporate':    'Meniu corporate',
  'meniu-personalizat': 'Meniu personalizat',
  necunoscut:           'Nu a fost specificat',
};

function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port:   parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const safe = {
    numePrenume: sanitizeString(data.numePrenume),
    telefon:     sanitizeString(data.telefon),
    email:       sanitizeString(data.email),
    mesaj:       data.mesaj ? sanitizeString(data.mesaj) : '',
    buget:       data.bugetEstimativ ? sanitizeString(data.bugetEstimativ) : 'Nespecificat',
  };

  const htmlBody = `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Georgia', serif; background: #0f0f0f; color: #f5f0e8; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { border-bottom: 1px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #D4AF37; font-size: 28px; margin: 0; }
    .header p { color: #9B8E7C; margin: 5px 0 0; font-size: 14px; }
    .field { margin-bottom: 18px; }
    .label { color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 4px; }
    .value { color: #F5F0E8; font-size: 16px; }
    .section { background: #141414; border: 1px solid #1F1F1F; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
    .footer { border-top: 1px solid #1F1F1F; padding-top: 20px; margin-top: 30px; color: #5E5140; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✦ Cerere ofertă nouă</h1>
      <p>Măgura Events — ${new Date().toLocaleDateString('ro-RO', { dateStyle: 'full' })}</p>
    </div>

    <div class="section">
      <div class="field">
        <div class="label">Nume și prenume</div>
        <div class="value">${safe.numePrenume}</div>
      </div>
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value">${safe.telefon}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">${safe.email}</div>
      </div>
    </div>

    <div class="section">
      <div class="field">
        <div class="label">Tip eveniment</div>
        <div class="value">${tipEvenimentLabel[data.tipEveniment] ?? data.tipEveniment}</div>
      </div>
      <div class="field">
        <div class="label">Nr. estimativ invitați</div>
        <div class="value">${sanitizeString(data.nrInvitati)} persoane</div>
      </div>
      <div class="field">
        <div class="label">Data dorită</div>
        <div class="value">${sanitizeString(data.dataEveniment)}</div>
      </div>
      <div class="field">
        <div class="label">Salon preferat</div>
        <div class="value">${salonLabel[data.salonPreferat] ?? data.salonPreferat}</div>
      </div>
      <div class="field">
        <div class="label">Tip meniu</div>
        <div class="value">${data.tipMeniu ? (meniuLabel[data.tipMeniu] ?? data.tipMeniu) : 'Nespecificat'}</div>
      </div>
      <div class="field">
        <div class="label">Buget estimativ</div>
        <div class="value">${safe.buget}</div>
      </div>
    </div>

    ${safe.mesaj ? `
    <div class="section">
      <div class="label">Mesaj</div>
      <div class="value" style="white-space: pre-wrap;">${safe.mesaj}</div>
    </div>
    ` : ''}

    <div class="footer">
      <p>Cerere trimisă de pe magura-events.ro. Răspundeți la: ${safe.email}</p>
    </div>
  </div>
</body>
</html>
  `;

  await transporter.sendMail({
    from:    `"Măgura Events Site" <${process.env.SMTP_USER}>`,
    to:      process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
    replyTo: data.email,
    subject: `[Ofertă] ${tipEvenimentLabel[data.tipEveniment]} — ${safe.numePrenume} — ${sanitizeString(data.dataEveniment)}`,
    html:    htmlBody,
  });
}
