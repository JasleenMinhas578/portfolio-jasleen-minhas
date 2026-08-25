import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Heart, Star } from 'lucide-react';
import mypic from '@/assets/mypic-final.png';

const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div 
    className="absolute animate-float opacity-20"
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('work-experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16 bg-section-hero">
      {/* Floating Background Elements */}
      <FloatingElement delay={0}>
        <Star className="w-8 h-8 text-primary/30" style={{ top: '10%', left: '15%' }} />
      </FloatingElement>
      
      <FloatingElement delay={1}>
        <Sparkles className="w-6 h-6 text-accent/40" style={{ top: '20%', right: '20%' }} />
      </FloatingElement>
      
      <FloatingElement delay={2}>
        <Heart className="w-5 h-5 text-secondary/50" style={{ bottom: '30%', left: '10%' }} />
      </FloatingElement>

      <FloatingElement delay={0.5}>
        <div className="w-3 h-3 rounded-full bg-primary/20" style={{ top: '60%', right: '15%' }} />
      </FloatingElement>

      <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Profile Image */}
        <div className="relative mb-12 mt-12">
          <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden glow-strong ">
            <img
              src={mypic}
              
              alt="Jasleen Minhas - Software Developer"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute inset-0 w-64 h-64 mx-auto rounded-full border-4 border-primary/20" />
        </div>

        {/* Main Headline */}
        <div className="space-y-6 mb-12">
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              Hi, I'm Jasleen Minhas {' '}
              <span className="inline-block animate-bounce-gentle text-4xl">👋</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-muted-foreground">
              <span className="text-gradient font-bold">Software Developer</span>
              {' '}|{' '}
              <span className="text-gradient font-bold">Cloud & DevOps</span>
              {' '}|{' '}
              <span className="text-gradient font-bold">Full-Stack & Applied AI</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Full-stack and cloud-native - I build features end to end and replace slow manual processes with systems that scale.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToAbout}
            className="btn-gradient sparkle group"
          >
            See My Work ✨
          </button>
          
          <a
            href="/Jasleen-minhas-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient sparkle group"
            aria-label="Download Resume"
            download
          >
            Download Resume 📄
          </a>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/JasleenMinhas578" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:animate-bounce-gentle" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jasleen-minhas07/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:animate-bounce-gentle" />
            </a>
            <a
              href="mailto:jasleen.minhas07@gmail.com"
              className="btn-secondary group"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce-gentle" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={scrollToAbout}
            className="group animate-bounce-gentle"
            aria-label="Scroll to About Section"
          >
            <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300">
              <span className="text-sm font-medium">Discover My Story</span>
              <ChevronDown className="w-6 h-6 group-hover:animate-bounce-gentle" />
            </div>
          </button>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </section>
  );
}