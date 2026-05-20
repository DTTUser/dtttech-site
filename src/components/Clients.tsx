import { clients } from "@/data/siteData";
import { useFadeIn } from "@/hooks/useFadeIn";

const Clients = () => {
  const ref = useFadeIn();

  return (
    <section id="clients" className="py-20 lg:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <p className="section-label mb-4">05 — Our Clients</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-12">
          Trusted by leading<br />organisations.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <div
              key={i}
              className="rounded-xl bg-card border border-card-border h-24 flex items-center justify-center"
            >
              <span className="text-sm text-muted-foreground font-mono tracking-wider">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
