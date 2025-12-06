import React from 'react';
import { 
  Building, 
  PaintBucket, 
  Compass, 
  Ruler, 
  ClipboardList, 
  Shovel,
  Zap,
  Route,
  Paintbrush,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'Residential Construction',
    description: 'Custom homes, renovations, and residential additions built to your specifications with attention to detail.',
  },
  {
    icon: PaintBucket,
    title: 'Renovations & Remodeling',
    description: 'Transform your existing space with our expert renovation and remodeling services.',
  },
  {
    icon: Compass,
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and commercial facilities designed for functionality and efficiency.',
  },
  {
    icon: Ruler,
    title: 'Design & Planning',
    description: 'Complete design and planning services from concept to completion with 3D visualization.',
  },
  {
    icon: ClipboardList,
    title: 'General Contracting',
    description: 'Full-service general contracting for projects of all sizes with project management expertise.',
  },
  {
    icon: Zap,
    title: 'Maintenance & Repair',
    description: 'Ongoing maintenance and repair services to keep your property in excellent condition.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Finishing',
    description: 'Premium interior finishing including flooring, painting, and fixtures.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Control & Inspection',
    description: 'Rigorous quality assurance and inspection services throughout construction.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            We provide comprehensive construction and building solutions tailored 
            to meet the unique needs of each project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block p-8 md:p-10">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              We tailor our services to meet your specific project requirements. 
              Let's discuss how we can help.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
