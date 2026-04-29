# Documentación de Componentes

## Layout Components

### `Header`
**Ubicación:** `src/components/layout/Header.tsx`
**Tipo:** Client Component

Navbar fija con detección de scroll y menú mobile. Cambia de transparente (sobre hero) a blanco con backdrop-blur al hacer scroll.

| Prop | Tipo | Descripción |
|------|------|-------------|
| — | — | No recibe props, usa `usePathname()` |

**Estados:**
- Default (transparente, sobre hero)
- Scrolled (fondo blanco, sombra, borde)
- Mobile menu open (overlay full-screen)

**Accesibilidad:**
- `aria-label` en logo y botón mobile
- `aria-current="page"` en enlace activo
- `aria-expanded` en toggle mobile
- `tabIndex` controlado en mobile menu

---

### `Footer`
**Ubicación:** `src/components/layout/Footer.tsx`
**Tipo:** Server Component

Footer con 4 columnas: marca, navegación, productos, contacto + redes sociales.

---

## UI Components

### `SectionHeading`
**Ubicación:** `src/components/ui/SectionHeading.tsx`
**Tipo:** Server Component

Heading reutilizable para secciones.

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `tag` | `string?` | — | Subtítulo superior (uppercase, small) |
| `title` | `string` | — | Título principal (h2) |
| `description` | `string?` | — | Párrafo descriptivo |
| `align` | `'left' \| 'center'` | `'center'` | Alineación del texto |
| `light` | `boolean` | `false` | Modo claro para fondos oscuros |

---

### `ProductCard`
**Ubicación:** `src/components/ui/ProductCard.tsx`
**Tipo:** Client Component

Card de producto con toggle de precio sugerido/mayorista.

| Prop | Tipo | Descripción |
|------|------|-------------|
| `product` | `Product` | Objeto de producto de `lib/products.ts` |

**Comportamiento:**
- Toggle entre precio sugerido (honey) y mayorista (forest)
- Badge de línea de producto (Premium/Vidrio/Plástico)
- Indicadores INVIMA y código de barras
- Hover shadow transition

**Estados:**
- Default: Precio sugerido visible
- Wholesale: Precio mayorista visible (toggle activo)

---

## CSS Utilities (globals.css)

### `.section-container`
Contenedor centrado con max-width y padding responsive.

### `.section-padding`
Padding vertical para secciones (py-16 → py-24).

### `.card`
Card base con borde, sombra y hover.

### `.btn-primary` / `.btn-secondary` / `.btn-outline`
Botones con estados hover, active, focus y disabled.

### `.badge`
Badge inline con fondo forest y borde.

### `.honeycomb-bg`
Patrón SVG hexagonal para overlays decorativos.
