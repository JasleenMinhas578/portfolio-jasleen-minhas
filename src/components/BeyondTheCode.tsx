import { Brain, Palette, Music } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const passions = [
  { name: 'Painting', icon: <Palette className="w-5 h-5" />, description: 'Watercolors & Digital Art 🎨' },
  { name: 'Dancing', icon: <Music className="w-5 h-5" />, description: 'Bharatanatyam & Contemporary 💃' },
  { name: 'Sketching', icon: <Palette className="w-5 h-5" />, description: 'Capturing life\'s moments ✏️' },
  { name: 'AI Research', icon: <Brain className="w-5 h-5" />, description: 'Exploring the future 🚀' }
];

export default function BeyondTheCode() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: passionsRef, isVisible: passionsVisible } = useScrollAnimation();

  return (
    <section id="beyond-the-code" className="py-24 px-6 relative bg-section-beyond">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Beyond the Code
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            When I'm not crafting algorithms, you'll find me exploring the intersection of art and technology
          </p>
        </div>

        {/* Passions Grid */}
        <div ref={passionsRef} className={`scroll-scale-in ${passionsVisible ? 'animate' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {passions.map((passion, index) => (
              <div
                key={index}
                className="card-glow text-center group hover:scale-105 transition-all duration-500"
                style={{ 
                  opacity: passionsVisible ? 1 : 0,
                  transform: passionsVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-muted/20 mb-4 group-hover:animate-bounce-gentle">
                  {passion.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {passion.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {passion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-60 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}
