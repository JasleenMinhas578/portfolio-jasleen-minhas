import { Brain, Database, Code, Palette, Award, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    skills: [
      'Python', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn',
      'Matplotlib', 'Seaborn', 'Plotly', 'SciPy', 'NLTK', 'spaCy', 'NLP', 'LLMs',
      'Hugging Face', 'OpenCV', 'NumPy', 'Pandas', 'Jupyter',
      'Deep Learning', 'Computer Vision', 'Neural Networks'
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    skills: [
      'SQL', 'NoSQL', 'MongoDB', 'AWS', 'Snowflake', 
      'Power BI', 'Tableau','Excel', 'Hadoop', 'Data Warehousing',
      'Data Analysis', 'Data Visualization', 'Data Engineering', 
      'Data Modeling', 'ETL', 'Statistics'
    ]
  },
  {
    title: 'Development & Tools',
    icon: <Code className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    skills: [
      'Reactjs', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Firebase',
      'REST APIs', 'GraphQL', 'Git', 'GitHub',
      'CI/CD', 'Linux', 'Bash', 'MuleSoft', 'Salesforce'
    ]
  },
  {
    title: 'Creative & Design',
    icon: <Palette className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    skills: [
      'UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Watercolor Painting',
       'Sketching', 'Bhangra', 'Contemporary Dance',
      'Visual Storytelling'
    ]
  }
];

const achievements = [
  {
    title: 'District Topper',
    description: 'High School Boards - 96.6%',
    icon: <Award className="w-10 h-10" />,
    color: 'text-secondary'
  },
  {
    title: 'Gold Medalist',
    description: 'Bachelor\'s in AI & ML',
    icon: <Award className="w-10 h-10" />,
    color: 'text-primary'
  },
  {
    title: 'Best Intern Award',
    description: 'Emerson IT Solutions',
    icon: <Award className="w-10 h-10" />,
    color: 'text-accent'
  }
];

export default function Skills() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { elementRef: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6 relative bg-section-skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            My Toolbox
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            A dynamic collection of technical skills and creative talents, constantly evolving with every project and challenge
          </p>
        </div>

        {/* Skills Categories */}
        <div ref={skillsRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 scroll-stagger ${skillsVisible ? 'animate' : ''}`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-glow group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-badge skill-animate ${skillsVisible ? 'animate' : ''}`}
                    style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div ref={achievementsRef} className={`text-center mb-12 scroll-scale-in ${achievementsVisible ? 'animate' : ''}`}>
          <h3 className="text-4xl font-bold mb-6">
            Milestones & Recognition
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Celebrating moments of excellence and recognition along my journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-glow text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center p-4 rounded-full bg-muted/20 mb-4 ${achievement.color} group-hover:animate-bounce-gentle`}>
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        {/* <div className="card-glow text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
          <h3 className="text-3xl font-bold mb-8">
            By the Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:animate-bounce-gentle">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:animate-bounce-gentle">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Technologies Mastered
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:animate-bounce-gentle">
                3
              </div>
              <div className="text-sm text-muted-foreground">
                Research Papers
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:animate-bounce-gentle">
                ∞
              </div>
              <div className="text-sm text-muted-foreground">
                Curiosity & Passion
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-5 opacity-20">
        <Zap className="w-12 h-12 text-primary animate-float" />
      </div>
      <div className="absolute bottom-32 right-10 opacity-20">
        <Brain className="w-16 h-16 text-accent animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}