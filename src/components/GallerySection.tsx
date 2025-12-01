import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorScrubs from "@/assets/doctor-scrubs.jpg";
import doctorCoat from "@/assets/doctor-coat.jpg";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: doctorCoat,
    alt: "Dr. Hager Khairy in medical coat",
    caption: "Professional Practice",
  },
  {
    src: doctorScrubs,
    alt: "Dr. Hager Khairy in scrubs",
    caption: "Clinical Setting",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop",
    alt: "Physical therapy equipment",
    caption: "Modern Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    alt: "Physical therapy session",
    caption: "Patient Care",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop",
    alt: "Healthcare professional",
    caption: "Dedicated Service",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop",
    alt: "Medical consultation",
    caption: "Expert Consultation",
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".gallery-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".gallery-title",
            start: "top 80%",
          },
        }
      );

      // Gallery items stagger animation
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="gallery-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            Gallery
          </span>
          <h2 className="gallery-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Professional Journey
          </h2>
          <p className="gallery-title text-muted-foreground text-lg max-w-2xl mx-auto">
            Moments from my practice, clinical training, and dedication to patient care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image container with baby blue border */}
              <div className="relative aspect-square overflow-hidden border-4 border-primary/30 rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-secondary-foreground font-medium text-center">
                    {image.caption}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
