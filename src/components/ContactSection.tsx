import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import logo from '@/assets/logo.png';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '48, Carrack House , Saltford Close, Da8 Isa,Erith, UK',
    link: 'https://maps.google.com',
    isExternal: true,
  },
  {
    icon: Phone,
    label: 'Phone Numbers',
    value: '+01322561899',
    link: 'tel:01322561899',
    isExternal: false,
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'wittyinventions22@gmail.com',
    link: 'mailto:wittyinventions22@gmail.com',
    isExternal: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us on WhatsApp',
    link: 'https://wa.me/01322561899',
    isExternal: true,
  },
  {
    icon: Clock,
    label: 'Operating Hours',
    value: 'Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
    link: null,
    isExternal: false,
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Contact Us
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ready to start your project? Reach out to us through any of the channels below. 
            We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Card */}
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Green accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src={logo} alt="Witty Inventions Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Witty Inventions Services Ltd
                </h3>
                <p className="text-muted-foreground text-sm">Construction & Building Solutions</p>
              </div>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-200 whitespace-pre-line flex items-start gap-1 group"
                      >
                        <span>{item.value}</span>
                        {item.isExternal && (
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    ) : (
                      <p className="text-foreground whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  >
                    <span className="capitalize text-xs font-bold">{social[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.5234567890!2d0.1234567!3d51.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a5b5b5b5b5b5%3A0x1234567890abcdef!2s48%20Carrack%20House%2C%20Saltford%20Close%2C%20Erith%20DA8%201SA!5e0!3m2!1sen!2suk!4v1699000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
