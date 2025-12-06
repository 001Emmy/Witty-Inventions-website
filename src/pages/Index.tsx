import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Witty Inventions Services Ltd | Construction & Building Solutions</title>
        <meta 
          name="description" 
          content="Witty Inventions Services Ltd - Leading construction company in Nigeria offering innovative building construction, renovations, architectural planning, and project management services since 2022." 
        />
        <meta name="keywords" content="construction, building, renovation, architectural planning, Nigeria, Lagos, Witty Inventions" />
        <meta property="og:title" content="Witty Inventions Services Ltd | Construction & Building Solutions" />
        <meta property="og:description" content="Innovative Construction. Reliable Delivery. Building dreams into reality since 2022." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wittyinventions.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsGallery />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
