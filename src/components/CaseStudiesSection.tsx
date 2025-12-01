import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, User, Clipboard, TrendingUp, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "ACL Tear Rehabilitation",
    patient: "28-year-old male athlete",
    symptoms: ["Knee instability", "Severe pain", "Limited range of motion", "Unable to bear weight"],
    treatment: [
      "Week 1-2: Pain management, gentle ROM exercises",
      "Week 3-6: Progressive strengthening, balance training",
      "Week 7-12: Functional exercises, sport-specific drills",
      "Week 13+: Return to sport protocol",
    ],
    outcome: "Full return to competitive sports at 6 months post-surgery with 95% knee function recovery.",
    duration: "6 months",
    progress: 95,
  },
  {
    id: 2,
    title: "Frozen Shoulder Treatment",
    patient: "52-year-old female office worker",
    symptoms: ["Severe shoulder stiffness", "Night pain", "Difficulty with daily activities", "Limited arm elevation"],
    treatment: [
      "Phase 1: Pain relief modalities, gentle stretching",
      "Phase 2: Progressive mobilization techniques",
      "Phase 3: Strengthening and functional exercises",
      "Home exercise program for maintenance",
    ],
    outcome: "Regained 90% shoulder mobility and returned to all daily activities pain-free.",
    duration: "4 months",
    progress: 90,
  },
  {
    id: 3,
    title: "Slipped Disc Rehabilitation",
    patient: "45-year-old male construction worker",
    symptoms: ["Lower back pain radiating to leg", "Numbness and tingling", "Difficulty sitting", "Muscle weakness"],
    treatment: [
      "Acute phase: Pain management, postural education",
      "Subacute: Core stabilization, McKenzie exercises",
      "Progressive: Functional training, ergonomic guidance",
      "Prevention: Lifting mechanics, home exercise program",
    ],
    outcome: "Complete resolution of radiating symptoms, returned to work with modified duties.",
    duration: "3 months",
    progress: 88,
  },
  {
    id: 4,
    title: "Cerebral Palsy Physiotherapy",
    patient: "8-year-old child",
    symptoms: ["Muscle spasticity", "Balance difficulties", "Gait abnormalities", "Limited independence"],
    treatment: [
      "Stretching and positioning programs",
      "Strength training with play-based activities",
      "Gait training and assistive device fitting",
      "Family education and home program",
    ],
    outcome: "Improved walking ability, increased independence in daily activities, enhanced quality of life.",
    duration: "Ongoing",
    progress: 75,
  },
  {
    id: 5,
    title: "Stroke Rehabilitation",
    patient: "65-year-old female",
    symptoms: ["Right-sided weakness", "Balance impairment", "Difficulty walking", "Reduced hand function"],
    treatment: [
      "Early mobilization and positioning",
      "Task-specific training for affected limbs",
      "Balance and gait retraining",
      "Functional independence training",
    ],
    outcome: "Regained ability to walk independently with a cane, improved hand function for daily tasks.",
    duration: "6 months",
    progress: 80,
  },
];

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".case-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".case-title",
            start: "top 80%",
          },
        }
      );

      // Timeline animation
      gsap.fromTo(
        ".case-nav-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".case-nav",
            start: "top 75%",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        ".case-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".case-content",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate content change
    gsap.fromTo(
      ".case-detail",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }, [activeCase]);

  const currentCase = caseStudies[activeCase];

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="case-title inline-block text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4">
            Case Studies
          </span>
          <h2 className="case-title font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Real Patient Success Stories
          </h2>
          <p className="case-title text-muted-foreground text-lg max-w-2xl mx-auto">
            Evidence-based rehabilitation approaches that have helped patients 
            recover and return to their normal lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="case-nav lg:col-span-1">
            <div className="bg-background rounded-2xl p-4 shadow-soft">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(index)}
                  className={`case-nav-item w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeCase === index
                      ? "bg-primary/20 border-l-4 border-primary-dark"
                      : "hover:bg-muted"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeCase === index
                        ? "gradient-navy text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`font-medium ${
                      activeCase === index ? "text-secondary" : "text-muted-foreground"
                    }`}
                  >
                    {study.title}
                  </span>
                  {activeCase === index && (
                    <ChevronRight className="w-5 h-5 text-primary-dark ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="case-content lg:col-span-2">
            <div className="case-detail bg-background rounded-3xl p-6 md:p-8 shadow-card border border-border/30">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-secondary">
                  {currentCase.title}
                </h3>
                <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-secondary">
                    Duration: {currentCase.duration}
                  </span>
                </div>
              </div>

              {/* Patient Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Patient</h4>
                    <p className="text-muted-foreground">{currentCase.patient}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <Clipboard className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Symptoms</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {currentCase.symptoms.map((symptom, i) => (
                        <li key={i}>• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Treatment Timeline */}
              <div className="mb-8">
                <h4 className="font-semibold text-secondary mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary-dark" />
                  Treatment Plan
                </h4>
                <div className="space-y-3">
                  {currentCase.treatment.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-secondary">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-foreground text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-primary/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-2">Outcome</h4>
                    <p className="text-foreground mb-4">{currentCase.outcome}</p>
                    
                    {/* Progress bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Recovery Progress</span>
                        <span className="font-bold text-primary-dark">
                          {currentCase.progress}%
                        </span>
                      </div>
                      <div className="h-3 bg-card rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-navy rounded-full transition-all duration-1000"
                          style={{ width: `${currentCase.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
