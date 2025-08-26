import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'work-experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-primary/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-sm">JM</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl transition-colors duration-300 group-hover:text-primary ${
                isScrolled ? 'text-white' : 'text-foreground'
              }`}>
                Jasleen Minhas
              </span>
              <span className={`text-xs -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-gray-300' : 'text-muted-foreground'
              }`}>
                Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group overflow-hidden ${
                  isScrolled 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <div className="w-px h-6 bg-border mx-2"></div>
            <a 
              href="/Jasleen-minhas-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium group overflow-hidden ${
                isScrolled 
                  ? 'text-gray-200 hover:text-white bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30' 
                  : 'text-foreground hover:text-primary bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 group"
            aria-label="Toggle mobile menu"
          >
            <div className="relative">
              {isOpen ? (
                <X className={`w-6 h-6 transition-colors duration-300 group-hover:text-primary ${
                  isScrolled ? 'text-gray-200' : 'text-foreground'
                }`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors duration-300 group-hover:text-primary ${
                  isScrolled ? 'text-gray-200' : 'text-foreground'
                }`} />
              )}
              <div className="absolute -inset-2 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 font-medium group ${
                  isScrolled 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <span className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {item.name}
                </span>
              </button>
            ))}
            <div className="w-full h-px bg-border/50 my-2"></div>
            <a 
              href="/Jasleen-minhas-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`block w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 font-medium group ${
                isScrolled 
                  ? 'text-gray-200 hover:text-white' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-4 h-4" />
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
