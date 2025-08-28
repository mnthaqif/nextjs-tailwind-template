import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <h3 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-xl font-bold text-transparent">
            {siteConfig.name}
          </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-foreground">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a href={siteConfig.links.github} className="hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.links.twitter} className="hover:text-foreground">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}