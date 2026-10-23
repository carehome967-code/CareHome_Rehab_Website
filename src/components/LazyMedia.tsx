import React, { useState, useRef, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";
import { Play, Film, AlertCircle } from "lucide-react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const LazyImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  ...rest
}: LazyImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "250px" });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative w-full h-full bg-muted/40 overflow-hidden ${containerClassName}`}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-muted/80 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin opacity-40" />
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50 text-muted-foreground p-3 text-center">
          <AlertCircle className="w-6 h-6 text-muted-foreground/60 mb-1" />
          <span className="text-xs">Image unavailable</span>
        </div>
      ) : (
        isInView && (
          <img
            src={src}
            alt={alt || "Care Home Rehabilitation Gallery"}
            className={`${className} ${
              loaded ? "opacity-100" : "opacity-0"
            } transition-all duration-500`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
            loading="lazy"
            decoding="async"
            {...rest}
          />
        )
      )}
    </div>
  );
};

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  poster?: string;
  containerClassName?: string;
  enableHoverPreview?: boolean;
}

export const LazyVideo = ({
  src,
  poster,
  className = "",
  containerClassName = "",
  enableHoverPreview = true,
  ...rest
}: LazyVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "250px" });

  const [posterLoaded, setPosterLoaded] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Play preview on desktop hover safely
  const handleMouseEnter = useCallback(() => {
    if (!enableHoverPreview || !videoRef.current || videoError) return;

    setIsPlayingPreview(true);
    const video = videoRef.current;
    
    // Ensure muted for autoplay compliance
    video.muted = true;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Handled silently: interrupted by mouseLeave or browser autoplay policy
        if (err.name !== "AbortError") {
          console.debug("Video preview play prevented:", err);
        }
      });
    }
  }, [enableHoverPreview, videoError]);

  // Pause preview on mouse leave safely
  const handleMouseLeave = useCallback(() => {
    if (!enableHoverPreview || !videoRef.current) return;

    setIsPlayingPreview(false);
    const video = videoRef.current;
    
    try {
      video.pause();
      video.currentTime = 0;
    } catch {
      // Ignore pause exceptions
    }
  }, [enableHoverPreview]);

  // Fallback seek to 0.1s for videos without an explicit poster so browser renders first frame
  useEffect(() => {
    const video = videoRef.current;
    if (!video || poster) return;

    const handleLoadedMetadata = () => {
      try {
        video.currentTime = 0.1;
        setIsVideoReady(true);
      } catch {
        // Fallback
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [poster]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-muted/40 overflow-hidden ${containerClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Skeleton Pulse while loading thumbnail or video metadata */}
      {!posterLoaded && !isVideoReady && !videoError && (
        <div className="absolute inset-0 bg-muted/80 animate-pulse flex items-center justify-center z-10 pointer-events-none">
          <Film className="w-8 h-8 text-muted-foreground/30 animate-bounce" />
        </div>
      )}

      {/* Error state if video file fails completely */}
      {videoError && !poster && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground p-3 text-center z-10">
          <AlertCircle className="w-6 h-6 text-muted-foreground/60 mb-1" />
          <span className="text-xs">Video preview unavailable</span>
        </div>
      )}

      {/* Poster Image (Instant, zero-bandwidth loading for grid) */}
      {poster && (
        <img
          src={poster}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlayingPreview ? "opacity-0" : "opacity-100"
          } ${posterLoaded ? "" : "blur-sm"}`}
          onLoad={() => setPosterLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Video Element for hover playback or direct metadata frame display */}
      {isInView && (
        <video
          ref={videoRef}
          src={poster ? src : `${src}#t=0.1`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            poster && !isPlayingPreview ? "opacity-0" : "opacity-100"
          } ${className}`}
          preload={poster ? (isPlayingPreview ? "auto" : "none") : "metadata"}
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoReady(true)}
          onError={() => setVideoError(true)}
          {...rest}
        />
      )}

      {/* Subtle Dark Gradient Overlay for title readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Centered Play Button (Visible on mobile & desktop, scales up on hover) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
          isPlayingPreview ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg shadow-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary transition-transform duration-300 pl-0.5">
          <Play className="w-6 h-6 md:w-7 md:h-7 fill-current" />
        </div>
      </div>

      {/* Top-Right Badge: "Video" with Glassmorphism */}
      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-black/65 backdrop-blur-md text-white/95 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md border border-white/10 pointer-events-none">
        <Film className="w-3 h-3 text-secondary" />
        <span>Video</span>
      </div>
    </div>
  );
};
