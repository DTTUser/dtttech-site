import { Play } from "lucide-react";
import { demos } from "@/data/siteData";
import { useFadeIn } from "@/hooks/useFadeIn";

const colorMap = {
  primary: "text-primary bg-primary/15",
  secondary: "text-secondary bg-secondary/15",
  tertiary: "text-tertiary bg-tertiary/15",
};

const Demos = () => {
  const ref = useFadeIn();

  return (
    <section id="demos" className="py-20 lg:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">04 — Interactive Demos</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">Try it yourself.</h2>
        <p className="text-muted-foreground font-body mb-2 max-w-lg">
          Click any demo below to experience our eLearning firsthand.
        </p>
        <p className="text-xs text-muted-foreground/60 font-mono mb-12">Demos hosted on AWS S3 for fast, reliable access.</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {demos.map((d) => (
            <a
              key={d.title}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-card border border-card-border overflow-hidden hover:border-primary/30 transition-colors group block"
            >
              <div className="h-40 bg-muted flex items-center justify-center">
                <div className={`w-14 h-14 rounded-full ${colorMap[d.color]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Play className="w-7 h-7" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-1">{d.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{d.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
