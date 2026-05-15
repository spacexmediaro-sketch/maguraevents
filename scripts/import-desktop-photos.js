/**
 * Importă și convertește pozele de pe Desktop în WebP cu denumiri SEO.
 * Denumirile sunt optimizate pentru Google Images: keyword-uri relevante,
 * locație (giurgiu, magura-events, buturugeni), tip eveniment.
 *
 * Rulare: node scripts/import-desktop-photos.js
 */

const sharp = require('sharp');
const fs    = require('fs');
const path  = require('path');

const DESKTOP = 'C:\\Users\\anaka\\OneDrive\\Desktop';
const OUT     = path.join(__dirname, '..', 'public', 'images');
const QUALITY = 84;

/**
 * Hartă completă: fișier original → { dest, alt }
 * Convenție denumire SEO:
 *   [tip-eveniment]-[subiect-specific]-[detalii]-[locatie].webp
 *   Cuvinte separate cu - (hyphen), fără spații, fără diacritice în filename
 */
const PHOTOS = [
  // ── SALOANE ─────────────────────────────────────────────────────────────
  {
    src:  '479512722_643136321396410_4281337944153858561_n.jpg',
    dest: 'saloane/salon-nunti-masa-aurie-farfurii-argintii-centru-floral-giurgiu.webp',
    alt:  'Salon nunți Giurgiu — masă aurie cu farfurii argintii și centru floral albastru-auriu',
  },
  {
    src:  '479535642_643130894730286_199329403900736959_n.jpg',
    dest: 'saloane/salon-crystal-masa-rotunda-scaune-crem-aranjament-floral-iarna.webp',
    alt:  'Salon Crystal Măgura Events — masă rotundă cu scaune crem și aranjament floral iarnă',
  },
  {
    src:  '480374222_644280044615371_3752738149126040226_n.jpg',
    dest: 'saloane/salon-nunti-masa-rotunda-centru-floral-albastru-auriu-giurgiu.webp',
    alt:  'Salon nunți Giurgiu — centru de masă floral albastru-auriu pe masă rotundă oglindă',
  },
  {
    src:  '480484305_646637431046299_3934437891015435900_n.jpg',
    dest: 'saloane/salon-nunta-panoramic-interior-scaune-albe-candelabru-covor.webp',
    alt:  'Interior salon nuntă panoramic Măgura Events — scaune albe, candelabru și covor decorativ',
  },
  {
    src:  '480921672_649956150714427_3750680015375646965_n.jpg',
    dest: 'saloane/salon-crystal-masa-rotunda-aranjament-floral-alb-inalt-vaza-aurie.webp',
    alt:  'Salon Crystal — masă rotundă cu aranjament floral alb înalt în vază aurie și vedere la grădină',
  },
  {
    src:  '481254806_649945677382141_1009855067743080983_n.jpg',
    dest: 'saloane/salon-crystal-masa-nunta-scaune-albe-decor-negru-vedere-lac.webp',
    alt:  'Salon Crystal Giurgiu — masă nuntă cu scaune albe și decor negru-alb, vedere panoramică lac',
  },
  {
    src:  '481770608_652288003814575_3422255642078080428_n.jpg',
    dest: 'saloane/salon-nunta-centru-masa-vaza-aurie-inalta-flori-albe-boho.webp',
    alt:  'Salon nuntă Măgura Events — centru masă cu vază aurie înaltă și aranjament floral boho alb',
  },

  // ── NUNȚI ───────────────────────────────────────────────────────────────
  {
    src:  '480101653_644280041282038_1614310760838808354_n.jpg',
    dest: 'nunti/nunta-decor-wedding-post-memories-corner-vedere-lac-giurgiu.webp',
    alt:  'Decor nuntă Giurgiu — Wedding Post și colț Memories cu vedere la lac Măgura Events',
  },
  {
    src:  '480269151_643504878026221_2857465821009592383_n.jpg',
    dest: 'nunti/masa-nunta-farfurii-aurii-meniu-decor-somon-verde-magura-events.webp',
    alt:  'Masă nuntă Măgura Events — farfurii aurii cu card meniu, decor somon și verde',
  },
  {
    src:  '480375702_646112314432144_3792750488528821665_n.jpg',
    dest: 'nunti/nunta-cununie-civila-miri-semnat-acte-gradina-pergola-giurgiu.webp',
    alt:  'Nuntă Giurgiu — cununia civilă a mirilor la semnarea actelor în grădina cu pergolă',
  },
  {
    src:  '480536158_650291307347578_4211713706150202147_n.jpg',
    dest: 'nunti/detaliu-masa-nunta-farfurie-neagra-servet-roz-meniu-personalizat.webp',
    alt:  'Detaliu masă nuntă premium — farfurie neagră cu șervețel roz și meniu circular personalizat',
  },
  {
    src:  '480878678_650806570629385_1310110928879669575_n.jpg',
    dest: 'nunti/detaliu-masa-nunta-card-bun-venit-pahare-cristal-trandafir-alb.webp',
    alt:  'Detaliu masă nuntă Măgura Events — card "Bine ați venit", pahare de cristal și trandafir alb',
  },
  {
    src:  '481063212_650814103961965_5900898431328269820_n.jpg',
    dest: 'nunti/masa-mirilor-mr-mrs-arc-floral-alb-verde-vedere-lac-giurgiu.webp',
    alt:  'Masa mirilor Mr & Mrs cu arc floral alb-verde, vedere panoramică lac Măgura Events Giurgiu',
  },
  {
    src:  '481187397_650291207347588_5485230077085337607_n.jpg',
    dest: 'nunti/masa-nunta-trandafiri-albi-panza-alba-vedere-lac-salon-crystal.webp',
    alt:  'Masă nuntă Salon Crystal — trandafiri albi, pânzeturi albe și vedere spectaculoasă la lac',
  },
  {
    src:  '481200023_648644814178894_6152800330257846411_n.jpg',
    dest: 'nunti/masa-nunta-orhidee-farfurii-roz-aurii-vedere-gradina-vara.webp',
    alt:  'Masă nuntă Măgura Events — orhidee albe, farfurii roz-aurii și vedere la grădina verde',
  },
  {
    src:  '481323057_652279567148752_4476084485074555910_n.jpg',
    dest: 'nunti/masa-nunta-orhidee-albe-farfurii-premium-vedere-gradina-salon.webp',
    alt:  'Masă nuntă salon Giurgiu — orhidee albe, farfurii premium aurii și număr masă dorit',
  },
  {
    src:  '481446625_652279623815413_499611378459075190_n.jpg',
    dest: 'nunti/aranjament-masa-miri-floral-alb-orhidee-salon-nunta-giurgiu.webp',
    alt:  'Aranjament masă miri — flori albe, orhidee și decor premium pentru nuntă Giurgiu',
  },
  {
    src:  '492297578_693973629646012_7432938739406778042_n.jpg',
    dest: 'nunti/nunta-cuplu-toamna-copac-gradina-lac-magura-events-giurgiu.webp',
    alt:  'Cuplu de miri toamna sub copacul cu frunze roșii în grădina Măgura Events, lângă lac',
  },
  {
    src:  '506602343_730376309339077_2729227690630877777_n.jpg',
    dest: 'nunti/decor-nunta-flori-suspendate-tavan-masa-festiva-roz-salon.webp',
    alt:  'Decor nuntă extravagant — flori suspendate din tavan, masă festivă roz cu aranjamente florale',
  },

  // ── BOTEZURI ────────────────────────────────────────────────────────────
  {
    src:  '480263738_643440881365954_658586068829117299_n.jpg',
    dest: 'botezuri/decor-botez-baietel-ursulet-baloane-monstera-exterior-pergola-giurgiu.webp',
    alt:  'Decor botez băiețel Giurgiu — ursulet teddy bear, baloane și frunze monstera la pergolă exterior',
  },
  {
    src:  '480519705_650285440681498_3844619042487695223_n.jpg',
    dest: 'botezuri/decor-botez-fetita-roz-ursulet-neon-baloane-interior-salon-giurgiu.webp',
    alt:  'Decor botez fetița Giurgiu — interior salon cu ursulet, neon personalizat și baloane roz',
  },

  // ── LOCAȚIE ─────────────────────────────────────────────────────────────
  {
    src:  '479222977_643133988063310_3919774055218056137_n.jpg',
    dest: 'locatie/exterior-noapte-copaci-luminati-fairy-lights-gradina-magura-events-giurgiu.webp',
    alt:  'Exterior Măgura Events noaptea — copaci luminați cu fairy lights și pergolă iluminată Giurgiu',
  },
  {
    src:  '479817645_643455351364507_6834897098808012808_n.jpg',
    dest: 'locatie/exterior-salon-events-pergola-copaci-verzi-vara-magura-giurgiu.webp',
    alt:  'Exterior salon evenimente Măgura Events Giurgiu — pergolă albă cu copaci verzi și bar cocktail',
  },
  {
    src:  '480360375_646116624431713_9165664619265025565_n.jpg',
    dest: 'locatie/exterior-salon-panoramic-gradina-lac-magura-events-buturugeni-giurgiu.webp',
    alt:  'Vedere panoramică exterior Măgura Events Buturugeni Giurgiu — grădina și salonul cu lac',
  },
  {
    src:  '480694874_646099207766788_3508453475624297311_n.jpg',
    dest: 'locatie/gradina-lac-peisaj-verde-magura-events-giurgiu-langa-bucuresti.webp',
    alt:  'Grădina și lacul Măgura Events Giurgiu — peisaj natural verde, locație premium lângă București',
  },

  // ── DECOR ───────────────────────────────────────────────────────────────
  {
    src:  '480787692_650809557295753_5270706146326601441_n.jpg',
    dest: 'decor/cigar-bar-exterior-nunta-premium-magura-events-giurgiu.webp',
    alt:  'Cigar bar exterior nuntă premium Măgura Events Giurgiu — detaliu petrecere în grădina cu lac',
  },

  // ── ZILE DE NAȘTERE ─────────────────────────────────────────────────────
  {
    src:  '506711148_730376306005744_6160481219437036007_n.jpg',
    dest: 'zile-nastere/decor-zi-nastere-exterior-flori-colorate-baloane-bun-venit-giurgiu.webp',
    alt:  'Decor zi de naștere exterior Giurgiu — flori colorate, baloane și panou "Bine ați venit"',
  },
];

async function run() {
  console.log(`\n🔄 Import poze Desktop → WebP SEO\n`);
  let ok = 0, err = 0;

  for (const photo of PHOTOS) {
    const src  = path.join(DESKTOP, photo.src);
    const dest = path.join(OUT, photo.dest);

    if (!fs.existsSync(src)) {
      console.log(`  LIPSĂ   ${photo.src}`);
      err++;
      continue;
    }

    fs.mkdirSync(path.dirname(dest), { recursive: true });

    try {
      const info = await sharp(src)
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(dest);

      const srcKB  = Math.round(fs.statSync(src).size  / 1024);
      const destKB = Math.round(fs.statSync(dest).size / 1024);
      const pct    = Math.round((1 - destKB / srcKB) * 100);

      console.log(`  ✅ ${path.basename(photo.dest).padEnd(72)} ${srcKB}KB→${destKB}KB ↓${pct}%`);
      ok++;
    } catch (e) {
      console.log(`  ❌ ${photo.src}: ${e.message}`);
      err++;
    }
  }

  console.log(`\n✅ Convertite: ${ok}  |  ❌ Erori: ${err}\n`);
}

run().catch(console.error);
