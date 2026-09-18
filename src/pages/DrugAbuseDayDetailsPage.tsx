import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import { LazyImage } from "@/components/LazyMedia";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Dynamically import all images from social-activitiesdrug-abuse-day folder
const imageModules = import.meta.glob<{ default: string }>(
  '@/assets/social-activitiesdrug-abuse-day/*.{jpeg,jpg,png,webp}',
  { eager: true }
);

const galleryImages = Object.values(imageModules).map((module) => module.default);
const heroImage = galleryImages[0];

const DrugAbuseDayDetailsPage = () => {
  useSEO({
    title: "International Day Against Drug Abuse | Care Home Rehabilitation Kolkata",
    description: "Details about our initiatives on the International Day Against Drug Abuse and Illicit Trafficking in Garia, Kolkata.",
    keywords: "Drug Abuse Day Care Home Kolkata, Substance Abuse Awareness Garia, Care Home Social Initiatives",
    canonical: "https://www.carehomekolkata.in/social-activities/drug-abuse-day",
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="International Day Against Drug Abuse"
        subtitle="26th June Initiatives and Activities"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          
          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Our Gracious Presence</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Honoring the distinguished dignitaries who supported our anti-drug awareness initiative.
              </p>
            </div>
            
            <StaggerContainer>
              {/* Highlighted 100-word Paragraph */}
              <FadeIn direction="up">
                <div className="bg-background rounded-2xl p-8 md:p-10 shadow-lg border border-border/80 max-w-4xl mx-auto text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                    We extend our heartfelt gratitude to our distinguished guests for gracing our awareness campaign on the International Day Against Drug Abuse. We were deeply honored by the inspiring presence of{" "}
                    <span className="inline-block font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20 shadow-sm my-1">
                      Shri Debasish Dhar
                    </span>{" "}
                    (Ex-IPS, MLA, Sonarpur North), whose leadership and vision continue to motivate community reform. Our sincere thanks to{" "}
                    <span className="inline-block font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20 shadow-sm my-1">
                      Sri Prasenjit Bishnoi
                    </span>{" "}
                    (IC, Narendrapur P.S) for his steadfast commitment toward law enforcement, community safety, and youth guidance. We also express our gratitude to{" "}
                    <span className="inline-block font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20 shadow-sm my-1">
                      Smt. Pushpita Biswas
                    </span>{" "}
                    (Joint B.D.O, Sonarpur) for her dedicated administrative support and social development efforts. Their combined guidance empowers our mission to build a healthier, drug-free society.
                  </p>
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>

          <div className="w-full h-px bg-border my-16"></div>

          {/* Gallery Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">Event Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Glimpses from our awareness campaigns and community gatherings ({galleryImages.length} Photos).
              </p>
            </div>
            
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.map((img, index) => (
                  <FadeIn key={index} direction="up">
                    <div 
                      className="rounded-xl overflow-hidden shadow-md aspect-video cursor-pointer group relative hover:shadow-xl transition-all duration-300"
                      onClick={() => setLightboxIndex(index)}
                    >
                      <LazyImage 
                        src={img} 
                        alt={`Drug Abuse Day Photo ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </StaggerContainer>
          </div>
          
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:opacity-80 z-10 bg-black/50 p-2 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={galleryImages[lightboxIndex]}
            alt={`Drug Abuse Day Photo ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex > 0 ? lightboxIndex - 1 : galleryImages.length - 1
              );
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:opacity-80 bg-black/50 p-3 rounded-full"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex < galleryImages.length - 1 ? lightboxIndex + 1 : 0
              );
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-80 bg-black/50 p-3 rounded-full"
            aria-label="Next photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-full font-medium tracking-wide text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrugAbuseDayDetailsPage;
