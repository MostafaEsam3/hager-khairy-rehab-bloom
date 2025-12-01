import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    condition: "ACL Reconstruction Recovery",
    rating: 5,
    text: "Dr. Hager's expertise and patience made my recovery journey so much easier. After my ACL surgery, I was worried I'd never play football again. But with her guidance and personalized treatment plan, I'm now back on the field stronger than ever.",
    avatar: "A",
  },
  {
    id: 2,
    name: "Fatima Ali",
    condition: "Chronic Back Pain",
    rating: 5,
    text: "After years of suffering from chronic back pain, I finally found relief thanks to Dr. Hager. Her thorough assessment and targeted treatment approach addressed the root cause of my pain. I can now enjoy daily activities without discomfort.",
    avatar: "F",
  },
  {
    id: 3,
    name: "Mohamed Samir",
    condition: "Stroke Rehabilitation",
    rating: 5,
    text: "When my father had a stroke, we were devastated. Dr. Hager's compassionate care and expertise in neurological rehabilitation gave us hope. My father has regained significant mobility and independence thanks to her dedication.",
    avatar: "M",
  },
  {
    id: 4,
    name: "Sara Ibrahim",
    condition: "Sports Injury",
    rating: 5,
    text: "As a competitive swimmer, my shoulder injury felt like the end of my career. Dr. Hager not only helped me recover but also educated me on injury prevention. Her knowledge and caring approach made all the difference.",
    avatar: "S",
  },
  {
    id: 5,
    name: "Youssef Mahmoud",
    condition: "Post-Surgery Rehab",
    rating: 5,
    text: "The rehabilitation after my knee replacement was challenging, but Dr. Hager made it manageable. Her home visit service was incredibly convenient, and her encouragement kept me motivated throughout my recovery.",
    avatar: "Y",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".testimonials-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".testimonials-title",
            start: "top 80%",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate testimonial change on mobile
    gsap.fromTo(
      ".mobile-testimonial",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.4 }
    );
  }, [currentIndex]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 gradient-hero relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="testimonials-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="testimonials-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Patient Success Stories
          </h2>
          <p className="testimonials-title text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from patients who have experienced the transformative power of 
            dedicated physiotherapy care.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="testimonials-grid hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-card rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border/30"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary-dark" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-secondary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.condition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="mobile-testimonial bg-card rounded-3xl p-6 shadow-card border border-border/30">
            {/* Quote icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Quote className="w-6 h-6 text-primary-dark" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-foreground leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-secondary-foreground font-bold">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <h4 className="font-semibold text-secondary">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].condition}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-6 bg-primary-dark"
                      : "bg-primary/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-secondary hover:bg-primary/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional testimonials row for desktop */}
        <div className="testimonials-grid hidden lg:grid lg:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-card rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-hover transition-all duration-500 border border-border/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-secondary-foreground font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-secondary">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonial.condition}
                  </p>
                  <p className="text-foreground italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
