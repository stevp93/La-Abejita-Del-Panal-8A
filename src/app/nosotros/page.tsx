import type { Metadata } from 'next';
import {
  TreePine,
  Mountain,
  Flower2,
  ShieldCheck,
  BarChart3,
  Heart,
  Users,
  Leaf,
  Award,
  Clock,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce la historia de La Abejita del Panal 8A. Productos apícolas 100% naturales de San Mateo, Boyacá.',
};

const TIMELINE = [
  {
    year: '2015',
    title: 'Nuestros Inicios',
    description:
      'Comenzamos con un pequeño apiario en las montañas de San Mateo, Boyacá, con la visión de producir miel 100% natural.',
  },
  {
    year: '2017',
    title: 'Registro INVIMA',
    description:
      'Obtuvimos nuestro registro sanitario INVIMA, garantizando la calidad y seguridad de todos nuestros productos.',
  },
  {
    year: '2019',
    title: 'Expansión de Líneas',
    description:
      'Ampliamos nuestra oferta con polen, propóleo y dulces artesanales de miel. Implementamos código de barras.',
  },
  {
    year: '2021',
    title: 'Red de Distribuidores',
    description:
      'Iniciamos nuestra red de distribuidores en supermercados y tiendas naturistas de Boyacá y Santander.',
  },
  {
    year: '2024',
    title: 'Crecimiento Nacional',
    description:
      'Consolidamos presencia en más de 50 puntos de venta. Lanzamos presentaciones premium y línea de vidrio.',
  },
];

const VALUES = [
  {
    icon: Leaf,
    title: 'Naturalidad',
    description: 'Sin aditivos, conservantes ni procesos que alteren la pureza de nuestros productos.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Con nuestras abejas, nuestra tierra y la salud de cada familia que nos elige.',
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Estándares rigurosos en cada etapa, desde el apiario hasta tu mesa.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    description: 'Generamos empleo y desarrollo sostenible en San Mateo, Boyacá.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Cuidado del Apiario',
    description:
      'Nuestras abejas viven en colmenas cuidadosamente mantenidas en la biodiversidad de San Mateo, rodeadas de flora nativa.',
    icon: Flower2,
  },
  {
    step: '02',
    title: 'Cosecha Artesanal',
    description:
      'La miel se cosecha manualmente, respetando los ciclos naturales de las abejas y sin alterar su hábitat.',
    icon: Clock,
  },
  {
    step: '03',
    title: 'Control de Calidad',
    description:
      'Cada lote pasa por controles que garantizan pureza, humedad y densidad óptima. Registro INVIMA vigente.',
    icon: ShieldCheck,
  },
  {
    step: '04',
    title: 'Envasado y Distribución',
    description:
      'Envasamos con tecnología adecuada, aplicamos código de barras y distribuimos a todo el país.',
    icon: BarChart3,
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ==========================================
          HERO — NOSOTROS
          ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700">
        <div className="absolute inset-0 honeycomb-bg opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" aria-hidden="true" />

        <div className="section-container relative z-10 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-400/15 border border-honey-400/25 text-honey-300 font-body text-caption font-medium mb-6">
              <Mountain className="w-3.5 h-3.5" />
              San Mateo, Boyacá
            </span>

            <h1 className="font-display text-h1 sm:text-display font-bold text-white text-balance mb-6">
              Nuestra Historia Nace en las{' '}
              <span className="text-honey-300">Montañas de Boyacá</span>
            </h1>

            <p className="font-body text-body-lg text-honey-100/70 max-w-2xl mx-auto">
              Somos una familia apicultora que desde 2015 produce y comercializa
              productos apícolas 100% naturales, con el compromiso de llevar lo
              mejor de la naturaleza a cada hogar colombiano.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          VALUES
          ========================================== */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            tag="Nuestros Valores"
            title="Lo Que Nos Define"
            description="Cada producto que sale de nuestros apiarios lleva consigo estos principios fundamentales."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="card p-6 sm:p-8 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-honey-50 mb-5">
                  <value.icon className="w-6 h-6 text-honey-400" />
                </div>
                <h3 className="font-display text-body font-semibold text-earth-800 mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-body-sm text-earth-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PROCESS
          ========================================== */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <SectionHeading
            tag="Nuestro Proceso"
            title="Del Apiario a Tu Mesa"
            description="Un proceso cuidadosamente supervisado que garantiza la máxima calidad en cada producto."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-6"
              >
                {/* Step number */}
                <span className="font-display text-display font-bold text-honey-200/30 absolute top-0 left-1/2 -translate-x-1/2">
                  {step.step}
                </span>
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-card mb-5 mt-8">
                  <step.icon className="w-6 h-6 text-forest-500" />
                </div>
                <h3 className="font-display text-body font-semibold text-earth-800 mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-body-sm text-earth-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TIMELINE
          ========================================== */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            tag="Nuestra Trayectoria"
            title="Años de Compromiso con la Naturaleza"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-honey-200 sm:-translate-x-px"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-8 sm:gap-12">
                {TIMELINE.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className="relative flex items-start gap-6 sm:gap-0"
                    >
                      {/* Dot */}
                      <div className="absolute left-6 sm:left-1/2 w-3 h-3 rounded-full bg-honey-400 border-2 border-white shadow-sm -translate-x-1.5 mt-1.5 z-10" />

                      {/* Content — alternating sides on desktop */}
                      <div
                        className={`pl-14 sm:pl-0 sm:w-1/2 ${
                          isLeft
                            ? 'sm:pr-10 sm:text-right'
                            : 'sm:pl-10 sm:ml-auto'
                        }`}
                      >
                        <span className="font-display text-h3 font-bold text-honey-400">
                          {item.year}
                        </span>
                        <h3 className="font-display text-body font-semibold text-earth-800 mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-body-sm text-earth-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          LOCATION — SAN MATEO
          ========================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 to-forest-700">
        <div className="absolute inset-0 honeycomb-bg opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tag="Nuestro Origen"
                title="San Mateo, Boyacá"
                description="Ubicados en la cordillera oriental a más de 2.000 metros de altura, nuestros apiarios se benefician de una flora diversa y un clima ideal para la producción apícola."
                align="left"
                light
              />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <TreePine className="w-5 h-5 text-honey-400 shrink-0" />
                  <span className="font-body text-body text-honey-100/70">
                    Flora nativa diversa para producción de miel multifloral
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mountain className="w-5 h-5 text-honey-400 shrink-0" />
                  <span className="font-body text-body text-honey-100/70">
                    Altitud ideal: clima templado sin contaminación industrial
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Flower2 className="w-5 h-5 text-honey-400 shrink-0" />
                  <span className="font-body text-body text-honey-100/70">
                    Apiarios rodeados de bosque nativo y cultivos orgánicos
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative map placeholder */}
            <div className="flex items-center justify-center" aria-hidden="true">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-forest-800/50 border border-honey-400/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-honey-400/40 mx-auto mb-3" />
                  <p className="font-display text-body font-semibold text-honey-200/60">
                    San Mateo
                  </p>
                  <p className="font-body text-caption text-honey-200/40">
                    Boyacá, Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
