import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, Stethoscope, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Manual Therapy", percentage: 95 },
  { name: "Orthopedic Rehabilitation", percentage: 92 },
  { name: "Neurological Rehab", percentage: 88 },
  { name: "Sports Injury Recovery", percentage: 90 },
  { name: "Post-Operative Care", percentage: 94 },
  { name: "Patient Assessment", percentage: 96 },
];

const education = [
  {
    icon: GraduationCap,
    title: "Doctor of Physical Therapy",
    institution: "Merit University",
    year: "2024",
  },
  {
    icon: Award,
    title: "Clinical Excellence Award",
    institution: "Physical Therapy Department",
    year: "2023",
  },
  {
    icon: Stethoscope,
    title: "Clinical Rotations",
    institution: "Multiple Healthcare Facilities",
    year: "2022-2024",
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
          },
        }
      );

      // Education cards stagger animation
      gsap.fromTo(
        ".education-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".education-grid",
            start: "top 75%",
          },
        }
      );

      // Skills progress bars animation
      const skillBars = document.querySelectorAll(".skill-progress");
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${width}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
            },
          }
        );
      });

      // Training experience animation
      gsap.fromTo(
        ".training-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".training-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="about-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="about-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Dedicated to Your Recovery
          </h2>
          <p className="about-title text-muted-foreground text-lg max-w-2xl mx-auto">
            With a passion for helping patients regain their mobility and independence, 
            I combine evidence-based practices with compassionate care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Education & Training */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-secondary mb-8 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary-dark" />
              Education & Achievements
            </h3>

            <div className="education-grid space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="education-card bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.institution}
                      </p>
                      <span className="text-xs text-primary-dark font-medium">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Training */}
            <h3 className="font-serif text-2xl font-semibold text-secondary mt-12 mb-6">
              Clinical Training Experience
            </h3>
            <div className="training-grid grid grid-cols-2 gap-3">
              {[
                "Orthopedic Clinic",
                "Neurological Center",
                "Sports Medicine",
                "Geriatric Care",
                "Pediatric PT",
                "Outpatient Rehab",
              ].map((item, index) => (
                <div
                  key={index}
                  className="training-item bg-primary/10 rounded-xl px-4 py-3 text-sm font-medium text-secondary text-center hover:bg-primary/20 transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div ref={skillsRef}>
            <h3 className="font-serif text-2xl font-semibold text-secondary mb-8">
              Professional Skills
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-primary-dark font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="skill-progress h-full gradient-primary rounded-full"
                      data-width={skill.percentage}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { value: "500+", label: "Patients Treated" },
                { value: "4+", label: "Years Training" },
                { value: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-background rounded-2xl shadow-soft"
                >
                  <div className="font-serif text-2xl md:text-3xl font-bold text-primary-dark">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
