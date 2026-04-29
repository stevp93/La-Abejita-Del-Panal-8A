export interface Product {
  id: string;
  name: string;
  description: string;
  weight: string;
  price: number;
  category: 'miel' | 'polen' | 'propoleo' | 'dulces' | 'kits' | 'panal';
  invima: boolean;
  barcode: boolean;
  image: string;
  featured?: boolean;
}

// ============================================================
// CATÁLOGO DE PRODUCTOS — 10 productos reales
// ➜ Las imágenes están en la carpeta "imagenes/" (PNG)
// ============================================================
export const products: Product[] = [
  {
    id: 'miel-280',
    name: 'Miel de Abejas',
    description: 'Miel 100% natural en envase de vidrio. Cosechada en los apiarios de San Mateo, Boyacá.',
    weight: '280g',
    price: 15000,
    category: 'miel',
    invima: true,
    barcode: true,
    image: '/imagenes/Miel de 280gr.png',
    featured: true,
  },
  {
    id: 'miel-580',
    name: 'Media de Miel',
    description: 'Presentación mediana de miel pura de abejas. Ideal para el hogar.',
    weight: '580g',
    price: 25000,
    category: 'miel',
    invima: true,
    barcode: true,
    image: '/imagenes/Media de miel  580gr.png',
    featured: true,
  },
  {
    id: 'miel-1100',
    name: 'Botella de Miel',
    description: 'Presentación grande de miel pura. La mejor opción para familias y consumidores frecuentes.',
    weight: '1100g',
    price: 45000,
    category: 'miel',
    invima: true,
    barcode: true,
    image: '/imagenes/Botella de miel  1100gr.png',
  },
  {
    id: 'bidones-30kg',
    name: 'Bidones de Miel',
    description: 'Presentación industrial de miel pura al por mayor. Ideal para negocios y distribuidores.',
    weight: '30 kg',
    price: 210000,
    category: 'miel',
    invima: true,
    barcode: true,
    image: '/imagenes/Bidones de miel de 30 kilos.png',
  },
  {
    id: 'panal-250',
    name: 'Trozos de Panal',
    description: 'Panal de abeja natural con miel. Experiencia auténtica directa del apiario.',
    weight: '250g',
    price: 15000,
    category: 'panal',
    invima: true,
    barcode: true,
    image: '/imagenes/Trozos de Panal de 250 gr .png',
    featured: true,
  },
  {
    id: 'polen-130',
    name: 'Polen de Abejas',
    description: 'Polen granulado 100% natural. Superalimento rico en proteínas, vitaminas y minerales.',
    weight: '130g',
    price: 15000,
    category: 'polen',
    invima: true,
    barcode: true,
    image: '/imagenes/Polen de 130gr.png',
    featured: true,
  },
  {
    id: 'propoleo-280',
    name: 'Propóleo Natural',
    description: 'Propóleo de abejas 100% natural. Antibiótico natural con múltiples beneficios para la salud.',
    weight: '280g',
    price: 17000,
    category: 'propoleo',
    invima: true,
    barcode: true,
    image: '/imagenes/Propoleo de 280gr.png',
  },
  {
    id: 'dulces-miel',
    name: 'Dulces de Miel',
    description: 'Caramelos artesanales elaborados con miel pura. Sin colorantes ni saborizantes artificiales.',
    weight: 'Variado',
    price: 6000,
    category: 'dulces',
    invima: true,
    barcode: true,
    image: '/imagenes/Dulces de miel.png',
  },
  {
    id: 'kit-panal',
    name: 'Kit del Panal',
    description: 'Combo completo: Botella de miel, Propóleo y Polen. El regalo perfecto de bienestar natural.',
    weight: 'Combo',
    price: 72000,
    category: 'kits',
    invima: true,
    barcode: true,
    image: '/imagenes/Kit del Panal Botella de miel,Propoleo y Polen.png',
    featured: true,
  },
  {
    id: 'kit-energizante',
    name: 'Kit Energizante Natural',
    description: 'Kit energizante natural El Panal. Energía y vitalidad directa de la naturaleza.',
    weight: 'Kit',
    price: 12000,
    category: 'kits',
    invima: true,
    barcode: true,
    image: '/imagenes/Kit Energizante natural el Panal.png',
  },
];

export function formatCOP(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}
