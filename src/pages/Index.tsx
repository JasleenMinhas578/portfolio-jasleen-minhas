import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import BeyondTheCode from '@/components/BeyondTheCode';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
      <BeyondTheCode />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
