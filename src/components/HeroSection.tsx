interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const HeroSection = ({ image, title, subtitle, children }: HeroSectionProps) => {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 pb-16 md:pt-36 md:pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-base sm:text-lg md:text-xl text-primary font-bold max-w-3xl mx-auto mb-8 animate-fade-in-up leading-relaxed bg-background/20 backdrop-blur-sm border border-background/40 p-6 rounded-xl shadow-lg shadow-black/20"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
