'use client';

import { useState, useMemo } from 'react';
import { Filter, Grid3X3, LayoutGrid, ShieldCheck, BarChart3 } from 'lucide-react';
import { clsx } from 'clsx';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import {
  products,
  PRODUCT_LINES,
  type ProductLine,
  type Product,
} from '@/lib/products';

type CategoryFilter = 'todos' | Product['category'];
type LineFilter = 'todas' | ProductLine;

const CATEGORIES: { value: CategoryFilter; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'miel', label: 'Miel' },
  { value: 'polen', label: 'Polen' },
  { value: 'propoleo', label: 'Propóleo' },
  { value: 'dulces', label: 'Dulces' },
];

const LINES: { value: LineFilter; label: string }[] = [
  { value: 'todas', label: 'Todas las Líneas' },
  { value: 'premium', label: 'Premium' },
  { value: 'vidrio', label: 'Vidrio' },
  { value: 'plastico', label: 'Plástico' },
];

export default function CatalogoPage() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('todos');
  const [lineFilter, setLineFilter] = useState<LineFilter>('todas');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = categoryFilter === 'todos' || p.category === categoryFilter;
      const matchLine = lineFilter === 'todas' || p.line === lineFilter;
      return matchCat && matchLine;
    });
  }, [categoryFilter, lineFilter]);

  // Group by line for sectioned view
  const groupedByLine = useMemo(() => {
    if (lineFilter !== 'todas') return null;
    const groups: Record<ProductLine, Product[]> = {
      premium: [],
      vidrio: [],
      plastico: [],
    };
    filtered.forEach((p) => groups[p.line].push(p));
    return groups;
  }, [filtered, lineFilter]);

  return (
    <>
      {/* ==========================================
          HERO — CATÁLOGO
          ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700">
        <div className="absolute inset-0 honeycomb-bg opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" aria-hidden="true" />

        <div className="section-container relative z-10 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-h1 sm:text-display font-bold text-white text-balance mb-4">
              Nuestro <span className="text-honey-300">Catálogo</span>
            </h1>
            <p className="font-body text-body-lg text-honey-100/70 max-w-2xl mx-auto mb-8">
              Todos nuestros productos cuentan con registro INVIMA y código de barras.
              Consulta precios sugeridos y mayoristas en cada producto.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-honey-200/70">
                <ShieldCheck className="w-4 h-4 text-honey-400" />
                <span className="font-body text-body-sm">Registro INVIMA</span>
              </div>
              <div className="flex items-center gap-2 text-honey-200/70">
                <BarChart3 className="w-4 h-4 text-honey-400" />
                <span className="font-body text-body-sm">Código de Barras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FILTERS
          ========================================== */}
      <section className="sticky top-16 sm:top-18 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-earth-200/50">
        <div className="section-container py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-earth-400 shrink-0" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategoryFilter(cat.value)}
                  className={clsx(
                    'px-3 py-1.5 rounded-lg font-body text-body-sm font-medium transition-colors',
                    categoryFilter === cat.value
                      ? 'bg-honey-400 text-white'
                      : 'text-earth-500 hover:bg-honey-50 hover:text-honey-500'
                  )}
                  aria-pressed={categoryFilter === cat.value}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Line Filter */}
            <div className="flex items-center gap-2 flex-wrap sm:ml-auto">
              <LayoutGrid className="w-4 h-4 text-earth-400 shrink-0" />
              {LINES.map((line) => (
                <button
                  key={line.value}
                  type="button"
                  onClick={() => setLineFilter(line.value)}
                  className={clsx(
                    'px-3 py-1.5 rounded-lg font-body text-body-sm font-medium transition-colors',
                    lineFilter === line.value
                      ? 'bg-forest-500 text-white'
                      : 'text-earth-500 hover:bg-forest-50 hover:text-forest-500'
                  )}
                  aria-pressed={lineFilter === line.value}
                >
                  {line.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PRODUCTS
          ========================================== */}
      <section className="section-padding">
        <div className="section-container">
          {/* Sectioned by Line when showing all */}
          {groupedByLine ? (
            <div className="flex flex-col gap-16">
              {(Object.keys(groupedByLine) as ProductLine[]).map((lineKey) => {
                const lineProducts = groupedByLine[lineKey];
                if (lineProducts.length === 0) return null;
                const lineInfo = PRODUCT_LINES[lineKey];

                return (
                  <section key={lineKey}>
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={clsx(
                          'flex items-center justify-center w-10 h-10 rounded-xl',
                          lineKey === 'premium'
                            ? 'bg-honey-50'
                            : lineKey === 'vidrio'
                              ? 'bg-forest-50'
                              : 'bg-earth-50'
                        )}
                      >
                        <Grid3X3
                          className={clsx(
                            'w-5 h-5',
                            lineKey === 'premium'
                              ? 'text-honey-400'
                              : lineKey === 'vidrio'
                                ? 'text-forest-500'
                                : 'text-earth-500'
                          )}
                        />
                      </div>
                      <div>
                        <h2 className="font-display text-h3 font-semibold text-earth-800">
                          {lineInfo.label}
                        </h2>
                        <p className="font-body text-body-sm text-earth-400">
                          {lineInfo.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {lineProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <>
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="font-body text-body-lg text-earth-400">
                    No se encontraron productos con estos filtros.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCategoryFilter('todos');
                      setLineFilter('todas');
                    }}
                    className="btn-outline mt-4"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </>
          )}

          {/* Results count */}
          <div className="mt-10 pt-6 border-t border-earth-200/50 text-center">
            <p className="font-body text-body-sm text-earth-400">
              Mostrando {filtered.length} de {products.length} productos
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
