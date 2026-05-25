import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroFacilities from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.05.jpeg";
import { X, Play } from "lucide-react";

// Image imports
// import galleryCounselling from "@/assets/gallery-counselling.jpg";
// import galleryDoctor from "@/assets/gallery-doctor.jpg";
// import galleryGroupSession from "@/assets/gallery-group-session.jpg";
// import galleryNaMeeting from "@/assets/gallery-na-meeting.jpg";
// import galleryTemple from "@/assets/gallery-temple.jpg";
// import gallerySession from "@/assets/gallery-session.jpg";
// import galleryAccommodation from "@/assets/gallery-accommodation.jpg";
// import galleryCelebration from "@/assets/gallery-celebration.jpg";

// WhatsApp Images (you'll need to import these)
import whatsapp1 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.45 (1).jpeg";
import whatsapp2 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.45.jpeg";
import whatsapp3 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.46.jpeg";
import whatsapp4 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.47 (1).jpeg";
import whatsapp5 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.47.jpeg";
import whatsapp6 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.48.jpeg";
import whatsapp7 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.49.jpeg";
import whatsapp8 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.50 (1).jpeg";
import whatsapp9 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.50.jpeg";
import whatsapp10 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.51.jpeg";
import whatsapp11 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.52 (1).jpeg";
import whatsapp12 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.52.jpeg";
import whatsapp13 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.53.jpeg";
import whatsapp14 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.54.jpeg";
import whatsapp15 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.55.jpeg";
import whatsapp16 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.56.jpeg";
import whatsapp17 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.57.jpeg";
import whatsapp18 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.58 (1).jpeg";
import whatsapp19 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.58.jpeg";
import whatsapp20 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.59.jpeg";
import whatsapp21 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.00.jpeg";
import whatsapp22 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.01.jpeg";
import whatsapp23 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.02.jpeg";
import whatsapp24 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.03.jpeg";
import whatsapp25 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.04.jpeg";
import whatsapp26 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.05.jpeg";
import whatsapp27 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.07.jpeg";
import whatsapp28 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.08 (1).jpeg";
import whatsapp29 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.08.jpeg";
import whatsapp30 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.09.jpeg";
import whatsapp31 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.10.jpeg";
import whatsapp32 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.11 (1).jpeg";
import whatsapp33 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.11.jpeg";
import whatsapp34 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.12.jpeg";
import whatsapp34_extra from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.13.jpeg";
import whatsapp35 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.15.jpeg";
import whatsapp36 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.16.jpeg";
import whatsapp37 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.17.jpeg";
import whatsapp38 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.18.jpeg";
import whatsapp39 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.19.jpeg";
import whatsapp40 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.20.jpeg";
import whatsapp41 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.21.jpeg";
import whatsapp42 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.22.jpeg";
import whatsapp43 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.31 (1).jpeg";
import whatsapp44 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.34.jpeg";
import whatsapp45 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.35 (1).jpeg";
import whatsapp46 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.36.jpeg";
import whatsapp47 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.37.jpeg";
import whatsapp48 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.38.jpeg";
import whatsapp49 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.39 (1).jpeg";
import whatsapp50 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.39.jpeg";
import whatsapp51 from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.40.jpeg";

// Extra Photo imports
import extraPhoto1 from "@/assets/gallery/images/Photo1.jpeg";
import extraPhoto2 from "@/assets/gallery/images/photo2.jpeg";
import extraPhoto3 from "@/assets/gallery/images/photo3.jpeg";
import extraPhoto4 from "@/assets/gallery/images/photo4.jpeg";
import extraPhoto6 from "@/assets/gallery/images/photo6.jpeg";
import extraPhoto7 from "@/assets/gallery/images/photo7.jpeg";
import extraPhoto8 from "@/assets/gallery/images/photo8.jpeg";
import extraPhoto9 from "@/assets/gallery/images/photo9.jpeg";
import extraPhoto10 from "@/assets/gallery/images/photo10.jpeg";
import extraPhoto11 from "@/assets/gallery/images/photo11.jpeg";
import extraPhoto12 from "@/assets/gallery/images/photo12.jpeg";
import extraPhoto13 from "@/assets/gallery/images/photo13.jpeg";

// Video imports
import video1 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.24.mp4";
import video2 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.25.mp4";
import video3 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.26.mp4";
import video4 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.27.mp4";
import video5 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.28.mp4";
import video6 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.29.mp4";
import video7 from "@/assets/gallery/videos/WhatsApp Video 2026-03-05 at 16.28.30.mp4";

