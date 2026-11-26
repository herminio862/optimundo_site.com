import {OPTIMUNDO_MEDIA, type MediaAsset} from './optimundoMedia';

export type ProductCategory = 'aros' | 'sol' | 'acessorios';
export type CatalogFilter = 'todos' | ProductCategory;

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  material: string;
  priceMt: number;
  priceFormatted: string;
  description: string;
  image: MediaAsset;
  supportsLensOption?: boolean;
  highlightNote?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  lensChoice?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const OPTIMUNDO_INFO = {
  brandName: 'Optimundo',
  legalName: 'Optimundo, Lda',
  tagline: 'Optimundo — Óptica & Serviços',
  address: '806 Av. 25 de Setembro, Maputo',
  cityCountry: 'Maputo, Moçambique',
  hoursShort: 'Aberto até às 18:00',
  hoursDetailed: 'Segunda a Sexta: 08:00 – 18:00 · Sábado: 08:30 – 13:00',
  phoneDisplay: '860577930',
  phoneInternational: '+258 86 057 7930',
  whatsappNumber: '258860577930',
  whatsappBaseUrl: 'https://wa.me/258860577930',
  instagramHandle: '@optimundo_lda',
  instagramUrl: 'https://instagram.com/optimundo_lda',
} as const;

export const LENS_OPTIONS = [
  'Apenas o aro',
  'Com lentes graduadas',
  'Com filtro luz azul',
] as const;

export const CATEGORY_TABS: {
  id: CatalogFilter;
  label: string;
  shortLabel: string;
}[] = [
  {id: 'todos', label: 'Toda a colecção', shortLabel: 'Todos'},
  {id: 'aros', label: 'Aros', shortLabel: 'Aros'},
  {id: 'sol', label: 'Óculos de sol', shortLabel: 'Óculos de sol'},
  {id: 'acessorios', label: 'Acessórios ópticos', shortLabel: 'Acessórios'},
];

export const CATEGORY_HIGHLIGHTS: {
  id: ProductCategory;
  title: string;
  subtitle: string;
  startingPrice: string;
  image: MediaAsset;
}[] = [
  {
    id: 'aros',
    title: 'Aros',
    subtitle: 'Acetato, titânio e perfis contemporâneos',
    startingPrice: 'Desde 1.499 Mt',
    image: OPTIMUNDO_MEDIA.aros.acetatoClassico,
  },
  {
    id: 'sol',
    title: 'Óculos de sol',
    subtitle: 'Protecção UV400 para a luz de Maputo',
    startingPrice: 'Desde 2.199 Mt',
    image: OPTIMUNDO_MEDIA.oculosDeSol.havanaPolarizado,
  },
  {
    id: 'acessorios',
    title: 'Acessórios ópticos',
    subtitle: 'Estojos rígidos, limpeza e correntes',
    startingPrice: 'Desde 450 Mt',
    image: OPTIMUNDO_MEDIA.acessorios.estojoRigido,
  },
];

