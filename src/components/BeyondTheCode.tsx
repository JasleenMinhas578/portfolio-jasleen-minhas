import { Brain, Palette, Music, Mountain } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const passions = [
  {
    name: 'Sketching',
    icon: <Palette className="w-6 h-6" />,
    description: 'Pencil drawings and watercolors - slowing down and making something with my hands.',
    color: 'bg-gradient-primary'
  },
  {
    name: 'Hiking',
    icon: <Mountain className="w-6 h-6" />,
    description: 'Chasing trails and wide-open landscapes - where most of my best ideas actually happen.',
    color: 'bg-gradient-primary'
  },
  {
    name: 'Dancing',
    icon: <Music className="w-6 h-6" />,
    description: 'Bhangra and contemporary - movement as a way to reset and stay grounded.',
    color: 'bg-gradient-primary'
  },
  {
    name: 'AI Research',
    icon: <Brain className="w-6 h-6" />,
    description: 'Reading papers, building experiments, and staying curious about where the field is heading.',
    color: 'bg-gradient-primary'
  }
];

export default function BeyondTheCode() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: passionsRef, isVisible: passionsVisible } = useScrollAnimation();

  return (
    <section id="beyond-the-code" className="py-24 px-6 relative bg-section-beyond">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-12 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Beyond the Code
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            When I'm not writing code, you'll find me sketching, on a trail, or on the dance floor
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            I moved from India to St. John's, Newfoundland to pursue my Master's - and the people, the coastline, and the cold have all made me a better problem-solver. These aren't hobbies tacked onto a resume - they're part of how I work.
          </p>
        </div>

        {/* Passions Grid */}
        <div ref={passionsRef} className={`scroll-scale-in ${passionsVisible ? 'animate' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {passions.map((passion, index) => (
              <div
                key={index}
                className="card-glow !p-5 text-center group hover:scale-[1.03] transition-transform duration-150"
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-full mb-3 ${passion.color} text-white group-hover:scale-110 transition-transform duration-150`}>
                  {passion.icon}
                </div>
                <h4 className="font-bold text-base mb-1">
                  {passion.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
