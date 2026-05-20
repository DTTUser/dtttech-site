import { useState } from "react";
import { Send } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const Contact = () => {
  const ref = useFadeIn();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site — just show confirmation
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8 max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Let's talk about your next project.
        </h2>
        <p className="text-muted-foreground font-body mb-2">
          Drop us a line at{" "}
          <a href="mailto:training@digitaltechnologytraining.com" className="text-primary hover:underline">
            training@digitaltechnologytraining.com
          </a>
        </p>
        <p className="text-muted-foreground font-body mb-10">or use the form below.</p>

        {sent ? (
          <div className="rounded-xl bg-card border border-primary/30 p-8">
            <p className="text-primary font-heading font-semibold text-lg">Thanks! We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-card border border-card-border px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-card border border-card-border px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              required
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full rounded-lg bg-card border border-card-border px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
