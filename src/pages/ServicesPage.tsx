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
import healthyFoodsImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.34.jpeg";
import housekeepingImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.51.jpeg";
import medicalMonitoringImg from "@/assets/gallery-doctor.jpg";
import socialEngagementImg from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.18.jpeg";

import { Heart, Activity, Droplets, MessageCircle, Utensils, Sparkles, Users } from "lucide-react";
import { Slider } from "@radix-ui/react-slider";

const services = [
  { 
    icon: Heart, 
    title: "Stroke Rehabilitation & Physiotherapy", 
    desc: <>Advanced <strong className="text-foreground">stroke recovery programs & daily physiotherapy</strong> conducted by experienced physiotherapists in Kolkata to restore motor skills, mobility, and speech for post-stroke patients.</>,
    image: dailyLivingImg,
    alt: "Stroke Rehabilitation Centre Kolkata & Physiotherapy in Garia"
  },
  { 
    icon: Activity, 
    title: "24/7 Medical & Bedridden Patient Care", 
    desc: <><strong className="text-foreground">Round-the-clock nursing supervision</strong> by trained doctors and staff for bedridden, post-operative, and long-term care patients in Garia, Kolkata.</>,
    image: medicalMonitoringImg,
    alt: "24 Hours Bedridden Patient Care Home Kolkata"
  },
  { 
    icon: Users, 
    title: "Elder Care & Senior Citizen Living", 
    desc: <>Compassionate <strong className="text-foreground">elderly care and old age care home services</strong> in South Kolkata providing structured routines, nutritious meals, and medical monitoring.</>,
    image: socialEngagementImg,
    alt: "Elder Care Home Kolkata & Senior Citizen Rehabilitation"
  },
  { 
    icon: Droplets, 
    title: "Post-Surgery & Orthopedic Rehabilitation", 
    desc: <><strong className="text-foreground">Post-hospital recovery care</strong> and joint replacement rehabilitation tailored for rapid healing in a safe, hygienic environment.</>,
    image: detoxificationImg,
    alt: "Post Surgery Rehabilitation Kolkata"
  },
  { 
    icon: MessageCircle, 
    title: "Dementia & Alzheimer's Care", 
    desc: <>Specialized cognitive therapy and compassionate memory care for individuals suffering from <strong className="text-foreground">Dementia and Alzheimer's disease</strong>.</>,
    image: counsellingImg,
    alt: "Dementia Care Home Kolkata"
  },
  { 
    icon: Utensils, 
    title: "Nutritious Diet & Palliative Support", 
    desc: <>Customized dietary plans and <strong className="text-foreground">palliative care</strong> for chronic conditions to support physical healing and pain management.</>,
    image: healthyFoodsImg,
    alt: "Palliative Care Centre Kolkata"
  },
  { 
    icon: Sparkles, 
    title: "De-Addiction & Medically Supervised Recovery", 
    desc: <><strong className="text-foreground">Medically supervised detoxification</strong> and 12-Step recovery counseling for substance use disorders in Kolkata.</>,
    image: housekeepingImg,
    alt: "Rehabilitation Centre in Kolkata - De-Addiction Services"
  },
];

const ServicesPage = () => {
  useSEO({
    title: "Rehabilitation Services in Kolkata | Stroke, Elder & Physiotherapy in Garia",
    description: "Explore comprehensive medical rehabilitation services at Care Home in Garia, Kolkata: Stroke recovery, physiotherapy, post-surgery rehab, dementia care, and 24/7 patient care.",
    keywords: "Stroke Rehabilitation Centre Kolkata, Physiotherapy Rehabilitation Centre Kolkata, Elder Care Home Kolkata, Post Surgery Rehabilitation Kolkata, Dementia Care Home Kolkata, Palliative Care Centre Kolkata, 24 Hours Patient Care Home Kolkata, Rehabilitation Centre in Garia",
    canonical: "https://www.carehomekolkata.in/services",
  });

  return (
    <div>
      <HeroSection
        image={heroServices}
        title="Comprehensive Rehabilitation Services in Garia, Kolkata"
        subtitle="Dedicated 24/7 medical care, stroke recovery, elder care, and physiotherapy programs in South 24 Parganas"
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