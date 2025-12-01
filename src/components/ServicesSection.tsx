import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, ClipboardCheck, UserCog, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Home,
    title: "Home Visit Physiotherapy",
    description:
      "Convenient and personalized physiotherapy sessions in the comfort of your own home. Ideal for patients with mobility limitations or busy schedules.",
    features: ["Flexible scheduling", "Personalized attention", "Home exercise setup", "Family education"],
  },
  {
    icon: ClipboardCheck,
    title: "Clinical Assessment",
    description:
      "Comprehensive evaluation of your condition using advanced assessment techniques to create an accurate diagnosis and treatment plan.",
    features: ["Detailed evaluation", "Movement analysis", "Strength testing", "Treatment planning"],
  },
  {
    icon: UserCog,
    title: "Customized Rehab Programs",
    description:
      "Individualized rehabilitation programs designed specifically for your condition, goals, and lifestyle to ensure optimal recovery outcomes.",
    features: ["Goal-oriented approach", "Progress tracking", "Exercise prescription", "Lifestyle modifications"],
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".services-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".services-title",
            start: "top 80%",
          },
        }
      );

      // Services cards with parallax effect
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      });

      // CTA animation
      gsap.fromTo(
        ".services-cta",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".services-cta",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 gradient-hero relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-primary-dark/20 rounded-full animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="services-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="services-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            How I Can Help You
          </h2>
          <p className="services-title text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional physiotherapy services tailored to meet your unique needs 
            and help you achieve your health goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border/30 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-navy flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary/30 rounded-full blur-md" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-secondary mb-4 group-hover:text-primary-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-dark" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border/30">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
              <Phone className="w-7 h-7 text-secondary" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-xl font-semibold text-secondary mb-1">
                Ready to Start Your Recovery?
              </h4>
              <p className="text-muted-foreground">
                Book a consultation today and take the first step
              </p>
            </div>
            <a
              href="#contact"
              className="gradient-navy text-secondary-foreground px-8 py-3 rounded-full font-semibold shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
