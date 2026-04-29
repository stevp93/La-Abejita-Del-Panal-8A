# La Abejita del Panal 8A — Sitio Web

Sitio web multipage para **La Abejita del Panal 8A**, una empresa productora y comercializadora de productos apícolas 100% naturales ubicada en San Mateo, Boyacá, Colombia.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| Next.js | 14.2 | Framework React con App Router |
| React | 18.3 | Librería de UI |
| TypeScript | 5.4 | Tipado estático |
| Tailwind CSS | 3.4 | Utilidades CSS |
| Lucide React | 0.383 | Iconografía SVG |

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx            # Layout raíz (Header + Footer + fonts)
│   ├── page.tsx              # Home — Hero, productos destacados, testimonios
│   ├── globals.css           # Design tokens + component utilities
│   ├── nosotros/
│   │   └── page.tsx          # Historia, valores, proceso, timeline, ubicación
│   ├── catalogo/
│   │   └── page.tsx          # Catálogo híbrido B2C/B2B con filtros
│   └── distribuidores/
│       └── page.tsx          # Landing B2B + formulario comercial
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navbar responsive con scroll detection
│   │   └── Footer.tsx        # Footer con contacto y redes sociales
│   └── ui/
│       ├── ProductCard.tsx   # Card de producto con toggle precio/mayorista
│       └── SectionHeading.tsx # Heading reutilizable con tag, título, desc
├── lib/
│   └── products.ts           # Data de productos, tipos, helpers
design-system/
└── MASTER.md                 # Design tokens documentados
```

## Páginas

### Home (`/`)
Hero section con gradiente orgánico, badges de confianza (INVIMA, código de barras, 100% natural), productos destacados, beneficios, testimonios y CTA para distribuidores.

### Nosotros (`/nosotros`)
Historia de la empresa, valores fundamentales (Naturalidad, Compromiso, Calidad, Comunidad), proceso productivo en 4 pasos, timeline cronológico y sección de ubicación geográfica.

### Catálogo (`/catalogo`)
Catálogo híbrido B2C/B2B con filtros por categoría (miel, polen, propóleo, dulces) y por línea (Premium, Vidrio, Plástico). Cada producto muestra toggle entre precio sugerido y precio mayorista. Vista agrupada por línea cuando no hay filtro de línea activo.

### Distribuidores (`/distribuidores`)
Landing page B2B con ventajas comerciales, tabla de márgenes (30-50%), y formulario comercial completo con campos: nombre, negocio, tipo de negocio, ciudad, teléfono, email y mensaje.

## Design System

### Paleta de Colores — "Golden Harvest"

- **Honey** (Dorado miel): Acciones primarias, highlights, marca
- **Forest** (Verde bosque): Confianza, naturaleza, CTAs secundarios
- **Earth** (Marrón tierra): Calidez, textos, acentos

### Tipografía

- **Display/Headings**: Playfair Display — serif elegante, evoca tradición artesanal
- **Body/UI**: Inter — sans-serif moderno, alta legibilidad

### Motivo Visual

- Patrones hexagonales (panal de abejas) como acento decorativo
- Gradientes orgánicos forest-to-forest
- Sombras cálidas con tono marrón

## Principios de Arquitectura

1. **Zero superposiciones**: CSS Grid + Flexbox con gaps explícitos, sin position absolute conflictivo
2. **Centrado absoluto**: `section-container` con max-width + auto margins en todas las vistas
3. **Mobile-first responsive**: Breakpoints 640/768/1024/1280/1536px
4. **Accesibilidad**: Focus rings, ARIA labels, contraste 4.5:1+, reduced motion support
5. **Performance**: Google Fonts con swap, lazy loading, semantic HTML

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start
```

## Certificaciones del Producto

- Registro INVIMA (todos los productos)
- Código de barras EAN-13 (todos los productos)
- 100% natural — sin aditivos ni conservantes

## Licencia

Proyecto privado. Todos los derechos reservados — La Abejita del Panal 8A.
