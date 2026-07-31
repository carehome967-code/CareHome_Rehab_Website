import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { FadeIn, StaggerContainer } from "@/components/animations/FadeIn";
import heroAbout from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.48.jpeg";
import galleryCounselling from "@/assets/gallery-counselling.jpg";
import parallaxAddiction from "@/assets/gallery/images/WhatsApp Image 2026-03-05 at 16.27.51.jpeg";
import founderSaibal from "@/assets/founder-saibal-home.jpeg";
import founderSoumya from "@/assets/founder-soumya-home.jpg";
import teamFull from "@/assets/team-full.jpg";
import { CheckCircle, Target, Lightbulb, Heart, Users } from "lucide-react";

const AboutPage = () => {
  useSEO({
    title: "About Us | Leading Rehabilitation Centre in Garia, Kolkata | Care Home",
    description: "Learn about Care Home Rehabilitation Centre in Garia, Kolkata. Premier provider of 24/7 patient care, elder care home, stroke rehabilitation, and medical recovery in South 24 Parganas.",
    keywords: "Best Rehabilitation Centre in Kolkata, Care Home in Garia Kolkata, Rehabilitation Centre in Garia, Patient Care Home Kolkata, Elder Care Home Kolkata, Stroke Rehabilitation Centre Kolkata, Home Like Rehabilitation Centre Kolkata, Medical Care Home South Kolkata, Senior Citizen Care Home Kolkata",
    canonical: "https://www.carehomekolkata.in/about",
  });

  return (
    <div>
      <HeroSection
        image={heroAbout}
        title="About Care Home Rehabilitation Centre"
        subtitle="Premier 24/7 Patient Care & Medical Rehabilitation Centre in Garia, Kolkata since 2022"
      />

      {/* About Content */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <FadeIn direction="right">
              <img src={galleryCounselling} alt="Rehabilitation Centre in Garia Kolkata - Professional Care Team" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story & Medical Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">CARE HOME Rehabilitation Centre</strong> is a trusted healthcare institution located at Panchpota Dhalai Bridge, Garia Station Road, Kolkata. Since 2022, we have specialized in delivering holistic <strong className="text-foreground">stroke rehabilitation, 24x7 patient care, elder care home services, physiotherapy, dementia care, and de-addiction recovery</strong>.
                </p>
                <p>
                  Serving families across <strong className="text-foreground">Garia, Narendrapur, Sonarpur, Kamalgazi, Baghajatin, Patuli, and South 24 Parganas</strong>, over 125 families have trusted Care Home for dedicated post-operative recovery, bedridden patient assistance, and long-term medical care.
                </p>
                <div className="bg-background/50 p-6 rounded-xl border border-border/50 my-6 shadow-sm">
                  <p className="font-semibold text-foreground mb-2">Multidisciplinary Medical Specialists</p>
                  <p className="text-sm">
                    Our team of expert <strong className="text-primary">psychiatrists, general physicians, clinical psychologists, physiotherapists, and 24/7 nurses</strong> ensures round-the-clock clinical supervision, personalized recovery plans, and compassionate nursing assistance.
                  </p>
                </div>
                <p>
                  Our comprehensive rehabilitation model combines state-of-the-art physiotherapy, cognitive behavioral therapy (CBT), daily medical checkups, and structured 12-Step recovery methodologies.
                </p>
                <p>
                  Beyond clinical care, CARE HOME fosters <strong className="text-foreground">social reintegration and dignified living</strong> for senior citizens and recovering individuals.
                </p>
                <p>
                  Through <strong className="text-foreground">The Care Foundation</strong>, we facilitate vocational guidance and community support programs, partnered with respected institutions such as the <span className="font-medium text-foreground">Ramakrishna Mission, Indian Institute of Technology (IIT), and The George Telegraph Institute</span>.
                </p>
                <p className="text-lg font-medium text-foreground mt-6 border-l-4 border-primary pl-4">
                  CARE HOME is committed to being the most compassionate and affordable rehabilitation centre in Kolkata.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Our Founders</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "Saibal Sanyal",
                image: founderSaibal,
                desc: [
                  "Saibal Sanyal is a distinguished social activist with over two decades of experience in the field of de-addiction and rehabilitation.",
                  "He has served extensively as a Counsellor, Therapist, and Trainer, contributing to the development and implementation of structured recovery programs.",
                  "His prolific professional engagement and deep expertise have helped establish new benchmarks in the field of addiction treatment and rehabilitation practices.",
                ],
              },
              {
                name: "Soumya Suvra Sengupta",
                image: founderSoumya,
                desc: [
                  "Soumya Suvra Sengupta is one of the founder members of the organization.",
                  "His strong alignment with the mission, values, and long-term vision of CARE HOME has strengthened the organization's operational framework.",
                  "Through his strategic guidance and hands-on involvement, the organization has achieved sustainable growth and expanded its impact in the field of de-addiction and rehabilitation.",
                ],
              },
            ].map((leader, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1} className="healthcare-card p-8">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20 shadow-lg">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4 text-center">{leader.name}</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {leader.desc.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Professionals</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our multidisciplinary team of medical professionals, counsellors, and support staff ensures comprehensive care for every individual.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Dr. Suranjana Ganguly", role: "Psychiatrist" },
              { name: "Dr. Amal Choudhury", role: "General Physician" },
              { name: "Swapnaja Adhikari", role: "Psychologist" },
              { name: "Sharmila Adhikary", role: "Psychologist" },
              { name: "Arpita Sharkhel", role: "Advocate / Legal Advisor" },
              { name: "Shamik Chatterjee", role: "Media & Digital Support, Peer Motivator" },
              { name: "Kaushik Bhattacharya", role: "Counselor / Program Coordinator, Sober since 1999" },
              { name: "Kanishka Mukherjee", role: "Counselor / Peer Educator, Sober since 1998" },
              { name: "Soumya Mukherjee", role: "Therapist / Recovery Coach, Sober since 2012" },
              { name: "Suman Sengupta", role: "Sessionist / Peer Motivator, Sober since 2013" },
              { name: "Asish Chatterjee", role: "Peer Educator / Warden, Sober since 2015" },
              { name: "Sujoy Haldar", role: "Care Giver" },
              { name: "Avijit Singha", role: "Ward Boy / Cook" },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="up" className="healthcare-card p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-healthcare-light-blue flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </FadeIn>
            ))}
          </div>
          {/* Full team photo */}
          <FadeIn direction="up" className="mt-16 max-w-5xl mx-auto">
            <img src={teamFull} alt="CARE HOME Full Team" className="rounded-2xl shadow-xl w-full object-cover" loading="lazy" />
            <p className="text-center text-muted-foreground mt-4 font-medium">The CARE HOME Team – Service with Compassion</p>
          </FadeIn>
        </div>
      </section>
      <section className="parallax-bg py-32 relative" style={{ backgroundImage: `url(${parallaxAddiction})` }}>
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-background mb-8">Understanding Addiction</h2>
            <p className="text-background/90 text-lg md:text-xl leading-relaxed mb-6 font-medium">
              <strong className="text-white">Addiction is a chronic and relapsing disease</strong> characterized by compulsive drug seeking and substance use, despite harmful psychological and physical consequences.
            </p>
            <p className="text-background/80 text-lg leading-relaxed">
              Without professional <strong className="text-white">de-addiction treatment and structured rehabilitation</strong>, addiction can severely affect an individual's physical health, deteriorating personal relationships, and destroying their overall quality of life. Seeking timely behavioral therapy is the critical first step to recovery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Objectives of Rehabilitation</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our <strong className="text-foreground">holistic rehab programs</strong> are designed with specific, measurable goals to ensure long-term, sustainable recovery.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Daily Activities", desc: "Regaining independence in daily routines" },
              { icon: Lightbulb, title: "Life Skills", desc: "Development of discipline and positive habits" },
              { icon: Heart, title: "Social Integration", desc: "Meaningful reintegration into society" },
              { icon: CheckCircle, title: "Productive Life", desc: "Building meaningful and productive lifestyles" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="text-center">
                <div className="w-14 h-14 rounded-xl bg-healthcare-light-blue flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Benefits of Recovery</h2>
            <p className="text-center text-muted-foreground mb-12">
              Committing to a <strong className="text-foreground">trusted de-addiction centre</strong> provides profound, life-altering advantages.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Restoring core physical and neuro-psychological function",
              "Preventing fatal medical complications and overdoses",
              "Dramatically improving overall quality of life",
              "Promoting emotional independence and social stability",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up" className="flex items-center gap-4 p-6 rounded-xl bg-card shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Methods */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6">Scientific Recovery Methods</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Alcoholics Anonymous (AA)</strong> and <strong className="text-foreground">Narcotics Anonymous (NA)</strong> are among the oldest, most trusted, and globally recognized recovery models.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed bg-section-alt p-8 rounded-2xl border border-border/50">
              Decades of rigorous scientific trials have consistently demonstrated the effectiveness of these support structures in helping individuals overcome severe substance abuse disorders. CARE HOME integrates these proven principles directly into its core <strong className="text-primary font-bold">12 Step Recovery Approach</strong>.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