// AnotherPhoto imports
import ap1 from "@/assets/AnotherPhoto/photo1.jpg";
import ap2 from "@/assets/AnotherPhoto/photo2.jpg";
import ap3 from "@/assets/AnotherPhoto/photo3.jpg";
import ap4 from "@/assets/AnotherPhoto/photo4.jpeg";
import ap5 from "@/assets/AnotherPhoto/photo5.jpeg";
import ap6 from "@/assets/AnotherPhoto/photo6.jpeg";
import ap7 from "@/assets/AnotherPhoto/photo7.jpeg";
import ap8 from "@/assets/AnotherPhoto/photo8.jpeg";
import apV9 from "@/assets/AnotherPhoto/photo9.mp4";

// Combine all images (including the existing ones and WhatsApp images)
const imageItems = [
  // Original images
  // { src: galleryCounselling, alt: "Counselling Session", type: "image" },
  // { src: galleryDoctor, alt: "Doctor Consultation", type: "image" },
  // { src: galleryGroupSession, alt: "Group Session", type: "image" },
  // { src: galleryNaMeeting, alt: "NA Meeting", type: "image" },
  // { src: galleryTemple, alt: "Spiritual Activity", type: "image" },
  // { src: gallerySession, alt: "Recovery Session", type: "image" },
  // { src: galleryAccommodation, alt: "Accommodation", type: "image" },
  // { src: galleryCelebration, alt: "Celebration", type: "image" },

  // WhatsApp images
  { src: whatsapp1, alt: "WhatsApp Image 1", type: "image" },
  { src: whatsapp2, alt: "WhatsApp Image 2", type: "image" },
  { src: whatsapp3, alt: "WhatsApp Image 3", type: "image" },
  { src: whatsapp4, alt: "WhatsApp Image 4", type: "image" },
  { src: whatsapp5, alt: "WhatsApp Image 5", type: "image" },
  { src: whatsapp6, alt: "WhatsApp Image 6", type: "image" },
  { src: whatsapp7, alt: "WhatsApp Image 7", type: "image" },
  { src: whatsapp8, alt: "WhatsApp Image 8", type: "image" },
  { src: whatsapp9, alt: "WhatsApp Image 9", type: "image" },
  { src: whatsapp10, alt: "WhatsApp Image 10", type: "image" },
  { src: whatsapp11, alt: "WhatsApp Image 11", type: "image" },
  { src: whatsapp12, alt: "WhatsApp Image 12", type: "image" },
  { src: whatsapp13, alt: "WhatsApp Image 13", type: "image" },
  { src: whatsapp14, alt: "WhatsApp Image 14", type: "image" },
  { src: whatsapp15, alt: "WhatsApp Image 15", type: "image" },
  { src: whatsapp16, alt: "WhatsApp Image 16", type: "image" },
  { src: whatsapp17, alt: "WhatsApp Image 17", type: "image" },
  { src: whatsapp18, alt: "WhatsApp Image 18", type: "image" },
  { src: whatsapp19, alt: "WhatsApp Image 19", type: "image" },
  { src: whatsapp20, alt: "WhatsApp Image 20", type: "image" },
  { src: whatsapp21, alt: "WhatsApp Image 21", type: "image" },
  { src: whatsapp22, alt: "WhatsApp Image 22", type: "image" },
  { src: whatsapp23, alt: "WhatsApp Image 23", type: "image" },
  { src: whatsapp24, alt: "WhatsApp Image 24", type: "image" },
  { src: whatsapp25, alt: "WhatsApp Image 25", type: "image" },
  { src: whatsapp26, alt: "WhatsApp Image 26", type: "image" },
  { src: whatsapp27, alt: "WhatsApp Image 27", type: "image" },
  { src: whatsapp28, alt: "WhatsApp Image 28", type: "image" },
  { src: whatsapp29, alt: "WhatsApp Image 29", type: "image" },
  { src: whatsapp30, alt: "WhatsApp Image 30", type: "image" },
  { src: whatsapp31, alt: "WhatsApp Image 31", type: "image" },
  { src: whatsapp32, alt: "WhatsApp Image 32", type: "image" },
  { src: whatsapp33, alt: "WhatsApp Image 33", type: "image" },
  { src: whatsapp34, alt: "WhatsApp Image 34", type: "image" },
  { src: whatsapp34_extra, alt: "WhatsApp Image 34 Extra", type: "image" },
  { src: whatsapp35, alt: "WhatsApp Image 35", type: "image" },
  { src: whatsapp36, alt: "WhatsApp Image 36", type: "image" },
  { src: whatsapp37, alt: "WhatsApp Image 37", type: "image" },
  { src: whatsapp38, alt: "WhatsApp Image 38", type: "image" },
  { src: whatsapp39, alt: "WhatsApp Image 39", type: "image" },
  { src: whatsapp40, alt: "WhatsApp Image 40", type: "image" },
  { src: whatsapp41, alt: "WhatsApp Image 41", type: "image" },
  { src: whatsapp42, alt: "WhatsApp Image 42", type: "image" },
  { src: whatsapp43, alt: "WhatsApp Image 43", type: "image" },
  { src: whatsapp44, alt: "WhatsApp Image 44", type: "image" },
  { src: whatsapp45, alt: "WhatsApp Image 45", type: "image" },
  { src: whatsapp46, alt: "WhatsApp Image 46", type: "image" },
  { src: whatsapp47, alt: "WhatsApp Image 47", type: "image" },
  { src: whatsapp48, alt: "WhatsApp Image 48", type: "image" },
  { src: whatsapp49, alt: "WhatsApp Image 49", type: "image" },
  { src: whatsapp50, alt: "WhatsApp Image 50", type: "image" },
  { src: whatsapp51, alt: "WhatsApp Image 51", type: "image" },

  // AnotherPhoto collection
  { src: ap1, alt: "Gallery Photo 1", type: "image" },
  { src: ap2, alt: "Gallery Photo 2", type: "image" },
  { src: ap3, alt: "Gallery Photo 3", type: "image" },
  { src: ap4, alt: "Gallery Photo 4", type: "image" },
  { src: ap5, alt: "Gallery Photo 5", type: "image" },
  { src: ap6, alt: "Gallery Photo 6", type: "image" },
  { src: ap7, alt: "Gallery Photo 7", type: "image" },
  { src: ap8, alt: "Gallery Photo 8", type: "image" },

  // Extra Photos from gallery directory
  { src: extraPhoto1, alt: "Gallery extra 1", type: "image" },
  { src: extraPhoto2, alt: "Gallery extra 2", type: "image" },
  { src: extraPhoto3, alt: "Gallery extra 3", type: "image" },
  { src: extraPhoto4, alt: "Gallery extra 4", type: "image" },
  { src: extraPhoto6, alt: "Gallery extra 6", type: "image" },
  { src: extraPhoto7, alt: "Gallery extra 7", type: "image" },
  { src: extraPhoto8, alt: "Gallery extra 8", type: "image" },
  { src: extraPhoto9, alt: "Gallery extra 9", type: "image" },
  { src: extraPhoto10, alt: "Gallery extra 10", type: "image" },
  { src: extraPhoto11, alt: "Gallery extra 11", type: "image" },
  { src: extraPhoto12, alt: "Gallery extra 12", type: "image" },
  { src: extraPhoto13, alt: "Gallery extra 13", type: "image" },
];

