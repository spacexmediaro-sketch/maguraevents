/**
 * Luxury SVG icon set for Măgura Events.
 * All icons are 24×24 viewBox, stroke-based, premium minimal style.
 * Replace every emoji across the site with these.
 */

export interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  color?: string;
}

const defaults = {
  size: 24,
  strokeWidth: 1.4,
  color: 'currentColor',
};

// ── Wedding / Nuntă ──────────────────────────────────────────────
export function IconRing({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <path d="M9 9 L12 5 L15 9" />
      <path d="M10.5 9 L13.5 9" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

// ── Christening / Botez ──────────────────────────────────────────
export function IconDove({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 C8 3 5 6 5 9 C5 13 8 15 12 15 C16 15 19 13 19 9" />
      <path d="M19 9 C20 7 21 5 20 3 C18 4 17 6 17 8" />
      <path d="M12 15 L12 21" />
      <path d="M9 18 L12 21 L15 18" />
      <circle cx="8.5" cy="8.5" r="0.8" fill={color} stroke="none" />
    </svg>
  );
}

// ── Majorat / 18 ani ─────────────────────────────────────────────
export function IconCrown({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 17 L5 8 L9 13 L12 6 L15 13 L19 8 L21 17 Z" />
      <line x1="3" y1="20" x2="21" y2="20" />
      <circle cx="12" cy="6" r="1" fill={color} stroke="none" />
      <circle cx="5" cy="8" r="0.8" fill={color} stroke="none" />
      <circle cx="19" cy="8" r="0.8" fill={color} stroke="none" />
    </svg>
  );
}

// ── Birthday / Zi de naștere ─────────────────────────────────────
export function IconCake({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="12" width="18" height="9" rx="1" />
      <path d="M3 16 C5 14 7 18 9 16 C11 14 13 18 15 16 C17 14 19 18 21 16" />
      <line x1="8" y1="12" x2="8" y2="8" />
      <line x1="12" y1="12" x2="12" y2="7" />
      <line x1="16" y1="12" x2="16" y2="8" />
      <path d="M7 8 C7 6.5 9 6.5 9 8" />
      <path d="M11 7 C11 5.5 13 5.5 13 7" />
      <path d="M15 8 C15 6.5 17 6.5 17 8" />
    </svg>
  );
}

// ── Corporate / Business ─────────────────────────────────────────
export function IconPillar({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="4" y1="20" x2="20" y2="20" />
      <line x1="4" y1="7" x2="20" y2="7" />
      <path d="M12 3 L20 7 L4 7 Z" />
      <line x1="7" y1="7" x2="7" y2="20" />
      <line x1="12" y1="7" x2="12" y2="20" />
      <line x1="17" y1="7" x2="17" y2="20" />
    </svg>
  );
}

// ── Private Events / Special ─────────────────────────────────────
export function IconDiamond({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 L20 9 L12 21 L4 9 Z" />
      <path d="M4 9 L12 12 L20 9" />
      <path d="M8 3 L4 9" />
      <path d="M16 3 L20 9" />
      <path d="M8 3 L12 9 L16 3" />
    </svg>
  );
}

// ── Champagne / Toast ────────────────────────────────────────────
export function IconChampagne({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 3 L6 10 C6 13 8 15 10 15 L10 21 L8 21" />
      <path d="M16 3 L18 10 C18 13 16 15 14 15 L14 21 L16 21" />
      <line x1="10" y1="21" x2="14" y2="21" />
      <line x1="8" y1="3" x2="16" y2="3" />
      <line x1="6" y1="7" x2="18" y2="7" />
      <path d="M11 5 L11 3.5" />
      <path d="M13.5 4.5 L12.5 3" />
    </svg>
  );
}

// ── Music / DJ ───────────────────────────────────────────────────
export function IconMusic({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 18 L9 5 L21 3 L21 16" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

// ── Camera / Photo ───────────────────────────────────────────────
export function IconCamera({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M23 19 C23 20.1 22.1 21 21 21 L3 21 C1.9 21 1 20.1 1 19 L1 8 C1 6.9 1.9 6 3 6 L7 6 L9 3 L15 3 L17 6 L21 6 C22.1 6 23 6.9 23 8 Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

// ── Cocktail / Bar ───────────────────────────────────────────────
export function IconCocktail({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 3 L20 3 L12 13 Z" />
      <line x1="12" y1="13" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="8" y1="9" x2="14" y2="9" />
    </svg>
  );
}

// ── Star / Special moment ────────────────────────────────────────
export function IconStar({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 L14.9 8.6 L22 9.3 L17 14 L18.5 21 L12 17.7 L5.5 21 L7 14 L2 9.3 L9.1 8.6 Z" />
    </svg>
  );
}

// ── Confetti / Celebration ───────────────────────────────────────
export function IconCelebration({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21 L10 10" />
      <path d="M3 21 L14 14" />
      <path d="M10 10 L14 14" />
      <circle cx="10" cy="10" r="1" fill={color} stroke="none" />
      <path d="M18 3 L18 7" />
      <path d="M16 5 L20 5" />
      <path d="M21 10 L21 12" />
      <path d="M20 11 L22 11" />
      <path d="M6 6 L7 7" />
      <circle cx="14" cy="5" r="1" fill={color} stroke="none" />
      <circle cx="19" cy="15" r="1" fill={color} stroke="none" />
    </svg>
  );
}

// ── Microphone ───────────────────────────────────────────────────
export function IconMic({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10 C5 15 19 15 19 10" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

// ── Projector / Screen ───────────────────────────────────────────
export function IconProjector({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="18.5" cy="9.5" r="1" />
      <line x1="4" y1="3" x2="4" y2="7" />
      <line x1="20" y1="3" x2="20" y2="7" />
    </svg>
  );
}

// ── Utensils / Food ───────────────────────────────────────────────
export function IconFork({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 2 L3 8 C3 10 5 12 7 12 L7 22" />
      <line x1="5" y1="2" x2="5" y2="8" />
      <line x1="7" y1="2" x2="7" y2="8" />
      <path d="M21 2 C21 2 17 4 17 9 C17 11.5 18.5 13 21 13 L21 22" />
    </svg>
  );
}

// ── Chef Hat ─────────────────────────────────────────────────────
export function IconChef({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 13 C4 13 2 11.5 2 9.5 C2 7.5 3.5 6 5.5 6 C5.8 4.3 7.2 3 9 3 C10 3 10.8 3.4 11.5 4 C12.2 3.4 13 3 14 3 C16 3 17.5 4.5 17.5 6.5 C19.5 6.5 22 8 22 10 C22 12 20 13.5 18 13.5" />
      <rect x="6" y="13" width="12" height="9" rx="1" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}

// ── Plate ────────────────────────────────────────────────────────
export function IconPlate({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="6" />
      <path d="M12 3 L12 6" />
    </svg>
  );
}

// ── Palette / Decor ──────────────────────────────────────────────
export function IconDecor({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2 C6.5 2 2 6.5 2 12 C2 17.5 6.5 22 12 22 C12.8 22 13.5 21.3 13.5 20.5 C13.5 20.1 13.3 19.8 13.1 19.5 C12.9 19.2 12.7 18.9 12.7 18.5 C12.7 17.7 13.4 17 14.2 17 L16 17 C19.3 17 22 14.3 22 11 C22 6.1 17.5 2 12 2 Z" />
      <circle cx="6.5" cy="11.5" r="1.5" fill={color} stroke="none" />
      <circle cx="9" cy="7" r="1.5" fill={color} stroke="none" />
      <circle cx="14" cy="7" r="1.5" fill={color} stroke="none" />
      <circle cx="17.5" cy="11.5" r="1.5" fill={color} stroke="none" />
    </svg>
  );
}

// ── Photobox ─────────────────────────────────────────────────────
export function IconPhotobox({ size = defaults.size, className = '', strokeWidth = defaults.strokeWidth, color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 8 L7 8" />
      <circle cx="8.5" cy="5.5" r="0.8" fill={color} stroke="none" />
    </svg>
  );
}

// ── TikTok ───────────────────────────────────────────────────────
export function IconTikTok({ size = defaults.size, className = '', color = defaults.color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.8a8.2 8.2 0 004.79 1.53V6.89a4.85 4.85 0 01-1.02-.2z" />
    </svg>
  );
}

// ── Ornament ✦ (decorative) ──────────────────────────────────────
export function IconOrnament({ size = 12, className = '', color = '#C9A84C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={color} className={className} aria-hidden="true">
      <path d="M6 0 L6.8 4.8 L12 6 L6.8 7.2 L6 12 L5.2 7.2 L0 6 L5.2 4.8 Z" />
    </svg>
  );
}

// ── Fleur-de-lis ornament ────────────────────────────────────────
export function IconFleur({ size = 20, className = '', color = '#C9A84C' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="0.8" className={className} aria-hidden="true">
      <path d="M10 2 C10 2 8 5 8 7 C8 9 9 10 10 10 C11 10 12 9 12 7 C12 5 10 2 10 2 Z" fill={color} opacity="0.7" />
      <path d="M10 10 C10 10 7 11 5 13 C3 15 3 17 5 18 C7 17 8 15 8 13 C8 12 9 11 10 11" fill={color} opacity="0.7" />
      <path d="M10 10 C10 10 13 11 15 13 C17 15 17 17 15 18 C13 17 12 15 12 13 C12 12 11 11 10 11" fill={color} opacity="0.7" />
      <path d="M10 18 L10 20" stroke={color} strokeWidth="1.2" />
      <path d="M8 20 L12 20" stroke={color} strokeWidth="1.2" />
      <circle cx="10" cy="10" r="1.2" fill={color} />
    </svg>
  );
}
