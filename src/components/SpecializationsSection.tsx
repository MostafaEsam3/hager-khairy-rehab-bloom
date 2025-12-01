import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bone, Dumbbell, Brain, Activity, Zap, HeartPulse } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const specializations = [
  {
    icon: Bone,
    title: "Orthopedic Cases",
    description:
      "Treatment of musculoskeletal conditions including fractures, joint replacements, and arthritis management.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Dumbbell,
    title: "Sports Injuries",
    description:
      "Comprehensive rehabilitation for athletes, from ACL injuries to muscle strains and overuse conditions.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Brain,
    title: "Neurological Rehab",
    description:
      "Specialized care for stroke recovery, Parkinson's disease, and other neurological conditions.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Activity,
    title: "Post-Operative PT",
    description:
      "Expert guidance through recovery after surgical procedures to restore function and prevent complications.",
    color: "from-primary-dark to-primary-dark/60",
  },
  {
    icon: Zap,
    title: "Pain Management",
    description:
      "Evidence-based approaches to chronic pain relief through manual therapy and therapeutic exercises.",
    color: "from-primary to-accent",
  },
  {
    icon: HeartPulse,
    title: "Cardiac Rehabilitation",
    description:
      "Supervised exercise programs for patients recovering from heart surgery or cardiac events.",
    color: "from-accent to-primary",
  },
];

const SpecializationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".spec-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".spec-title",
            start: "top 80%",
          },
        }
      );

      // Cards animation with stagger
      gsap.fromTo(
        ".spec-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".spec-grid",
            start: "top 75%",
          },
        }
      );

      // Icon animations on hover (set up initial state)
      document.querySelectorAll(".spec-card").forEach((card) => {
        const icon = card.querySelector(".spec-icon");
        
        card.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.2, rotation: 10, duration: 0.3 });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="specializations"
      ref={sectionRef}
      className="py-20 md:py-32 gradient-hero relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="spec-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            Specializations
          </span>
          <h2 className="spec-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Treatment Expertise
          </h2>
          <p className="spec-title text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive physical therapy services tailored to your specific needs, 
            using the latest evidence-based techniques.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="spec-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="spec-card group bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border/30 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`spec-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center mb-6 shadow-soft`}
              >
                <spec.icon className="w-8 h-8 text-card" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-secondary mb-3 group-hover:text-primary-dark transition-colors">
                {spec.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {spec.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
