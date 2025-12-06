import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'A Bar',
    category: 'Commercial',
    description: 'A state-of-the-art fully furnished bar',
    image: '/src/images/IMG-20250903-WA0020.jpg',
  },
  {
    id: 2,
    title: 'Home refurbishment',
    category: 'Residential',
    description: 'Luxury residential development',
    image: '/src/images/IMG-20250903-WA0021.jpg',
  },
  {
    id: 3,
    title: 'Flooring',
    category: 'Residential',
    description: 'Total remodelling of the floors, More unique and classy.',
    image: '/src/images/IMG-20250903-WA0022.jpg',
  },
  {
    id: 4,
    title: 'Home refurbishment II',
    category: 'Residential',
    description: 'Modern retail complex with entertainment facilities.',
    image: '/src/images/IMG-20250903-WA0023.jpg',
  },
  {
    id: 5,
    title: 'Interior Decoration',
    category: 'Residential',
    description: 'Custom-built interior designs with premium finishes and landscaping.',
    image: '/src/images/IMG-20250903-WA0024.jpg',
  },
  {
    id: 6,
    title: 'Home maintenance',
    category: 'Residential',
    description: 'We do the work so you dont have to',
    image: '/src/images/IMG-20250903-WA0025.jpg',
  },
  {
    id: 7,
    title: 'Fencing',
    category: 'Residential',
    description: 'Beautiful and secure fencing solutions for your property.',
    image: '/src/images/IMG-20250903-WA0026.jpg',
  },
  {
    id: 8,
    title: 'Complete home renovation',
    category: 'Residential',
    description: 'Complete renovation to give your home a fresh,new look.',
    image: '/src/images/IMG-20250903-WA0027.jpg',
  },
  {
    id: 9,
    title: 'Finished home renovation',
    category: 'Residential',
    description: 'Luxury upgrade at low cost',
    image: '/src/images/IMG-20250903-WA0028.jpg',
  },
  {
    id: 10,
    title: 'Interior Design',
    category: 'Residential',
    description: 'Designs to match your style and preference',
    image: '/src/images/IMG-20250903-WA0029.jpg',
  },
  {
    id: 11,
    title: 'Design & Planning',
    category: 'Residential',
    description: 'Meticulous planning and innovative designs for your dream home.',
    image: '/src/images/IMG-20250903-WA0030.jpg',
  },
  {
    id: 12,
    title: 'Community Center',
    category: 'Public',
    description: 'Multi-purpose community facility for social gatherings.',
    image: '/src/images/IMG-20250903-WA0031.jpg',
  },
];

const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const prevProject = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <section id="projects" className="section-padding bg-background relative">
      {/* Gradient transition from hero - eased and softer */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-primary/3 via-primary/1 to-transparent pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore our diverse portfolio of completed construction projects, 
            showcasing our expertise across various sectors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(project, index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-5xl w-full bg-card rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background rounded-full"
                onClick={closeLightbox}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full"
                onClick={prevProject}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full"
                onClick={nextProject}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Content */}
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 w-fit">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-card-foreground mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    Project {currentIndex + 1} of {projects.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
