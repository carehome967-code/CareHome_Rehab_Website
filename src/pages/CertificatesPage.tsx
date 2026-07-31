import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroCertificates from "@/assets/hero-certificates.jpg";
import certLifeMembership from "@/assets/cert-life-membership.jpg";
import certUtc12 from "@/assets/cert-utc-course-1-2.jpg";
import certUtc34 from "@/assets/cert-utc-course-3-4.jpg";
import certUtc58 from "@/assets/cert-utc-course-5-8.jpg";
import certIssup from "@/assets/cert-issup-participation.jpg";
import certYrg from "@/assets/cert-yrg-care-workshop.jpg";
import certNaco from "@/assets/cert-naco-completion.jpg";
import certAicpirf from "@/assets/cert-aicpirf-membership.jpg";
import certNarcotics from "@/assets/cert-narcotics-bureau.jpg";
import certTradeLicense from "@/assets/cert-trade-license.jpg";
import { X } from "lucide-react";

const certificates = [
  { title: "Counsellors Council of India – Life Membership", desc: "Life Membership as Addiction Counselling Professional (CRN: CRN2306855), dated 29-05-2024", image: certLifeMembership },
  { title: "UTC – Substance Use Disorders, Course 1 & 2 (40 Hours)", desc: "Completed via Ecolink Institute of Well-Being under Colombo Plan Drug Advisory Programme, Oct–Dec 2022", image: certUtc12 },
  { title: "UTC – Substance Use Disorders, Course 3 & 4 (40 Hours)", desc: "Advanced modules including co-occurring disorders, counseling skills & group counseling, Dec 2022–Feb 2023", image: certUtc34 },
  { title: "UTC – Substance Use Disorders, Course 5–8 (80 Hours)", desc: "Specialized courses covering case management, crisis intervention & ethics, Feb–May 2024", image: certUtc58 },
  { title: "ISSUP India – Behavioral Addictions Webinar", desc: "Certificate of Participation on 'Impact of Behavioral Addictions on Mental Health', December 2022", image: certIssup },
  { title: "YRG CARE – HIV & Health Program Workshop", desc: "State Level Workshop on Capacity Building for Leadership & Management for PWUD, Kolkata, May 2024", image: certYrg },
  { title: "NACO – Community Champions Training", desc: "Community System Strengthening Initiative (NACP V) training, Kolkata, February 2024", image: certNaco },
  { title: "AICPIRF Membership", desc: "All India Community of Person in Recovery Federation membership as Counselor/Therapist & Recovery Coach", image: certAicpirf },
  { title: "Narcotics Control Bureau – Anti-Drug Pledge", desc: "'Say Yes to Life, No to Drugs' pledge certificate from Ministry of Home Affairs, November 2024", image: certNarcotics },
  { title: "Permanent Certificate of Enlistment", desc: "Drug De-Addiction and Rehabilitation Centre license under West Bengal Municipal Act, valid until November 2034", image: certTradeLicense },
];

const CertificatesPage = () => {
  useSEO({
    title: "Government Certified Rehabilitation Centre Kolkata | Accreditations & Licenses",
    description: "Certified & licensed rehabilitation centre in Garia, Kolkata. Accredited staff, trade license, NACO training, and professional medical certifications.",
    keywords: "Certified Rehabilitation Centre Kolkata, Licensed Care Home Kolkata, Certified Rehab Centre Garia, Medical Certifications Care Home",
    canonical: "https://www.carehomekolkata.in/certificates",
  });
  
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <div>
      <HeroSection
        image={heroCertificates}
        title="Certificates & Accreditations"
        subtitle="Professionally certified and recognized qualifications"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                direction="up"
                className="healthcare-card overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCert(i)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-heading font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-background/80 z-50"
            onClick={() => setSelectedCert(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={certificates[selectedCert].image}
            alt={certificates[selectedCert].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
