/**
 * GEO targeting — toate localitățile în raza ~60km față de Măgura Events
 * Coordonate centru: Buturugeni, Giurgiu (44.13°N, 25.87°E)
 *
 * Raza acoperire: ~60km
 * Județe vizate explicit de client: Giurgiu, Ilfov, București, Dâmbovița, Argeș
 */

export type Locality = {
  name:     string;
  county:   string;
  distKm:   number;  // distanță aproximativă față de Buturugeni
  type:     'municipiu' | 'oraș' | 'comună';
};

export const localities: Locality[] = [
  // ─── BUCUREȘTI ──────────────────────────────────────────────────
  { name: 'București',          county: 'București',  distKm: 40,  type: 'municipiu' },
  { name: 'Sectorul 1',         county: 'București',  distKm: 45,  type: 'municipiu' },
  { name: 'Sectorul 2',         county: 'București',  distKm: 43,  type: 'municipiu' },
  { name: 'Sectorul 3',         county: 'București',  distKm: 42,  type: 'municipiu' },
  { name: 'Sectorul 4',         county: 'București',  distKm: 40,  type: 'municipiu' },
  { name: 'Sectorul 5',         county: 'București',  distKm: 39,  type: 'municipiu' },
  { name: 'Sectorul 6',         county: 'București',  distKm: 41,  type: 'municipiu' },

  // ─── ILFOV ──────────────────────────────────────────────────────
  { name: 'Voluntari',          county: 'Ilfov',      distKm: 48,  type: 'oraș' },
  { name: 'Popești-Leordeni',   county: 'Ilfov',      distKm: 42,  type: 'oraș' },
  { name: 'Pantelimon',         county: 'Ilfov',      distKm: 45,  type: 'oraș' },
  { name: 'Buftea',             county: 'Ilfov',      distKm: 55,  type: 'oraș' },
  { name: 'Otopeni',            county: 'Ilfov',      distKm: 52,  type: 'oraș' },
  { name: 'Bragadiru',          county: 'Ilfov',      distKm: 38,  type: 'oraș' },
  { name: 'Măgurele',           county: 'Ilfov',      distKm: 36,  type: 'oraș' },
  { name: 'Chitila',            county: 'Ilfov',      distKm: 50,  type: 'oraș' },
  { name: 'Tunari',             county: 'Ilfov',      distKm: 47,  type: 'comună' },
  { name: 'Brănești',           county: 'Ilfov',      distKm: 50,  type: 'comună' },
  { name: 'Cernica',            county: 'Ilfov',      distKm: 46,  type: 'comună' },
  { name: 'Dobroești',          county: 'Ilfov',      distKm: 44,  type: 'comună' },
  { name: 'Dragomirești-Vale',  county: 'Ilfov',      distKm: 37,  type: 'comună' },
  { name: 'Ciorogârla',         county: 'Ilfov',      distKm: 40,  type: 'comună' },
  { name: 'Mogoșoaia',          county: 'Ilfov',      distKm: 52,  type: 'comună' },
  { name: '1 Decembrie',        county: 'Ilfov',      distKm: 35,  type: 'comună' },
  { name: 'Afumați',            county: 'Ilfov',      distKm: 48,  type: 'comună' },
  { name: 'Balotești',          county: 'Ilfov',      distKm: 55,  type: 'comună' },
  { name: 'Copăceni',           county: 'Ilfov',      distKm: 30,  type: 'comună' },
  { name: 'Dărăști-Ilfov',      county: 'Ilfov',      distKm: 32,  type: 'comună' },
  { name: 'Găneasa',            county: 'Ilfov',      distKm: 33,  type: 'comună' },
  { name: 'Grădiștea',          county: 'Ilfov',      distKm: 28,  type: 'comună' },
  { name: 'Gruiu',              county: 'Ilfov',      distKm: 58,  type: 'comună' },
  { name: 'Moara Vlăsiei',      county: 'Ilfov',      distKm: 56,  type: 'comună' },
  { name: 'Nuci',               county: 'Ilfov',      distKm: 57,  type: 'comună' },
  { name: 'Petrăchioaia',       county: 'Ilfov',      distKm: 51,  type: 'comună' },
  { name: 'Glina',              county: 'Ilfov',      distKm: 43,  type: 'comună' },
  { name: 'Jilava',             county: 'Ilfov',      distKm: 37,  type: 'comună' },
  { name: 'Cornetu',            county: 'Ilfov',      distKm: 39,  type: 'comună' },
  { name: 'Clinceni',           county: 'Ilfov',      distKm: 35,  type: 'comună' },
  { name: 'Chiajna',            county: 'Ilfov',      distKm: 42,  type: 'comună' },
  { name: 'Snagov',             county: 'Ilfov',      distKm: 58,  type: 'comună' },
  { name: 'Stefăneștii de Jos', county: 'Ilfov',      distKm: 54,  type: 'comună' },

  // ─── GIURGIU ────────────────────────────────────────────────────
  { name: 'Giurgiu',            county: 'Giurgiu',    distKm: 27,  type: 'municipiu' },
  { name: 'Mihăilești',         county: 'Giurgiu',    distKm: 10,  type: 'oraș' },
  { name: 'Bolintin-Vale',      county: 'Giurgiu',    distKm: 22,  type: 'oraș' },
  { name: 'Bolintin-Deal',      county: 'Giurgiu',    distKm: 24,  type: 'comună' },
  { name: 'Buturugeni',         county: 'Giurgiu',    distKm: 2,   type: 'comună' },
  { name: 'Florești-Stoenești', county: 'Giurgiu',    distKm: 18,  type: 'comună' },
  { name: 'Găiseni',            county: 'Giurgiu',    distKm: 14,  type: 'comună' },
  { name: 'Vânătorii Mici',     county: 'Giurgiu',    distKm: 16,  type: 'comună' },
  { name: 'Hotarele',           county: 'Giurgiu',    distKm: 30,  type: 'comună' },
  { name: 'Letca Nouă',         county: 'Giurgiu',    distKm: 28,  type: 'comună' },
  { name: 'Roata de Jos',       county: 'Giurgiu',    distKm: 20,  type: 'comună' },
  { name: 'Stoenești',          county: 'Giurgiu',    distKm: 22,  type: 'comună' },
  { name: 'Ogrezeni',           county: 'Giurgiu',    distKm: 12,  type: 'comună' },
  { name: 'Ulmi',               county: 'Giurgiu',    distKm: 18,  type: 'comună' },
  { name: 'Bucșani',            county: 'Giurgiu',    distKm: 26,  type: 'comună' },
  { name: 'Clejani',            county: 'Giurgiu',    distKm: 32,  type: 'comună' },
  { name: 'Comana',             county: 'Giurgiu',    distKm: 35,  type: 'comună' },
  { name: 'Ghimpați',           county: 'Giurgiu',    distKm: 25,  type: 'comună' },
  { name: 'Joița',              county: 'Giurgiu',    distKm: 8,   type: 'comună' },
  { name: 'Malu',               county: 'Giurgiu',    distKm: 15,  type: 'comună' },
  { name: 'Mihai Bravu',        county: 'Giurgiu',    distKm: 33,  type: 'comună' },
  { name: 'Vedea',              county: 'Giurgiu',    distKm: 40,  type: 'comună' },
  { name: 'Slobozia',           county: 'Giurgiu',    distKm: 28,  type: 'comună' },
  { name: 'Toporu',             county: 'Giurgiu',    distKm: 38,  type: 'comună' },
  { name: 'Iepurești',          county: 'Giurgiu',    distKm: 20,  type: 'comună' },
  { name: 'Herești',            county: 'Giurgiu',    distKm: 22,  type: 'comună' },
  { name: 'Daia',               county: 'Giurgiu',    distKm: 35,  type: 'comună' },
  { name: 'Naipu',              county: 'Giurgiu',    distKm: 18,  type: 'comună' },
  { name: 'Prundu',             county: 'Giurgiu',    distKm: 38,  type: 'comună' },
  { name: 'Răsuceni',           county: 'Giurgiu',    distKm: 30,  type: 'comună' },
  { name: 'Schitu',             county: 'Giurgiu',    distKm: 25,  type: 'comună' },
  { name: 'Gogșaru',            county: 'Giurgiu',    distKm: 32,  type: 'comună' },

  // ─── DÂMBOVIȚA ──────────────────────────────────────────────────
  { name: 'Târgoviște',         county: 'Dâmbovița',  distKm: 62,  type: 'municipiu' },
  { name: 'Titu',               county: 'Dâmbovița',  distKm: 48,  type: 'oraș' },
  { name: 'Răcari',             county: 'Dâmbovița',  distKm: 35,  type: 'oraș' },
  { name: 'Găești',             county: 'Dâmbovița',  distKm: 55,  type: 'oraș' },
  { name: 'Pucioasa',           county: 'Dâmbovița',  distKm: 68,  type: 'oraș' },
  { name: 'Moreni',             county: 'Dâmbovița',  distKm: 65,  type: 'oraș' },
  { name: 'Lungulețu',          county: 'Dâmbovița',  distKm: 40,  type: 'comună' },
  { name: 'Băleni',             county: 'Dâmbovița',  distKm: 45,  type: 'comună' },
  { name: 'Braniștea',          county: 'Dâmbovița',  distKm: 42,  type: 'comună' },
  { name: 'Cobia',              county: 'Dâmbovița',  distKm: 50,  type: 'comună' },
  { name: 'Crângurile',         county: 'Dâmbovița',  distKm: 55,  type: 'comună' },
  { name: 'Finta',              county: 'Dâmbovița',  distKm: 50,  type: 'comună' },
  { name: 'Morteni',            county: 'Dâmbovița',  distKm: 48,  type: 'comună' },
  { name: 'Perșinari',          county: 'Dâmbovița',  distKm: 52,  type: 'comună' },
  { name: 'Produlești',         county: 'Dâmbovița',  distKm: 45,  type: 'comună' },
  { name: 'Razvad',             county: 'Dâmbovița',  distKm: 58,  type: 'comună' },
  { name: 'Șelaru',             county: 'Dâmbovița',  distKm: 40,  type: 'comună' },
  { name: 'Voinești',           county: 'Dâmbovița',  distKm: 55,  type: 'comună' },
  { name: 'Uliești',            county: 'Dâmbovița',  distKm: 43,  type: 'comună' },
  { name: 'Odobești',           county: 'Dâmbovița',  distKm: 48,  type: 'comună' },
  { name: 'Slobozia Moară',     county: 'Dâmbovița',  distKm: 44,  type: 'comună' },
  { name: 'Colacu',             county: 'Dâmbovița',  distKm: 38,  type: 'comună' },
  { name: 'Crevedia',           county: 'Dâmbovița',  distKm: 42,  type: 'comună' },
  { name: 'Corbii Mari',        county: 'Dâmbovița',  distKm: 46,  type: 'comună' },

  // ─── ARGEȘ ──────────────────────────────────────────────────────
  { name: 'Pitești',            county: 'Argeș',      distKm: 90,  type: 'municipiu' },
  { name: 'Mioveni',            county: 'Argeș',      distKm: 85,  type: 'oraș' },
  { name: 'Costești',           county: 'Argeș',      distKm: 75,  type: 'oraș' },
  { name: 'Topoloveni',         county: 'Argeș',      distKm: 80,  type: 'oraș' },
  { name: 'Câmpulung',          county: 'Argeș',      distKm: 110, type: 'municipiu' },
  { name: 'Curtea de Argeș',    county: 'Argeș',      distKm: 105, type: 'municipiu' },
  { name: 'Stolnici',           county: 'Argeș',      distKm: 68,  type: 'comună' },
  { name: 'Vedea',              county: 'Argeș',      distKm: 72,  type: 'comună' },
  { name: 'Rociu',              county: 'Argeș',      distKm: 70,  type: 'comună' },
  { name: 'Mozăceni',           county: 'Argeș',      distKm: 65,  type: 'comună' },
  { name: 'Buzoești',           county: 'Argeș',      distKm: 72,  type: 'comună' },

  // ─── TELEORMAN (nord) ────────────────────────────────────────────
  { name: 'Videle',             county: 'Teleorman',  distKm: 35,  type: 'oraș' },
  { name: 'Alexandria',         county: 'Teleorman',  distKm: 58,  type: 'municipiu' },
  { name: 'Buzescu',            county: 'Teleorman',  distKm: 45,  type: 'comună' },
  { name: 'Gratia',             county: 'Teleorman',  distKm: 40,  type: 'comună' },
  { name: 'Plosca',             county: 'Teleorman',  distKm: 48,  type: 'comună' },
  { name: 'Crevenicu',          county: 'Teleorman',  distKm: 42,  type: 'comună' },
  { name: 'Drăcșani',           county: 'Teleorman',  distKm: 52,  type: 'comună' },
  { name: 'Moșteni',            county: 'Teleorman',  distKm: 50,  type: 'comună' },
  { name: 'Olteni',             county: 'Teleorman',  distKm: 55,  type: 'comună' },
  { name: 'Călugareni',         county: 'Teleorman',  distKm: 22,  type: 'comună' },
];

