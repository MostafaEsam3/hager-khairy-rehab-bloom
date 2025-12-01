import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".contact-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 80%",
          },
        }
      );

      // Contact info cards
      gsap.fromTo(
        ".contact-info-card",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 75%",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 75%",
          },
        }
      );

      // Floating shapes animation
      gsap.to(".contact-shape", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5, from: "random" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="contact-shape absolute top-20 left-[10%] w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
        <div className="contact-shape absolute top-40 right-[15%] w-24 h-24 rounded-full bg-accent/30 blur-xl" />
        <div className="contact-shape absolute bottom-32 left-[20%] w-40 h-40 rounded-full bg-primary/15 blur-2xl" />
        <div className="contact-shape absolute bottom-20 right-[25%] w-28 h-28 rounded-full bg-accent/20 blur-xl" />
        <div className="contact-shape absolute top-1/2 left-[5%] w-16 h-16 rounded-full bg-secondary/10 blur-lg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="contact-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            Contact
          </span>
          <h2 className="contact-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Get In Touch
          </h2>
          <p className="contact-title text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your recovery journey? Reach out for a consultation 
            and let's discuss how I can help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="contact-info space-y-6">
            <div className="contact-info-card bg-background rounded-2xl p-6 shadow-soft border border-border/30 hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Email</h3>
                  <a
                    href="mailto:dr.hagerkhairy@email.com"
                    className="text-muted-foreground hover:text-primary-dark transition-colors"
                  >
                    dr.hagerkhairy@email.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card bg-background rounded-2xl p-6 shadow-soft border border-border/30 hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/201234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary-dark transition-colors"
                  >
                    +20 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card bg-background rounded-2xl p-6 shadow-soft border border-border/30 hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Cairo, Egypt<br />
                    Home visits available
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-info-card bg-background rounded-2xl p-6 shadow-soft border border-border/30 hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Saturday - Thursday: 9 AM - 8 PM<br />
                    Friday: By appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-background rounded-3xl p-6 md:p-8 shadow-card border border-border/30"
            >
              <h3 className="font-serif text-2xl font-semibold text-secondary mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Describe your condition or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-navy text-secondary-foreground py-4 rounded-xl font-semibold text-lg shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
