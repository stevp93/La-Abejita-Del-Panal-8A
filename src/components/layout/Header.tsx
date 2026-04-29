'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/distribuidores', label: 'Distribuidores' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-earth-200/50'
          : 'bg-transparent'
      )}
    >
      <div className="section-container">
        <nav
          className="flex items-center justify-between h-16 sm:h-18 lg:h-20"
          aria-label="Navegación principal"
        >
          {/* ============================================================
              LOGO PRINCIPAL — Header / Navbar
              ➜ Archivo: /imagenes/logo.png (logo circular oficial)
              ➜ Dimensiones: 40x40px, border-radius:50%
              ➜ Se aplica sombra sutil para realzar sobre fondos claros/oscuros
              ============================================================ */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="La Abejita del Panal 8A — Inicio"
          >
            <img
              src="/imagenes/logo.png"
              alt="La Abejita del Panal 8A"
              width={40}
              height={40}
              className="rounded-full object-cover shadow-sm"
            />
            <div className="flex flex-col leading-none">
              <span
                className={clsx(
                  'font-display text-lg font-bold transition-colors duration-200',
                  scrolled ? 'text-earth-800' : 'text-white'
                )}
              >
                La Abejita
              </span>
              <span
                className={clsx(
                  'font-body text-[10px] tracking-widest uppercase transition-colors duration-200',
                  scrolled ? 'text-earth-400' : 'text-honey-200'
                )}
              >
                del Panal 8A
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'relative px-4 py-2 rounded-lg font-body text-body-sm font-medium transition-all duration-200',
                      isActive
                        ? scrolled
                          ? 'text-honey-500 bg-honey-50'
                          : 'text-white bg-white/15'
                        : scrolled
                          ? 'text-earth-600 hover:text-honey-500 hover:bg-honey-50/50'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/distribuidores#contacto"
            className={clsx(
              'hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body text-body-sm font-semibold transition-all duration-200',
              scrolled
                ? 'bg-honey-400 text-white hover:bg-honey-500'
                : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
            )}
          >
            Ser Distribuidor
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className={clsx(
              'lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors',
              scrolled
                ? 'text-earth-700 hover:bg-earth-100'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="section-container py-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'flex items-center px-4 py-3 rounded-lg font-body text-body-lg font-medium transition-colors',
                      isActive
                        ? 'text-honey-500 bg-honey-50'
                        : 'text-earth-700 hover:text-honey-500 hover:bg-honey-50/50'
                    )}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-6 border-t border-earth-200">
            <Link
              href="/distribuidores#contacto"
              className="btn-primary w-full text-center"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Ser Distribuidor
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
