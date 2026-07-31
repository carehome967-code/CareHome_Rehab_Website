import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn } from "@/components/animations/FadeIn";
import heroContact from "@/assets/hero-contact.jpg";
import visitingCard from "@/assets/VisitingCard.jpeg";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  useSEO({
    title: "Contact Care Home Rehabilitation Centre in Garia, Kolkata | 24x7 Admission",
    description: "Contact Care Home Rehabilitation Centre near Garia Station & Dhalai Bridge, Kolkata. Located at Panchpota, Gomkol Bus Stop. Call 7980611010 or email carehomekol@gmail.com.",
    keywords: "Care Home in Garia, Rehabilitation Centre in Garia, Care Home near Garia Station, Rehab Centre near Panchpota, Rehabilitation Centre near Dhalai Bridge, Care Home near Gomkol Bus Stop, Patient Care Centre Garia Station Road, Rehabilitation Centre South 24 Parganas",
    canonical: "https://www.carehomekolkata.in/contact",
  });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello CARE HOME,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917980611010?text=${text}`, "_blank");
  };

  return (
    <div>
      <HeroSection
        image={heroContact}
        title="Contact Care Home Rehabilitation Centre in Garia, Kolkata"
        subtitle="24x7 Admission & Support — Near Garia Station, Panchpota Dhalai Bridge"
      />

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeIn direction="right">
              <h2 className="text-3xl font-heading font-bold mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healthcare-light-blue flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      CARE HOME
                      <br />
                      Panchpota Dhalai Bridge
                      <br />
                      Gomkol Stopage, Garia Station Road
                      <br />
                      Kolkata, South 24 Parganas
                      <br />
                      West Bengal – 700152
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healthcare-light-blue flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Mobile</h3>
                      <a
                        href="tel:7980611010"
                        className="text-primary hover:underline font-medium text-base"
                      >
                        7980611010
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-1">
                      <div>
                        <h4 className="font-semibold text-xs text-muted-foreground">Phone-1</h4>
                        <a
                          href="tel:6289424181"
                          className="text-primary hover:underline text-sm"
                        >
                          6289424181
                        </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-muted-foreground">Phone-2</h4>
                        <a
                          href="tel:9073012566"
                          className="text-primary hover:underline text-sm"
                        >
                          9073012566
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-healthcare-light-blue flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:carehomekol@gmail.com"
                      className="text-primary hover:underline block font-medium"
                    >
                      carehomekol@gmail.com
                    </a>
                    <a
                      href="mailto:saibalsanyal2@gmail.com"
                      className="text-primary hover:underline block text-sm text-muted-foreground mt-1"
                    >
                      saibalsanyal2@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Visiting Card */}
              <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <img
                  src={visitingCard}
                  alt="Care Home Visiting Card"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left">
              <h2 className="text-3xl font-heading font-bold mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <FadeIn
            direction="up"
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.505913240154!2d88.41276289999999!3d22.466890100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271961a8027f9%3A0x9fd2ffb15dcbbc6b!2sCare%20Home%20Kolkata!5e1!3m2!1sen!2sin!4v1772781112705!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CARE HOME Location"
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
