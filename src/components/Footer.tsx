import {Clock, Instagram, MapPin, MessageCircle, Phone} from 'lucide-react';
import {
  OPTIMUNDO_INFO,
  buildConsultationWhatsAppUrl,
  type CatalogFilter,
} from '../data/catalog';

interface FooterProps {
  onNavigateCategory: (category: CatalogFilter) => void;
}

export function Footer({onNavigateCategory}: FooterProps) {
  return (
    <footer className="bg-[#141A42] text-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Coluna 1: Identidade */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <svg
                width="30"
                height="20"
                viewBox="0 0 36 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-[#FAF8F3]"
                aria-hidden="true"
              >
                <circle
                  cx="9.5"
                  cy="11"
                  r="7.25"
                  stroke="currentColor"
                  strokeWidth="2.3"
                />
                <circle
                  cx="26.5"
                  cy="11"
                  r="7.25"
                  stroke="currentColor"
                  strokeWidth="2.3"
                />
                <path
                  d="M16.5 9.8C17.4 8.9 18.6 8.9 19.5 9.8"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                />
                <circle cx="9.5" cy="11" r="2" fill="#F2C14E" />
              </svg>
              <span className="font-serif text-2xl font-medium tracking-[0.01em] text-[#FAF8F3]">
                Optimundo
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-relaxed tracking-[0.01em] text-[#EEF3FA]/80">
              {OPTIMUNDO_INFO.tagline}. A sua visão, o nosso mundo — curadoria
              de aros, óculos de sol, acessórios ópticos e consultas em Maputo.
            </p>

            <div className="mt-6">
              <a
                href={buildConsultationWhatsAppUrl('Atendimento Optimundo')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-[#F2C14E] px-5 text-sm font-semibold text-[#141A42] transition-colors hover:bg-[#E5B23B]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                <span>WhatsApp {OPTIMUNDO_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.06em] text-[#F2C14E]">
              Explorar
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#EEF3FA]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateCategory('aros')}
                  className="cursor-pointer transition-colors hover:text-[#F2C14E]"
                >
                  Aros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateCategory('sol')}
                  className="cursor-pointer transition-colors hover:text-[#F2C14E]"
                >
                  Óculos de sol
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateCategory('acessorios')}
                  className="cursor-pointer transition-colors hover:text-[#F2C14E]"
                >
                  Acessórios ópticos
                </button>
              </li>
              <li>
                <a
                  href="#consultas"
                  className="transition-colors hover:text-[#F2C14E]"
                >
                  Consultas
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="transition-colors hover:text-[#F2C14E]"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-[#F2C14E]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contactos reais da Optimundo, Lda */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.06em] text-[#F2C14E]">
              {OPTIMUNDO_INFO.legalName}
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-[#EEF3FA]/85">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F2C14E]"
                  strokeWidth={2}
                />
                <span>
                  {OPTIMUNDO_INFO.address}, {OPTIMUNDO_INFO.cityCountry}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F2C14E]"
                  strokeWidth={2}
                />
                <span>{OPTIMUNDO_INFO.hoursDetailed}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-[#F2C14E]"
                  strokeWidth={2}
                />
                <a
                  href={`tel:+${OPTIMUNDO_INFO.whatsappNumber}`}
                  className="tabular-nums transition-colors hover:text-[#F2C14E]"
                >
                  {OPTIMUNDO_INFO.phoneInternational} ({OPTIMUNDO_INFO.phoneDisplay})
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram
                  className="h-4 w-4 shrink-0 text-[#F2C14E]"
                  strokeWidth={2}
                />
                <a
                  href={OPTIMUNDO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#F2C14E]"
                >
                  {OPTIMUNDO_INFO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#FAF8F3]/12 pt-6 text-xs text-[#EEF3FA]/65 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {OPTIMUNDO_INFO.legalName}. Todos os
            direitos reservados.
          </p>
          <p>{OPTIMUNDO_INFO.address} · Maputo</p>
        </div>
      </div>
    </footer>
  );
}
