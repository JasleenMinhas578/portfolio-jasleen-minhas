import { GraduationCap, MapPin, Heart, Trophy, Baby, Award, Plane, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const timelineEvents = [
  {
    year: 'Born in 2002',
    title: 'Curious Mind in India',
    description: 'Growing up with an insatiable curiosity about how things work, spending hours sketching 🖌️, painting 🎨, and wondering about the magic behind computers 💻.',
    icon: <Baby className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  },
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
    icon: <GraduationCap className="w-6 h-6" />,
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
    title: 'Weaving Dreams & Code',
    description: 'Currently blending my love for machine learning 🧠 with creative expression, building AI solutions while dancing 💃, painting 🎨, and exploring storytelling 📚.',
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
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A journey of curiosity, creativity, and code – where every experience shapes the next chapter
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className={`relative mb-20 scroll-slide-up ${timelineVisible ? 'animate' : ''}`}>
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full opacity-20" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 md:gap-16 timeline-animate ${timelineVisible ? 'animate' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="card-glow group hover:scale-[1.02] transition-transform duration-500">
                    <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${event.color} text-white`}>
                      {event.icon}
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-1 mb-2">
                        {event.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-lg animate-pulse-soft" />
                  {index === timelineEvents.length - 1 && (
                    <div className="absolute -top-2 -left-2">
                      <Trophy className="w-8 h-8 text-accent animate-bounce-gentle" />
                    </div>
                  )}
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 max-w-lg" />
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