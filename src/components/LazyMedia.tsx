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
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          {/* Optional placeholder icon or spinner could go here */}
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          {...rest}
        />
      )}
    </div>
  );
};

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  containerClassName?: string;
}

export const LazyVideo = ({ src, className, containerClassName = "", ...rest }: LazyVideoProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={`relative w-full h-full bg-muted/20 ${containerClassName}`}>
      {!isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse" />
      )}
      {isInView && (
        <video
          src={src}
          className={className}
          preload="metadata"
          playsInline
          {...rest}
        />
      )}
    </div>
  );
};
