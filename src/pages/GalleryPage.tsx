import { useState, useEffect, useCallback, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroFacilities from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.05.jpeg";
import {
  X,
  Play,
  Image as ImageIcon,
  Video,
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Loader2,
  Film,
} from "lucide-react";
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
import video13 from "@/assets/gallery/videos/video13.mp4";

// Therapy, Activity & Leadership Video Imports
import meditationVideo from "@/assets/gallery/videos/Meditation.mp4";
import morningPrayerVideo from "@/assets/gallery/videos/Mornning Prayer.mp4";
import pmrt1Video from "@/assets/gallery/videos/PMRT1.mp4";
import pmrt2Video from "@/assets/gallery/videos/PMRT2.mp4";

// Additional Local Video Imports
import krishnaGhosh1Video from "@/assets/gallery/videos/KrishnaGhosh1.mp4";
import krishnaGhosh2Video from "@/assets/gallery/videos/KrishnaGhosh2.mp4";
import krishnaGhosh3Video from "@/assets/gallery/videos/KrishnaGhosh3.mp4";
import paromota1Video from "@/assets/gallery/videos/Paromota1.mp4";
import priyangshuKarmakar1Video from "@/assets/gallery/videos/PriyangshuKarmakar1.mp4";
import priyangshuKarmakar2Video from "@/assets/gallery/videos/PriyangshuKarmakar2.mp4";
import saibalSanyal1Video from "@/assets/gallery/videos/Saibal Sanyal1.mp4";
import saibalSanyal2Video from "@/assets/gallery/videos/Saibal Sanyal2.mp4";
import subhjitVideo from "@/assets/gallery/videos/Subhjit.mp4";
import symonVideo from "@/assets/gallery/videos/Symon.mp4";
import unknown1Video from "@/assets/gallery/videos/Unknown1.mp4";
import unknown2Video from "@/assets/gallery/videos/Unknown2.mp4";

export interface MediaItem {
  src: string;
  poster?: string;
  alt: string;
  name?: string;
  role?: string;
  type: "image" | "video";
  className?: string;
}

// Map pre-generated video poster thumbnails via Vite's import.meta.glob
const thumbModules = import.meta.glob<string>(
  "@/assets/gallery/thumbnails/*.jpg",
  { eager: true, import: "default" }
);

const thumbMap: Record<string, string> = {};
for (const [path, url] of Object.entries(thumbModules)) {
  const filename = path.split("/").pop()?.replace(/\.jpg$/i, "").toLowerCase();
  if (filename) {
    thumbMap[filename] = url;
  }
}

const getThumb = (name: string): string | undefined => {
  return thumbMap[name.toLowerCase().trim()];
};

// Using Vite's import.meta.glob for photos
const imageModules = import.meta.glob<string>(
  [
    "@/assets/gallery/images/*.{jpeg,jpg,png,webp}",
    "@/assets/photos/*.{jpeg,jpg,png,webp}",
  ],
  { eager: true, import: "default" }
);

const dynamicPhotoItems: MediaItem[] = Object.entries(imageModules)
  .filter(([path]) => !path.includes("photo38") && !path.includes("photo39"))
  .map(([path, url], index) => ({
    src: url,
    alt: `Care Home Rehabilitation Facility & Patient Care - Photo ${index + 1}`,
    type: "image" as const,
    className: "",
  }));

const photoItems: MediaItem[] = [
  {
    src: serviceImage,
    alt: "Care Home Rehabilitation & Patient Services Facility Kolkata",
    type: "image" as const,
    className: "object-left",
  },
  {
    src: photo38,
    alt: "Care Home Rehabilitation & Patient Recovery - Photo 38",
    type: "image" as const,
    className: "",
  },
  {
    src: photo39,
    alt: "Care Home Patient Care & Nursing Facilities - Photo 39",
    type: "image" as const,
    className: "",
  },
  ...dynamicPhotoItems,
];

const videoItems: MediaItem[] = [
  // 1st Row: 4 Team Leader Videos
  {
    src: video1,
    poster: getThumb("Video1"),
    name: "Saibal Sanyal",
    role: "Founder & Recovery Coach",
    alt: "Saibal Sanyal - Care Home Founder Video",
    type: "video" as const,
  },
  {
    src: video2,
    poster: getThumb("Video2"),
    name: "Kanishka Mukherjee",
    role: "Counselor & Peer Educator",
    alt: "Kanishka Mukherjee - Counselor & Peer Educator Video",
    type: "video" as const,
  },
  {
    src: video3,
    poster: getThumb("Video3"),
    name: "Koushik Bhattacharya",
    role: "Counselor & Program Coordinator",
    alt: "Koushik Bhattacharya - Counselor & Program Coordinator Video",
    type: "video" as const,
  },
  {
    src: video4,
    poster: getThumb("Vedio4"),
    name: "Sangram Chatterjee",
    role: "Recovery & Rehabilitation Specialist",
    alt: "Sangram Chatterjee - Care Home Rehabilitation Video",
    type: "video" as const,
  },

  // 2nd Row: Activities & Therapies
  {
    src: meditationVideo,
    poster: getThumb("Meditation"),
    name: "Meditation Session",
    role: "Mindfulness & Inner Healing",
    alt: "Meditation Session Video - Care Home Kolkata",
    type: "video" as const,
  },
  {
    src: morningPrayerVideo,
    poster: getThumb("Mornning Prayer"),
    name: "Morning Prayer",
    role: "Daily Community Wellness",
    alt: "Morning Prayer Video - Care Home Kolkata",
    type: "video" as const,
  },
  {
    src: pmrt1Video,
    poster: getThumb("PMRT1"),
    name: "PMRT Session 1",
    role: "Progressive Muscle Relaxation",
    alt: "PMRT Therapy Session 1 Video - Care Home Kolkata",
    type: "video" as const,
  },
  {
    src: pmrt2Video,
    poster: getThumb("PMRT2"),
    name: "PMRT Session 2",
    role: "Relaxation & Stress Relief Therapy",
    alt: "PMRT Therapy Session 2 Video - Care Home Kolkata",
    type: "video" as const,
  },

  // Founder & Leadership Addresses
  {
    src: saibalSanyal1Video,
    poster: getThumb("Saibal Sanyal1"),
    name: "Saibal Sanyal - Address 1",
    role: "Founder's Guidance & Recovery Message",
    alt: "Saibal Sanyal Founder Speech & Guidance Video 1",
    type: "video" as const,
  },
  {
    src: saibalSanyal2Video,
    poster: getThumb("Saibal Sanyal2"),
    name: "Saibal Sanyal - Address 2",
    role: "Addiction Counseling & Motivation",
    alt: "Saibal Sanyal Founder Speech & Guidance Video 2",
    type: "video" as const,
  },

  // Resident Testimonials & Recovery Journeys
  {
    src: krishnaGhosh1Video,
    poster: getThumb("KrishnaGhosh1"),
    name: "Krishna Ghosh - Session 1",
    role: "Patient Recovery Story & Experience",
    alt: "Krishna Ghosh Recovery Story Video 1",
    type: "video" as const,
  },
  {
    src: krishnaGhosh2Video,
    poster: getThumb("KrishnaGhosh2"),
    name: "Krishna Ghosh - Session 2",
    role: "Progress & Healing Journey",
    alt: "Krishna Ghosh Recovery Story Video 2",
    type: "video" as const,
  },
  {
    src: krishnaGhosh3Video,
    poster: getThumb("KrishnaGhosh3"),
    name: "Krishna Ghosh - Session 3",
    role: "Rehabilitation & Reflection",
    alt: "Krishna Ghosh Recovery Story Video 3",
    type: "video" as const,
  },
  {
    src: priyangshuKarmakar1Video,
    poster: getThumb("PriyangshuKarmakar1"),
    name: "Priyangshu Karmakar - Part 1",
    role: "Recovery Journey & Personal Testimony",
    alt: "Priyangshu Karmakar Recovery Journey Video 1",
    type: "video" as const,
  },
  {
    src: priyangshuKarmakar2Video,
    poster: getThumb("PriyangshuKarmakar2"),
    name: "Priyangshu Karmakar - Part 2",
    role: "Rehabilitation Progress & Wellness",
    alt: "Priyangshu Karmakar Recovery Journey Video 2",
    type: "video" as const,
  },
  {
    src: paromota1Video,
    poster: getThumb("Paromota1"),
    name: "Paromita",
    role: "Therapy & Counseling Session",
    alt: "Paromita Counseling Session Video",
    type: "video" as const,
  },
  {
    src: subhjitVideo,
    poster: getThumb("Subhjit"),
    name: "Subhajit",
    role: "Resident Recovery Story",
    alt: "Subhajit Recovery Story Video",
    type: "video" as const,
  },
  {
    src: symonVideo,
    poster: getThumb("Symon"),
    name: "Symon",
    role: "Rehabilitation Experience",
    alt: "Symon Rehabilitation Experience Video",
    type: "video" as const,
  },

  // Resident Group & Community Sessions
  {
    src: unknown1Video,
    poster: getThumb("Unknown1"),
    name: "Resident Group Session 1",
    role: "Group Therapy & Community Recovery",
    alt: "Resident Group Session Video 1",
    type: "video" as const,
  },
  {
    src: unknown2Video,
    poster: getThumb("Unknown2"),
    name: "Resident Group Session 2",
    role: "Community Wellness & Activities",
    alt: "Resident Group Session Video 2",
    type: "video" as const,
  },

  // Facility & Rehabilitation Highlights
  {
    src: video5,
    poster: getThumb("Video5"),
    name: "Rehabilitation & Recovery Session",
    role: "Care Home Clinical Overview",
    alt: "Rehabilitation & Recovery Session Video",
    type: "video" as const,
  },
  {
    src: video6,
    poster: getThumb("Video6"),
    name: "Care Home Facility & Nursing Care",
    role: "24x7 Medical Supervision",
    alt: "Care Home Facility & Nursing Care Video",
    type: "video" as const,
  },
  {
    src: video7,
    poster: getThumb("Video7"),
    name: "Medical Consultation & Care",
    role: "Doctor Visits & Checkups",
    alt: "Medical Consultation & Care Video",
    type: "video" as const,
  },
  {
    src: video8,
    poster: getThumb("Video8"),
    name: "De-Addiction Support & Counseling",
    role: "12-Step Recovery & Counseling",
    alt: "De-Addiction Support & Counseling Video",
    type: "video" as const,
  },
  {
    src: video9,
    poster: getThumb("Video9"),
    name: "Counselor & Resident Interaction",
    role: "Individualized Guidance",
    alt: "Counselor & Resident Interaction Video",
    type: "video" as const,
  },
  {
    src: video10,
    poster: getThumb("Video10"),
    name: "Community Recovery & Life at Care Home",
    role: "Resident Life & Recreation",
    alt: "Community Recovery & Life at Care Home Video",
    type: "video" as const,
  },
  {
    src: video11,
    poster: getThumb("Video11"),
    name: "Daily Wellness & Nursing Supervision",
    role: "Hygienic Care & Routine",
    alt: "Daily Wellness & Nursing Supervision Video",
    type: "video" as const,
  },
  {
    src: video12,
    poster: getThumb("video12"),
    name: "Care Home Patient Recovery Highlights",
    role: "Success Stories & Hope",
    alt: "Care Home Patient Recovery Highlights Video",
    type: "video" as const,
  },
  {
    src: video13,
    poster: getThumb("video13"),
    name: "Life & Care at Care Home",
    role: "Safe & Supportive Recovery Environment",
    alt: "Life & Care at Care Home Rehabilitation Kolkata Video",
    type: "video" as const,
  },
];

const mediaItems: MediaItem[] = [...photoItems, ...videoItems];

const GalleryPage = () => {
  useSEO({
    title: "Gallery | Care Home Rehabilitation Centre Garia, Kolkata",
    description:
      "Photos and videos of Care Home Rehabilitation Centre in Garia, Kolkata: Detoxification rooms, De Addiction counseling sessions, Old age / Retirement Home facilities, and medical care.",
    keywords:
      "Care Home Gallery Kolkata, Detoxification Centre Photos, De Addiction Facility Photos, Old age Retirement Home Kolkata, Rehabilitation Video Kolkata",
    canonical: "https://www.carehomekolkata.in/gallery",
  });

  const [lightbox, setLightbox] = useState<{
    index: number;
    type: "image" | "video";
    items: MediaItem[];
  } | null>(null);

  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [visiblePhotoCount, setVisiblePhotoCount] = useState<number>(12);
  const [visibleVideoCount, setVisibleVideoCount] = useState<number>(12);
  const [isVideoBuffering, setIsVideoBuffering] = useState<boolean>(false);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const displayedPhotos = photoItems.slice(0, visiblePhotoCount);
  const displayedVideos = videoItems.slice(0, visibleVideoCount);

  // Navigate lightbox items
  const handlePrev = useCallback(() => {
    if (!lightbox) return;
    setIsVideoBuffering(false);
    setLightbox((prev) => {
      if (!prev) return null;
      const newIndex =
        prev.index > 0 ? prev.index - 1 : prev.items.length - 1;
      return { ...prev, index: newIndex };
    });
  }, [lightbox]);

  const handleNext = useCallback(() => {
    if (!lightbox) return;
    setIsVideoBuffering(false);
    setLightbox((prev) => {
      if (!prev) return null;
      const newIndex =
        prev.index < prev.items.length - 1 ? prev.index + 1 : 0;
      return { ...prev, index: newIndex };
    });
  }, [lightbox]);

  const handleClose = useCallback(() => {
    setLightbox(null);
    setIsVideoBuffering(false);
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!lightbox) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightbox, handleClose, handlePrev, handleNext]);

  // Touch swipe listeners
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentMedia = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        image={heroFacilities}
        title="Gallery"
        subtitle="A glimpse into life at CARE HOME"
      />

      <section className="py-20 md:py-24 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Filter/Section Headers */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground tracking-tight font-heading">
              Our Memories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              Explore {mediaItems.length} beautifully captured moments of life,
              care, and recovery at our facilities.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                {
                  id: "all",
                  label: `All Photos & Videos (${mediaItems.length})`,
                  icon: Layers,
                },
                {
                  id: "image",
                  label: `Only Photos (${photoItems.length})`,
                  icon: ImageIcon,
                },
                {
                  id: "video",
                  label: `Only Videos (${videoItems.length})`,
                  icon: Video,
                },
              ].map((f) => {
                const Icon = f.icon;
                const isActive = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id as any)}
                    className={cn(
                      "flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-sm transition-all duration-300 border shadow-sm",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                        : "bg-background/80 text-muted-foreground border-border/70 hover:bg-muted hover:text-foreground hover:border-border"
                    )}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Videos Section */}
          {(filter === "all" || filter === "video") && videoItems.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                      Videos
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Interviews, therapy walkthroughs, and recovery milestones ({videoItems.length} videos)
                    </p>
                  </div>
                </div>
              </div>

              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                delayChildren={0.08}
                staggerChildren={0.04}
              >
                {displayedVideos.map((item, i) => (
                  <FadeIn
                    key={i}
                    direction="up"
                    className="rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-300 bg-card border border-border/60 flex flex-col justify-between hover:-translate-y-1"
                    onClick={() =>
                      setLightbox({
                        index: i,
                        type: "video",
                        items: videoItems,
                      })
                    }
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-muted">
                      <LazyVideo
                        src={item.src}
                        poster={item.poster}
                        className="w-full h-full object-cover"
                        enableHoverPreview={true}
                      />
                    </div>

                    {/* Meta Info */}
                    {item.name && (
                      <div className="p-3.5 bg-card/95 border-t border-border/50 text-center flex flex-col justify-center flex-grow">
                        <p className="font-heading font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">
                          {item.name}
                        </p>
                        {item.role && (
                          <p className="text-xs text-muted-foreground mt-1 font-medium leading-tight line-clamp-1">
                            {item.role}
                          </p>
                        )}
                      </div>
                    )}
                  </FadeIn>
                ))}
              </StaggerContainer>

              {visibleVideoCount < videoItems.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() =>
                      setVisibleVideoCount((prev) =>
                        Math.min(prev + 12, videoItems.length)
                      )
                    }
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <Film className="w-4 h-4" />
                    <span>
                      Load More Videos ({videoItems.length - visibleVideoCount}{" "}
                      remaining)
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Photos Section */}
          {(filter === "all" || filter === "image") && photoItems.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                      Photos
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Campus, medical facilities, activities & life at Care Home ({photoItems.length} photos)
                    </p>
                  </div>
                </div>
              </div>

              <StaggerContainer
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                delayChildren={0.08}
                staggerChildren={0.04}
              >
                {displayedPhotos.map((item, i) => (
                  <FadeIn
                    key={i}
                    direction="up"
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-300 bg-card border border-border/50 hover:-translate-y-1"
                    onClick={() =>
                      setLightbox({
                        index: i,
                        type: "image",
                        items: photoItems,
                      })
                    }
                  >
                    <LazyImage
                      src={item.src}
                      alt={item.alt}
                      className={cn(
                        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                        item.className
                      )}
                    />
                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </StaggerContainer>

              {visiblePhotoCount < photoItems.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() =>
                      setVisiblePhotoCount((prev) =>
                        Math.min(prev + 12, photoItems.length)
                      )
                    }
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>
                      Load More Photos ({photoItems.length - visiblePhotoCount}{" "}
                      remaining)
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {lightbox !== null && currentMedia && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={handleClose}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Bar with Info & Close Button */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-30 pointer-events-auto bg-gradient-to-b from-black/80 via-black/40 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 mr-4">
              {currentMedia.name ? (
                <div>
                  <h3 className="text-lg sm:text-2xl font-heading font-bold text-white drop-shadow leading-tight">
                    {currentMedia.name}
                  </h3>
                  {currentMedia.role && (
                    <p className="text-xs sm:text-sm text-white/80 font-medium drop-shadow mt-0.5">
                      {currentMedia.role}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-white/70 line-clamp-1 max-w-xl">
                  {currentMedia.alt}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Counter Badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                {currentMedia.type === "video" ? (
                  <Film className="w-3.5 h-3.5 text-secondary" />
                ) : (
                  <ImageIcon className="w-3.5 h-3.5 text-secondary" />
                )}
                <span>
                  {lightbox.index + 1} / {lightbox.items.length}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Media Center Viewport */}
          <div
            className="relative max-w-5xl w-full flex items-center justify-center z-10 p-2 sm:p-4 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {currentMedia.type === "image" ? (
              <img
                key={currentMedia.src}
                src={currentMedia.src}
                alt={currentMedia.alt}
                className="max-w-full max-h-[75vh] md:max-h-[80vh] rounded-2xl object-contain shadow-2xl transition-all duration-300 animate-in zoom-in-95 duration-200"
              />
            ) : (
              <div className="relative w-full max-h-[75vh] md:max-h-[80vh] flex items-center justify-center">
                {isVideoBuffering && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] rounded-2xl z-20 pointer-events-none">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  </div>
                )}
                <video
                  key={currentMedia.src}
                  src={currentMedia.src}
                  poster={currentMedia.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] w-auto rounded-2xl shadow-2xl bg-black border border-white/10"
                  onWaiting={() => setIsVideoBuffering(true)}
                  onPlaying={() => setIsVideoBuffering(false)}
                  onCanPlay={() => setIsVideoBuffering(false)}
                >
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous item"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next item"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 active:scale-95 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Bottom Bar Hints */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black/60 backdrop-blur-md border border-white/15 text-white/90 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-lg">
              <span className="sm:hidden">
                {lightbox.index + 1} / {lightbox.items.length} • Swipe to navigate
              </span>
              <span className="hidden sm:inline">
                Use ← → keys to navigate • Esc or click outside to close
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
