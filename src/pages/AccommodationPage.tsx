import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroAccommodation from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.38.jpeg";
import { CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

const plans = [
  {
    name: "Dormitory",
    price: "₹9,500",
    popular: false,
    facilities: [
      "Detoxification medicines",
      "Toiletries",
      "General physician visit",
      "Psychiatrist doctor visit",
    ],
    extras: [
      "Medicine charge",
      "Pathology expenditure",
      "General Medicine Bill",
    ],
  },
  {
    name: "Dormitory with Bed",
    price: "₹12,000",
    popular: true,
    facilities: [
      "Detoxification medicines",
      "Toiletries",
      "General physician",
      "Extra foods",
    ],
    extras: [
      "Psychiatrist visit",
      "Psychiatric medicines",
      "Pathology charges",
      "General Medicine Bill",
    ],
  },
  {
    name: "Air-Conditioned Dormitory",
    price: "₹17,000",
    popular: false,
    facilities: [
      "Detoxification medicines",
      "Air-conditioned room",
      "Toiletries",
      "General physician",
      "Extra foods",
    ],
    extras: [
      "Psychiatrist visit",
      "Psychiatric medicines",
      "Pathology charges",
      "General Medicine Bill",
    ],
  },
  {
    name: "Air-Conditioned Dormitory with Attached Bathroom",
    price: "₹24,000",
    popular: false,
    facilities: [
      "Detoxification medicines",
      "AC with attached bathroom",
      "Toiletries",
      "General physician",
      "Extra foods",
      "Fruits",
    ],
    extras: [
      "Psychiatrist visit",
      "Psychiatric medicines",
      "Pathology charges",
      "General Medicine Bill",
    ],
  },
];

const AccommodationPage = () => {
  useSEO({
    title: "Accommodation & Admission | Affordable Care Home in Garia, Kolkata",
    description: "Explore affordable patient care accommodation plans at Care Home in Garia, Kolkata. 24x7 nursing, doctor visits, nutritious meals, and clean living spaces.",
    keywords: "Affordable Rehabilitation Centre Kolkata, Patient Care Home Kolkata, Care Home in Garia, Senior Citizen Care Home Kolkata, Bedridden Patient Care Home Kolkata",
    canonical: "https://www.carehomekolkata.in/accommodation",
  });

  return (
    <div>
      <HeroSection
        image={heroAccommodation}
        title="Patient Care Accommodation & Admission in Garia, Kolkata"
        subtitle="Hygienic, comfortable, and affordable residential care plans for seniors and patients"
      >
        <div className="flex justify-center mt-6">
          <a
            href="https://drive.google.com/file/d/1DFr4xV0yVTbSEZzc-rIJ8KsiMmUKn0o7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-400 text-secondary-foreground px-8 py-3.5 rounded-xl text-base sm:text-lg font-semibold transition-all shadow-lg shadow-yellow-400/30 hover:scale-105 active:scale-95"
          >
            <span>Know More</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </HeroSection>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="inline-block bg-secondary/10 text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 border border-secondary/20">
              w.e.f. 01-04-2026
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Rate (Bed) Chart</h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 font-medium">
              INR / Per Month • For In-House Patients
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                direction="up"
                className="healthcare-card snake-border-card p-8 flex flex-col justify-between relative group z-0 h-full"
              >
                <div>
                  {plan.popular && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-sm">
                      Popular
                    </div>
                  )}
                  <h3 className="text-xl font-heading font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">{plan.price}</div>
                  <p className="text-muted-foreground text-sm mb-6">per month</p>

                  <h4 className="font-semibold text-sm uppercase tracking-wider text-secondary mb-3">Included</h4>
                  <ul className="space-y-2 mb-6">
                    {plan.facilities.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Extra Charges</h4>
                  <ul className="space-y-2 mb-8">
                    {plan.extras.map((e, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="tel:6289424181"
                  className="block text-center py-3 rounded-xl font-semibold transition-all duration-300 mt-auto bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground active:bg-secondary active:text-secondary-foreground active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
                >
                  Enquire Now
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12" delay={0.4}>
            <a
              href="https://drive.google.com/file/d/1DFr4xV0yVTbSEZzc-rIJ8KsiMmUKn0o7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-xl text-base sm:text-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Know More</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;
