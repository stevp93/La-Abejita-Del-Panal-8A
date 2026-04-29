import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Zap } from 'lucide-react';

const FOOTER_NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Distribuidores', href: '/distribuidores' },
];

const PRODUCT_LINKS = [
  { label: 'Miel', href: '/catalogo?category=miel' },
  { label: 'Polen', href: '/catalogo?category=polen' },
  { label: 'Propóleo', href: '/catalogo?category=propoleo' },
  { label: 'Panal', href: '/catalogo?category=panal' },
  { label: 'Kits', href: '/catalogo?category=kits' },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-honey-50">
      {/* Main Footer */}
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* ============================================================
                  LOGO — Footer
                  ➜ Archivo: /imagenes/logo.png (logo circular oficial)
                  ➜ Dimensiones: 40x40px, border-radius:50%
                  ============================================================ */}
              <img
                src="/imagenes/logo.png"
                alt="La Abejita del Panal 8A"
                width={40}
                height={40}
                className="rounded-full object-cover shadow-sm"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-honey-50">
                  La Abejita
                </span>
                <span className="font-body text-[10px] tracking-widest uppercase text-honey-200/60">
                  del Panal 8A
                </span>
              </div>
            </Link>
            <p className="font-body text-body-sm text-honey-100/70 max-w-xs leading-relaxed">
              Productos apícolas 100% naturales de San Mateo, Boyacá. Sin aditivos
              ni conservantes. Registro INVIMA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-body font-semibold text-honey-200 mb-4">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-sm text-honey-100/60 hover:text-honey-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-body font-semibold text-honey-200 mb-4">
              Productos
            </h3>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-sm text-honey-100/60 hover:text-honey-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-body font-semibold text-honey-200 mb-4">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-honey-400 mt-0.5 shrink-0" />
                <span className="font-body text-body-sm text-honey-100/60">
                  San Mateo, Boyacá, Colombia
                </span>
              </li>
              {/* ➜ TELÉFONOS DE CONTACTO: William Ochoa */}
              <li>
                <a
                  href="tel:+573103741755"
                  className="flex items-center gap-2.5 font-body text-body-sm text-honey-100/60 hover:text-honey-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-honey-400 shrink-0" />
                  +57 310 374 1755 / 313 432 3840
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@abejitadelpanal.com"
                  className="flex items-center gap-2.5 font-body text-body-sm text-honey-100/60 hover:text-honey-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-honey-400 shrink-0" />
                  contacto@abejitadelpanal.com
                </a>
              </li>
            </ul>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-honey-100/10 text-honey-100/60 hover:bg-honey-400 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-honey-100/10 text-honey-100/60 hover:bg-honey-400 hover:text-white transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-honey-100/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-caption text-honey-100/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} La Abejita del Panal 8A. Todos los derechos reservados.
          </p>
          <p className="font-body text-caption text-honey-100/40">
            Registro INVIMA &middot; San Mateo, Boyacá
          </p>
          <a
            href="https://www.instagram.com/sp930718/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body text-caption text-honey-100/40 hover:text-honey-400 transition-colors duration-200"
            title="Diseño y desarrollo por SP Automatizaciones"
          >
            <Zap className="w-3.5 h-3.5" />
            Diseño y desarrollo por <strong className="ml-0.5">SP Automatizaciones</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
