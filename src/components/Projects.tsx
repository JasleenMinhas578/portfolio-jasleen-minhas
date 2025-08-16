import { ExternalLink, Github, Bot, Database, Globe, Calculator, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'Semantic Book Recommender with Generative AI',
    description: 'An intelligent book recommendation system leveraging transformer models and semantic search to understand user preferences and suggest books with deep contextual understanding.',
    tags: ['AI Magic ✨', 'NLP', 'Transformers', 'Python'],
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/jasleen/book-recommender',
    demo: 'https://book-ai.jasleen.dev'
  },
  {
    title: 'Single-Image Self-Supervised Learning Model',
    description: 'Revolutionary approach to computer vision using self-supervised learning techniques that can learn meaningful representations from just a single image.',
    tags: ['Self-Supervised Genius 🤖', 'Computer Vision', 'PyTorch', 'Deep Learning'],
    icon: <Bot className="w-6 h-6" />,
    color: 'bg-gradient-secondary',
    github: 'https://github.com/jasleen/ssl-single-image',
    demo: 'https://ssl-demo.jasleen.dev'
  },
  {
    title: 'Finance Tracker WebApp',
    description: 'Beautiful and intuitive personal finance management application with real-time analytics, budget tracking, and smart spending insights.',
    tags: ['Data Meets Design 🎨', 'React', 'Firebase', 'D3.js'],
    icon: <Database className="w-6 h-6" />,
    color: 'bg-gradient-accent',
    github: 'https://github.com/jasleen/finance-tracker',
    demo: 'https://finance.jasleen.dev'
  },
  {
    title: 'AdSnap Studio',
    description: 'AI-powered creative studio for generating and optimizing digital advertisements with real-time A/B testing and performance analytics.',
    tags: ['Creative AI ⚡', 'Computer Vision', 'React', 'TensorFlow'],
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/jasleen/adsnap-studio',
    demo: 'https://adsnap.jasleen.dev'
  },
  {
    title: 'Math-MATE Educational Website',
    description: 'Interactive mathematics learning platform with gamified lessons, AI-powered problem solving, and adaptive learning paths for students.',
    tags: ['EdTech Innovation 📚', 'React', 'Node.js', 'AI Tutoring'],
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-gradient-secondary',
    github: 'https://github.com/jasleen/math-mate',
    demo: 'https://mathmate.jasleen.dev'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            My Creations
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A curated collection of projects where technology meets creativity, each solving real problems with innovative approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glow group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 group/link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5 group-hover/link:animate-bounce-gentle" />
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 group/link"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:animate-bounce-gentle" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="skill-badge text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-glow inline-block">
            <p className="text-lg text-muted-foreground mb-4">
              Excited to see more? Check out my GitHub for the complete collection!
            </p>
            <a
              href="https://github.com/jasleen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient sparkle group inline-flex items-center"
            >
              <Github className="mr-3 w-5 h-5" />
              Explore All Projects
              <ExternalLink className="ml-3 w-4 h-4 group-hover:animate-bounce-gentle" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
}