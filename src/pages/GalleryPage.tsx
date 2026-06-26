import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroFacilities from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.05.jpeg";
import { X, Play, Image as ImageIcon, Video, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { LazyImage, LazyVideo } from "@/components/LazyMedia";

// Using Vite's import.meta.glob to load all media dynamically
const imageModules = import.meta.glob<{ default: string }>([
  '@/assets/gallery/images/*.{jpeg,jpg,png,webp}',
  '@/assets/photos/*.{jpeg,jpg,png,webp}'
], { eager: true });

const videoModules = import.meta.glob<{ default: string }>([
  '@/assets/gallery/videos/*.{mp4,webm,ogg}',
  '@/assets/photos/*.{mp4,webm,ogg}'
], { eager: true });

const photoItems = Object.entries(imageModules).map(([path, module], index) => ({
  src: module.default,
  alt: `Gallery Photo ${index + 1}`,
  type: "image"
}));

const videoItems = Object.entries(videoModules).map(([path, module], index) => ({
  src: module.default,
  alt: `Gallery Video ${index + 1}`,
  type: "video"
}));

const mediaItems = [...photoItems, ...videoItems];

const GalleryPage = () => {
  useSEO({
    title: "Gallery | Care Home Recovery",
    description:
      "View our gallery to catch a glimpse into life, facilities, and care programs at Care Home Recovery.",
  });
  
  const [lightbox, setLightbox] = useState<{
    index: number;
    type: string;
    items: typeof mediaItems; // We pass the array context to the lightbox so it knows which array we're viewing
  } | null>(null);

  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  return (
    <div>
      <HeroSection
        image={heroFacilities}
        title="Gallery"
        subtitle="A glimpse into life at CARE HOME"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          {/* Filter/Section Headers */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-foreground/90 tracking-tight">
              Our Memories
            </h2>
            <p className="text-center text-muted-foreground/80 max-w-xl mx-auto text-lg mb-8">
              Explore {mediaItems.length} beautifully captured moments of life, care, and recovery at our facilities.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: 'all', label: 'All Photos & Videos', icon: Layers },
                { id: 'image', label: 'Only Photos', icon: ImageIcon },
                { id: 'video', label: 'Only Videos', icon: Video },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id as any)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border",
                      filter === f.id
                        ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                        : "bg-background/50 text-muted-foreground border-border/50 hover:bg-muted hover:text-foreground hover:shadow-md"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photos Section */}
          {(filter === 'all' || filter === 'image') && photoItems.length > 0 && (
            <div className="mb-16">
              {filter === 'all' && (
                <div className="flex items-center gap-3 mb-8">
                  <ImageIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Photos</h3>
                </div>
              )}
              <StaggerContainer
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                delayChildren={0.1}
                staggerChildren={0.05}
              >
                {photoItems.map((item, i) => (
                  <FadeIn
                    key={i}
                    direction="up"
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-500"
                    onClick={() => setLightbox({ index: i, type: 'image', items: photoItems })}
                  >
                    <LazyImage
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </FadeIn>
                ))}
              </StaggerContainer>
            </div>
          )}

          {/* Videos Section */}
          {(filter === 'all' || filter === 'video') && videoItems.length > 0 && (
            <div>
              {filter === 'all' && (
                <div className="flex items-center gap-3 mb-8">
                  <Video className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Videos</h3>
                </div>
              )}
              <StaggerContainer
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                delayChildren={0.1}
                staggerChildren={0.05}
              >
                {videoItems.map((item, i) => (
                  <FadeIn
                    key={i}
                    direction="up"
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-500"
                    onClick={() => setLightbox({ index: i, type: 'video', items: videoItems })}
                  >
                    <div className="relative w-full h-full">
                      <LazyVideo
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        onMouseEnter={(e: React.MouseEvent<HTMLVideoElement>) => e.currentTarget.play()}
                        onMouseLeave={(e: React.MouseEvent<HTMLVideoElement>) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        Video
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-background hover:opacity-80 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {lightbox.items[lightbox.index].type === "image" ? (
            <img
              src={lightbox.items[lightbox.index].src}
              alt={lightbox.items[lightbox.index].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={lightbox.items[lightbox.index].src}
              controls
              autoPlay
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              Your browser does not support the video tag.
            </video>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({
                ...lightbox,
                index:
                  lightbox.index > 0
                    ? lightbox.index - 1
                    : lightbox.items.length - 1,
              });
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-background hover:opacity-80 text-4xl"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({
                ...lightbox,
                index:
                  lightbox.index < lightbox.items.length - 1
                    ? lightbox.index + 1
                    : 0,
              });
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-background hover:opacity-80 text-4xl"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background bg-black/50 px-4 py-2 rounded-full font-medium tracking-wide">
            {lightbox.index + 1} / {lightbox.items.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
