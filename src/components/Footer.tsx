import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand */}
          <div>
            <img
              src={logo}
              alt="Care Home - Best Rehabilitation Centre in Garia, Kolkata"
              className="h-20 md:h-24 w-auto mb-4"
            />
            <p className="text-background/70 leading-relaxed text-sm">
              Premier 24/7 care home and rehabilitation centre in Garia, Kolkata offering Detoxification, De Addiction, Rehabilitation for addiction, alcoholism and all Co-Occurring disorders, treatment for Mild Psychological Disorder, and compassionate Old age / Retirement Home living.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-background">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Facilities", path: "/facilities" },
                { label: "Accommodation", path: "/accommodation" },
                { label: "Services", path: "/services" },
                { label: "Certificates", path: "/certificates" },
                { label: "Gallery", path: "/gallery" },
                { label: "Social Activities", path: "/social-activities" },
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

          {/* Column 3: We're Here For You */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-background">
              We're Here For You
            </h4>
            <p className="text-background/90 font-medium mb-2 text-sm">
              24/7 Care Assistance Available
            </p>
            <p className="text-background/70 leading-relaxed text-sm mb-6">
              Our team is available around the clock to provide support and
              assistance for individuals and families seeking help.
            </p>
            <a
              href="tel:6289424181"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              Get Help Now
            </a>
          </div>

          {/* Column 4: Contact Us (Right Side Last Section) */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-background">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:7980611010"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-background" />
                <span>7980611010 (Mobile)</span>
              </a>
              <a
                href="tel:6289424181"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-background" />
                <span>6289424181 (Saibal Sanyal)</span>
              </a>
              <a
                href="tel:9073012566"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-background" />
                <span>9073012566 (Soumyo Subhra Sengupta)</span>
              </a>
              <a
                href="mailto:carehomekol@gmail.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-background" />
                <span>carehomekol@gmail.com</span>
              </a>
              <a
                href="mailto:saibalsanyal2@gmail.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-background" />
                <span>saibalsanyal2@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/80 pt-1">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-background" />
                <span className="leading-snug">
                  Panchpota Dhalai Bridge, Garia Station Road, Kolkata – 700152
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          © {new Date().getFullYear()} CARE HOME. Developed & Maintained by{" "}
          <a
            href="https://teamdeoskolkata.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-background hover:underline"
          >
            Digital Exposure Online Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