export const PRODUCTS: Product[] = [
  // AROS
  {
    id: 'aro-polana-tartaruga',
    name: 'Aro Polana Tartaruga',
    category: 'aros',
    categoryLabel: 'Aros',
    material: 'Acetato polido & ponte dourada',
    priceMt: 1499,
    priceFormatted: '1.499 Mt',
    description:
      'Silhueta redonda equilibrada com ponte metálica fina e conforto leve para uso diário, pronta para lentes graduadas ou descanso.',
    image: OPTIMUNDO_MEDIA.aros.acetatoClassico,
    supportsLensOption: true,
    highlightNote: 'A partir de 1.499 Mt',
  },
  {
    id: 'aro-indico-titanio',
    name: 'Aro Índico Titânio',
    category: 'aros',
    categoryLabel: 'Aros',
    material: 'Frente azul-índigo & hastes em titânio',
    priceMt: 2450,
    priceFormatted: '2.450 Mt',
    description:
      'Estrutura ultraleve resistente à corrosão costeira, com acabamento azul-índigo mate inspirado na identidade Optimundo.',
    image: OPTIMUNDO_MEDIA.aros.titanioIndigo,
    supportsLensOption: true,
  },
  {
    id: 'aro-sommerschield-cristal',
    name: 'Aro Sommerschield Cristal',
    category: 'aros',
    categoryLabel: 'Aros',
    material: 'Acetato translúcido champanhe',
    priceMt: 1890,
    priceFormatted: '1.890 Mt',
    description:
      'Linhas geométricas luminosas em acetato cristal com dobradiças reforçadas que iluminam o rosto sem pesar.',
    image: OPTIMUNDO_MEDIA.aros.cristalChampanhe,
    supportsLensOption: true,
  },

  // ÓCULOS DE SOL
  {
    id: 'sol-costa-havana',
    name: 'Sol Costa Havana',
    category: 'sol',
    categoryLabel: 'Óculos de sol',
    material: 'Acetato Havana & lentes polarizadas',
    priceMt: 2690,
    priceFormatted: '2.690 Mt',
    description:
      'Lentes polarizadas em tom bronze que reduzem o encandeamento na condução e nos dias luminosos de Maputo.',
    image: OPTIMUNDO_MEDIA.oculosDeSol.havanaPolarizado,
    supportsLensOption: false,
    highlightNote: 'Polarizado UV400',
  },
  {
    id: 'sol-marginal-aviador',
    name: 'Sol Marginal Aviador',
    category: 'sol',
    categoryLabel: 'Óculos de sol',
    material: 'Metal dourado escovado & lentes índigo',
    priceMt: 2850,
    priceFormatted: '2.850 Mt',
    description:
      'Releitura contemporânea do formato aviador com dupla ponte elegante e protecção solar UV400 total.',
    image: OPTIMUNDO_MEDIA.oculosDeSol.aviadorIndico,
    supportsLensOption: false,
  },
  {
    id: 'sol-baia-cat-eye',
    name: 'Sol Baía Cat-Eye',
    category: 'sol',
    categoryLabel: 'Óculos de sol',
    material: 'Acetato preto mate & haste dourada',
    priceMt: 2199,
    priceFormatted: '2.199 Mt',
    description:
      'Design escultural de linhas firmes com apoio nasal confortável e lentes fumadas de alta nitidez visual.',
    image: OPTIMUNDO_MEDIA.oculosDeSol.baiaCatEye,
    supportsLensOption: false,
  },

  // ACESSÓRIOS ÓPTICOS
  {
    id: 'acessorio-estojo-indigo',
    name: 'Estojo Rígido & Pano Microfibra',
    category: 'acessorios',
    categoryLabel: 'Acessórios ópticos',
    material: 'Acabamento texturizado azul-índigo',
    priceMt: 550,
    priceFormatted: '550 Mt',
    description:
      'Protecção estruturada com interior aveludado e pano de microfibra macio para preservar a transparência das lentes.',
    image: OPTIMUNDO_MEDIA.acessorios.estojoRigido,
    supportsLensOption: false,
  },
  {
    id: 'acessorio-kit-limpeza',
    name: 'Kit de Limpeza & Manutenção',
    category: 'acessorios',
    categoryLabel: 'Acessórios ópticos',
    material: 'Spray 50 ml, microfibra & micro-chave',
    priceMt: 650,
    priceFormatted: '650 Mt',
    description:
      'Fórmula suave compatível com tratamentos antirreflexo, acompanhada por microfibra fina e chave para ajuste de parafusos.',
    image: OPTIMUNDO_MEDIA.acessorios.kitLimpeza,
    supportsLensOption: false,
  },
  {
    id: 'acessorio-corrente-dourada',
    name: 'Corrente Metálica Dourada',
    category: 'acessorios',
    categoryLabel: 'Acessórios ópticos',
    material: 'Malha fina banhada a ouro & suportes silicone',
    priceMt: 450,
    priceFormatted: '450 Mt',
    description:
      'Acessório leve e versátil compatível com qualquer aro óptico ou óculos de sol, ideal para o dia a dia.',
    image: OPTIMUNDO_MEDIA.acessorios.correnteDourada,
    supportsLensOption: false,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'exame-vista',
    question: 'Posso fazer a consulta de optometria na loja antes de escolher o aro?',
    answer:
      'Sim. Na nossa loja na Av. 25 de Setembro, 806 em Maputo realizamos avaliações visuais completas e ajudamos a escolher o aro e as lentes adequadas à sua receita. Pode agendar previamente pelo WhatsApp 860577930.',
  },
  {
    id: 'receita-propria',
    question: 'Já tenho receita médica de outro oftalmologista. Posso encomendar os óculos?',
    answer:
      'Com certeza. Basta enviar uma fotografia nítida da sua receita pelo WhatsApp ou trazê-la pessoalmente à Optimundo para prepararmos o orçamento de lentes graduadas, filtro de luz azul ou fotocromáticas.',
  },
  {
    id: 'pedido-whatsapp',
    question: 'Como funciona o pedido pelo botão "+" no website?',
    answer:
      'Ao tocar no botão "+" em qualquer modelo, o artigo é adicionado ao seu pedido. Quando avançar, será redireccionado directamente para o WhatsApp da Optimundo (860577930) com a mensagem já preenchida para confirmarmos disponibilidade, graduação e levantamento na loja.',
  },
  {
    id: 'horario-localizacao',
    question: 'Onde fica a Optimundo e até que horas está aberta?',
    answer:
      'Estamos na Av. 25 de Setembro, nº 806, em Maputo. O atendimento presencial funciona de Segunda a Sexta até às 18:00, e aos Sábados de manhã até às 13:00.',
  },
  {
    id: 'manutencao-ajustes',
    question: 'Fazem ajustes de armações e substituição de plaquetas ou parafusos?',
    answer:
      'Sim. A nossa equipa técnica realiza ajustes anatómicos de hastes, alinhamento de aros e cuidados de manutenção óptica directamente na loja em Maputo.',
  },
];

