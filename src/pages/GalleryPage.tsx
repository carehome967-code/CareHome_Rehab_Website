import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroFacilities from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.05.jpeg";
import { X, Play, Image as ImageIcon, Video, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { LazyImage, LazyVideo } from "@/components/LazyMedia";

import serviceImage from "@/assets/ServiceImage.jpeg";
import photo38 from "@/assets/photos/photo38.jpeg";
import photo39 from "@/assets/photos/photo39.jpeg";

// Video Imports for explicit ordering & names
import video1 from "@/assets/gallery/videos/Video1.mp4";
import video2 from "@/assets/gallery/videos/Video2.mp4";
import video3 from "@/assets/gallery/videos/Video3.mp4";
import video4 from "@/assets/gallery/videos/Vedio4.mp4";
import video5 from "@/assets/gallery/videos/Video5.mp4";
import video6 from "@/assets/gallery/videos/Video6.mp4";
import video7 from "@/assets/gallery/videos/Video7.mp4";
import video8 from "@/assets/gallery/videos/Video8.mp4";
import video9 from "@/assets/gallery/videos/Video9.mp4";
import video10 from "@/assets/gallery/videos/Video10.mp4";
import video11 from "@/assets/gallery/videos/Video11.mp4";
import video12 from "@/assets/gallery/videos/video12.mp4";

// New Videos Imports
import meditationVideo from "@/assets/gallery/videos/Meditation.mp4";
import morningPrayerVideo from "@/assets/gallery/videos/Mornning Prayer.mp4";
import pmrt1Video from "@/assets/gallery/videos/PMRT1.mp4";
import pmrt2Video from "@/assets/gallery/videos/PMRT2.mp4";

export interface MediaItem {
  src: string;
  alt: string;
  name?: string;
  role?: string;
  type: "image" | "video";
  className?: string;
}

// Using Vite's import.meta.glob with import: 'default' for photos
const imageModules = import.meta.glob<string>([
  '@/assets/gallery/images/*.{jpeg,jpg,png,webp}',
  '@/assets/photos/*.{jpeg,jpg,png,webp}'
], { eager: true, import: 'default' });

const dynamicPhotoItems: MediaItem[] = Object.entries(imageModules)
  .filter(([path]) => !path.includes("photo38") && !path.includes("photo39"))
  .map(([path, url], index) => ({
    src: url,
    alt: `Gallery Photo ${index + 1}`,
    type: "image" as const,
    className: ""
  }));

const photoItems: MediaItem[] = [
  {
    src: serviceImage,
    alt: "Care Home Rehabilitation & Patient Services Facility Kolkata",
    type: "image" as const,
    className: "object-left"
  },
  {
    src: photo38,
    alt: "Care Home Rehabilitation & Patient Recovery - Photo 38",
    type: "image" as const,
    className: ""
  },
  {
    src: photo39,
    alt: "Care Home Patient Care & Nursing Facilities - Photo 39",
    type: "image" as const,
    className: ""
  },
  ...dynamicPhotoItems
];

const videoItems: MediaItem[] = [
  // 1st Row: 4 Team Leader Videos
  {
    src: video1,
    name: "Saibal Sanyal",
    role: "Founder & Recovery Coach",
    alt: "Saibal Sanyal - Care Home Founder Video",
    type: "video" as const,
  },
  {
    src: video2,
    name: "Kanishka Mukherjee",
    role: "Counselor & Peer Educator",
    alt: "Kanishka Mukherjee - Counselor & Peer Educator Video",
    type: "video" as const,
  },
  {
    src: video3,
    name: "Koushik Bhattacharya",
    role: "Counselor & Program Coordinator",
    alt: "Koushik Bhattacharya - Counselor & Program Coordinator Video",
    type: "video" as const,
  },
  {
    src: video4,
    name: "Sangram Chatterjee",
    role: "Recovery & Rehabilitation Specialist",
    alt: "Sangram Chatterjee - Care Home Rehabilitation Video",
    type: "video" as const,
  },

  // 2nd Row: 4 New Videos (Activities & Therapies)
  {
    src: meditationVideo,
    name: "Meditation Session",
    role: "Mindfulness & Inner Healing",
    alt: "Meditation Session Video - Care Home Kolkata",
    type: "video" as const,
  },
  {
    src: morningPrayerVideo,
    name: "Morning Prayer",
    role: "Daily Community Wellness",
    alt: "Morning Prayer Video - Care Home Kolkata",
    type: "video" as const,
  },
  {
    src: pmrt1Video,
    name: "PMRT Session 1",
    role: "Progressive Muscle Relaxation",
    alt: "PMRT Therapy Session 1 Video - Care Home Kolkata",
    type: "video" as const,
  },
  {
    src: pmrt2Video,
    name: "PMRT Session 2",
    role: "Relaxation & Stress Relief Therapy",
    alt: "PMRT Therapy Session 2 Video - Care Home Kolkata",
    type: "video" as const,
  },

  // Remaining Videos
  {
    src: video5,
    name: "Rehabilitation & Recovery Session",
    alt: "Rehabilitation & Recovery Session Video",
    type: "video" as const,
  },
  {
    src: video6,
    name: "Care Home Facility & Nursing Care",
    alt: "Care Home Facility & Nursing Care Video",
    type: "video" as const,
  },
  {
    src: video7,
    name: "Medical Consultation & Care",
    alt: "Medical Consultation & Care Video",
    type: "video" as const,
  },
  {
    src: video8,
    name: "De-Addiction Support & Counseling",
    alt: "De-Addiction Support & Counseling Video",
    type: "video" as const,
  },
  {
    src: video9,
    name: "Counselor & Resident Interaction",
    alt: "Counselor & Resident Interaction Video",
    type: "video" as const,
  },
  {
    src: video10,
    name: "Community Recovery & Life at Care Home",
    alt: "Community Recovery & Life at Care Home Video",
    type: "video" as const,
  },
  {
    src: video11,
    name: "Daily Wellness & Nursing Supervision",
    alt: "Daily Wellness & Nursing Supervision Video",
    type: "video" as const,
  },
  {
    src: video12,
    name: "Care Home Patient Recovery Highlights",
    alt: "Care Home Patient Recovery Highlights Video",
    type: "video" as const,
  },
];

const mediaItems: MediaItem[] = [...photoItems, ...videoItems];

const GalleryPage = () => {
  useSEO({
    title: "Gallery | Care Home Rehabilitation Centre Garia, Kolkata",
    description: "Photos and videos of Care Home Rehabilitation Centre in Garia, Kolkata: Detoxification rooms, De Addiction counseling sessions, Old age / Retirement Home facilities, and medical care.",
    keywords: "Care Home Gallery Kolkata, Detoxification Centre Photos, De Addiction Facility Photos, Old age Retirement Home Kolkata, Rehabilitation Video Kolkata",
    canonical: "https://www.carehomekolkata.in/gallery",
  });
  
  const [lightbox, setLightbox] = useState<{
    index: number;
    type: string;
    items: typeof mediaItems;
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
                      className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", item.className)}
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
                    className="rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-500 bg-background border border-border/60 flex flex-col justify-between"
                    onClick={() => setLightbox({ index: i, type: 'video', items: videoItems })}
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-muted">
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
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md">
                        Video
                      </div>
                    </div>
                    {item.name && (
                      <div className="p-3 bg-card border-t border-border/40 text-center">
                        <p className="font-heading font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                          {item.name}
                        </p>
                        {item.role && (
                          <p className="text-xs text-muted-foreground mt-0.5 font-medium leading-tight">
                            {item.role}
                          </p>
                        )}
                      </div>
                    )}
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
          className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4 flex-col"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-background hover:opacity-80 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {lightbox.items[lightbox.index].name && (
            <div className="text-center mb-4 text-background z-10">
              <h3 className="text-xl md:text-2xl font-heading font-bold">{lightbox.items[lightbox.index].name}</h3>
              {lightbox.items[lightbox.index].role && (
                <p className="text-sm text-background/80 font-medium">{lightbox.items[lightbox.index].role}</p>
              )}
            </div>
          )}

          {lightbox.items[lightbox.index].type === "image" ? (
            <img
              src={lightbox.items[lightbox.index].src}
              alt={lightbox.items[lightbox.index].alt}
              className="max-w-full max-h-[75vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={lightbox.items[lightbox.index].src}
              controls
              autoPlay
              className="max-w-full max-h-[75vh] rounded-xl shadow-2xl"
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
