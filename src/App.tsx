import {useEffect, useState} from 'react';
import {MotionConfig} from 'motion/react';
import {
  type CartItem,
  type CatalogFilter,
  type Product,
} from './data/catalog';
import {TopNoticeAndHeader} from './components/TopNoticeAndHeader';
import {HeroSection} from './components/HeroSection';
import {CatalogSection} from './components/CatalogSection';
import {ConsultationsAndAboutSection} from './components/ConsultationsAndAboutSection';
import {TrustAndFaqSection} from './components/TrustAndFaqSection';
import {OrderDrawer} from './components/OrderDrawer';
import {Footer} from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CatalogFilter>('todos');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Fechar painel lateral com a tecla Escape
  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isDrawerOpen]);

  const handleNavigateCategory = (category: CatalogFilter) => {
    setActiveCategory(category);
    const catalogEl = document.getElementById('colecao');
    if (catalogEl) {
      catalogEl.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleAddProduct = (product: Product, lensChoice?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id && item.lensChoice === lensChoice,
      );
      if (existingIndex >= 0) {
        return prev.map((item, idx) =>
          idx === existingIndex
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      }
      return [...prev, {product, quantity: 1, lensChoice}];
    });

    // Breve pausa de 220ms para o utilizador sentir a animação de salto no botão "+"
    window.setTimeout(() => {
      setIsDrawerOpen(true);
    }, 220);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item, idx) =>
          idx === index
            ? {...item, quantity: item.quantity + delta}
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleUpdateLensChoice = (index: number, lensChoice: string) => {
    setCartItems((prev) =>
      prev.map((item, idx) =>
        idx === index ? {...item, lensChoice} : item,
      ),
    );
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAF8F3] text-[#141A42]">
        <TopNoticeAndHeader
          cartCount={totalCount}
          onOpenCart={() => setIsDrawerOpen(true)}
          onNavigateCategory={handleNavigateCategory}
        />

        <main>
          <HeroSection onSelectCategory={handleNavigateCategory} />

          <CatalogSection
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onAddProduct={handleAddProduct}
          />

          <ConsultationsAndAboutSection />

          <TrustAndFaqSection />
        </main>

        <Footer onNavigateCategory={handleNavigateCategory} />

        <OrderDrawer
          isOpen={isDrawerOpen}
          items={cartItems}
          onClose={() => setIsDrawerOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onUpdateLensChoice={handleUpdateLensChoice}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      </div>
    </MotionConfig>
  );
}
