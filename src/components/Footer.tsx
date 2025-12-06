import React from 'react';
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Residential Construction',
  'Renovations & Remodeling',
  'Design & Planning',
  'Maintenance & Repair',
  'Interior Finishing',
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={logo} alt="Witty Inventions Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg block leading-tight">
                  Witty Inventions
                </span>
                <span className="text-xs text-background/60 tracking-wider">
                  SERVICES LTD
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Building dreams into reality with innovation, excellence, and unwavering 
              commitment to quality since 2022.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm text-background/70">
              <p>
                48, Carrack House, Saltford Close, Da8 Isa,
                <br />
                Erith, UK
              </p>
              <p>
                <a href="tel:+2348001234567" className="hover:text-primary transition-colors">
                  +01322561899
                </a>
              </p>
              <p>
                <a href="mailto:wittyinventions22@gmail.com" className="hover:text-primary transition-colors">
                 wittyinventions22@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © {new Date().getFullYear()} Witty Inventions Services Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90"
              >
                <ArrowUp className="w-5 h-5 text-primary-foreground" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
