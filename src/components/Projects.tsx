import { ExternalLink, Github, Bot, Database, Globe, Calculator, BookOpen, X, Users, Shield, Wallet } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import bookRecommenderImage from '@/assets/demo-llm-book-recommender.png';
import sslModelImage from '@/assets/demo-ssl-model.png';
import fraudDetectionImage from '@/assets/demo-fraud-detection.png';
import studentStressImage from '@/assets/demo-student-stress-eda.png';
import mathMateImage from '@/assets/demo-math-mate.png';
import budgetBuddyImage from '@/assets/demo-budget-buddy.png';


const projects = [
  {
    title: 'Math-MATE',
    description: 'Accessible math learning platform for K1-K3 students with learning disabilities. Sole developer -- built from data modeling through accessible frontend, testing, and CI/CD. Live and in testing with students.',
    fullDescription: 'Math-MATE is a full-stack educational platform built for the Learning Disabilities Association of Newfoundland and Labrador. As sole developer, I designed the data model, built Supabase backend services (auth, REST APIs, input validation), and implemented the entire React + Next.js frontend with TailwindCSS. The platform follows WCAG accessibility guidelines to serve young children with learning needs. Features include interactive math lessons, real-time progress tracking, dynamic content management, and CI/CD for continuous delivery. Now live and in testing with students. (Source code is private — client project for LDANL.)',
    tags: ['Full-Stack', 'EdTech', 'Accessibility', 'React', 'Next.js'],
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: '',
    demo: 'https://mathmate.ldanl.ca/',
    image: mathMateImage,
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'CI/CD'],
    features: ['Accessible UI (WCAG)', 'Real-time Progress Tracking', 'Interactive Math Lessons', 'Authentication', 'Dynamic Content Management']
  },
  {
    title: 'Budget Buddy',
    description: 'Personal budgeting app with expense tracking, category visualizations, and real-time data sync. Built with React, Firebase, and Chart.js.',
    fullDescription: 'Budget Buddy is a React + Firebase web application that helps users manage expenses and budgets. Features include expense tracking, category-wise visualizations with Chart.js, Firebase authentication, PDF report generation, and real-time data updates. The project followed software design principles (SOLID, UML modeling) and was thoroughly tested (unit, system, exploratory) for robustness and usability.',
    tags: ['Full-Stack', 'React', 'Firebase', 'Chart.js'],
    icon: <Wallet className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/BudgetBuddy',
    demo: 'https://budget-buddy-mun.vercel.app/',
    image: budgetBuddyImage,
    technologies: ['React', 'Firebase', 'Chart.js', 'Material-UI', 'Jest'],
    features: ['Expense Tracking', 'Budget Management', 'Authentication', 'PDF Export', 'Real-time Visualization']
  },
  {
    title: 'Semantic Book Recommender with Generative AI',
    description: 'Intelligent book recommendation system using transformer models, FAISS vector search, and sentiment analysis.',
    fullDescription: 'This project implements a semantic book recommender using Python, Hugging Face, FAISS, and Gradio. It transforms book descriptions into embeddings and uses FAISS vector search to find contextually similar books. Features include real-time recommendations, zero-shot classification for genre filtering, and sentiment analysis for refining suggestions. The interactive Gradio interface makes it easy for users to explore personalized book matches.',
    tags: ['AI', 'NLP', 'Transformers', 'Python'],
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/llm-semantic-book-recommender',
    demo: '',
    image: bookRecommenderImage,
    technologies: ['Python', 'Hugging Face', 'FAISS', 'Gradio'],
    features: ['Semantic Search', 'Real-time Recommendations', 'Zero-Shot Genre Filtering', 'Sentiment Analysis']
  },
  {
    title: 'Single-Image Self-Supervised Learning Model',
    description: 'Self-supervised learning approach that learns meaningful representations from a single noisy image using contrastive methods.',
    fullDescription: 'This research project implements self-supervised learning techniques to extract meaningful features from just a single image. The system uses advanced data augmentation strategies, contrastive learning, and novel loss functions to maximize information extraction from minimal data. This approach has implications for domains where data is scarce, such as medical imaging and satellite imagery.',
    tags: ['Computer Vision', 'PyTorch', 'Deep Learning', 'Research'],
    icon: <Bot className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/SelfSupervised-SingleNoisyImage-Denoising-SMU',
    demo: '',
    image: sslModelImage,
    technologies: ['PyTorch', 'OpenCV', 'NumPy', 'Matplotlib', 'Jupyter'],
    features: ['Single-Image Learning', 'Contrastive Learning', 'Data Augmentation', 'Feature Extraction', 'Transfer Learning']
  },
  {
    title: 'Fraud Detection with Clustering & Anomaly Analysis',
    description: 'Unsupervised learning approach to detect fraudulent financial transactions using KMeans, DBSCAN, and Isolation Forest.',
    fullDescription: 'This project applies unsupervised learning methods -- KMeans, DBSCAN, Isolation Forest, and LOF -- to identify anomalies in financial transaction data. Conducted exploratory data analysis with feature engineering, scaling, and visualization techniques to uncover rare transaction patterns.',
    tags: ['Fraud Detection', 'Unsupervised Learning', 'Python'],
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/fraud-detection-clustering-anomaly-analysis',
    demo: '',
    image: fraudDetectionImage,
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    features: ['KMeans Clustering', 'DBSCAN', 'Isolation Forest', 'Local Outlier Factor', 'EDA & Visualization', 'Anomaly Detection']
  },
  {
    title: 'Student Stress & Performance Insights',
    description: 'Classification models predicting student stress levels from lifestyle and academic data.',
    fullDescription: 'Exploratory data analysis on 2,000+ records of student lifestyle and academic data, uncovering correlations between study habits, sleep patterns, and stress levels. Built and evaluated Decision Tree, Random Forest, Logistic Regression, and Stacking Ensemble models.',
    tags: ['Data Analysis', 'Machine Learning', 'Classification', 'Python'],
    icon: <Users className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/student-stress-performance-insights',
    demo: '',
    image: studentStressImage,
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    features: ['Exploratory Data Analysis', 'Decision Tree', 'Random Forest', 'Logistic Regression', 'Stacking Ensemble', 'Feature Correlation Analysis']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);

    // // Small delay to ensure smooth animation
    // setTimeout(() => {
    //   setIsModalOpen(true);
    // }, 0.25);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <>
      <section id="projects" className="py-24 px-6 relative bg-section-projects">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Projects
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Projects I've built end to end, from idea to deployment
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-stagger ${projectsVisible ? 'animate' : ''}`}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-glow group hover:scale-[1.07] transition-all duration-500 relative overflow-hidden card-animate cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectModal(project)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 group/link"
                        aria-label={`View ${project.title} on GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5 group-hover/link:animate-bounce-gentle" />
                      </a>
                    )}
                    {project.demo && project.demo !== project.github && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 group/link"
                        aria-label={`View ${project.title} live demo`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:animate-bounce-gentle" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image Preview */}
                {project.image && (
                  <div className="mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Project Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Click hint */}
                <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to learn more
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="card-glow inline-block">
              <p className="text-lg text-muted-foreground mb-4">
                More projects on GitHub
              </p>
              <a
                href="https://github.com/JasleenMinhas578"
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

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 ${
            isModalOpen 
              ? 'bg-black/50 backdrop-blur-sm' 
              : 'bg-black/0 backdrop-blur-none pointer-events-none'
          }`}
          onClick={closeProjectModal}
        >
          {/* Light Beam Effect */}
          <div 
            className={`absolute inset-0 transition-all duration-1000 ${
              isModalOpen 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
            style={{
              background: isModalOpen 
                ? 'radial-gradient(circle at center, rgba(167, 199, 231, 0.3) 0%, rgba(185, 174, 220, 0.2) 30%, rgba(122, 156, 198, 0.1) 60%, transparent 80%)'
                : 'transparent'
            }}
          />
          <div 
            className={`bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-700 transform relative overflow-hidden ${
              isModalOpen 
                ? 'scale-100 opacity-100 translate-y-0 modal-glow' 
                : 'scale-85 opacity-0 translate-y-12'
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              transitionTimingFunction: isModalOpen ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isModalOpen 
                ? '0 0 60px rgba(167, 199, 231, 0.4), 0 0 120px rgba(185, 174, 220, 0.2), 0 0 180px rgba(122, 156, 198, 0.1)' 
                : '0 0 0px rgba(167, 199, 231, 0)'
            }}
                      >
              {/* Light Beam Animation */}
              <div 
                className={`absolute inset-0 transition-all duration-1000 ${
                  isModalOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: isModalOpen 
                    ? 'linear-gradient(45deg, transparent 0%, rgba(167, 199, 231, 0.1) 25%, rgba(185, 174, 220, 0.2) 50%, rgba(167, 199, 231, 0.1) 75%, transparent 100%)'
                    : 'transparent'
                }}
              />
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border relative z-10">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${selectedProject.color} text-white`}>
                  {selectedProject.icon}
                </div>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-full hover:bg-muted/50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              {selectedProject.image && (
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">About This Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Tags */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gradient text-center"
                  >
                    <Github className="inline mr-2 w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo !== selectedProject.github && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-gradient text-center"
                  >
                    <ExternalLink className="inline mr-2 w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}