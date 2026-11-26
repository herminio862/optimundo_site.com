import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';
import {
  LENS_OPTIONS,
  OPTIMUNDO_INFO,
  buildWhatsAppOrderUrl,
  formatMeticais,
  type CartItem,
} from '../data/catalog';

interface OrderDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (index: number, delta: number) => void;
  onUpdateLensChoice: (index: number, lensChoice: string) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export function OrderDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onUpdateLensChoice,
  onRemoveItem,
  onClearCart,
}: OrderDrawerProps) {
  const [customerNote, setCustomerNote] = useState('');

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.priceMt * item.quantity,
    0,
  );

  const whatsAppUrl = buildWhatsAppOrderUrl(items, customerNote);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-drawer-title"
        >
          {/* Fundo escurecido */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.22}}
            onClick={onClose}
            className="fixed inset-0 bg-[#141A42]/50 backdrop-blur-xs"
          />

          {/* Painel lateral do pedido */}
          <motion.aside
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{duration: 0.32, ease: [0.16, 1, 0.3, 1]}}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FAF8F3] shadow-2xl"
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between border-b border-[#141A42]/10 px-6 py-5">
              <div>
                <h2
                  id="order-drawer-title"
                  className="font-serif text-2xl font-medium text-[#141A42]"
                >
                  O seu <em className="font-serif italic text-[#242E82]">pedido</em>
                </h2>
                <p className="mt-0.5 text-xs text-[#4C557F]">
                  Envio directo para o WhatsApp {OPTIMUNDO_INFO.phoneDisplay}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar pedido"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#EEF3FA] text-[#141A42] transition-colors hover:bg-[#E3ECF8]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo da lista */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF3FA] text-[#242E82]">
                    <ShoppingBag className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <p className="mt-4 font-serif text-xl font-medium text-[#141A42]">
                    Nenhum artigo seleccionado
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-[#4C557F]">
                    Toque no botão “+” nos aros, óculos de sol ou acessórios
                    para preparar o seu pedido pelo WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 inline-flex h-11 cursor-pointer items-center rounded-full bg-[#242E82] px-6 text-sm font-medium text-[#FAF8F3] transition-colors hover:bg-[#192163]"
                  >
                    Explorar colecção
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${idx}`}
                      className="rounded-2xl border border-[#242E82]/[0.08] bg-[#EEF3FA] p-3.5"
                    >
                      <div className="flex gap-3.5">
                        <img
                          src={item.product.image.src}
                          alt={item.product.image.alt}
                          referrerPolicy="no-referrer"
                          className="h-20 w-24 shrink-0 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="truncate font-serif text-base font-medium text-[#141A42]">
                              {item.product.name}
                            </h3>
                            <button
                              type="button"
                              onClick={() => onRemoveItem(idx)}
                              aria-label={`Remover ${item.product.name}`}
                              className="cursor-pointer p-1 text-[#4C557F] transition-colors hover:text-[#242E82]"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <p className="text-xs text-[#4C557F]">
                            {item.product.categoryLabel}
                          </p>

                          <div className="mt-2.5 flex items-center justify-between gap-2">
                            <div className="inline-flex items-center rounded-full bg-[#FAF8F3] p-0.5">
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(idx, -1)}
                                aria-label="Diminuir quantidade"
                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#141A42] hover:bg-[#EEF3FA]"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-7 text-center text-xs font-semibold tabular-nums text-[#141A42]">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(idx, 1)}
                                aria-label="Aumentar quantidade"
                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#141A42] hover:bg-[#EEF3FA]"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>

                            <span className="text-sm font-bold tabular-nums text-[#242E82]">
                              {formatMeticais(
                                item.product.priceMt * item.quantity,
                              )}
                            </span>
                          </div>
                        </div>
                      </div>

                      {item.product.supportsLensOption && (
                        <div className="mt-3 border-t border-[#141A42]/10 pt-3">
                          <label className="block text-[11px] font-semibold text-[#4C557F]">
                            Opção de lentes
                            <select
                              value={item.lensChoice ?? LENS_OPTIONS[0]}
                              onChange={(e) =>
                                onUpdateLensChoice(idx, e.target.value)
                              }
                              className="mt-1 block h-9 w-full rounded-xl border border-[#242E82]/15 bg-[#FAF8F3] px-3 text-xs font-medium text-[#141A42] focus:border-[#242E82] focus:outline-none"
                            >
                              {LENS_OPTIONS.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Nota opcional para a equipa em Maputo */}
                  <div className="pt-2">
                    <label
                      htmlFor="order-note"
                      className="block text-xs font-semibold text-[#141A42]"
                    >
                      Nota opcional (ex.: tenho receita ou pretendo marcar exame)
                    </label>
                    <textarea
                      id="order-note"
                      rows={2}
                      value={customerNote}
                      onChange={(e) => setCustomerNote(e.target.value)}
                      placeholder="Ex.: Gostaria de experimentar na loja hoje à tarde..."
                      className="mt-1.5 w-full resize-none rounded-2xl border border-[#141A42]/15 bg-white/80 px-3.5 py-2.5 text-sm text-[#141A42] placeholder:text-[#4C557F]/60 focus:border-[#242E82] focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Rodapé do pedido com botão directo para WhatsApp */}
            {items.length > 0 && (
              <div className="border-t border-[#141A42]/10 bg-[#FAF8F3] px-6 py-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-[#4C557F]">
                    Total estimado
                  </span>
                  <span className="font-serif text-2xl font-semibold tabular-nums text-[#242E82]">
                    {formatMeticais(subtotal)}
                  </span>
                </div>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#F2C14E] px-6 text-sm font-semibold text-[#141A42] shadow-sm transition-colors hover:bg-[#E5B23B]"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                  <span>Avançar pedido no WhatsApp</span>
                </a>

                <div className="mt-3 flex items-center justify-between text-xs text-[#4C557F]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer font-medium text-[#242E82] hover:underline"
                  >
                    Continuar a ver
                  </button>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="cursor-pointer hover:text-[#141A42]"
                  >
                    Limpar lista
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
