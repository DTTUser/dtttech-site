import { Lightbulb, Code, Palette } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: Lightbulb,
    title: "Instructional Design",
    description: "Evidence-based learning design that maximises retention and engagement.",
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke eLearning built with Storyline, Rise, and modern web tech.",
    colorClass: "text-secondary",
    bgClass: "bg-secondary/15",
  },
  {
    icon: Palette,
    title: "Visual Design",
    description: "Beautiful, branded interfaces that engage and inspire learners.",
    colorClass: "text-tertiary",
    bgClass: "bg-tertiary/15",
  },
];

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-20 lg:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">02 — About Us</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4">
          We craft learning<br />experiences that stick.
        </h2>
        <div className="accent-line mb-8" />

        <div className="max-w-2xl mb-12 space-y-4">
          <p className="text-muted-foreground font-body leading-relaxed">
            Digital Technology Training specialises in designing and developing engaging eLearning content for organisations of all sizes. We combine instructional design expertise with cutting-edge development to create training that people actually want to complete.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Whether you need a single compliance module or a complete learning programme, we work closely with you to understand your objectives and deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-card border border-card-border p-6 hover:border-primary/30 transition-colors">
              <div className={`w-10 h-10 rounded-full ${f.bgClass} flex items-center justify-center mb-4`}>
                <f.icon className={`w-5 h-5 ${f.colorClass}`} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
