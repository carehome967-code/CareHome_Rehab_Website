import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroImage from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.48.jpeg";
import { Calendar, Users, ArrowRight } from "lucide-react";

const SocialActivitiesPage = () => {
  useSEO({
    title: "Social Activities | Care Home Recovery",
    description: "Explore the social activities and initiatives organized by Care Home, including the International Day Against Drug Abuse and Illicit Trafficking.",
  });

  return (
    <div>
      <HeroSection
        image={heroImage}
        title="Social Activities"
        subtitle="Community initiatives and events to raise awareness"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <StaggerContainer>
            <div className="max-w-4xl mx-auto space-y-12">
              <FadeIn direction="up">
                <div className="bg-background rounded-2xl p-8 md:p-12 shadow-xl border border-border transition-all duration-300 hover:shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>26th June</span>
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-foreground leading-tight">
                        International Day Against Drug Abuse and Illicit Trafficking
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Every year on June 26th, we actively participate in the International Day Against Drug Abuse and Illicit Trafficking. Our initiatives aim to strengthen action and cooperation in achieving the goal of a world free of drug abuse. We organize awareness campaigns, community gatherings, and educational programs to highlight the dangers of illicit drugs and promote healthy, drug-free lifestyles.
                      </p>
                      <div className="flex items-center gap-4 text-sm font-medium text-primary mb-6">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          <span>Community Awareness</span>
                        </div>
                      </div>
                      <Link
                        to="/social-activities/drug-abuse-day"
                        className="flex w-fit mx-auto items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                      >
                        See Our Activities
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default SocialActivitiesPage;