const videoItems = [
  { src: video1, alt: "WhatsApp Video 1", type: "video", poster: "" },
  { src: video2, alt: "WhatsApp Video 2", type: "video", poster: "" },
  { src: video3, alt: "WhatsApp Video 3", type: "video", poster: "" },
  { src: video4, alt: "WhatsApp Video 4", type: "video", poster: "" },
  { src: video5, alt: "WhatsApp Video 5", type: "video", poster: "" },
  { src: video6, alt: "WhatsApp Video 6", type: "video", poster: "" },
  { src: video7, alt: "WhatsApp Video 7", type: "video", poster: "" },
  { src: apV9, alt: "Gallery Video 1", type: "video", poster: "" },
];

// Combine all media
const mediaItems = [...imageItems, ...videoItems];

const GalleryPage = () => {
  useSEO({
    title: "Gallery | Care Home Recovery",
    description:
      "View our gallery to catch a glimpse into life, facilities, and care programs at Care Home Recovery.",
  });
  const [lightbox, setLightbox] = useState<{
    index: number;
    type: string;
  } | null>(null);

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
            <h2 className="text-3xl font-bold text-center mb-4">
              Our Memories
            </h2>
            <p className="text-center text-muted-foreground">
              {mediaItems.length} moments captured
            </p>
          </div>

          {/* Media Grid */}
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            delayChildren={0.1}
            staggerChildren={0.05}
          >
            {mediaItems.map((item, i) => (
              <FadeIn
                key={i}
                direction="up"
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox({ index: i, type: item.type })}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      Video
                    </div>
                  </div>
                )}
              </FadeIn>
            ))}
          </StaggerContainer>
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

          {mediaItems[lightbox.index].type === "image" ? (
            <img
              src={mediaItems[lightbox.index].src}
              alt={mediaItems[lightbox.index].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={mediaItems[lightbox.index].src}
              controls
              autoPlay
              className="max-w-full max-h-[85vh] rounded-xl"
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
                index:
                  lightbox.index > 0
                    ? lightbox.index - 1
                    : mediaItems.length - 1,
                type: mediaItems[
                  lightbox.index > 0
                    ? lightbox.index - 1
                    : mediaItems.length - 1
                ].type,
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
                index:
                  lightbox.index < mediaItems.length - 1
                    ? lightbox.index + 1
                    : 0,
                type: mediaItems[
                  lightbox.index < mediaItems.length - 1
                    ? lightbox.index + 1
                    : 0
                ].type,
              });
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-background hover:opacity-80 text-4xl"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background bg-black/50 px-4 py-2 rounded-full">
            {lightbox.index + 1} / {mediaItems.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
