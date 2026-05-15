# Măgura Events — Site Premium

Site luxury ultra-modern pentru Măgura Events (AGRO & FISHING MAGURA SRL), construit cu Next.js 15, TypeScript, Tailwind CSS și Framer Motion.

## Stack tehnologic

- **Next.js 15** — App Router, SSR, sitemap/robots auto-generate
- **TypeScript** — tipare stricte
- **Tailwind CSS** — sistem de culori custom (negru, auriu, crem)
- **Framer Motion** — animații premium smooth
- **React Hook Form + Zod** — validare formular contacte
- **Nodemailer** — trimitere email securizat
- **Lucide React** — iconuri SVG

## Instalare locală

```bash
cd magura-events
npm install
cp .env.local.example .env.local
# Editați .env.local cu credențialele SMTP reale
npm run dev
```

Site-ul rulează la: http://localhost:3000

## Configurare .env.local

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=voila@gmail.com
SMTP_PASS=parola-app-gmail     # Nu parola Gmail normală! Generați din Google Account > Security > App Passwords
CONTACT_EMAIL=contact@magura-events.ro
NEXT_PUBLIC_SITE_URL=https://magura-events.ro
```

**Pentru Gmail:** Activați 2FA > Google Account > Security > App passwords > creați o parolă pentru "Mail".

## Deploy pe Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Sau prin interfața Vercel:
1. Importați repo-ul GitHub pe vercel.com
2. La "Environment Variables" adăugați toate variabilele din `.env.local`
3. Deploy automat la fiecare push pe `main`

## Imagini reale — unde să le adaugi

Toate placeholder-urile din componente sunt marcate cu mesajul "Adaugă imagini reale".

**Directorul pentru imagini:** `public/images/`

Structura recomandată:
```
public/images/
├── hero/
│   ├── hero-video.mp4          (video intro cinematic — opțional)
│   └── hero-poster.jpg         (imagine fallback pentru hero)
├── saloane/
│   ├── salon-crystal-1.jpg
│   ├── salon-crystal-2.jpg
│   ├── salon-royal-1.jpg
│   └── salon-royal-2.jpg
├── events/
│   ├── nunta-1.jpg
│   ├── botez-1.jpg
│   └── majorat-1.jpg
├── gallery/
│   ├── nunti/
│   ├── botezuri/
│   └── corporate/
└── og-image.jpg               (1200x630px — Open Graph)
```

**Formate recomandate:** WebP (principal) + JPG (fallback). Folosiți `next/image` pentru optimizare automată.

## Pagini incluse

| Pagină | URL |
|--------|-----|
| Homepage | `/` |
| Despre | `/despre` |
| Saloane | `/saloane` |
| Salon Crystal | `/saloane/salon-1` |
| Salon Royal | `/saloane/salon-2` |
| Nunți | `/nunti` |
| Botezuri | `/botezuri` |
| Majorate | `/majorate` |
| Zile de Naștere | `/zile-nastere` |
| Corporate | `/corporate` |
| Meniuri | `/meniuri` |
| Galerie | `/galerie` |
| Recenzii | `/recenzii` |
| Contact | `/contact` |
| Termeni | `/termeni` |
| Confidențialitate | `/confidentialitate` |
| Cookies | `/cookies` |
| GDPR | `/gdpr` |
| Litigii / ANPC | `/litigii` |

## Personalizări necesare

1. **Telefon:** Înlocuiți `+40 XXX XXX XXX` cu numărul real în toată aplicația
2. **Email:** Actualizați `contact@magura-events.ro` în `lib/metadata.ts`
3. **Adresă GPS:** Actualizați coordonatele Google Maps din `app/page.tsx` cu cele reale
4. **Logo:** Adăugați `public/logo.png` (format PNG cu fundal transparent)
5. **Favicon:** Adăugați `public/favicon.ico`, `public/icon-192.png`, `public/icon-512.png`
6. **OG Image:** Adăugați `public/og-image.jpg` (1200x630px)
7. **Recenzii reale:** Integrați Google Business Profile API pentru afișare automată
8. **Imagini salon:** Înlocuiți placeholder-urile cu imagini reale

## SEO — ce este inclus

- Meta title și description unice pe fiecare pagină
- Schema.org: LocalBusiness, EventVenue, FAQPage, BreadcrumbList
- Open Graph și Twitter Cards
- Sitemap.xml automat generat
- Robots.txt
- Canonical URLs
- Fonturi optimizate cu `next/font`
- Imagini lazy loading cu `next/image`

## Securitate

- Rate limiting pe API contact (5 req/minut per IP)
- Validare Zod pe server
- Sanitizare XSS a datelor de email
- Security headers (CSP, X-Frame-Options, etc.)
- GDPR-compliant cookie consent
- Nu expune variabile de mediu în frontend

## Structura proiectului

```
magura-events/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout + fonts + nav + footer
│   ├── page.tsx            # Homepage
│   ├── api/contact/        # API endpoint formular
│   ├── despre/             # Pagina Despre
│   ├── saloane/            # Saloane + sub-pagini
│   ├── nunti/              # Evenimente
│   ├── botezuri/
│   ├── majorate/
│   ├── zile-nastere/
│   ├── corporate/
│   ├── meniuri/
│   ├── galerie/
│   ├── recenzii/
│   ├── contact/
│   ├── termeni/            # Pagini legale
│   ├── confidentialitate/
│   ├── cookies/
│   ├── gdpr/
│   ├── litigii/
│   ├── sitemap.ts          # Sitemap automat
│   └── robots.ts           # Robots.txt automat
├── components/             # Componente React reutilizabile
│   ├── Navigation.tsx
│   ├── Hero.tsx            # Intro cinematic
│   ├── SalonShowcase.tsx
│   ├── EventTypes.tsx
│   ├── Gallery.tsx         # Cu lightbox și filtrare
│   ├── MenuSection.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx             # Cu Schema.org FAQPage
│   ├── ContactForm.tsx     # Cu validare completă
│   ├── CookieConsent.tsx   # GDPR banner
│   ├── Footer.tsx
│   ├── AnimatedSection.tsx # Wrapper animații scroll
│   └── JsonLd.tsx
├── lib/
│   ├── metadata.ts         # Configurare SEO centralizată
│   ├── schemas.ts          # Schema.org JSON-LD
│   ├── validation.ts       # Schema Zod formular
│   ├── rateLimit.ts        # Rate limiting API
│   └── email.ts            # Trimitere email nodemailer
└── public/
    ├── images/             # Adăugați imaginile reale aici
    └── manifest.json
```
