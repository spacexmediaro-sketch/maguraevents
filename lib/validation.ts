import { z } from 'zod';

export const contactSchema = z.object({
  numePrenume: z
    .string()
    .min(3, 'Numele trebuie să aibă minim 3 caractere')
    .max(100, 'Numele este prea lung')
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s\-'.]+$/, 'Numele conține caractere invalide'),
  telefon: z
    .string()
    .min(10, 'Telefonul trebuie să aibă minim 10 cifre')
    .max(15, 'Telefonul este prea lung')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Număr de telefon invalid'),
  email: z
    .string()
    .email('Adresa de email este invalidă')
    .max(200, 'Email prea lung'),
  tipEveniment: z.enum([
    'nunta',
    'botez',
    'majorat',
    'zi-nastere',
    'corporate',
    'alt-eveniment',
  ], { required_error: 'Selectați tipul evenimentului' }),
  nrInvitati: z
    .string()
    .min(1, 'Introduceți numărul estimativ de invitați')
    .regex(/^\d+$/, 'Introduceți doar cifre'),
  dataEveniment: z
    .string()
    .min(1, 'Selectați data dorită'),
  salonPreferat: z.enum(['salon-1', 'salon-2', 'oricare'], {
    required_error: 'Selectați salonul preferat',
  }),
  tipMeniu: z.enum([
    'meniu-nunta',
    'meniu-botez',
    'meniu-majorat',
    'meniu-corporate',
    'meniu-personalizat',
    'necunoscut',
  ]).optional(),
  bugetEstimativ: z
    .string()
    .max(50, 'Valoare prea lungă')
    .optional()
    .or(z.literal('')),
  mesaj: z
    .string()
    .max(2000, 'Mesajul este prea lung')
    .optional()
    .or(z.literal('')),
  gdprAccept: z
    .boolean()
    .refine((val) => val === true, 'Acceptul GDPR este obligatoriu'),
  acordContactare: z
    .boolean()
    .refine((val) => val === true, 'Acordul pentru contactare este obligatoriu'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function sanitizeString(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
