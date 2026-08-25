import { Trophy, Award, Plane, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const timelineEvents = [
  {
    year: '2020',
    title: 'Completed my High School',
    description: 'Secured 96.6% in my High School boards 🏆, earning the title of District Topper 🥇.',
    icon: <Award className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  },
  {
    year: '2020-2024',
    title: 'Bachelor\'s in AI & Machine Learning',
    description: 'Graduated as Gold Medalist 🏅 from Chandigarh University, diving deep into the fascinating world of artificial intelligence 🤖 while nurturing my creative passions ✨.',
    icon: <Trophy className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  },
  {
    year: '2024',
    title: 'Journey to Canada',
    description: 'Made the exciting leap to St. John\'s, Newfoundland 🇨🇦 to pursue Master\'s in Computer Science at Memorial University, embracing new adventures 🌟.',
    icon: <Plane className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  },
  {
    year: 'Present',
    title: 'Building End to End',
    description: 'Software developer at Enaimco, owning features from Azure infrastructure and Terraform to React interfaces and AI tooling. Pursuing a Master\'s in CS at Memorial University while building Math-MATE and shipping real-world systems 🚀.',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  }
];



export default function About() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6 relative bg-section-about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            My Story
          </h2>
        </div>

        {/* Timeline Row */}
        <div ref={timelineRef} className={`scroll-fade-in ${timelineVisible ? 'animate' : ''}`}>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-stretch flex-1 min-w-0">
                {/* Card */}
                <div
                  className={`card-glow flex-1 w-full h-full group hover:scale-[1.02] transition-transform duration-500 timeline-animate ${timelineVisible ? 'animate' : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${event.color} text-white`}>
                    {event.icon}
                  </div>
                  <span className="block text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Arrow between cards */}
                {index < timelineEvents.length - 1 && (
                  <>
                    {/* Desktop: right arrow */}
                    <div className="hidden md:flex items-center justify-center px-2 flex-shrink-0 self-center h-full">
                      <ChevronRight className="w-7 h-7 text-primary/50" />
                    </div>
                    {/* Mobile: down arrow */}
                    <div className="flex md:hidden items-center justify-center py-1 self-center">
                      <ChevronDown className="w-7 h-7 text-primary/50" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}