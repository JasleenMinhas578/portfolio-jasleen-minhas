import { Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { elementRef: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <footer ref={footerRef} className={`bg-gray-700 text-white py-12 relative overflow-hidden scroll-fade-in ${footerVisible ? 'animate' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Made with Love Text */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-lg md:text-xl font-medium">Made with</span>
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <span className="text-lg md:text-xl font-medium">by</span>
          </div>
          
          {/* Name */}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Jasleen Minhas
          </h3>
          
          {/* Subtitle  */}
          {/* <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Machine Learning Engineer & Creative Explorer
          </p>  */}
          
          {/* Decorative Line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 mb-6"></div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
