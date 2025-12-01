import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wave animation
      gsap.to(".wave-path", {
        attr: { d: "M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,80C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" },
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Wave SVG */}
      <div className="relative">
        <svg
          ref={waveRef}
          viewBox="0 0 1440 320"
          className="w-full h-auto -mb-1"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(205, 100%, 82%)" />
              <stop offset="50%" stopColor="hsl(252, 100%, 90%)" />
              <stop offset="100%" stopColor="hsl(213, 67%, 31%)" />
            </linearGradient>
          </defs>
          <path
            className="wave-path"
            fill="url(#wave-gradient)"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,112C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="gradient-navy">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-4">
                Dr. Hager Khairy
              </h3>
              <p className="text-secondary-foreground/70 mb-4 leading-relaxed">
                Doctor of Physical Therapy dedicated to helping patients achieve 
                their recovery goals through evidence-based care and compassion.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-secondary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-secondary-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About", "Services", "Case Studies", "Testimonials", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-secondary-foreground/70 hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-secondary-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "Home Visit Physiotherapy",
                  "Clinical Assessment",
                  "Sports Rehabilitation",
                  "Neurological Rehab",
                  "Post-Operative Care",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-secondary-foreground/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm flex items-center gap-1">
              Made by Mo To  <Heart className="w-4 h-4 text-primary" /> © 2024 Dr. Hager Khairy
            </p>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary hover:bg-primary/80 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
