import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/916289424181"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-healthcare-green flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all animate-float"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="tel:6289424181"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        title="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
