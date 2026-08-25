import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Memorial University of Newfoundland',
    duration: 'Jan 2025 – Dec 2026',
    location: 'St. John\'s, Newfoundland, Canada',
    focus: 'Generative AI, Machine Learning, Data Science, Software Engineering',
    projects: ['Finance Tracker WebApp', 'Semantic Book Recommender', 'Self-Supervised Learning'],
    subjects: [
      'Machine Learning',
      'Software Verification & Validation',
      'Software Design and Specification',
      'Software Engineering',
      'Applied Algorithms',
      'Introduction to Data Visualization'
    ],
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    achievements: ['CGPA: 4.0 / 4.0']
  },
  {
    degree: 'Bachelor of Engineering in Computer Science (AI & ML)',
    institution: 'Chandigarh University',
    duration: 'Sept 2020 – Jun 2024',
    location: 'Chandigarh, India',
    focus: 'Artificial Intelligence & Machine Learning',
    projects: ['Facial Expression Detection', 'ML/DL research projects', 'iOS/Flutter apps', 'React.js web dev'],
    icon: <Award className="w-6 h-6" />,
    color: 'bg-gradient-primary',
    achievements: ['Gold Medalist', 'CGPA: 9.01']
  }
];



export default function Education() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: educationRef, isVisible: educationVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-6 relative bg-section-education">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Education
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Bachelor's in AI & ML from Chandigarh University. Now completing an MS in Computer Science at Memorial University of Newfoundland.
          </p>
        </div>

        {/* Education Timeline */}
        <div ref={educationRef} className={`relative mb-20 scroll-slide-up ${educationVisible ? 'animate' : ''}`}>
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full opacity-20 hidden md:block" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 timeline-animate ${educationVisible ? 'animate' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 flex-shrink-0 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-lg animate-pulse-soft" />
                    {edu.achievements.length > 0 && (
                      <div className="absolute -top-3 -right-3">
                        <Award className="w-6 h-6 text-primary animate-bounce-gentle" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Education Card */}
                <div className="flex-1 max-w-2xl">
                  <div className="card-glow group hover:scale-[1.02] transition-all duration-500">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-xl ${edu.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                            {edu.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gradient mb-1">
                              {edu.degree}
                            </h3>
                            <h4 className="text-xl font-semibold text-primary">
                              {edu.institution}
                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Focus Areas
                          </h5>
                          <p className="text-muted-foreground">
                            {edu.focus}
                          </p>
                        </div>

                        {edu.achievements.length > 0 && (
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                              Achievements
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement, achIndex) => (
                                <span
                                  key={achIndex}
                                  className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/20"
                                >
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className={edu.subjects ? 'mb-4' : ''}>
                          <h5 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Key Projects
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.projects.map((project, projIndex) => (
                              <span
                                key={projIndex}
                                className="skill-badge"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>

                        {edu.subjects && (
                          <div>
                            <h5 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                              Key Courses
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, subIndex) => (
                                <span
                                  key={subIndex}
                                  className="skill-badge"
                                >
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1 max-w-2xl" />
              </div>
            ))}
          </div>
        </div>



      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-60 right-20 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}
