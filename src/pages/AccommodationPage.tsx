import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroAccommodation from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.28.38.jpeg";
import { CheckCircle, AlertCircle } from "lucide-react";

const plans = [
  {
    name: "General Bed",
    price: "₹8,000",
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
      "General medicine bill",
    ],
  },
  {
    name: "Non-AC V.I.P Bed",
    price: "₹10,000",
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
      "General medicines bill",
    ],
  },
  {
    name: "AC V.I.P Bed",
    price: "₹16,000",
    popular: false,
    facilities: [
      "Detoxification medicines",
      "Toiletries",
      "General physician",
      "Extra foods",
      "Fruits",
    ],
    extras: [
      "Psychiatrist visit",
      "Psychiatric medicines",
      "Pathology charges",
      "General medicines bill",
    ],
  },
];

const AccommodationPage = () => {
  useSEO({
    title: "Accommodation | Care Home Recovery",
    description: "Various comfortable and clean living spaces for recovery including general and VIP beds.",
  });

  return (
    <div>
      <HeroSection
        image={heroAccommodation}
        title="Accommodation"
        subtitle="Comfortable and clean living spaces for recovery"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Choose Your Plan</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                direction="up"
                className={`healthcare-card p-8 ${
                  plan.popular ? "ring-2 ring-primary relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
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

                <a
                  href="tel:6289424181"
                  className={`block text-center py-3 rounded-xl font-semibold transition-opacity hover:opacity-90 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-section-alt text-foreground"
                  }`}
                >
                  Enquire Now
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;
