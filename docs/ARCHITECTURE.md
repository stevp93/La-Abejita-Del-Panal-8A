# Arquitectura del Proyecto

## Decisiones Arquitectónicas

### Next.js 14 con App Router

Se eligió Next.js App Router por:
- Renderizado server-side por defecto (mejor SEO para e-commerce)
- Metadata API nativa para cada página
- Layouts anidados para Header/Footer compartidos
- Streaming y Suspense para carga progresiva

### Tailwind CSS con Design Tokens Personalizados

El `tailwind.config.ts` extiende el tema base con tokens semánticos:
- `honey-*` — Escala completa para la paleta primaria (dorado miel)
- `forest-*` — Escala completa para la paleta secundaria (verde bosque)
- `earth-*` — Escala para textos, bordes y acentos marrones
- Font sizes con line-height y font-weight integrados
- Sombras con tono cálido (rgba marrón, no negro)

### Estrategia de Componentes

```
Layout Components (server)
├── Header (client — scroll + mobile menu state)
├── Footer (server — estático)
└── SectionHeading (server — reutilizable)

UI Components
├── ProductCard (client — toggle de precio)
└── [futuros componentes]

Data Layer
└── products.ts (datos + tipos + helpers)
```

### Responsive Strategy

```
Mobile First → 4 breakpoints → max-width container

sm:640px   → 2 columnas en grids
md:768px   → Ajustes de padding y layout
lg:1024px  → 3+ columnas, desktop nav
xl:1280px  → max-width del container
2xl:1536px → Headings más grandes
```

### Centrado y Alineación (Zero Colisiones)

Todas las secciones usan el patrón:
```html
<section>
  <div class="section-container">  <!-- mx-auto max-w-content px-responsive -->
    <div class="grid ...">         <!-- CSS Grid con gaps explícitos -->
      ...
    </div>
  </div>
</section>
```

Esto garantiza:
1. Contenido centrado horizontalmente en todas las resoluciones
2. Padding responsivo (16px → 24px → 32px)
3. Grid gaps que previenen superposición
4. Sin `position: absolute` en contenido principal

### Accesibilidad

- `aria-label` en logo, enlaces y botones icon-only
- `aria-current="page"` en navegación activa
- `aria-expanded` en mobile menu toggle
- `aria-pressed` en filtros toggle
- `prefers-reduced-motion` respetado vía CSS
- Focus rings visibles con outline offset
- Semantic HTML: nav, main, section, article, blockquote, footer
- Input labels explícitos (no placeholder-only)
- Select con opciones descriptivas
