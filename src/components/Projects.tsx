import { ExternalLink, Github, Bot, Database, Globe, Calculator, BookOpen, X, Users, Shield, Wallet, Search } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import bookRecommenderImage from '@/assets/demo-llm-book-recommender.png';
import sslModelImage from '@/assets/demo-ssl-model.png';
import fraudDetectionImage from '@/assets/demo-fraud-detection.png';
import studentStressImage from '@/assets/demo-student-stress-eda.png';
import mathMateImage from '@/assets/demo-math-mate.png';
import budgetBuddyImage from '@/assets/demo-budget-buddy.png';
import ragProjectImage from '@/assets/demo-rag-project.png';


const projects = [
  {
    title: 'RAG Pipeline Explorer',
    description: 'An interactive Streamlit app that visualizes every step of a retrieval-augmented generation pipeline: document upload, chunking, embeddings, FAISS retrieval, and answer generation with Google Gemini.',
    fullDescription: 'RAG Pipeline Explorer is an interactive Streamlit app that visualizes every step of a retrieval-augmented generation (RAG) pipeline: document upload, chunking, embeddings, FAISS retrieval, and answer generation with Google Gemini. It also includes extra modes to compare approaches side by side -- agentic RAG, vectorless RAG, keyword-vs-vector search, and automated answer grading (LLM-as-judge) -- making it a hands-on way to see how each design decision changes what the model retrieves and answers.',
    tags: ['AI', 'RAG', 'LLMs', 'Python', 'Streamlit'],
    icon: <Search className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/RAG-project',
    demo: 'https://rag-project-jasleen.streamlit.app/',
    image: ragProjectImage,
    technologies: ['Python', 'Streamlit', 'FAISS', 'sentence-transformers', 'LangChain', 'Google Gemini'],
    features: ['Step-by-step Pipeline Visualization', 'Chunking & Embeddings Explorer', 'FAISS Vector Retrieval', 'Agentic RAG Mode', 'Vectorless RAG Mode', 'Keyword vs. Vector Search Comparison', 'Automated Answer Grading (LLM-as-judge)']
  },
  {
    title: 'Math-MATE',
    description: 'An accessible, interactive math-education platform for K1-K3 students with diverse learning needs, built for the Learning Disabilities Association of Newfoundland and Labrador. Sole developer.',
    fullDescription: 'Math-MATE is an accessible, interactive math-education platform for K1-K3 students with diverse learning needs, built for the Learning Disabilities Association of Newfoundland and Labrador. As sole developer, I built the data model, the backend, the accessible frontend, the testing setup, and CI/CD. The interface is built with Next.js, TypeScript, and Tailwind CSS on a Supabase backend, with interactive math games built in Phaser. Now live and in testing with students at LDANL. (Source code is private - client project for LDANL.)',
    tags: ['Full-Stack', 'EdTech', 'Accessibility', 'Next.js', 'TypeScript'],
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: '',
    demo: 'https://mathmate.ldanl.ca/',
    image: mathMateImage,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Phaser'],
    features: ['Accessible UI (WCAG 2.2)', 'Interactive Math Games', 'Real-time Progress Tracking', 'Authentication', 'Automated Testing', 'CI/CD']
  },
  {
    title: 'Budget Buddy',
    description: 'A personal finance tracker built by a 6-person Agile team, with an AI chat assistant, dashboard charts, budget goals, and multi-currency support.',
    fullDescription: 'Budget Buddy is a personal finance tracker built by a 6-person Agile team. It features Firebase authentication, expense and category management, dashboard charts, PDF/CSV export, an AI chat assistant (Google Gemini) for natural-language expense entry and queries, budget goals with progress alerts, multi-currency support with live exchange rates, and global live search. The app is backed by 305 unit tests (100% coverage) and 102 Cypress end-to-end tests, and scores 99/100 on Lighthouse performance.',
    tags: ['Full-Stack', 'React', 'Firebase', 'AI Assistant'],
    icon: <Wallet className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/BudgetBuddy',
    demo: 'https://budget-buddy-mun.vercel.app/',
    image: budgetBuddyImage,
    technologies: ['React', 'Firebase', 'Chart.js', 'Jest', 'Cypress', 'GitHub Actions', 'Vercel'],
    features: ['AI Chat Assistant (Google Gemini)', 'Expense & Category Management', 'Dashboard Charts', 'Budget Goals with Progress Alerts', 'Multi-currency with Live Exchange Rates', 'Global Live Search', 'PDF/CSV Export', '305 unit tests (100% coverage) & 102 Cypress E2E tests', '99/100 Lighthouse performance score']
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
                      className="skill-badge"
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
                      className="skill-badge"
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
                      className="skill-badge"
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