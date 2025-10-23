import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Benefits", href: "#benefits" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "How to Use", href: "#usage" },
    { label: "FAQ", href: "#faq" }
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" }
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Tracking", href: "#tracking" },
    { label: "Returns", href: "#returns" },
    { label: "Warranty", href: "#warranty" }
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms of Use", href: "#terms" },
    { label: "Cookies", href: "#cookies" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Premium Magnesium</h3>
            <p className="text-sm mb-4">
              Transforming lives through natural health and scientific wellness.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 rounded-md bg-slate-800 flex items-center justify-center hover-elevate"
                    data-testid={`link-social-${index}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors"
                    data-testid={`link-product-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors"
                    data-testid={`link-company-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors"
                    data-testid={`link-support-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors"
                    data-testid={`link-legal-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p data-testid="text-copyright">
              © 2025 BiOptimizers USA, Inc. All rights reserved.
            </p>
            <p className="text-slate-400">
              US Patent No: 5.895.758
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-400">
            <p>
              <strong>FTC Legal Disclaimer:</strong> The results described are not typical 
              and vary based on a variety of factors.
            </p>
            <p>
              These statements have not been evaluated by the Food and Drug Administration. This product is not 
              intended to diagnose, treat, cure or prevent any disease.
            </p>
            <p>
              <strong>Warning:</strong> Our product should not be used by children under 18 years of age, 
              nor by pregnant or nursing women. Always consult a physician before taking any supplement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
