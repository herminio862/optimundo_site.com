import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'motion/react';
import {ArrowRight, Calendar, MapPin} from 'lucide-react';
import {OPTIMUNDO_MEDIA} from '../data/optimundoMedia';
import {
  CATEGORY_HIGHLIGHTS,
  OPTIMUNDO_INFO,
  type ProductCategory,
} from '../data/catalog';
import {OptimundoImage} from './OptimundoImage';

interface HeroSectionProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export function HeroSection({onSelectCategory}: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax suave nas letras gigantes translúcidas "OPTIMUNDO"
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, 88]);
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative overflow-hidden bg-[#FAF8F3] pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pt-16"
    >
      {/* Letras gigantes e translúcidas "OPTIMUNDO" com parallax ao rolar */}
      <motion.div
        style={{y: backdropY, scale: backdropScale}}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 z-0 flex select-none justify-center overflow-hidden sm:top-10 lg:top-14"
      >
        <span className="whitespace-nowrap font-serif text-[clamp(4.75rem,17vw,15.5rem)] font-semibold leading-none tracking-[0.04em] text-[#242E82]/[0.075]">
          OPTIMUNDO
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna editorial de texto */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6">
            <motion.p
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1]}}
              className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.04em] text-[#4C557F] sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-[#242E82]" strokeWidth={2} />
              <span>{OPTIMUNDO_INFO.tagline}</span>
              <span aria-hidden="true">·</span>
              <span>Maputo</span>
            </motion.p>

            {/* Título com transição blur-to-sharp + leve subida */}
            <motion.h1
              initial={{opacity: 0, y: 20, filter: 'blur(8px)'}}
              animate={{opacity: 1, y: 0, filter: 'blur(0px)'}}
              transition={{duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
              className="max-w-xl font-serif text-[clamp(2.5rem,5.4vw,4.35rem)] font-medium leading-[1.07] tracking-[-0.02em] text-[#141A42]"
            >
              A sua visão, o nosso{' '}
              <em className="font-serif italic text-[#242E82]">mundo</em>.
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1]}}
              className="mt-6 max-w-lg text-base leading-relaxed text-[#4C557F] sm:text-[17px]"
            >
              Aros seleccionados a partir de{' '}
              <strong className="font-semibold tabular-nums text-[#141A42]">
                1.499 Mt
              </strong>
              , óculos de sol com protecção UV400, acessórios ópticos e
              consultas de optometria personalizadas no coração de Maputo.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1]}}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#colecao"
                className="inline-flex h-12 shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#F2C14E] px-7 text-sm font-semibold text-[#141A42] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E5B23B]"
              >
                <span>Explorar colecção</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>

              <a
                href="#consultas"
                className="inline-flex h-12 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[#242E82]/20 bg-[#EEF3FA]/70 px-6 text-sm font-medium text-[#242E82] transition-colors duration-200 hover:bg-[#EEF3FA]"
              >
                <Calendar className="h-4 w-4" strokeWidth={1.8} />
                <span>Marcar consulta</span>
              </a>
            </motion.div>

            {/* Informação directa da loja sem badges artificiais */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.75, delay: 0.56}}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#141A42]/10 pt-6 text-xs font-medium text-[#4C557F] sm:text-[13px]"
            >
              <span>{OPTIMUNDO_INFO.address}</span>
              <span aria-hidden="true">·</span>
              <span>{OPTIMUNDO_INFO.hoursShort}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums text-[#242E82]">
                WhatsApp {OPTIMUNDO_INFO.phoneDisplay}
              </span>
            </motion.div>
          </div>

          {/* Coluna visual: Retrato grande sobre as letras "OPTIMUNDO" */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6">
            <motion.div
              initial={{opacity: 0, y: 24, scale: 0.97}}
              animate={{opacity: 1, y: 0, scale: 1}}
              transition={{duration: 0.95, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
              className="relative mx-auto max-w-md lg:ml-auto lg:mr-0 lg:max-w-[520px]"
            >
              {/* Moldura suave azul-claro para assentar o retrato */}
              <div className="rounded-[2.25rem] bg-[#EEF3FA] p-3 shadow-[0_24px_60px_-28px_rgba(36,46,130,0.22)] sm:p-4">
                <OptimundoImage
                  media={OPTIMUNDO_MEDIA.heroPortrait}
                  eager
                  aspectClassName="aspect-[3/4]"
                  className="rounded-[1.5rem]"
                  imgClassName="hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Faixa imediata das 3 categorias principais com fotografias reais visíveis */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-20 lg:gap-7">
          {CATEGORY_HIGHLIGHTS.map((cat, idx) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 'some'}}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex cursor-pointer items-center gap-4 rounded-3xl border border-[#242E82]/[0.08] bg-[#EEF3FA] p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E3ECF8]"
            >
              <div className="w-24 shrink-0 overflow-hidden rounded-2xl sm:w-28">
                <OptimundoImage
                  media={cat.image}
                  aspectClassName="aspect-[4/3]"
                  className="rounded-2xl"
                  imgClassName="group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1 pr-2">
                <p className="text-xs font-medium text-[#4C557F] tabular-nums">
                  {cat.startingPrice}
                </p>
                <h2 className="mt-0.5 font-serif text-lg font-medium text-[#141A42] group-hover:text-[#242E82]">
                  {cat.title}
                </h2>
                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-[#4C557F]">
                  {cat.subtitle}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
