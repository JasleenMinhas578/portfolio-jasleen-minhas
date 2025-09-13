import { ExternalLink, Github, Bot, Database, Globe, Calculator, BookOpen, X, Users, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import bookRecommenderImage from '@/assets/demo-llm-book-recommender.png';
import sslModelImage from '@/assets/demo-ssl-model.png';
import financeTrackerImage from '@/assets/demo-finance-tracker.png';
import fraudDetectionImage from '@/assets/demo-fraud-detection.png';
import studentStressImage from '@/assets/demo-student-stress-eda.png';


const projects = [
  {
    title: 'Semantic Book Recommender with Generative AI',
    description: 'An intelligent book recommendation system leveraging transformer models and semantic search to understand user preferences and suggest books with deep contextual understanding.',
    fullDescription: 'This project implements a semantic book recommender using Python, Hugging Face, FAISS, and Gradio. It transforms book descriptions into embeddings and uses FAISS vector search to find contextually similar books. Features include real-time recommendations, zero-shot classification for genre filtering, and sentiment analysis for refining suggestions. The interactive Gradio interface makes it easy for users to explore personalized book matches.  Users can input their favorite books, genres, or even describe their mood, and the AI will suggest relevant books with detailed explanations of why each recommendation fits their profile. The system also includes collaborative filtering and content-based filtering to ensure diverse and accurate suggestions.',
    // fullDescription: 'This project revolutionizes book discovery by implementing advanced natural language processing techniques. Using transformer models like BERT and GPT, the system analyzes user reading preferences, book content, and reviews to provide highly personalized recommendations. The platform features a sophisticated semantic search engine that understands context and meaning, not just keywords. Users can input their favorite books, genres, or even describe their mood, and the AI will suggest relevant books with detailed explanations of why each recommendation fits their profile. The system also includes collaborative filtering and content-based filtering to ensure diverse and accurate suggestions.',
    tags: ['AI Magic ✨', 'NLP', 'Transformers', 'Python'],
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/llm-semantic-book-recommender',
    demo: 'https://github.com/JasleenMinhas578/llm-semantic-book-recommender',
    image: bookRecommenderImage,
    // image: '/project-images/book-recommender.jpg', 
    // image: 'https://github.com/JasleenMinhas578/llm-semantic-book-recommender/blob/main/assets/demo-1.png',
    technologies: ['Python', 'Hugging Face', 'FAISS', 'Gradio'],
    features: ['Semantic Search', 'Real-time Recommendations', 'Zero-Shot Genre Filtering', 'Sentiment Analysis']
    // technologies: ['Python', 'TensorFlow', 'Hugging Face', 'React', 'FastAPI', 'PostgreSQL'],
    // features: ['Semantic Search Engine', 'Personalized Recommendations', 'Real-time Processing', 'User Preference Learning', 'Multi-language Support']
  },
  {
    title: 'Single-Image Self-Supervised Learning Model',
    description: 'Revolutionary approach to computer vision using self-supervised learning techniques that can learn meaningful representations from just a single image.',
    fullDescription: 'This groundbreaking research project challenges the conventional wisdom that deep learning requires massive datasets. By implementing innovative self-supervised learning techniques, the model can extract meaningful features and representations from just a single image. The system uses advanced data augmentation strategies, contrastive learning, and novel loss functions to maximize information extraction from minimal data. This approach has significant implications for domains where data is scarce or expensive to collect, such as medical imaging, satellite imagery, and specialized industrial applications. The model demonstrates remarkable generalization capabilities and can be fine-tuned for various downstream tasks with minimal additional training.',
    tags: ['Self-Supervised Genius 🤖', 'Computer Vision', 'PyTorch', 'Deep Learning'],
    icon: <Bot className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/SelfSupervised-SingleNoisyImage-Denoising-SMU',
    demo: 'https://github.com/JasleenMinhas578/SelfSupervised-SingleNoisyImage-Denoising-SMU',
    image: sslModelImage,
    // image: '/project-images/ssl-model.jpg',
    // image: 'https://github.com/JasleenMinhas578/SelfSupervised-SingleNoisyImage-Denoising-SMU/blob/main/Output/Results_1.png',
    technologies: ['PyTorch', 'OpenCV', 'NumPy', 'Matplotlib', 'Jupyter'],
    features: ['Single-Image Learning', 'Contrastive Learning', 'Data Augmentation', 'Feature Extraction', 'Transfer Learning']
  },
  {
    title: 'Finance Tracker WebApp',
    description: 'Beautiful and intuitive personal finance management application with real-time analytics, budget tracking, and smart spending insights.',
    // fullDescription: 'A comprehensive personal finance management platform that helps users take control of their financial health. The application features intuitive expense tracking, budget management, and financial goal setting. Real-time analytics provide insights into spending patterns, helping users identify areas for improvement. The platform includes features like bill reminders, investment tracking, and financial goal visualization. The smart spending insights use machine learning to categorize transactions and provide personalized recommendations for saving money. The beautiful, responsive design ensures a great user experience across all devices.',
    fullDescription: 'Developed this React + Firebase web application helps users manage expenses and budgets. Features include expense tracking, category-wise visualizations, authentication, PDF report generation, and real-time data updates. The project followed software design principles (SOLID, UML modeling) and was thoroughly tested (unit, system, exploratory) for robustness and usability.',
    tags: ['Data Meets Design 🎨', 'React', 'Firebase', 'D3.js'],
    icon: <Database className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    github: 'https://github.com/JasleenMinhas578/finance-tracker',
    demo: 'https://github.com/JasleenMinhas578/finance-tracker',
    // image: '/project-images/finance-tracker.jpg',
    image: financeTrackerImage,
    // technologies: ['React', 'Firebase', 'D3.js', 'Chart.js', 'Material-UI', 'Node.js'],
    // features: ['Expense Tracking', 'Budget Management', 'Real-time Analytics', 'Goal Setting', 'Bill Reminders']
    technologies: ['React', 'Firebase', 'Chart.js', 'Material-UI', 'Jest'],
    features: ['Expense Tracking', 'Budget Management', 'Authentication', 'PDF Export', 'Real-time Visualization']
  },
  {
    title: 'Fraud Detection with Clustering & Anomaly Analysis',
    description: 'Unsupervised learning approach to detect fraudulent financial transactions and anomalous account behaviors.',
    fullDescription: 'This project applies advanced unsupervised learning methods—including KMeans, DBSCAN, Isolation Forest, and LOF—to identify anomalies in financial transaction data. Conducted exploratory data analysis with feature engineering, scaling, and visualization techniques (heatmaps, cluster plots) to uncover rare transaction patterns. Transactions were segmented into behavioral clusters and high-risk anomalies were flagged, demonstrating practical techniques relevant to claims cost forecasting and fraud detection in financial systems.',
    tags: ['Fraud Detection', 'Unsupervised Learning', 'Anomaly Detection', 'Data Analysis', 'Python'],
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-gradient-red',
    github: 'https://github.com/JasleenMinhas578/fraud-detection-clustering-anomaly-analysis',
    demo: 'https://github.com/JasleenMinhas578/fraud-detection-clustering-anomaly-analysis',
    image: fraudDetectionImage, // replace with your project image variable or URL
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    features: ['KMeans Clustering', 'DBSCAN', 'Isolation Forest', 'Local Outlier Factor', 'EDA & Visualization', 'Anomaly Detection']
  },
  
  {
    title: 'Student Stress & Performance Insights',
    description: 'Analyzed lifestyle and academic performance data to predict student stress levels using classification models.',
    fullDescription: 'This project involved exploratory data analysis on over 2,000 records of student lifestyle and academic data, uncovering correlations between study habits, sleep patterns, and stress levels. Built and evaluated multiple classification models—including Decision Tree, Random Forest, Logistic Regression, and a Stacking Ensemble—to predict student stress levels. Achieved strong accuracy and balanced class performance, providing actionable insights for student wellbeing and performance optimization.',
    tags: ['Data Analysis', 'Machine Learning', 'Classification', 'Student Insights', 'Python'],
    icon: <Users className="w-6 h-6" />,
    color: 'bg-gradient-blue',
    github: 'https://github.com/JasleenMinhas578/student-stress-performance-insights',
    demo: 'https://github.com/JasleenMinhas578/student-stress-performance-insights',
    image: studentStressImage, // replace with your project image variable or URL
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    features: ['Exploratory Data Analysis', 'Decision Tree', 'Random Forest', 'Logistic Regression', 'Stacking Ensemble', 'Feature Correlation Analysis']
  }
  
  // {
  //   title: 'Math-MATE Educational Website',
  //   description: 'Interactive math learning platform for K1–K3 students with games, tutorials, and progress tracking.',
  //   fullDescription: 'Math-MATE is a full-stack educational website designed for teaching mathematics to K1–K3 students. Built with React.js and integrated with Unity-based interactive math games, the platform makes learning fun and engaging. It features class-wise curriculum modules, video tutorials, subscription-based access, and a database for storing student progress. Teachers and parents can monitor performance through dashboards and progress reports. The goal of Math-MATE is to create an enjoyable learning experience while reinforcing core math concepts for young learners.',
  //   tags: ['EdTech', 'React', 'Unity', 'Full-Stack'],
  //   icon: <Calculator className="w-6 h-6" />,
  //   color: 'bg-gradient-primary',
  //   github: '/not-found',
  //   demo: '/not-found',
  //   image: '/project-images/math-mate.jpg',
  //   technologies: ['React', 'JavaScript', 'Unity', 'Database Integration', 'HTML/CSS'],
  //   features: ['Interactive Games', 'Curriculum-Based Learning', 'Video Tutorials', 'Progress Tracking', 'Subscription Access']
  // }
  // {
  //   title: 'AdSnap Studio',
  //   description: 'AI-powered creative studio for generating and optimizing digital advertisements with real-time A/B testing and performance analytics.',
  //   fullDescription: 'An innovative platform that combines artificial intelligence with creative design to revolutionize digital advertising. The studio uses computer vision and machine learning to analyze ad performance and automatically generate optimized variations. Real-time A/B testing capabilities allow marketers to test different creative elements and messaging to maximize engagement and conversion rates. The platform includes advanced analytics that track user engagement, click-through rates, and conversion metrics. AI-powered design suggestions help create visually appealing ads that resonate with target audiences. The system also includes automated ad placement optimization across different platforms and devices.',
  //   tags: ['Creative AI ⚡', 'Computer Vision', 'React', 'TensorFlow'],
  //   icon: <Globe className="w-6 h-6" />,
  //   color: 'bg-gradient-primary',
  //   github: 'https://github.com/jasleen/adsnap-studio',
  //   demo: 'https://adsnap.jasleen.dev',
  //   image: '/project-images/adsnap-studio.jpg',
  //   technologies: ['React', 'TensorFlow', 'OpenCV', 'AWS', 'MongoDB', 'Express.js'],
  //   features: ['AI Ad Generation', 'A/B Testing', 'Performance Analytics', 'Creative Optimization', 'Multi-platform Support']
  // },
  // {
  //   title: 'Math-MATE Educational Website',
  //   description: 'Interactive mathematics learning platform with gamified lessons, AI-powered problem solving, and adaptive learning paths for students.',
  //   fullDescription: 'A comprehensive educational platform that makes learning mathematics engaging and personalized. The platform uses adaptive learning algorithms to create customized learning paths based on each student\'s strengths and weaknesses. Gamified lessons include interactive exercises, puzzles, and challenges that make learning fun and rewarding. AI-powered problem solving provides step-by-step explanations and hints when students get stuck. The platform tracks progress and provides detailed analytics to help students and teachers identify areas for improvement. Features include virtual tutoring, practice tests, and collaborative learning tools.',
  //   tags: ['EdTech Innovation 📚', 'React', 'Node.js', 'AI Tutoring'],
  //   icon: <Calculator className="w-6 h-6" />,
  //   color: 'bg-gradient-primary',
  //   github: 'https://github.com/jasleen/math-mate',
  //   demo: 'https://mathmate.jasleen.dev',
  //   image: '/project-images/math-mate.jpg',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Canvas API', 'MathJax'],
  //   features: ['Adaptive Learning', 'Gamified Lessons', 'AI Tutoring', 'Progress Tracking', 'Collaborative Learning']
  // },
  
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
              My Personal Projects
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              A curated collection of projects where technology meets creativity, each solving real problems with innovative approaches
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
                    
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 group/link"
                      aria-label={`View ${project.title} live demo`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:animate-bounce-gentle" />
                    </a> */}
                  </div>
                </div>

                {/* Project Image Preview */}
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x200/1e1e2f/ffffff?text=Project+Preview';
                    }}
                  />
                </div>

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
                Excited to see more? Check out my GitHub for the complete collection!
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
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x400/1e1e2f/ffffff?text=Project+Image';
                  }}
                />
              </div>

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
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-gradient text-center"
                >
                  <Github className="inline mr-2 w-5 h-5" />
                  View on GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-gradient text-center"
                >
                  <ExternalLink className="inline mr-2 w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}