import { Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/916289424181"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all animate-float"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-8 h-8 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.76.459 3.474 1.33 4.988l-1.413 5.161 5.284-1.385c1.451.792 3.092 1.222 4.788 1.222 5.506 0 9.989-4.478 9.989-9.985 0-5.506-4.483-9.985-9.989-9.985zm0 18.261c-1.528 0-3.024-.41-4.329-1.187l-.31-.184-3.218.842.858-3.136-.202-.321c-.854-1.359-1.305-2.929-1.305-4.527 0-4.568 3.717-8.284 8.286-8.284 4.568 0 8.284 3.716 8.284 8.284 0 4.568-3.716 8.284-8.284 8.284zm4.542-6.208c-.249-.124-1.474-.727-1.703-.81-.228-.083-.395-.124-.561.124-.167.249-.644.81-.79 1.058-.145.249-.291.27-.54.145-.249-.124-1.054-.389-2.007-1.24-.742-.662-1.243-1.479-1.389-1.728-.145-.249-.015-.384.109-.508.112-.112.249-.291.374-.436.124-.145.166-.249.249-.415.083-.166.042-.311-.021-.436-.062-.124-.561-1.353-.769-1.851-.202-.486-.407-.42-.561-.428-.145-.008-.311-.008-.477-.008s-.436.062-.664.311c-.228.249-.872.851-.872 2.077 0 1.225.892 2.408 1.017 2.574.124.166 1.756 2.682 4.254 3.762.594.257 1.058.41 1.42.525.597.19 1.141.163 1.571.099.48-.072 1.474-.602 1.681-1.183.208-.581.208-1.08.145-1.183-.062-.104-.228-.187-.477-.311z" />
        </svg>
      </a>
      <a
        href="tel:6289424181"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        title="Call Now"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
