import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {
  ChevronDown,
  Clock,
  Eye,
  MessageCircle,
  Wrench,
} from 'lucide-react';
import {
  FAQ_ITEMS,
  OPTIMUNDO_INFO,
  buildConsultationWhatsAppUrl,
} from '../data/catalog';
import {OPTIMUNDO_MEDIA} from '../data/optimundoMedia';
import {OptimundoImage} from './OptimundoImage';

const TRUST_PILLARS = [
  {
    icon: Eye,
    title: 'Consultas de optometria',
    description:
      'Avaliação visual presencial e indicação cuidada das lentes ideais para a sua rotina.',
  },
  {
    icon: Wrench,
    title: 'Ajuste e manutenção',
    description:
      'Afinação anatómica de aros, verificação de hastes e cuidados técnicos na loja.',
  },
  {
    icon: MessageCircle,
    title: 'Pedido directo no WhatsApp',
    description:
      'Reserve aros, óculos de sol ou acessórios directamente pelo 860577930.',
  },
  {
    icon: Clock,
    title: 'Aberto até às 18:00',
    description:
      'Localização central na Av. 25 de Setembro, 806 em Maputo para sua comodidade.',
  },
];

export function TrustAndFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* Faixa de Confiança com ícones (sem selos inventados nem métricas falsas) */}
      <section
        aria-label="Compromissos Optimundo"
        className="border-y border-[#242E82]/10 bg-[#EEF3FA] py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{opacity: 0, y: 14}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 'some'}}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAF8F3] text-[#242E82] shadow-xs">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#141A42]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4C557F]">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secção: Perguntas Frequentes (FAQ) */}
      <section id="faq" className="bg-[#FAF8F3] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Coluna esquerda: Título + Fotografia de referência + Atalho WhatsApp */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 'some'}}
                transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
              >
                <p className="text-xs font-semibold tracking-[0.06em] text-[#242E82]">
                  Dúvidas frequentes · FAQ
                </p>
                <h2 className="mt-2 font-serif text-[clamp(2rem,3.4vw,2.85rem)] font-medium leading-[1.12] text-[#141A42]">
                  Respostas claras antes da sua{' '}
                  <em className="font-serif italic text-[#242E82]">visita</em>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4C557F] sm:text-base">
                  Tem uma receita específica ou procura um formato de aro em
                  particular? A nossa equipa responde rapidamente pelo WhatsApp.
                </p>
              </motion.div>

              <div className="mt-7 overflow-hidden rounded-3xl border border-[#242E82]/[0.08] bg-[#EEF3FA] p-3.5">
                <OptimundoImage
                  media={OPTIMUNDO_MEDIA.acessorios.kitLimpeza}
                  aspectClassName="aspect-[4/3]"
                  className="rounded-2xl"
                />
                <div className="px-1.5 pb-1 pt-4">
                  <p className="text-xs font-medium text-[#4C557F]">
                    Atendimento directo · {OPTIMUNDO_INFO.address}
                  </p>
                  <a
                    href={buildConsultationWhatsAppUrl('Esclarecimento de dúvidas')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#F2C14E] px-5 text-sm font-semibold text-[#141A42] transition-colors hover:bg-[#E5B23B]"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                    <span>Falar no WhatsApp ({OPTIMUNDO_INFO.phoneDisplay})</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna direita: Acordeão FAQ com abertura e fecho suaves */}
            <div className="lg:col-span-7">
              <div className="divide-y divide-[#141A42]/12 border-y border-[#141A42]/12">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = openFaqId === item.id;
                  return (
                    <div key={item.id} className="py-1">
                      <button
                        type="button"
                        onClick={() => toggleFaq(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${item.id}`}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#242E82]"
                      >
                        <span className="font-serif text-lg font-medium text-[#141A42] sm:text-[19px]">
                          {item.question}
                        </span>
                        <motion.span
                          animate={{rotate: isOpen ? 180 : 0}}
                          transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen
                              ? 'bg-[#242E82] text-[#FAF8F3]'
                              : 'bg-[#EEF3FA] text-[#242E82]'
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" strokeWidth={2.2} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${item.id}`}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 pr-8 text-sm leading-relaxed text-[#4C557F] sm:text-[15px]">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
