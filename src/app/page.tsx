import Link from 'next/link';
import {
  ShieldCheck,
  BarChart3,
  Leaf,
  Droplets,
  Heart,
  Award,
  ArrowRight,
  MapPin,
  Star,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: 'Registro INVIMA',
    description: 'Todos nuestros productos cuentan con registro sanitario vigente.',
  },
  {
    icon: BarChart3,
    title: 'Código de Barras',
    description: 'Trazabilidad completa para distribuidores y supermercados.',
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Sin aditivos, conservantes ni saborizantes artificiales.',
  },
  {
    icon: MapPin,
    title: 'San Mateo, Boyacá',
    description: 'Cosechado en los apiarios de la región andina colombiana.',
  },
];

const BENEFITS = [
  {
    icon: Droplets,
    title: 'Miel Pura',
    description: 'Cosechada directamente de nuestros apiarios, sin procesos industriales que alteren su calidad.',
  },
  {
    icon: Heart,
    title: 'Bienestar Natural',
    description: 'Polen, propóleo y miel con propiedades naturales para fortalecer tu salud.',
  },
  {
    icon: Award,
    title: 'Calidad Certificada',
    description: 'Cumplimos con todos los estándares de calidad e higiene exigidos por las autoridades sanitarias.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'La mejor miel que he probado. Se nota que es 100% natural, el sabor es incomparable.',
    author: 'María Fernanda L.',
    location: 'Bogotá',
    rating: 5,
  },
  {
    quote: 'Compramos al por mayor para nuestra tienda naturista. Excelente relación calidad-precio.',
    author: 'Carlos Andrés R.',
    location: 'Tunja',
    rating: 5,
  },
  {
    quote: 'El propóleo nos ha ayudado mucho en temporada de gripa. Producto de primera calidad.',
    author: 'Ana Patricia G.',
    location: 'Bucaramanga',
    rating: 5,
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-600">
        {/* Honeycomb pattern overlay */}
        <div className="absolute inset-0 honeycomb-bg opacity-30" aria-hidden="true" />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-forest-900/30"
          aria-hidden="true"
        />

        <div className="section-container relative z-10 py-32 sm:py-36 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-400/15 border border-honey-400/25 text-honey-300 font-body text-caption font-medium mb-6">
                <Leaf className="w-3.5 h-3.5" />
                100% Natural &middot; Sin Aditivos
              </span>

              <h1 className="font-display text-display sm:text-[4rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] text-balance mb-6">
                Miel Pura de{' '}
                <span className="text-gradient bg-gradient-to-r from-honey-300 to-honey-400 bg-clip-text text-transparent">
                  Boyacá
                </span>
              </h1>

              <p className="font-body text-body-lg text-honey-100/70 max-w-lg mx-auto lg:mx-0 mb-8">
                Desde San Mateo, Boyacá, llevamos a tu mesa productos apícolas cosechados con
                amor y respeto por la naturaleza. Registro INVIMA y código de barras en cada
                producto.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/catalogo" className="btn-primary px-8 py-3.5 text-body">
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/nosotros"
                  className="btn-outline border-honey-400/40 text-honey-200 hover:bg-honey-400 hover:text-white hover:border-honey-400 px-8 py-3.5 text-body"
                >
                  Nuestra Historia
                </Link>
              </div>
            </div>

            {/* Hero Visual - Honeycomb Grid */}
            <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
              <div className="relative w-80 h-80">
                {/* Decorative hexagons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 174" className="w-64 h-64 text-honey-400/20">
                    <path
                      d="M100 0L186.6 50v87L100 174 13.4 137V50z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 right-4">
                  <svg viewBox="0 0 200 174" className="w-32 h-32 text-honey-300/10">
                    <path
                      d="M100 0L186.6 50v87L100 174 13.4 137V50z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4">
                  <svg viewBox="0 0 200 174" className="w-24 h-24 text-forest-400/15">
                    <path
                      d="M100 0L186.6 50v87L100 174 13.4 137V50z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-honey-400/20 border-2 border-honey-400/30 flex items-center justify-center mx-auto mb-3">
                      <Droplets className="w-10 h-10 text-honey-300" />
                    </div>
                    <p className="font-display text-body-sm font-semibold text-honey-200">
                      Desde 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          TRUST BADGES
          ========================================== */}
      <section className="relative -mt-12 sm:-mt-16 z-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.title}
                className="card flex items-start gap-4 p-5 bg-white"
              >
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-honey-50">
                  <badge.icon className="w-5 h-5 text-honey-400" />
                </div>
                <div>
                  <h3 className="font-display text-body-sm font-semibold text-earth-800 mb-1">
                    {badge.title}
                  </h3>
                  <p className="font-body text-caption text-earth-400 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURED PRODUCTS
          ========================================== */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            tag="Nuestros Productos"
            title="Lo Mejor de Nuestros Apiarios"
            description="Cada producto es cosechado con cuidado artesanal y respaldado por nuestro registro INVIMA."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/catalogo" className="btn-primary px-8">
              Ver Todo el Catálogo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          BENEFITS / WHY US
          ========================================== */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <SectionHeading
            tag="Por Qué Elegirnos"
            title="Naturaleza en Cada Gota"
            description="Nuestro compromiso es llevarte productos puros, tal como la naturaleza los concibió."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center p-6 sm:p-8"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-honey-400/10 mb-5">
                  <benefit.icon className="w-7 h-7 text-honey-400" />
                </div>
                <h3 className="font-display text-h3 font-semibold text-earth-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-body text-earth-400 max-w-xs">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TESTIMONIALS
          ========================================== */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            tag="Testimonios"
            title="Lo Que Dicen Nuestros Clientes"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <blockquote key={testimonial.author} className="card p-6 sm:p-8 flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-honey-400 fill-honey-400"
                    />
                  ))}
                </div>
                <p className="font-body text-body text-earth-600 italic flex-1 mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3 pt-4 border-t border-earth-200/50">
                  <div className="w-10 h-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <span className="font-display text-body-sm font-bold text-honey-500">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="font-body text-body-sm font-semibold text-earth-800 not-italic">
                      {testimonial.author}
                    </cite>
                    <p className="font-body text-caption text-earth-400">
                      {testimonial.location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA — DISTRIBUIDORES
          ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 to-forest-700">
        <div className="absolute inset-0 honeycomb-bg opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10 section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              tag="Oportunidad de Negocio"
              title="Conviértete en Distribuidor"
              description="Gana entre el 30% y el 50% de margen en cada venta. Productos con registro INVIMA, código de barras y alta rotación."
              light
            />
            <Link
              href="/distribuidores"
              className="btn-primary px-10 py-4 text-body"
            >
              Quiero Ser Distribuidor
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
