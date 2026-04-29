# Design System — La Abejita del Panal 8A

## Brand Identity

- **Industry:** Apicultura / Productos Naturales
- **Tone:** Orgánico, confiable, artesanal, premium
- **Location:** San Mateo, Boyacá, Colombia
- **Differentiators:** 100% natural, sin aditivos, registro INVIMA, código de barras

---

## Design Tokens

### Color Palette — "Golden Harvest"

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#D4A017` | Honey gold — CTAs, highlights, brand accent |
| `--color-primary-dark` | `#B8860B` | Dark gold — hover states, active |
| `--color-primary-light` | `#F5DEB3` | Wheat — soft backgrounds, cards |
| `--color-secondary` | `#2D5016` | Forest green — trust, organic feel |
| `--color-secondary-dark` | `#1A3A0A` | Deep green — headings, navbar |
| `--color-secondary-light` | `#4A7C2E` | Leaf green — badges, accents |
| `--color-accent` | `#8B4513` | Saddle brown — warmth, earthiness |
| `--color-bg-primary` | `#FFFDF7` | Warm white — main background |
| `--color-bg-secondary` | `#FFF8E7` | Cream — section alternating bg |
| `--color-bg-dark` | `#1A2E0A` | Dark forest — dark sections/footer |
| `--color-text-primary` | `#2C1810` | Dark brown — body text |
| `--color-text-secondary` | `#5C4033` | Medium brown — secondary text |
| `--color-text-muted` | `#8B7355` | Muted brown — captions, hints |
| `--color-text-on-dark` | `#FFFDF7` | Warm white — text on dark bg |
| `--color-border` | `#E8DCC8` | Warm border — cards, dividers |
| `--color-success` | `#4A7C2E` | Green — success states |
| `--color-error` | `#C53030` | Red — error states |
| `--color-warning` | `#D4A017` | Gold — warning states |

### Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| Display | Playfair Display | 700 | 48–64px | 1.1 |
| H1 | Playfair Display | 700 | 36–48px | 1.2 |
| H2 | Playfair Display | 600 | 28–36px | 1.25 |
| H3 | Playfair Display | 600 | 22–28px | 1.3 |
| Body | Inter | 400 | 16–18px | 1.6 |
| Body Small | Inter | 400 | 14px | 1.5 |
| Label | Inter | 500 | 12–14px | 1.4 |
| Button | Inter | 600 | 14–16px | 1 |
| Caption | Inter | 400 | 12px | 1.4 |

**Font Pairing Rationale:** Playfair Display (serif) evokes artisan quality and tradition. Inter (sans-serif) provides modern readability. Together they balance heritage with professionalism.

### Spacing Scale (8px base)

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Badges, small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Featured cards |
| `--radius-full` | 9999px | Pills, avatars |

### Shadows (Elevation)

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(44,24,16,0.06)` | Subtle lift |
| `--shadow-md` | `0 4px 12px rgba(44,24,16,0.08)` | Cards |
| `--shadow-lg` | `0 8px 24px rgba(44,24,16,0.12)` | Modals, dropdowns |
| `--shadow-xl` | `0 16px 48px rgba(44,24,16,0.16)` | Hero elements |

### Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Style: Organic Naturalism

- Warm, earthy color palette inspired by honey, bees, and nature
- Subtle organic shapes (hexagonal patterns as accent)
- Generous whitespace for premium feel
- Photography-forward with natural textures
- Hexagonal geometric accents (honeycomb motif)
- Soft shadows and rounded corners
- No harsh edges or neon colors

## Anti-Patterns (AVOID)

- ❌ Neon colors or harsh gradients
- ❌ Dark mode as primary (conflicts with organic warmth)
- ❌ Heavy glassmorphism (too tech-forward)
- ❌ Emojis as structural icons
- ❌ Generic stock imagery
- ❌ Overcrowded layouts
- ❌ Gray-on-gray text
