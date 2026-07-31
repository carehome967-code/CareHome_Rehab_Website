import HomeHeroSection from "@/components/HomeHeroSection";
import HeroSection from "@/components/HeroSection";
import { useCountUp } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroHome1 from "@/assets/photos/Photo0.jpeg";
import heroHome2 from "@/assets/photos/Photo2.jpeg";
import heroHome3 from "@/assets/photos/photo8.jpeg";
import heroHome4 from "@/assets/photos/Photo19.jpeg";
import heroAbout from "@/assets/gallery-group-session.jpg";
import parallaxAddiction from "@/assets/gallery-doctor.jpg";
import founderSaibal from "@/assets/founder-saibal-home.jpeg";
import founderSoumya from "@/assets/founder-soumya-home.jpg";
import teamFull from "@/assets/team-full.jpg";
import socialreintegration from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.47.jpeg";
import medicalcare from "@/assets/gallery-doctor.jpg";
import counselling from "@/assets/gallery-na-meeting.jpg";
import detoxification from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.40.jpeg";
import {
  Heart,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CounterItem = ({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const HomePage = () => {
  useSEO({
    title: "Care Home Rehabilitation | Best Rehabilitation Centre in Garia, Kolkata | 24x7 Patient & Elder Care",
    description: "Care Home Rehabilitation in Garia, Kolkata offers 24x7 nursing care, stroke rehabilitation, elderly care, physiotherapy, post-operative recovery, dementia care, and long-term patient care in a safe and compassionate environment.",
    keywords: "Rehabilitation Centre in Kolkata, Care Home Rehabilitation Kolkata, Rehabilitation Centre in Garia, Care Home Kolkata, Patient Care Home Kolkata, Elder Care Home Kolkata, Stroke Rehabilitation Centre Kolkata, Physiotherapy Rehabilitation Centre Kolkata, 24x7 Nursing Care Kolkata, Senior Citizen Care Home Kolkata, Post Surgery Rehabilitation Kolkata, Dementia Care Home Kolkata, Bedridden Patient Care Home Kolkata, Care Home near Garia Station, Rehab Centre near Panchpota",
    canonical: "https://www.carehomekolkata.in/",
  });

  return (
    <div>
      {/* Hero Slideshow */}
      <HomeHeroSection
        images={[heroHome1, heroHome2, heroHome3, heroHome4]}
        title="Best Care Home Rehabilitation Centre in Garia, Kolkata"
        subtitle="Premier 24x7 Patient Care Home & Rehabilitation Centre in Kolkata specializing in stroke recovery, elder care, physiotherapy, dementia care, and de-addiction rehabilitation in South 24 Parganas."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:7980611010"
            aria-label="Call Care Home Rehabilitation Centre Kolkata at 7980611010"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-400 text-secondary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-yellow-400/30 active:scale-95"
          >
            Call 7980611010 Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm text-background border border-background/40 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-background/30 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </HomeHeroSection>

      {/* Counter Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterItem end={125} suffix="+" label="Families Supported in Kolkata" />
            <CounterItem end={24} suffix="/7" label="Medical & Nursing Care" />
            <CounterItem end={15} suffix="+" label="Specialized Medical Experts" />
            <CounterItem end={10} suffix="+" label="Rehabilitation Programs" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn direction="left">
              <img
                src={heroAbout}
                alt="Rehabilitation Centre in Kolkata - Care Home Facility in Garia"
                width="800"
                height="600"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
              />
              {/* Founder photos */}
              <div className="flex gap-6 mt-8 justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mx-auto mb-2">
                    <img
                      src={founderSaibal}
                      alt="Saibal Sanyal - Care Home Founder & Recovery Coach Kolkata"
                      width="96"
                      height="96"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="text-sm font-semibold">Saibal Sanyal</p>
                  <p className="text-xs text-muted-foreground">
                    Founder & Recovery Coach
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mx-auto mb-2">
                    <img
                      src={founderSoumya}
                      alt="Soumya Suvra Sengupta - Co-Founder Care Home Garia Kolkata"
                      width="96"
                      height="96"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="text-sm font-semibold">Soumya Suvra Sengupta</p>
                  <p className="text-xs text-muted-foreground">Co-Founder</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Leading Care Home in Kolkata
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
                Top Rated Rehabilitation Centre in Garia, Kolkata
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>CARE HOME Rehabilitation Centre</strong> is a premier medical care home located at Panchpota Dhalai Bridge near Gomkol Bus Stop on Garia Station Road, Kolkata. Since 2022, we have delivered compassionate elder care, 24/7 nursing care, stroke rehabilitation, and comprehensive patient care services for families across Kolkata and South 24 Parganas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our facility offers specialized stroke recovery, post-operative rehabilitation, dementia care, and bedridden patient care under round-the-clock medical supervision by experienced doctors, physiotherapists, and nurses.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Our Rehab Centre <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview with Images */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down" className="text-secondary font-semibold text-sm uppercase tracking-wider block">
            Specialized Medical & Rehab Services
          </FadeIn>
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-12">
              Comprehensive Care Home Rehabilitation Services in Kolkata
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stroke & Physiotherapy Rehab */}
            <div className="healthcare-card snake-border-card p-8 text-center group z-0">
              <div className="relative w-full h-48 -mt-12 mb-4 overflow-hidden rounded-xl">
                <img
                  src={detoxification}
                  alt="Stroke Rehabilitation Centre Kolkata & Physiotherapy"
                  width="400"
                  height="192"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-healthcare-light-blue flex items-center justify-center mx-auto mb-6 -mt-8 relative z-10 border-4 border-card">
                <Heart aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Stroke Rehabilitation & Physiotherapy
              </h3>
              <p className="text-muted-foreground text-sm">
                Advanced stroke recovery programs & daily physiotherapy rehabilitation in South Kolkata.
              </p>
            </div>

            {/* Elder & Patient Care Home */}
            <div className="healthcare-card snake-border-card p-8 text-center group z-0">
              <div className="relative w-full h-48 -mt-12 mb-4 overflow-hidden rounded-xl">
                <img
                  src={counselling}
                  alt="Elder Care Home & Senior Citizen Rehabilitation Kolkata"
                  width="400"
                  height="192"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-healthcare-light-blue flex items-center justify-center mx-auto mb-6 -mt-8 relative z-10 border-4 border-card">
                <Users aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Elder Care & Senior Citizen Care Home
              </h3>
              <p className="text-muted-foreground text-sm">
                Home-like long-term residential nursing & elder care home in Garia, Kolkata.
              </p>
            </div>

            {/* 24/7 Medical Nursing Care */}
            <div className="healthcare-card snake-border-card p-8 text-center group z-0">
              <div className="relative w-full h-48 -mt-12 mb-4 overflow-hidden rounded-xl">
                <img
                  src={medicalcare}
                  alt="24 Hours Bedridden Patient Care Home Kolkata"
                  width="400"
                  height="192"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-healthcare-light-blue flex items-center justify-center mx-auto mb-6 -mt-8 relative z-10 border-4 border-card">
                <Clock aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                24/7 Patient Care & Nursing
              </h3>
              <p className="text-muted-foreground text-sm">
                Round-the-clock medical monitoring for bedridden and post-operative patients.
              </p>
            </div>

            {/* Dementia & Post-Surgery Recovery */}
            <div className="healthcare-card snake-border-card p-8 text-center group z-0">
              <div className="relative w-full h-48 -mt-12 mb-4 overflow-hidden rounded-xl">
                <img
                  src={socialreintegration}
                  alt="Dementia Care Home & Post Surgery Rehabilitation Kolkata"
                  width="400"
                  height="192"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-healthcare-light-blue flex items-center justify-center mx-auto mb-6 -mt-8 relative z-10 border-4 border-card">
                <Award aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Dementia & Post-Surgery Care
              </h3>
              <p className="text-muted-foreground text-sm">
                Specialized Alzheimer's, dementia care, and post-hospital recovery in Kolkata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Awareness Parallax */}
      <section
        className="parallax-bg py-32 relative"
        style={{ backgroundImage: `url(${parallaxAddiction})` }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-background mb-8">
              De-Addiction & Medical Rehabilitation in Kolkata
            </h2>
            <p className="text-background/90 text-lg leading-relaxed mb-6">
              Substance dependence and severe medical conditions require structured, empathetic, and evidence-based rehabilitation. CARE HOME provides a supportive environment in Garia, Kolkata to restore physical health and emotional well-being.
            </p>
            <p className="text-background/80 text-lg leading-relaxed">
              Serving Garia, Narendrapur, Sonarpur, Kamalgazi, Baghajatin, Patuli, and Greater Kolkata with 24/7 care assistance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Remedy Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Our Comprehensive Rehabilitation Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
                Evidence-Based Treatment & Medical Care
              </h2>
              <p className="text-muted-foreground text-lg">
                Physiotherapy, 24/7 nursing, psychological therapy, and de-addiction treatments at Kolkata's trusted care home.
              </p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Stroke Rehabilitation & Recovery",
                "24x7 Patient Care & Nursing",
                "Senior Citizen & Elder Care Home",
                "Physiotherapy & Mobility Rehab",
                "Post-Surgery & Orthopedic Recovery",
                "Dementia & Alzheimer's Care",
                "Medically Supervised Detoxification",
                "12-Step & Psychological Therapy",
              ].map((item, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className="flex items-center gap-4 p-4 rounded-xl bg-section-alt"
                >
                  <CheckCircle aria-hidden="true" className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Expert Medical Team
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
                Meet Our Experienced Doctors & Rehabilitation Specialists
              </h2>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Dr. Suranjana Ganguly", role: "Psychiatrist" },
              { name: "Dr. Amal Choudhury", role: "General Physician" },
              { name: "Swapnaja Adhikari", role: "Psychologist" },
              { name: "Sharmila Adhikary", role: "Psychologist" },
              { name: "Arpita Sharkhel", role: "Advocate / Legal Advisor" },
              { name: "Shamik Chatterjee", role: "Media & Digital Support" },
              {
                name: "Kaushik Bhattacharya",
                role: "Counselor, Sober since 1999",
              },
              {
                name: "Kanishka Mukherjee",
                role: "Counselor, Sober since 1998",
              },
              { name: "Soumya Mukherjee", role: "Therapist, Sober since 2012" },
              { name: "Suman Sengupta", role: "Sessionist, Sober since 2013" },
              {
                name: "Asish Chatterjee",
                role: "Peer Educator, Sober since 2015",
              },
              { name: "Sujoy Haldar", role: "Care Giver" },
              { name: "Avijit Singha", role: "Ward Boy / Cook" },
            ].map((member, i) => (
              <FadeIn
                key={i}
                delay={i * 0.05}
                className="healthcare-card p-5 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-healthcare-light-blue flex items-center justify-center mx-auto mb-3">
                  <Users aria-hidden="true" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-xs mt-1">
                  {member.role}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn direction="up" className="mt-12 max-w-4xl mx-auto">
            <img
              src={teamFull}
              alt="Care Home Rehabilitation Centre Kolkata Dedicated Staff and Team"
              width="1200"
              height="800"
              className="rounded-2xl shadow-xl w-full object-cover aspect-video sm:aspect-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="text-center text-muted-foreground mt-4 font-medium">
              The CARE HOME Team – Compassionate Rehabilitation & Nursing Care in Kolkata
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <FadeIn className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Looking for the Best Rehabilitation Centre in Garia, Kolkata?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our 24x7 care team is ready to assist your family with stroke recovery, elder care, post-hospital recovery, and patient care home admission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7980611010"
              aria-label="Call Care Home Rehabilitation Centre Kolkata at 7980611010"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Call 7980611010 Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Our Rehab Experts
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default HomePage;
