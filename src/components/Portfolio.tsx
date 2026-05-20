import { Play, ArrowRight } from "lucide-react";
import { projects } from "@/data/siteData";
import { useFadeIn } from "@/hooks/useFadeIn";

const accentMap = {
  primary: { bar: "bg-primary", tag: "text-primary" },
  secondary: { bar: "bg-secondary", tag: "text-secondary" },
  tertiary: { bar: "bg-tertiary", tag: "text-tertiary" },
};

const Portfolio = () => {
  const ref = useFadeIn();

  return (
    <section id="work" className="py-20 lg:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">03 — Our Work</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">Featured projects.</h2>
        <div className="accent-line mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const accent = accentMap[p.accentColor];
            return (
              <div
                key={p.title}
                className="rounded-xl bg-card border border-card-border overflow-hidden hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.3)]"
              >
                <div className={`h-1 ${accent.bar}`} />
                <div className="p-6 flex gap-5">
                  {/* Thumbnail placeholder */}
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                    <Play className={`w-6 h-6 ${accent.tag}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className={`text-xs font-mono ${accent.tag} mb-2`}>{p.sector}</p>
                    <p className="text-sm text-muted-foreground font-body mb-3">{p.description}</p>
                    <a
                      href={p.link}
                      className={`inline-flex items-center gap-1 text-sm font-semibold ${accent.tag} hover:opacity-80 transition-opacity`}
                    >
                      View Project <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
