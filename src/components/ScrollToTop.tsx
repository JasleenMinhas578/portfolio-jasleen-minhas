import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-primary text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group animate-bounce-gentle"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce-gentle" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
          
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
