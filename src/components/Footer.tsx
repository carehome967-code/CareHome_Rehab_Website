import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Care Home - Best Rehabilitation Centre in Garia, Kolkata"
              className="h-20 md:h-24 w-auto mb-4"
            />
            <p className="text-background/70 mb-6 leading-relaxed">
              Premier 24/7 care home and rehabilitation centre in Garia, Kolkata offering Detoxification, De Addiction, Rehabilitation for addiction, alcoholism and all Co-Occurring disorders, treatment for Mild Psychological Disorder, and compassionate Old age / Retirement Home living.
            </p>
            <div className="space-y-3">
              <a
                href="tel:7980611010"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                7980611010 (Mobile)
              </a>
              <a
                href="tel:6289424181"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                6289424181 (Saibal Sanyal)
              </a>
              <a
                href="tel:9073012566"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                9073012566 (Soumaya Suvra Sengupta)
              </a>
              <a
                href="mailto:carehomekol@gmail.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                carehomekol@gmail.com
              </a>
              <a
                href="mailto:saibalsanyal2@gmail.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                saibalsanyal2@gmail.com
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Panchpota Dhalai Bridge, Garia Station Road, Kolkata – 700152
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Facilities", path: "/facilities" },
                { label: "Accommodation", path: "/accommodation" },
                { label: "Services", path: "/services" },
                { label: "Certificates", path: "/certificates" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              We're Here For You
            </h4>
            <p className="text-background/70 mb-4">
              24/7 Care Assistance Available
            </p>
            <p className="text-background/70 leading-relaxed">
              Our team is available around the clock to provide support and
              assistance for individuals and families seeking help.
            </p>
            <a
              href="tel:6289424181"
              className="mt-6 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Help Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} CARE HOME.||
          Developed & Maintained by{" "}
          <a
            href="https://teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Digital Exposure Online Servies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
