import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Benefícios", href: "#benefits" },
    { label: "Ingredientes", href: "#ingredients" },
    { label: "Como Usar", href: "#usage" },
    { label: "FAQ", href: "#faq" }
  ],
  company: [
    { label: "Sobre Nós", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contact" },
    { label: "Carreiras", href: "#careers" }
  ],
  support: [
    { label: "Central de Ajuda", href: "#help" },
    { label: "Rastreamento", href: "#tracking" },
    { label: "Devoluções", href: "#returns" },
    { label: "Garantia", href: "#warranty" }
  ],
  legal: [
    { label: "Privacidade", href: "#privacy" },
    { label: "Termos de Uso", href: "#terms" },
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
            <h3 className="text-xl font-bold text-white mb-4">Magnésio Premium</h3>
            <p className="text-sm mb-4">
              Transformando vidas através da saúde natural e bem-estar científico.
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
            <h4 className="font-semibold text-white mb-4">Produto</h4>
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
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
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
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
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

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p data-testid="text-copyright">
              © 2025 Magnésio Premium. Todos os direitos reservados.
            </p>
            <p className="text-slate-400">
              🏆 FDA Aprovado • GMP Certificado • Testado por Terceiros
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
