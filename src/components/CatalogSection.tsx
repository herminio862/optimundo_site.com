import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Check, MessageCircle, Plus, X} from 'lucide-react';
import {
  CATEGORY_TABS,
  LENS_OPTIONS,
  PRODUCTS,
  buildSingleProductWhatsAppUrl,
  type CatalogFilter,
  type Product,
} from '../data/catalog';
import {OptimundoImage} from './OptimundoImage';

interface CatalogSectionProps {
  activeCategory: CatalogFilter;
  onCategoryChange: (category: CatalogFilter) => void;
  onAddProduct: (product: Product, lensChoice?: string) => void;
}

export function CatalogSection({
  activeCategory,
  onCategoryChange,
  onAddProduct,
}: CatalogSectionProps) {
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLens, setSelectedLens] = useState<string>(LENS_OPTIONS[0]);

  const filteredProducts =
    activeCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleQuickAdd = (product: Product) => {
    setRecentlyAddedId(product.id);
    onAddProduct(
      product,
      product.supportsLensOption ? LENS_OPTIONS[0] : undefined,
    );
    window.setTimeout(() => {
      setRecentlyAddedId((current) => (current === product.id ? null : current));
    }, 900);
  };

  const openDetails = (product: Product) => {
    setSelectedLens(LENS_OPTIONS[0]);
    setSelectedProduct(product);
  };

  return (
    <section
      id="colecao"
      className="border-t border-[#141A42]/[0.07] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da vitrine + separadores interactivos */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 'some'}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold tracking-[0.06em] text-[#242E82]">
              Vitrine Optimundo · Maputo
            </p>
            <h2 className="mt-2 font-serif text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.12] text-[#141A42]">
              Peças pensadas para o seu{' '}
              <em className="font-serif italic text-[#242E82]">olhar</em>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4C557F] sm:text-base">
              Toque no botão <strong>“+”</strong> em qualquer fotografia para
              adicionar ao seu pedido e avançar directamente pelo WhatsApp.
            </p>
          </motion.div>

          {/* Separadores funcionais de categoria */}
          <div
            role="tablist"
            aria-label="Filtrar colecção por categoria"
            className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-[#EEF3FA] p-1.5"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(tab.id)}
                  className={`h-10 shrink-0 cursor-pointer whitespace-nowrap rounded-xl px-4 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#242E82] text-[#FAF8F3] shadow-sm'
                      : 'text-[#141A42]/80 hover:bg-[#FAF8F3]/70 hover:text-[#242E82]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grelha uniforme de cartões de produto */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const isJustAdded = recentlyAddedId === product.id;
              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  exit={{opacity: 0, scale: 0.96}}
                  viewport={{once: true, amount: 'some'}}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col rounded-3xl border border-[#242E82]/[0.08] bg-[#EEF3FA] p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E7EFFA]"
                >
                  {/* Fotografia com botão "+" sobreposto e animação de salto */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => openDetails(product)}
                      className="block w-full cursor-pointer overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-2"
                      aria-label={`Ver detalhes de ${product.name}`}
                    >
                      <OptimundoImage
                        media={product.image}
                        aspectClassName="aspect-[4/3]"
                        className="rounded-2xl"
                        imgClassName="group-hover:scale-[1.04]"
                      />
                    </button>

                    {/* Botão "+" com animação de salto ao tocar */}
                    <motion.button
                      type="button"
                      onClick={() => handleQuickAdd(product)}
                      whileHover={{scale: 1.08}}
                      whileTap={{scale: 0.84, y: -5}}
                      animate={
                        isJustAdded
                          ? {scale: [1, 1.24, 0.94, 1.05, 1], y: [0, -7, 0]}
                          : {scale: 1, y: 0}
                      }
                      transition={{
                        type: 'spring',
                        stiffness: 520,
                        damping: 18,
                      }}
                      aria-label={`Adicionar ${product.name} ao pedido`}
                      title={`Adicionar ${product.name} ao pedido`}
                      className={`absolute bottom-3 right-3 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full shadow-md transition-colors duration-200 ${
                        isJustAdded
                          ? 'bg-[#F2C14E] text-[#141A42]'
                          : 'bg-[#242E82] text-[#FAF8F3] hover:bg-[#192163]'
                      }`}
                    >
                      {isJustAdded ? (
                        <Check className="h-5 w-5" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={2.4} />
                      )}
                    </motion.button>
                  </div>

                  {/* Metadados limpos e legíveis */}
                  <div className="flex flex-1 flex-col px-1.5 pb-1 pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#4C557F]">
                      <span>{product.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{product.material}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openDetails(product)}
                      className="mt-1.5 cursor-pointer text-left font-serif text-xl font-medium text-[#141A42] transition-colors hover:text-[#242E82]"
                    >
                      {product.name}
                    </button>

                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-[#4C557F]">
                      {product.description}
                    </p>

                    <div className="mt-auto flex items-baseline justify-between gap-3 pt-4">
                      <span className="text-base font-bold tabular-nums text-[#242E82]">
                        {product.priceFormatted}
                      </span>

                      <button
                        type="button"
                        onClick={() => openDetails(product)}
                        className="shrink-0 cursor-pointer whitespace-nowrap text-xs font-semibold text-[#141A42] underline decoration-[#242E82]/35 underline-offset-4 transition-colors hover:text-[#242E82] hover:decoration-[#242E82]"
                      >
                        Detalhes e pedido
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal de detalhe rápido do produto com opção directa para WhatsApp */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#141A42]/55 p-4 backdrop-blur-xs"
            onClick={() => setSelectedProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-product-title"
          >
            <motion.div
              initial={{opacity: 0, y: 20, scale: 0.97}}
              animate={{opacity: 1, y: 0, scale: 1}}
              exit={{opacity: 0, y: 12, scale: 0.97}}
              transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
              onClick={(e) => e.stopPropagation()}
              className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-3xl bg-[#FAF8F3] shadow-2xl md:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Fechar detalhes"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FAF8F3]/90 text-[#141A42] shadow-sm transition-colors hover:bg-[#EEF3FA]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="bg-[#EEF3FA] p-4 md:col-span-6 md:p-5">
                <OptimundoImage
                  media={selectedProduct.image}
                  eager
                  aspectClassName="aspect-[4/3] md:h-full md:aspect-auto"
                  className="h-full rounded-2xl"
                />
              </div>

              <div className="flex flex-col justify-between p-6 md:col-span-6 md:p-8">
                <div>
                  <p className="text-xs font-medium text-[#4C557F]">
                    {selectedProduct.categoryLabel} · {selectedProduct.material}
                  </p>
                  <h3
                    id="modal-product-title"
                    className="mt-1.5 font-serif text-2xl font-medium text-[#141A42]"
                  >
                    {selectedProduct.name}
                  </h3>
                  <p className="mt-2 text-xl font-bold tabular-nums text-[#242E82]">
                    {selectedProduct.priceFormatted}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#4C557F]">
                    {selectedProduct.description}
                  </p>

                  {selectedProduct.supportsLensOption && (
                    <div className="mt-5">
                      <p className="text-xs font-semibold text-[#141A42]">
                        Preferência de lentes
                      </p>
                      <div className="mt-2.5 flex flex-col gap-2">
                        {LENS_OPTIONS.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setSelectedLens(option)}
                            className={`flex h-10 cursor-pointer items-center justify-between rounded-xl border px-3.5 text-left text-xs font-medium transition-colors ${
                              selectedLens === option
                                ? 'border-[#242E82] bg-[#EEF3FA] text-[#242E82]'
                                : 'border-[#141A42]/12 bg-white/60 text-[#4C557F] hover:border-[#242E82]/35'
                            }`}
                          >
                            <span>{option}</span>
                            {selectedLens === option && (
                              <Check className="h-4 w-4 text-[#242E82]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-2.5 border-t border-[#141A42]/10 pt-5">
                  <a
                    href={buildSingleProductWhatsAppUrl(
                      selectedProduct,
                      selectedProduct.supportsLensOption
                        ? selectedLens
                        : undefined,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#F2C14E] px-5 text-sm font-semibold text-[#141A42] transition-colors hover:bg-[#E5B23B]"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                    <span>Pedir agora no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      onAddProduct(
                        selectedProduct,
                        selectedProduct.supportsLensOption
                          ? selectedLens
                          : undefined,
                      );
                      setSelectedProduct(null);
                    }}
                    className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#242E82]/25 bg-[#EEF3FA] px-5 text-sm font-medium text-[#242E82] transition-colors hover:bg-[#E3ECF8]"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Adicionar ao meu pedido</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