// Grupate pe județ pentru afișare în componente
export const localitiesByCounty = localities.reduce<Record<string, Locality[]>>(
  (acc, loc) => {
    if (!acc[loc.county]) acc[loc.county] = [];
    acc[loc.county].push(loc);
    return acc;
  },
  {}
);

// Doar localitățile sub 60km (strict în raza geografică)
export const within60km = localities.filter((l) => l.distKm <= 60);

// Generează keywords SEO pentru toate localitățile
export function generateGeoKeywords(): string[] {
  const eventTypes = [
    'salon nunți',
    'salon botez',
    'salon majorat',
    'sală evenimente',
    'locație nuntă',
    'restaurant nuntă',
    'organizare nuntă',
    'salon evenimente',
    'nuntă elegantă',
    'botez premium',
    'eveniment corporate',
  ];

  const keywords: string[] = [];

  // Prioritate: localitățile sub 60km
  for (const loc of within60km) {
    for (const ev of eventTypes.slice(0, 4)) {
      keywords.push(`${ev} ${loc.name}`);
    }
    keywords.push(`nuntă ${loc.name}`);
    keywords.push(`botez ${loc.name}`);
    keywords.push(`Măgura Events ${loc.name}`);
  }

  // Județele principale
  const counties = ['Giurgiu', 'Ilfov', 'Dâmbovița', 'Argeș', 'Teleorman'];
  for (const county of counties) {
    keywords.push(`salon nunți județul ${county}`);
    keywords.push(`salon evenimente județul ${county}`);
    keywords.push(`organizare nuntă ${county}`);
    keywords.push(`locație nuntă ${county}`);
  }

  return [...new Set(keywords)];
}

// Județele principale vizate (pentru Schema.org)
export const targetCounties = [
  'Giurgiu', 'Ilfov', 'București', 'Dâmbovița', 'Argeș', 'Teleorman',
];
