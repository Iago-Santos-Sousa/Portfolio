import type { ImgHTMLAttributes } from "react";

export interface ImageSource {
  srcSet: string;
  type: string;
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Formatos modernos (AVIF/WebP) servidos via <picture>. */
  sources?: ImageSource[];
  /** Imagem acima da dobra: carrega cedo e com prioridade alta. */
  priority?: boolean;
}

/**
 * Imagem otimizada: dimensões explícitas (evita CLS), lazy loading e
 * decodificação assíncrona por padrão, e <picture> para AVIF/WebP.
 */
export function Image({
  sources,
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...rest
}: ImageProps) {
  const img = (
    <img
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding ?? "async"}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      {...rest}
    />
  );

  if (!sources?.length) return img;

  return (
    <picture>
      {sources.map((source) => (
        <source
          key={source.type}
          type={source.type}
          srcSet={source.srcSet}
          sizes={rest.sizes}
        />
      ))}
      {img}
    </picture>
  );
}
