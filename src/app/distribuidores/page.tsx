'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import {
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Truck,
  Store,
  DollarSign,
  Package,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Building2,
  User,
  MessageSquare,
  Send,
} from 'lucide-react';
import { clsx } from 'clsx';
import { SectionHeading } from '@/components/ui/SectionHeading';

const MARGIN_EXAMPLES = [
  {
    product: 'Miel 500g Plástico',
    wholesale: 19000,
    suggested: 28000,
    margin: '47%',
  },
  {
    product: 'Miel 340g Vidrio',
    wholesale: 15000,
    suggested: 22000,
    margin: '47%',
  },
  {
    product: 'Polen 130g',
    wholesale: 12000,
    suggested: 18000,
    margin: '50%',
  },
  {
    product: 'Propóleo 180g',
    wholesale: 14000,
    suggested: 20000,
    margin: '43%',
  },
  {
    product: 'Dulces de Miel 100g',
    wholesale: 7000,
    suggested: 10000,
    margin: '43%',
  },
];

const ADVANTAGES = [
  {
    icon: DollarSign,
    title: 'Márgenes del 30% al 50%',
    description: 'Precios mayoristas competitivos que garantizan márgenes superiores al promedio del mercado.',
  },
  {
    icon: ShieldCheck,
    title: 'Registro INVIMA',
    description: 'Todos nuestros productos cuentan con registro sanitario vigente. Cumplimiento total de normativa.',
  },
  {
    icon: BarChart3,
    title: 'Código de Barras',
    description: 'Integración directa con sistemas POS de supermercados y cadenas. Sin fricción operativa.',
  },
  {
    icon: Package,
    title: 'Diversidad de Líneas',
    description: 'Tres líneas de presentación (Premium, Vidrio, Plástico) para cubrir todos los segmentos.',
  },
  {
    icon: TrendingUp,
    title: 'Alta Rotación',
    description: 'Productos de consumo cotidiano con demanda constante. La miel natural es tendencia de bienestar.',
  },
  {
    icon: Truck,
    title: 'Soporte Logístico',
    description: 'Entrega coordinada, material POP y acompañamiento comercial para maximizar sus ventas.',
  },
];

function formatCOP(n: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(n);
}

