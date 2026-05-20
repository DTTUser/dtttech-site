import { navLinks } from "@/data/siteData";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-nav-bg/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <span className="text-xl font-heading font-bold text-primary">DTT</span>
          <p className="text-[10px] font-mono tracking-wider text-muted-foreground mb-2">DIGITAL TECHNOLOGY TRAINING</p>
          <p className="text-sm text-muted-foreground font-body">Transforming how people learn.</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Quick Links</h4>
          <div className="space-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Get In Touch</h4>
          <a href="mailto:training@digitaltechnologytraining.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            training@digitaltechnologytraining.com
          </a>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-xs text-muted-foreground font-body text-center">
          © 2026 Digital Technology Training. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
