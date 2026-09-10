import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HomeHeroSectionProps {
  images: string[];
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const HomeHeroSection = ({ images, title, subtitle, children }: HomeHeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 4 seconds (image visible for ~4s, crossfade ~1.5s)
  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* High-priority pre-fetch for LCP (1st slide only) */}
      <div className="hidden" aria-hidden="true">
        <img src={images[0]} alt="" fetchPriority="high" loading="eager" decoding="async" />
      </div>

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt=""
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              i === currentIndex ? "w-8 bg-primary" : "w-2 bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-24 text-left max-w-5xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/40 text-background px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" aria-hidden="true" />
          Trusted De-Addiction & Rehab Centre Since 2022
        </motion.div>

        {/* Animated Title — word-by-word reveal */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-secondary leading-tight mb-6 overflow-hidden">
          {/* Split words and animate each one */}
          {title.split(" ").map((word, i) => {
            // Highlight keywords in white for contrast against yellow title
            const highlighted = ["Care", "Recovery", "Structured"].includes(word);
            return (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <motion.span
                  className={`inline-block ${highlighted ? "text-background drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" : ""}`}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.3 + i * 0.09,
                    ease: [0.33, 1, 0.68, 1], // cubic-bezier easeOutCubic
                  }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base sm:text-lg md:text-xl text-primary font-bold max-w-2xl mb-10 leading-relaxed bg-background/20 backdrop-blur-sm border border-background/40 p-6 rounded-xl shadow-lg shadow-black/20"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {children}
          </motion.div>
        )}

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 md:mt-14 flex flex-wrap gap-6 md:gap-8"
        >
          {[
            { value: "125+", label: "Families Helped" },
            { value: "24/7", label: "Medical Support" },
            { value: "3+", label: "Years of Service" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-bold text-secondary drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{stat.value}</span>
              <span className="text-white/80 text-sm font-medium drop-shadow-md">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
