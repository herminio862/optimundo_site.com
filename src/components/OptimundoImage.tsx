import {useState} from 'react';
import {motion} from 'motion/react';
import {Glasses} from 'lucide-react';
import type {MediaAsset} from '../data/optimundoMedia';

interface OptimundoImageProps {
  media: MediaAsset;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  delay?: number;
  aspectClassName?: string;
}

/**
 * Componente de fotografia com entrada suave em viewport (`whileInView`)
 * e fallback resiliente para garantir zero espaços vazios.
 */
export function OptimundoImage({
  media,
  className = '',
  imgClassName = '',
  eager = false,
  delay = 0,
  aspectClassName = 'aspect-[4/3]',
}: OptimundoImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={eager ? {opacity: 0, scale: 1.03} : {opacity: 0, y: 18, scale: 0.985}}
      animate={eager ? {opacity: 1, scale: 1} : undefined}
      whileInView={eager ? undefined : {opacity: 1, y: 0, scale: 1}}
      viewport={eager ? undefined : {once: true, amount: 'some'}}
      transition={{
        duration: eager ? 0.85 : 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden bg-[#E5ECF7] ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={media.src}
          alt={media.alt}
          referrerPolicy="no-referrer"
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          style={
            media.objectPosition
              ? {objectPosition: media.objectPosition}
              : undefined
          }
          className={`h-full w-full object-cover transition-transform duration-500 ease-out ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#EEF3FA] to-[#DCE6F7] p-6 text-center text-[#242E82]">
          <Glasses className="h-7 w-7 opacity-70" strokeWidth={1.5} />
          <span className="max-w-[20ch] text-xs font-medium text-[#141A42]/80">
            {media.alt}
          </span>
        </div>
      )}
    </motion.div>
  );
}
