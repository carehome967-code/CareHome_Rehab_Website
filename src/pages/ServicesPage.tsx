import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroServices from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.56.jpeg";
import { Link } from "react-router-dom";
import NewSlider from "@/pages/NewSlider";
// Service images
import counsellingImg from "@/assets/gallery-counselling.jpg";
import dailyLivingImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.15.jpeg";
import detoxificationImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.53.jpeg";
import healthyFoodsImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.35 (1).jpeg";
import housekeepingImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.51.jpeg";
import medicalMonitoringImg from "@/assets/gallery-doctor.jpg";
import socialEngagementImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.18.jpeg";

import { Heart, Activity, Droplets, MessageCircle, Utensils, Sparkles, Users } from "lucide-react";
import { Slider } from "@radix-ui/react-slider";

const services = [
  { 
    icon: Heart, 
    title: "Daily Living Assistance", 
    desc: <>Personalized support for <strong className="text-foreground">daily routines and activities</strong>, ensuring comfort and comprehensive therapeutic care for every resident throughout their <strong className="text-foreground">addiction recovery journey</strong>.</>,
    image: dailyLivingImg,
    alt: "Daily living assistance at care home"
  },
  { 
    icon: Activity, 
    title: "Medical Monitoring", 
    desc: <><strong className="text-foreground">Round-the-clock medical supervision</strong> by trained professionals, including expert psychiatrists and physicians, to ensure the absolute safety and physical well-being of all residents.</>,
    image: medicalMonitoringImg,
    alt: "Medical monitoring and supervision"
  },
  { 
    icon: Droplets, 
    title: "Detoxification Support", 
    desc: <><strong className="text-foreground">Medically supervised detoxification</strong> and expert withdrawal management using deeply integrated, evidence-based <strong className="text-foreground">clinical protocols</strong> to minimize discomfort and health risks.</>,
    image: detoxificationImg,
    alt: "Detoxification support services"
  },
  { 
    icon: MessageCircle, 
    title: "Counselling & Therapy", 
    desc: <>Intensive <strong className="text-foreground">individual and group counselling sessions</strong> meticulously conducted by our experienced clinical psychologists and empathetic behavioral therapists.</>,
    image: counsellingImg,
    alt: "Counselling and therapy session"
  },
  { 
    icon: Utensils, 
    title: "Healthy Meals", 
    desc: <>Highly nutritious and carefully balanced dietary meals prepared daily to rapidly <strong className="text-foreground">support physical recovery</strong> and restore overall holistic health.</>,
    image: healthyFoodsImg,
    alt: "Healthy nutritious meals"
  },
  { 
    icon: Sparkles, 
    title: "Housekeeping & Hygiene", 
    desc: <>Consistent, thorough <strong className="text-foreground">cleaning and facility maintenance</strong> strictly enforced to maintain a secure, deeply hygienic, and soothing living environment for the recovery mindset.</>,
    image: housekeepingImg,
    alt: "Housekeeping and hygiene services"
  },
  { 
    icon: Users, 
    title: "Social Engagement Programs", 
    desc: <><strong className="text-foreground">Community-based therapeutic activities</strong> and specialized programs structurally designed to actively promote vital social interaction and essential <strong className="text-foreground">positive lifestyle development</strong>.</>,
    image: socialEngagementImg,
    alt: "Social engagement activities"
  },
];

const ServicesPage = () => {
  useSEO({
    title: "Our Services | Care Home Recovery",
    description: "Discover our comprehensive care services for every stage of recovery, from medical monitoring to social engagement programs.",
  });

  return (
    <div>
      <HeroSection
        image={heroServices}
        title="Our Services"
        subtitle="Comprehensive medical care and therapeutic programs for every stage of recovery"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <FadeIn
                key={i}
                direction={i % 2 === 0 ? "right" : "left"}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon overlay on image */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 md:px-8 text-center md:text-left">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.desc}
                  </p>
                  
                  {/* Detailed features */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Professional <strong className="text-primary">Care</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span><strong className="text-primary">24/7</strong> Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Personalized <strong className="text-primary">Approach</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Evidence-<strong className="text-primary">Based</strong></span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
           <NewSlider />
      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up" className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Ready to Begin Your <strong className="text-primary">Recovery Journey?</strong>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed font-medium">
              Our <strong className="text-foreground">premium rehabilitation and de-addiction services</strong> are scientifically designed to support you every step of the way towards a healthier, substance-free life.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
            >
              Contact Our Experts Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;