export function formatMeticais(value: number): string {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} Mt`;
}

export function buildWhatsAppOrderUrl(
  items: CartItem[],
  customerNote?: string,
): string {
  const lines = [
    'Olá Optimundo! Gostaria de avançar com o seguinte pedido:',
    '',
  ];

  let total = 0;
  items.forEach((item, index) => {
    const lineTotal = item.product.priceMt * item.quantity;
    total += lineTotal;
    const lensSuffix = item.lensChoice ? ` (${item.lensChoice})` : '';
    lines.push(
      `${index + 1}. ${item.quantity}x ${item.product.name}${lensSuffix} — ${formatMeticais(lineTotal)}`,
    );
  });

  lines.push('');
  lines.push(`Total estimado: ${formatMeticais(total)}`);

  if (customerNote && customerNote.trim().length > 0) {
    lines.push(`Nota adicional: ${customerNote.trim()}`);
  }

  lines.push('');
  lines.push('Aguardo confirmação de disponibilidade na loja em Maputo.');

  return `${OPTIMUNDO_INFO.whatsappBaseUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function buildSingleProductWhatsAppUrl(
  product: Product,
  lensChoice?: string,
): string {
  return buildWhatsAppOrderUrl([{product, quantity: 1, lensChoice}]);
}

export function buildConsultationWhatsAppUrl(serviceTopic?: string): string {
  const topicText = serviceTopic
    ? ` referente a: ${serviceTopic}`
    : ' de optometria / avaliação visual';
  const message = `Olá Optimundo! Gostaria de agendar uma consulta${topicText} na loja da Av. 25 de Setembro, 806 (Maputo). Quais são os horários disponíveis?`;
  return `${OPTIMUNDO_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
