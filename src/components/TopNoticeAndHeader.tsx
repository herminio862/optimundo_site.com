import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Menu, ShoppingBag, X} from 'lucide-react';
import {OPTIMUNDO_INFO, type CatalogFilter} from '../data/catalog';

interface TopNoticeAndHeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateCategory: (category: CatalogFilter) => void;
}

export function TopNoticeAndHeader({
  cartCount,
  onOpenCart,
  onNavigateCategory,
}: TopNoticeAndHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCategoryClick = (category: CatalogFilter) => {
    setMobileMenuOpen(false);
    onNavigateCategory(category);
  };

  const handleAnchorClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <>
      {/* Barra de aviso discreta no topo (Maputo) */}
      <motion.div
        initial={{opacity: 0, y: -8}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
        className="bg-[#242E82] text-[#FAF8F3]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-xs font-medium tracking-[0.01em] sm:text-[13px]">
          <span>
            Atendimento presencial e exames de vista na {OPTIMUNDO_INFO.address}
            <span className="mx-2 text-[#F2C14E]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#F2C14E]">{OPTIMUNDO_INFO.hoursShort}</span>
          </span>
        </div>
      </motion.div>

      {/* Cabeçalho principal (3 zonas equilibradas) */}
      <motion.header
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
        className="sticky top-0 z-40 border-b border-[#141A42]/10 bg-[#FAF8F3]/92 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Zona 1: Marca (uma linha) */}
          <a
            href="#inicio"
            className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Optimundo — Óptica & Serviços, voltar ao início"
          >
            <svg
              width="30"
              height="20"
              viewBox="0 0 36 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 text-[#242E82] transition-transform duration-300 group-hover:scale-105"
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
            <span className="font-serif text-xl font-semibold tracking-tight text-[#242E82]">
              Optimundo
            </span>
          </a>

          {/* Zona 2: Navegação limpa em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            <button
              type="button"
              onClick={() => handleCategoryClick('aros')}
              className="shrink-0 cursor-pointer whitespace-nowrap text-sm font-medium text-[#141A42]/85 transition-colors hover:text-[#242E82] hover:underline hover:decoration-[#F2C14E] hover:decoration-2 hover:underline-offset-6"
            >
              Aros
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('sol')}
              className="shrink-0 cursor-pointer whitespace-nowrap text-sm font-medium text-[#141A42]/85 transition-colors hover:text-[#242E82] hover:underline hover:decoration-[#F2C14E] hover:decoration-2 hover:underline-offset-6"
            >
              Óculos de sol
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('acessorios')}
              className="shrink-0 cursor-pointer whitespace-nowrap text-sm font-medium text-[#141A42]/85 transition-colors hover:text-[#242E82] hover:underline hover:decoration-[#F2C14E] hover:decoration-2 hover:underline-offset-6"
            >
              Acessórios ópticos
            </button>
            <a
              href="#consultas"
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[#141A42]/85 transition-colors hover:text-[#242E82] hover:underline hover:decoration-[#F2C14E] hover:decoration-2 hover:underline-offset-6"
            >
              Consultas
            </a>
            <a
              href="#sobre"
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[#141A42]/85 transition-colors hover:text-[#242E82] hover:underline hover:decoration-[#F2C14E] hover:decoration-2 hover:underline-offset-6"
            >
              Sobre
            </a>
            <a
              href="#faq"
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[#141A42]/85 transition-colors hover:text-[#242E82] hover:underline hover:decoration-[#F2C14E] hover:decoration-2 hover:underline-offset-6"
            >
              FAQ
            </a>
          </nav>

          {/* Zona 3: Acção principal (Pedido WhatsApp) + Menu mobile */}
          <div className="flex shrink-0 items-center gap-2.5">
            <motion.button
              type="button"
              whileTap={{scale: 0.96}}
              onClick={onOpenCart}
              aria-label={`Abrir pedido com ${cartCount} artigos`}
              className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#242E82] px-4 text-sm font-medium text-[#FAF8F3] transition-colors duration-200 hover:bg-[#192163]"
            >
              <ShoppingBag className="h-4 w-4 text-[#F2C14E]" strokeWidth={2} />
              <span>Pedido</span>
              {cartCount > 0 && (
                <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-[#F2C14E] px-1.5 py-0.5 text-xs font-bold tabular-nums text-[#141A42]">
                  {cartCount}
                </span>
              )}
            </motion.button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#141A42]/15 text-[#141A42] transition-colors hover:bg-[#EEF3FA] lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menu móvel expansível */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
              exit={{opacity: 0, height: 0}}
              transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
              aria-label="Navegação móvel"
              className="overflow-hidden border-t border-[#141A42]/10 bg-[#FAF8F3] lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                <button
                  type="button"
                  onClick={() => handleCategoryClick('aros')}
                  className="flex h-11 w-full cursor-pointer items-center justify-between rounded-xl px-3 text-left text-base font-medium text-[#141A42] hover:bg-[#EEF3FA]"
                >
                  <span>Aros</span>
                  <span className="text-xs text-[#4C557F]">Desde 1.499 Mt</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('sol')}
                  className="flex h-11 w-full cursor-pointer items-center justify-between rounded-xl px-3 text-left text-base font-medium text-[#141A42] hover:bg-[#EEF3FA]"
                >
                  <span>Óculos de sol</span>
                  <span className="text-xs text-[#4C557F]">UV400</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('acessorios')}
                  className="flex h-11 w-full cursor-pointer items-center justify-between rounded-xl px-3 text-left text-base font-medium text-[#141A42] hover:bg-[#EEF3FA]"
                >
                  <span>Acessórios ópticos</span>
                  <span className="text-xs text-[#4C557F]">Cuidados</span>
                </button>
                <div className="my-1 border-t border-[#141A42]/10" />
                <button
                  type="button"
                  onClick={() => handleAnchorClick('consultas')}
                  className="flex h-11 w-full cursor-pointer items-center rounded-xl px-3 text-left text-base font-medium text-[#141A42] hover:bg-[#EEF3FA]"
                >
                  Consultas
                </button>
                <button
                  type="button"
                  onClick={() => handleAnchorClick('sobre')}
                  className="flex h-11 w-full cursor-pointer items-center rounded-xl px-3 text-left text-base font-medium text-[#141A42] hover:bg-[#EEF3FA]"
                >
                  Sobre
                </button>
                <button
                  type="button"
                  onClick={() => handleAnchorClick('faq')}
                  className="flex h-11 w-full cursor-pointer items-center rounded-xl px-3 text-left text-base font-medium text-[#141A42] hover:bg-[#EEF3FA]"
                >
                  FAQ
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
