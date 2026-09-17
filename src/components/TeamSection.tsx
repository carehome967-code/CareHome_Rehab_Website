import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Users, Award, ShieldCheck, HeartPulse, Stethoscope, Sparkles } from "lucide-react";

// Import Team Images from src/assets/Our Team
import drSuranjanaImg from "@/assets/Our Team/DrSuranjanaGanguly(Psychiatrist)_30yrs.jpeg";
import kaushikImg from "@/assets/Our Team/KaushikBhattacharya(Addiction Counsellor)_25yrs.jpeg";
import kanishkaImg from "@/assets/Our Team/KanishkaMukherjee(Therapist&RecoveryCoach)_25yrs.jpeg";
import saibalImg from "@/assets/Our Team/SaibalSanyal(ProgramCoordinatorTherapist).jpeg";
import sharmilaImg from "@/assets/Our Team/SharmilaAdhikary_Psychologist_17yrs.jpeg";
import soumyoImg from "@/assets/Our Team/SoumyoSubhraSengupta(Therapist&Secretary)_15yrs.jpeg";
import sumanImg from "@/assets/Our Team/SumanSengupta(Therapist & PeerEducator)_15yrs.jpeg";
import sayamImg from "@/assets/Our Team/SayamSinhaRoy(DigitalMedia&MarketingExpert)_15yrs.jpeg";
import drDebanjanImg from "@/assets/Our Team/DrDebanjanRoy(General Physician)_10yrs.jpeg";
import susmitaImg from "@/assets/Our Team/SusmitaKundu(Counselling Psychologist)_5yrs.jpeg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "medical" | "counseling" | "leadership" | "support";
  experienceYears: number;
  experienceLabel: string;
  soberSince?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "dr-suranjana",
    name: "Dr. Suranjana Ganguly",
    role: "Consultant Psychiatrist",
    category: "medical",
    experienceYears: 30,
    experienceLabel: "30 Years Exp",
    image: drSuranjanaImg,
  },
  {
    id: "kaushik",
    name: "Kaushik Bhattacharya",
    role: "Addiction Counselor & Program Coordinator",
    category: "counseling",
    experienceYears: 25,
    experienceLabel: "25 Years Exp",
    soberSince: "1999",
    image: kaushikImg,
  },
  {
    id: "kanishka",
    name: "Kanishka Mukherjee",
    role: "Senior Therapist & Recovery Coach",
    category: "counseling",
    experienceYears: 25,
    experienceLabel: "25 Years Exp",
    soberSince: "1998",
    image: kanishkaImg,
  },
  {
    id: "saibal",
    name: "Saibal Sanyal",
    role: "Founder, Program Coordinator & Therapist",
    category: "leadership",
    experienceYears: 20,
    experienceLabel: "20+ Years Exp",
    image: saibalImg,
  },
  {
    id: "sharmila",
    name: "Sharmila Adhikary",
    role: "Clinical Psychologist",
    category: "medical",
    experienceYears: 17,
    experienceLabel: "17 Years Exp",
    image: sharmilaImg,
  },
  {
    id: "soumyo",
    name: "Soumyo Subhra Sengupta",
    role: "Co-Founder, Therapist & Secretary",
    category: "leadership",
    experienceYears: 15,
    experienceLabel: "15 Years Exp",
    soberSince: "2012",
    image: soumyoImg,
  },
  {
    id: "suman",
    name: "Suman Sengupta",
    role: "Therapist & Peer Educator",
    category: "counseling",
    experienceYears: 15,
    experienceLabel: "15 Years Exp",
    soberSince: "2013",
    image: sumanImg,
  },
  {
    id: "sayam",
    name: "Sayam Sinha Roy",
    role: "Digital Media & Marketing Expert",
    category: "support",
    experienceYears: 15,
    experienceLabel: "15 Years Exp",
    image: sayamImg,
  },
  {
    id: "dr-debanjan",
    name: "Dr. Debanjan Roy",
    role: "General Physician",
    category: "medical",
    experienceYears: 10,
    experienceLabel: "10 Years Exp",
    image: drDebanjanImg,
  },
  {
    id: "susmita",
    name: "Susmita Kundu",
    role: "Counselling Psychologist",
    category: "counseling",
    experienceYears: 5,
    experienceLabel: "5 Years Exp",
    image: susmitaImg,
  },
];

const categories = [
  { key: "all", label: "All Professionals", icon: Users },
  { key: "medical", label: "Medical & Clinical", icon: Stethoscope },
  { key: "counseling", label: "Counselors & Therapists", icon: HeartPulse },
  { key: "leadership", label: "Leadership & Support", icon: ShieldCheck },
];

export const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredMembers = teamMembers.filter((m) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "leadership") return m.category === "leadership" || m.category === "support";
    return m.category === activeCategory;
  });

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10">
            <Sparkles className="w-4 h-4 text-secondary" /> Multidisciplinary Team
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4 text-foreground">
            Meet Our Experienced Professionals
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our team brings together over three decades of clinical excellence, psychiatric expertise, and compassionate peer recovery coaching.
          </p>
        </FadeIn>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-section-alt text-muted-foreground hover:bg-background hover:text-foreground border border-border/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredMembers.map((member, i) => (
            <FadeIn key={member.id} delay={i * 0.04} direction="up">
              <div className="healthcare-card group h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-background hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/4] overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} (${member.experienceLabel})`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex flex-wrap justify-between items-start gap-2 pointer-events-none">
                      <span className="inline-flex items-center gap-1 bg-primary/95 backdrop-blur-md text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                        <Award className="w-3 h-3 text-secondary" />
                        {member.experienceLabel}
                      </span>
                      {member.soberSince && (
                        <span className="inline-flex items-center gap-1 bg-secondary/95 backdrop-blur-md text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                          <ShieldCheck className="w-3 h-3" />
                          Sober since {member.soberSince}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details Content */}
                  <div className="p-5 text-center flex flex-col items-center">
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium mt-1 leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Card Footer border line */}
                <div className="px-5 pb-5 pt-0 text-center">
                  <div className="w-full pt-3 border-t border-border/40 flex justify-center items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span>Experience & Specialty</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
