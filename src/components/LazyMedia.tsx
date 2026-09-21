import { useState, useRef } from "react";
import { useInView } from "framer-motion";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const LazyImage = ({ src, alt, className, containerClassName = "", ...rest }: LazyImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={`relative w-full h-full bg-muted/20 ${containerClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
          {...rest}
        />
      )}
    </div>
  );
};

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  containerClassName?: string;
}

export const LazyVideo = ({
  src,
  className,
  containerClassName = "",
  preload = "none",
  onMouseEnter,
  onMouseLeave,
  ...rest
}: LazyVideoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  const [currentPreload, setCurrentPreload] = useState<"none" | "metadata" | "auto">(preload as any);

  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    setCurrentPreload("metadata");
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  return (
    <div ref={ref} className={`relative w-full h-full bg-muted/20 ${containerClassName}`}>
      {!isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse" />
      )}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          className={className}
          preload={currentPreload}
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...rest}
        />
      )}
    </div>
  );
};
