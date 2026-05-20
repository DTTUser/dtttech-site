import { stats } from "@/data/siteData";
import { useFadeIn } from "@/hooks/useFadeIn";

const StatsBar = () => {
  const ref = useFadeIn();

  return (
    <section className="py-12 border-y border-border bg-nav-bg/50">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:border-r last:border-r-0 border-border">
              <p className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
