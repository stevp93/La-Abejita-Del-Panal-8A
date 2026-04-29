'use client';

import { ShieldCheck, BarChart3 } from 'lucide-react';
import { clsx } from 'clsx';
import type { Product } from '@/lib/products';
import { formatCOP } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

const CAT_LABELS: Record<string, string> = {
  miel: 'Miel',
  polen: 'Polen',
  propoleo: 'Propóleo',
  dulces: 'Dulces',
  kits: 'Kit',
  panal: 'Panal',
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className={clsx(
        'card flex flex-col overflow-hidden',
        'group hover:shadow-card-hover transition-shadow duration-200'
      )}
    >
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-honey-100 to-honey-200 overflow-hidden">
        {/* Category Badge */}
        <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-caption font-medium backdrop-blur-sm bg-honey-400/90 text-white">
          {CAT_LABELS[product.category] || product.category}
        </span>

        <img
          src={product.image}
          alt={`${product.name} — ${product.weight}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* INVIMA + Barcode indicators */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
          {product.invima && (
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm"
              title="Registro INVIMA"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-forest-500" />
            </span>
          )}
          {product.barcode && (
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm"
              title="Código de barras"
            >
              <BarChart3 className="w-3.5 h-3.5 text-earth-500" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-body font-semibold text-earth-800 leading-snug">
            {product.name}
          </h3>
          <span className="shrink-0 badge">{product.weight}</span>
        </div>

        <p className="font-body text-body-sm text-earth-400 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="border-t border-earth-200/50 pt-3">
          <p className="font-display text-h3 font-bold text-honey-500">
            {formatCOP(product.price)}
          </p>
          <p className="font-body text-caption text-earth-400 mt-0.5">
            Precio de venta al público
          </p>
        </div>
      </div>
    </article>
  );
}
