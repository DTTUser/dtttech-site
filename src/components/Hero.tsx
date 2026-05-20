import { useEffect, useRef, useState } from "react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { useFadeIn } from "@/hooks/useFadeIn";

const Hero = () => {
  const ref = useFadeIn();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content — moves up slowly */}
          <div style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
            <p className="section-label mb-6">01 — Welcome</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
              Transforming how<br />
              <span className="text-primary">people learn.</span>
            </h1>
            <div className="accent-line mb-6" />
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-lg mb-8">
              We design and develop bespoke eLearning experiences that engage, inspire and deliver measurable results. From corporate compliance to interactive simulations, we bring your training vision to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-foreground/30 text-foreground font-heading font-semibold text-sm hover:bg-foreground/5 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right mockup — moves down slower for depth */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <img
              src={heroMockup}
              alt="eLearning course player interface showing Module 3 with progress bar and course modules"
              width={640}
              height={512}
              className="rounded-xl shadow-2xl shadow-primary/10 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
