import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroCertificates from "@/assets/hero-certificates.jpg";
import cert1 from "@/assets/Certificates/Certificate_1.jpeg";
import cert2 from "@/assets/Certificates/Certificate_2.jpeg";
import cert3 from "@/assets/Certificates/Certificate_3.jpeg";
import cert4 from "@/assets/Certificates/Certificate_4.jpeg";
import cert5 from "@/assets/Certificates/Certificate_5.jpeg";
import { X } from "lucide-react";

const certificates = [
  {
    title: "Government of West Bengal – Certificate of Participation",
    desc: "Capacity building program on drug abuse prevention titled 'Building a Healthy Society: Empowering Communities for Substance Use Prevention and Control', organized by Dept. of Psychiatric Social Work, IOP-COE (SSKM Hospital) & NCDAP, Govt. of India (April 2025)",
    image: cert1,
  },
  {
    title: "UTC – Substance Use Disorders, Course 3 & 4 (40 Hours)",
    desc: "Certificate of Completion for Universal Treatment Curriculum Courses 3 & 4 (Common Co-occurring Mental & Medical Disorders & Basic Counselling Skills) via Ecolink Institute of Well-Being under Colombo Plan Drug Advisory Programme (Dec 2022–Feb 2023)",
    image: cert2,
  },
  {
    title: "Ministry of Social Justice & Empowerment & Ministry of Culture – Certificate of Participation",
    desc: "Participated in 'United For the Elderly: Promoting Well Being, Dignity & Rights Against Loneliness and Isolation', organized by Dept. of Psychiatric Social Work, IOP-COE SSKMH & Indian Museum with NISD (June 2025)",
    image: cert3,
  },
  {
    title: "UTC – Substance Use Disorders, Course 1 & 2 (40 Hours)",
    desc: "Certificate of Completion for Universal Treatment Curriculum Courses 1 & 2 (Physiology and Pharmacology & Continuum of Care) via Ecolink Institute of Well-Being under Colombo Plan Drug Advisory Programme (Oct–Dec 2022)",
    image: cert4,
  },
  {
    title: "UTC – Substance Use Disorders, Course 5–8 (80 Hours)",
    desc: "Certificate of Completion for Universal Treatment Curriculum Courses 5–8 (Case Management, Crisis Intervention & Ethics for Addiction Professionals) via Ecolink Institute of Well-Being under Colombo Plan DAP (Feb–May 2024)",
    image: cert5,
  },
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