export default function DistribuidoresPage() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    businessType: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  }

  return (
    <>
      {/* ==========================================
          HERO — DISTRIBUIDORES
          ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700">
        <div className="absolute inset-0 honeycomb-bg opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" aria-hidden="true" />

        <div className="section-container relative z-10 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-400/15 border border-honey-400/25 text-honey-300 font-body text-caption font-medium mb-6">
              <Store className="w-3.5 h-3.5" />
              Oportunidad de Negocio
            </span>

            <h1 className="font-display text-h1 sm:text-display font-bold text-white text-balance mb-6">
              Gane Hasta{' '}
              <span className="text-honey-300">50% de Margen</span>{' '}
              en Cada Venta
            </h1>

            <p className="font-body text-body-lg text-honey-100/70 max-w-2xl mx-auto mb-8">
              Únase a nuestra red de distribuidores. Productos con registro INVIMA,
              código de barras, alta rotación y márgenes superiores al promedio del
              mercado.
            </p>

            <a
              href="#contacto"
              className="btn-primary px-10 py-4 text-body"
            >
              Solicitar Información Comercial
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          ADVANTAGES
          ========================================== */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            tag="Ventajas Comerciales"
            title="Por Qué Distribuir Nuestros Productos"
            description="Una propuesta comercial diseñada para que su negocio crezca con productos de alta demanda."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.title}
                className="card p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-honey-50 mb-5">
                  <adv.icon className="w-5 h-5 text-honey-400" />
                </div>
                <h3 className="font-display text-body font-semibold text-earth-800 mb-2">
                  {adv.title}
                </h3>
                <p className="font-body text-body-sm text-earth-400 flex-1">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          MARGIN TABLE
          ========================================== */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <SectionHeading
            tag="Tabla de Márgenes"
            title="Calcule su Ganancia"
            description="Estos son algunos ejemplos de los márgenes que puede obtener con nuestros productos."
          />

          <div className="max-w-3xl mx-auto">
            <div className="card overflow-hidden">
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-forest-900 text-honey-50">
                      <th className="px-4 sm:px-6 py-4 text-left font-body text-body-sm font-semibold">
                        Producto
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-right font-body text-body-sm font-semibold">
                        Costo Mayorista
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-right font-body text-body-sm font-semibold">
                        Precio Sugerido
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center font-body text-body-sm font-semibold">
                        Margen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MARGIN_EXAMPLES.map((row, i) => (
                      <tr
                        key={row.product}
                        className={clsx(
                          'border-t border-earth-200/50',
                          i % 2 === 0 ? 'bg-white' : 'bg-honey-50/50'
                        )}
                      >
                        <td className="px-4 sm:px-6 py-4 font-body text-body-sm font-medium text-earth-800">
                          {row.product}
                        </td>
                        <td className="px-4 sm:px-6 py-4 font-body text-body-sm text-earth-500 text-right">
                          {formatCOP(row.wholesale)}
                        </td>
                        <td className="px-4 sm:px-6 py-4 font-body text-body-sm text-earth-500 text-right">
                          {formatCOP(row.suggested)}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest-50 text-forest-500 font-body text-caption font-bold">
                            <TrendingUp className="w-3 h-3" />
                            {row.margin}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary */}
              <div className="px-4 sm:px-6 py-4 bg-honey-50 border-t border-earth-200/50">
                <p className="font-body text-body-sm text-earth-500 text-center">
                  Pedido mínimo mayorista desde 12 unidades. Descuentos adicionales
                  por volumen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CONTACT FORM
          ========================================== */}
      <section id="contacto" className="section-padding scroll-mt-24">
        <div className="section-container">
          <SectionHeading
            tag="Formulario Comercial"
            title="Solicite Su Cotización"
            description="Complete el formulario y nuestro equipo comercial se pondrá en contacto en menos de 24 horas."
          />

          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="card p-8 sm:p-10 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-50 mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-forest-500" />
                </div>
                <h3 className="font-display text-h3 font-semibold text-earth-800 mb-3">
                  Solicitud Enviada
                </h3>
                <p className="font-body text-body text-earth-400 max-w-md mx-auto">
                  Gracias por su interés. Nuestro equipo comercial revisará su
                  solicitud y se comunicará con usted en un plazo máximo de 24
                  horas hábiles.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Su nombre completo"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 placeholder:text-earth-300 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Negocio */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="business"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Nombre del Negocio <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input
                        type="text"
                        id="business"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Nombre de su negocio"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 placeholder:text-earth-300 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Tipo de Negocio */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="businessType"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Tipo de Negocio <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Store className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Seleccione...</option>
                        <option value="supermercado">Supermercado / Minimercado</option>
                        <option value="tienda-naturista">Tienda Naturista</option>
                        <option value="tienda-barrio">Tienda de Barrio</option>
                        <option value="restaurante">Restaurante / Cafetería</option>
                        <option value="distribuidor">Distribuidor Mayorista</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  {/* Ciudad */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="city"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Ciudad <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Su ciudad"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 placeholder:text-earth-300 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 300 000 0000"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 placeholder:text-earth-300 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 placeholder:text-earth-300 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="font-body text-body-sm font-medium text-earth-700"
                    >
                      Mensaje (Opcional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-earth-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntenos sobre su negocio y qué productos le interesan..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 bg-white font-body text-body text-earth-800 placeholder:text-earth-300 focus:border-honey-400 focus:ring-2 focus:ring-honey-400/20 outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto px-10 py-3.5"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitud
                  </button>
                  <p className="font-body text-caption text-earth-400 text-center sm:text-left">
                    Respuesta garantizada en menos de 24 horas hábiles.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
