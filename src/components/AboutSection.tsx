import React from 'react';
import { Lightbulb, Shield, Clock, Users, Award, Target } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering modern construction techniques and sustainable building practices.',
  },
  {
    icon: Shield,
    title: 'Structural Excellence',
    description: 'Delivering buildings that stand the test of time with superior engineering.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Committed to completing every project on schedule without compromising quality.',
  },
  {
    icon: Users,
    title: 'Professional Workforce',
    description: 'A team of skilled professionals dedicated to craftsmanship and precision.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '∞', label: 'Success rate' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Expert Workers' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Building Excellence Since 2022
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
           Looking for a builders company you can trust for your construction or renovation needs? Look no further! At <strong className="text-foreground"> Witty Inventions Services Ltd</strong> we bring expertise,quality craftsmanship,and a 
            commmitment to excellence to every project. Whether you're dreaming of a new home,a stunning renovation,or commercial construction, our experienced team is here
             to make your vision a reality.Contact us today and see why we're the builders company of choice for projects that stands the test of time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-10">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-2">
            Our Core Values
          </h3>
          <p className="text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative mb-6 h-20 flex items-center justify-center perspective">
                {/* 3D Icon Container */}
                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300" style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(15deg) rotateY(-15deg)',
                }}>
                  {/* Back shadow layer for 3D depth */}
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md transform translate-z-0" style={{
                    transform: 'translateZ(-8px)',
                  }}></div>
                  
                  {/* Main icon background */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 shadow-lg" style={{
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.2)',
                  }}>
                    <value.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  
                  {/* Glossy shine effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, transparent 50%)',
                  }}></div>
                </div>
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20 group transition-transform duration-300 hover:scale-110" style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(15deg) rotateY(-15deg)',
            }}>
              {/* Back shadow layer for 3D depth */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" style={{
                transform: 'translateZ(-8px)',
              }}></div>
              
              {/* Main icon background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center hover:from-primary hover:to-primary/80 transition-all duration-300 shadow-lg" style={{
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.2)',
              }}>
                <Target className="w-10 h-10 text-primary hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              {/* Glossy shine effect */}
              <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-40 transition-opacity duration-300" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, transparent 50%)',
              }}></div>
            </div>
          </div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Our Mission
          </h3>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            To deliver exceptional construction services that exceed client expectations, 
            while maintaining the highest standards of safety, quality, and environmental responsibility. 
            We build not just structures, but lasting relationships founded on trust and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
