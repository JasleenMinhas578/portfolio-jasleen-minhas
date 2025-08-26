import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, Sparkles, Heart, Star } from 'lucide-react';
import mypicFinal from '@/assets/mypic-final.png';

// https://dashboard.emailjs.com/admin

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
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
              src={mypicFinal}
              
              alt="Jasleen Minhas - ML Engineer & Creative Soul"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute inset-0 w-64 h-64 mx-auto rounded-full border-4 border-primary/20" 
               style={{  }} />
        </div>

        {/* Main Headline */}
        <div className="space-y-6 mb-12">
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 leading-tight">
              Hi, I'm Jasleen Minhas {' '}
              <span className="inline-block animate-bounce-gentle text-4xl">👋</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-muted-foreground">
              Enthusiastic{' '}
              <span className="text-gradient font-bold">Machine Learning Engineer</span>
              {' '}&{' '}
              <span className="text-gradient font-bold">Data Analyst</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From India 🇮🇳 to Canada 🇨🇦, pursuing a Master's in Computer Science at Memorial University, building intelligent solutions and exploring creativity through the intersection of Technology and Data.
              {/* From India to Canada, I'm weaving together{' '} */}
              {/* <span className="sparkle px-2 py-1 rounded-lg bg-accent/20 text-accent-foreground font-medium">AI</span>,{' '}
              <span className="sparkle px-2 py-1 rounded-lg bg-secondary/30 text-secondary-foreground font-medium">creativity</span>, and{' '}
              <span className="sparkle px-2 py-1 rounded-lg bg-primary/20 text-primary font-medium">storytelling</span> */}
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
            Explore My Journey ✨
            {/* <Sparkles className="ml-3 w-5 h-5 group-hover:animate-bounce-gentle" /> */}
          </button>
          
          <a 
            href="/Jasleen-minhas-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            // className="btn-secondary group"
                        className="btn-gradient sparkle group"
            aria-label="View Resume"
          >
            {/* <svg className="w-5 h-5 mr-3 group-hover:animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg> */}
            View Resume 📄
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
            <a 
              href="https://instagram.com/jasleen_1410" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5 group-hover:animate-bounce-gentle" />
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