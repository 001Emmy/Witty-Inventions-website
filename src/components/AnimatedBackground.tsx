import React from 'react';
import { 
  Building2, 
  Hammer, 
  HardHat, 
  Wrench, 
  Ruler, 
  Home,
  Warehouse,
  Factory,
  Layers,
  Square
} from 'lucide-react';

const icons = [
  { Icon: Building2, delay: 0, duration: 20, startX: 5, startY: 10 },
  { Icon: Hammer, delay: 3, duration: 25, startX: 15, startY: 30 },
  { Icon: HardHat, delay: 6, duration: 22, startX: 25, startY: 50 },
  { Icon: Wrench, delay: 9, duration: 28, startX: 35, startY: 20 },
  { Icon: Ruler, delay: 12, duration: 24, startX: 45, startY: 70 },
  { Icon: Home, delay: 15, duration: 26, startX: 55, startY: 40 },
  { Icon: Warehouse, delay: 18, duration: 21, startX: 65, startY: 60 },
  { Icon: Factory, delay: 21, duration: 27, startX: 75, startY: 15 },
  { Icon: Layers, delay: 4, duration: 23, startX: 85, startY: 45 },
  { Icon: Square, delay: 7, duration: 29, startX: 90, startY: 80 },
  { Icon: Building2, delay: 10, duration: 19, startX: 10, startY: 75 },
  { Icon: Hammer, delay: 14, duration: 30, startX: 30, startY: 85 },
];

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85" />
      
      {/* Animated icons */}
      {icons.map(({ Icon, delay, duration, startX, startY }, index) => (
        <div
          key={index}
          className="absolute opacity-10 dark:opacity-15"
          style={{
            left: `${startX}%`,
            top: `${startY}%`,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon 
            className="w-8 h-8 md:w-12 md:h-12 text-primary-foreground" 
            strokeWidth={1}
          />
        </div>
      ))}

      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary-foreground/10 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-primary-foreground/10 rotate-12 animate-float-slow" />
    </div>
  );
};

export default AnimatedBackground;
