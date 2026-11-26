/**
 * ============================================================================
 * REPOSITÓRIO CENTRAL DE FOTOGRAFIAS DA OPTIMUNDO
 * ============================================================================
 * Todas as fotografias do website estão centralizadas neste ficheiro para
 * substituição rápida e directa pelas fotografias oficiais da loja.
 *
 * Para trocar qualquer imagem:
 * 1. Coloque a nova fotografia em `public/fotos/` ou `src/assets/images/`
 * 2. Substitua o caminho (`src`) correspondente abaixo.
 */

export interface MediaAsset {
  src: string;
  alt: string;
  objectPosition?: string;
}

export const OPTIMUNDO_MEDIA = {
  /** Fotografia principal de retrato no Hero */
  heroPortrait: {
    src: '/src/assets/images/hero_optimundo_portrait_1795618770593.jpg',
    alt: 'Retrato editorial com aros ópticos tartaruga da Optimundo em Maputo',
    objectPosition: 'center 18%',
  },

  /** Categoria: Aros */
  aros: {
    acetatoClassico: {
      src: '/src/assets/images/aros_classic_acetato_1795618771479.jpg',
      alt: 'Aro clássico em acetato tartaruga com ponte metálica dourada',
    },
    titanioIndigo: {
      src: '/src/assets/images/aros_titanium_indigo_1795618772667.jpg',
      alt: 'Aro leve em acabamento azul-índigo mate com hastes em titânio',
    },
    cristalChampanhe: {
      src: '/src/assets/images/aros_crystal_amber_1795619446056.jpg',
      alt: 'Aro geométrico translúcido em acetato cristal champanhe',
    },
  },

  /** Categoria: Óculos de sol */
  oculosDeSol: {
    havanaPolarizado: {
      src: '/src/assets/images/sol_maputo_havana_1795618781371.jpg',
      alt: 'Óculos de sol Havana tartaruga com lentes polarizadas bronze',
    },
    aviadorIndico: {
      src: '/src/assets/images/sol_indico_aviator_1795619452372.jpg',
      alt: 'Óculos de sol aviador dourado escovado com lentes azuis UV400',
    },
    baiaCatEye: {
      src: '/src/assets/images/sol_baia_cat_eye_1795618777106.jpg',
      alt: 'Óculos de sol cat-eye preto mate com detalhe dourado nas hastes',
    },
  },

  /** Categoria: Acessórios ópticos */
  acessorios: {
    estojoRigido: {
      src: '/src/assets/images/acessorios_estojo_premium_1795618783214.jpg',
      alt: 'Estojo rígido em azul-índigo com pano de microfibra creme',
    },
    kitLimpeza: {
      src: '/src/assets/images/acessorios_kit_limpeza_1795618783454.jpg',
      alt: 'Kit de limpeza óptica com spray, pano microfibra e chave de precisão',
    },
    correnteDourada: {
      src: '/src/assets/images/acessorios_corrente_oculos_1795618785404.jpg',
      alt: 'Corrente metálica dourada delicada para óculos',
    },
  },

  /** Secção: Consultas de Optometria */
  consultas: {
    salaOptometria: {
      src: '/src/assets/images/consulta_optometria_maputo_1795618779782.jpg',
      alt: 'Sala de consulta de optometria com equipamento de precisão na Optimundo',
    },
  },

  /** Secção: Sobre a Optimundo */
  sobre: {
    boutiqueShowroom: {
      src: '/src/assets/images/sobre_boutique_optimundo_1795618791990.jpg',
      alt: 'Interior luminoso e expositor de óculos da Optimundo em Maputo',
    },
  },
} as const;
