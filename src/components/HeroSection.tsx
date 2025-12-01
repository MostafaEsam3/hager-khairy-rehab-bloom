import doctorImage from "@/assets/doctor-hero.jpg";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen gradient-hero overflow-hidden flex items-center"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/30 blur-xl opacity-60 animate-float" />
        <div className="absolute top-40 right-[15%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-accent/40 blur-xl opacity-60 animate-float-delayed" />
        <div className="absolute bottom-32 left-[20%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-primary/25 blur-lg opacity-60 animate-float" />
        <div className="absolute bottom-20 right-[25%] w-40 h-40 md:w-56 md:h-56 rounded-full bg-accent/30 blur-2xl opacity-60 animate-float-delayed" />
        <div className="absolute top-1/2 left-[5%] w-16 h-16 rounded-full bg-secondary/10 blur-lg opacity-60 animate-float" />
        <div className="absolute top-32 right-[30%] w-4 h-4 rounded-full bg-secondary/40 opacity-60" />
        <div className="absolute bottom-40 left-[35%] w-3 h-3 rounded-full bg-primary-dark/50 opacity-60" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="relative flex-shrink-0 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-110 animate-pulse-soft" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-hover animate-sea-float">
                <img
                  src={doctorImage}
                  alt="Dr. Hager Khairy - Physical Therapist"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 bg-card shadow-card rounded-2xl px-4 py-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-dark" />
                <span className="text-sm font-medium text-secondary">DPT Graduate</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for Consultations
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Dr. Hager Khairy
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-primary-dark mt-2">
                Physical Therapist
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Doctor of Physical Therapy dedicated to restoring movement, 
              reducing pain, and enhancing quality of life through 
              evidence-based rehabilitation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 gradient-navy text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                Book Consultation
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-card text-secondary px-8 py-4 rounded-full font-semibold text-lg shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
