import {motion} from 'motion/react';
import {ArrowUpRight, Clock, Eye, MapPin, MessageCircle, SlidersHorizontal} from 'lucide-react';
import {OPTIMUNDO_MEDIA} from '../data/optimundoMedia';
import {OPTIMUNDO_INFO, buildConsultationWhatsAppUrl} from '../data/catalog';
import {OptimundoImage} from './OptimundoImage';

export function ConsultationsAndAboutSection() {
  return (
    <>
      {/* Secção: Consultas de Optometria */}
      <section
        id="consultas"
        className="border-t border-[#141A42]/[0.07] bg-[#EEF3FA]/65 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Fotografia real da sala de optometria */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-[2rem] bg-[#FAF8F3] p-3.5 shadow-[0_20px_50px_-32px_rgba(36,46,130,0.22)]">
                <OptimundoImage
                  media={OPTIMUNDO_MEDIA.consultas.salaOptometria}
                  aspectClassName="aspect-[4/3] lg:h-full lg:aspect-auto"
                  className="h-full rounded-[1.35rem]"
                  imgClassName="hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Texto editorial de consultas */}
            <motion.div
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 'some'}}
              transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-center lg:col-span-6"
            >
              <p className="text-xs font-semibold tracking-[0.06em] text-[#242E82]">
                Consultas &amp; Optometria · Maputo
              </p>

              <h2 className="mt-2.5 font-serif text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.12] text-[#141A42]">
                Cuidado clínico com tempo para{' '}
                <em className="font-serif italic text-[#242E82]">ouvir</em>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4C557F]">
                Cada olhar tem exigências próprias — do trabalho prolongado em
                ecrãs à condução sob o sol intenso de Maputo. Na Optimundo
                combinamos exames de optometria rigorosos com aconselhamento
                honesto sobre lentes e armações.
              </p>

              <div className="mt-7 space-y-4 border-t border-[#141A42]/10 pt-6">
                <div className="flex items-start gap-3.5">
                  <Eye
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#242E82]"
                    strokeWidth={1.8}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#141A42]">
                      Avaliação visual e graduação precisa
                    </h3>
                    <p className="mt-0.5 text-sm text-[#4C557F]">
                      Medição detalhada da acuidade visual e acompanhamento na
                      transição para novas lentes monofocais ou progressivas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <SlidersHorizontal
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#242E82]"
                    strokeWidth={1.8}
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-[#141A42]">
                      Aconselhamento de lentes e ajuste anatómico
                    </h3>
                    <p className="mt-0.5 text-sm text-[#4C557F]">
                      Indicação de antirreflexo, filtro de luz azul ou lentes
                      fotocromáticas, com adaptação confortável ao seu rosto.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={buildConsultationWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[#242E82] px-7 text-sm font-semibold text-[#FAF8F3] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#192163]"
                >
                  <MessageCircle
                    className="h-4 w-4 text-[#F2C14E]"
                    strokeWidth={2.2}
                  />
                  <span>Agendar consulta no WhatsApp</span>
                </a>

                <span className="text-xs font-medium text-[#4C557F]">
                  {OPTIMUNDO_INFO.hoursShort} · {OPTIMUNDO_INFO.phoneDisplay}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secção: Sobre a Optimundo */}
      <section
        id="sobre"
        className="border-t border-[#141A42]/[0.07] bg-[#FAF8F3] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* História e presença em Maputo */}
            <motion.div
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 'some'}}
              transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
              className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6"
            >
              <p className="text-xs font-semibold tracking-[0.06em] text-[#242E82]">
                Sobre a {OPTIMUNDO_INFO.legalName}
              </p>

              <h2 className="mt-2.5 font-serif text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.12] text-[#141A42]">
                Óptica próxima, estética{' '}
                <em className="font-serif italic text-[#242E82]">
                  intemporal
                </em>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4C557F]">
                A <strong className="font-semibold text-[#141A42]">Optimundo — Óptica &amp; Serviços</strong>{' '}
                nasce em Maputo com um propósito simples: unir rigor técnico em
                saúde visual a uma curadoria elegante de aros, óculos de sol e
                acessórios com preços claros em Meticais.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4C557F]">
                Na nossa loja da Avenida 25 de Setembro, cada cliente é atendido
                sem pressa — seja para escolher o primeiro par de óculos,
                renovar a graduação ou afinar a armação que já acompanha o seu
                dia a dia.
              </p>

              {/* Bloco de localização e horário reais */}
              <div className="mt-8 grid grid-cols-1 gap-4 rounded-3xl border border-[#242E82]/[0.08] bg-[#EEF3FA] p-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#242E82]"
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#242E82]">
                      Onde nos encontrar
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#141A42]">
                      {OPTIMUNDO_INFO.address}
                    </p>
                    <p className="text-xs text-[#4C557F]">
                      {OPTIMUNDO_INFO.cityCountry}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#242E82]"
                    strokeWidth={1.8}
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#242E82]">
                      Horário de atendimento
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#141A42]">
                      {OPTIMUNDO_INFO.hoursShort}
                    </p>
                    <p className="text-xs text-[#4C557F]">
                      Seg–Sex: 08:00–18:00 · Sáb: 08:30–13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href={OPTIMUNDO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#242E82] underline decoration-[#F2C14E] decoration-2 underline-offset-4 transition-colors hover:text-[#141A42]"
                >
                  <span>Acompanhar {OPTIMUNDO_INFO.instagramHandle}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Fotografia real do espaço da loja */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="h-full rounded-[2rem] bg-[#EEF3FA] p-3.5 shadow-[0_20px_50px_-32px_rgba(36,46,130,0.2)]">
                <OptimundoImage
                  media={OPTIMUNDO_MEDIA.sobre.boutiqueShowroom}
                  aspectClassName="aspect-[4/3] lg:h-full lg:aspect-auto"
                  className="h-full rounded-[1.35rem]"
                  imgClassName="hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
