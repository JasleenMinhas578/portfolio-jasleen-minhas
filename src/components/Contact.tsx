import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, Heart, MapPin, Hand } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    url: 'https://github.com/JasleenMinhas578',
    color: 'hover:text-foreground',
    description: 'Code & Projects'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    url: 'https://www.linkedin.com/in/jasleen-minhas07/',
    color: 'hover:text-primary',
    description: 'Professional Network'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/jasleen_1410',
    color: 'hover:text-accent',
    description: 'Creative Journey'
  },
  {
    name: 'Email',
    icon: <Mail className="w-6 h-6" />,
    url: 'mailto:jasleen.minhas07@gmail.com',
    color: 'hover:text-accent',
    description: 'Direct Contact'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
  const { elementRef: socialRef, isVisible: socialVisible } = useScrollAnimation();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("WBKjmBcbTiQkX5mty"); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'jasleen.minhas07@gmail.com'
      };

      const response = await emailjs.send(
        'service_s31a10o', // Replace with your EmailJS service ID
        'template_fnz2qw5', // Replace with your EmailJS template ID
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent! ✨",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or reach out via email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-section-contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Ready to build something amazing together? I'd love to hear about your ideas, collaborate on projects, or just have a chat about AI, creativity, and the future!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className={`card-glow scroll-slide-left ${formVisible ? 'animate' : ''}`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-primary text-white mb-4 animate-bounce-gentle">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-muted-foreground">Let's start a conversation!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div ref={socialRef} className={`scroll-slide-right ${socialVisible ? 'animate' : ''}`}>
            <div className="card-glow mb-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-primary text-white mb-4 animate-bounce-gentle">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
                <p className="text-muted-foreground">Let's connect and create something amazing!</p>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-2">Currently based in</p>
                  <p className="text-xl font-semibold text-foreground">St. John's, Newfoundland, Canada 🇨🇦 </p>
                </div>

                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-2">Available for</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary/100 border border-primary/100">
                      Full-time Opportunities
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-secondary/100 border border-secondary/100">
                      Freelance Projects
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-accent/20 text-accent/100 border border-accent/100">
                      Collaborations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-glow">
            <div className="text-center ">
             <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-primary text-white mb-4 animate-bounce-gentle">
                  <Hand className="w-6 h-6" />
                </div>
                </div>

              <h3 className="text-3xl font-bold mb-6 text-center ">Connect With Me </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group ${link.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-muted-foreground">{link.description}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Message */}
            {/* <div className="card-glow text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
              <div className="flex justify-center mb-4">
                <Heart className="w-8 h-8 text-primary animate-bounce-gentle" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Let's Build Something Amazing!
              </h3>
              <p className="text-muted-foreground">
                Whether it's AI, data, or creative projects, I'm excited to collaborate and bring ideas to life.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}