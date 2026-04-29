import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#FFFDF7',
          100: '#FFF8E7',
          200: '#F5DEB3',
          300: '#F0C75E',
          400: '#D4A017',
          500: '#B8860B',
          600: '#966B08',
          700: '#744F06',
          800: '#523604',
          900: '#2C1810',
        },
        forest: {
          50: '#F0F7EC',
          100: '#DCE9D4',
          200: '#B5D4A0',
          300: '#7CB55E',
          400: '#4A7C2E',
          500: '#2D5016',
          600: '#1A3A0A',
          700: '#142D08',
          800: '#0E2006',
          900: '#1A2E0A',
        },
        earth: {
          50: '#FDF8F4',
          100: '#F5E6D8',
          200: '#E8DCC8',
          300: '#C4A882',
          400: '#8B7355',
          500: '#8B4513',
          600: '#5C4033',
          700: '#3E2A22',
          800: '#2C1810',
          900: '#1A0E08',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      borderRadius: {
        'card': '12px',
        'card-lg': '16px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(44,24,16,0.08)',
        'card-hover': '0 8px 24px rgba(44,24,16,0.12)',
        'hero': '0 16px 48px rgba(44,24,16,0.16)',
      },
      backgroundImage: {
        'honeycomb': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23D4A017' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E")`,
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
