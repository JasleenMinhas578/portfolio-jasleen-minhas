import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, Heart, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    url: 'https://github.com/jasleen',
    color: 'hover:text-gray-700',
    description: 'Code & Projects'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    url: 'https://linkedin.com/in/jasleen-minhas',
    color: 'hover:text-blue-600',
    description: 'Professional Network'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://instagram.com/jasleen',
    color: 'hover:text-pink-600',
    description: 'Creative Journey'
  },
  {
    name: 'Email',
    icon: <Mail className="w-6 h-6" />,
    url: 'mailto:jasleen@example.com',
    color: 'hover:text-green-600',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! ✨",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Ready to build something amazing together? I'd love to hear about your ideas, collaborate on projects, or just have a chat about AI, creativity, and the future!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-glow">
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
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your awesome name"
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
                    className="w-full px-4 py-3 rounded-2xl border border-input bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
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
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello! ✨"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:animate-bounce-gentle" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Location */}
            <div className="card-glow text-center">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-secondary text-primary mb-4 animate-pulse-soft">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Currently Based In</h3>
              <p className="text-muted-foreground text-lg">
                St. John's, Newfoundland, Canada 🇨🇦
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Pursuing Master's in Computer Science at Memorial University
              </p>
            </div>

            {/* Social Links */}
            <div className="card-glow">
              <h3 className="text-2xl font-bold text-center mb-8">
                Find Me Around the Web
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 rounded-2xl bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-105 text-center ${social.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="group-hover:animate-bounce-gentle mb-3">
                      {social.icon}
                    </div>
                    <h4 className="font-semibold mb-1">{social.name}</h4>
                    <p className="text-xs text-muted-foreground">{social.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun CTA */}
            <div className="card-glow text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
              <div className="flex justify-center mb-4">
                <Heart className="w-8 h-8 text-red-500 animate-bounce-gentle" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground">
                Whether it's discussing AI breakthroughs, collaborating on projects, or sharing creative ideas – I'm always excited to connect with fellow innovators and dreamers!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-10 h-10 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}