import { GraduationCap, MapPin, Heart, Palette, Music, Code, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    year: 'Early Years',
    title: 'Curious Mind in India',
    description: 'Growing up with an insatiable curiosity about how things work, spending hours sketching, painting, and wondering about the magic behind computers.',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-gradient-accent'
  },
  {
    year: '2020-2024',
    title: 'Bachelor\'s in AI & Machine Learning',
    description: 'Graduated as Gold Medalist from India, diving deep into the fascinating world of artificial intelligence while nurturing my creative passions.',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  },
  {
    year: '2024',
    title: 'Journey to Canada',
    description: 'Made the exciting leap to St. John\'s, Newfoundland to pursue Master\'s in Computer Science at Memorial University, embracing new adventures.',
    icon: <MapPin className="w-6 h-6" />,
    color: 'bg-gradient-secondary'
  },
  {
    year: 'Present',
    title: 'Weaving Dreams & Code',
    description: 'Currently blending my love for machine learning with creative expression, building AI solutions while dancing, painting, and exploring storytelling.',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-gradient-primary'
  }
];

const passions = [
  { name: 'Painting', icon: <Palette className="w-5 h-5" />, description: 'Watercolors & Digital Art' },
  { name: 'Dancing', icon: <Music className="w-5 h-5" />, description: 'Bharatanatyam & Contemporary' },
  { name: 'Sketching', icon: <Heart className="w-5 h-5" />, description: 'Capturing life\'s moments' },
  { name: 'AI Research', icon: <Code className="w-5 h-5" />, description: 'Exploring the future' }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            My Story
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A journey of curiosity, creativity, and code – where every experience shapes the next chapter
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full opacity-20" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 md:gap-16`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="card-glow group hover:scale-[1.02] transition-transform duration-500">
                    <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${event.color} text-white`}>
                      {event.icon}
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-primary/70 uppercase tracking-wide">
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

        {/* Passions & Interests */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">
            Beyond the Code
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            When I'm not training neural networks, you'll find me expressing creativity through various forms of art and movement
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {passions.map((passion, index) => (
              <div 
                key={index}
                className="card-glow text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {passion.icon}
                </div>
                <h4 className="font-bold mb-2 text-lg">
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
      <div className="absolute top-40 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}