import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroFacilities from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.13.jpeg";
import { Tv, Stethoscope, Droplets, Sparkles, Wifi, Newspaper, Fan, Zap, Users, Bath } from "lucide-react";

const facilities = [
  { icon: Tv, title: "Common TV", desc: "Entertainment facilities for residents" },
  { icon: Stethoscope, title: "Doctor's Visit", desc: "Regular medical check-ups and consultations" },
  { icon: Droplets, title: "Geyser / Water Heater", desc: "Hot water availability for comfort" },
  { icon: Sparkles, title: "Housekeeping", desc: "Regular cleaning and maintenance" },
  { icon: Wifi, title: "Internet Facility", desc: "Connectivity for approved usage" },
  { icon: Newspaper, title: "Newspapers & Magazines", desc: "Reading materials for residents" },
  { icon: Fan, title: "Non-AC Room", desc: "Comfortable ventilated rooms" },
  { icon: Zap, title: "Power Backup", desc: "Uninterrupted power supply" },
  { icon: Users, title: "Trained Attendants 24/7", desc: "Round-the-clock professional care" },
  { icon: Bath, title: "Western Toilet", desc: "Modern sanitation facilities" },
];

const FacilitiesPage = () => {
  useSEO({
    title: "Facilities | Best Care Home & Rehabilitation Centre in Garia, Kolkata",
    description: "Discover 24/7 medical supervision, hygienic rooms, power backup, and patient-first facilities at Care Home Rehabilitation Centre in Garia, Kolkata.",
    keywords: "Care Home in Garia, Rehabilitation Centre in Garia, Patient Care Centre Garia Station Road, 24 Hours Patient Care Home Kolkata, Rehab Centre near Panchpota",
    canonical: "https://www.carehomekolkata.in/facilities",
  });

  return (
    <div>
      <HeroSection
        image={heroFacilities}
        title="Rehabilitation & Patient Care Facilities in Garia, Kolkata"
        subtitle="Hygienic, secure, and supportive healing environment in South 24 Parganas"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Facilities Available</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {facilities.map((facility, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="up" className="healthcare-card p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-healthcare-light-blue flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
