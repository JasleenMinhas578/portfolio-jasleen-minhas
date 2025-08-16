import { useState } from 'react';
import { Calendar, MapPin, Award, ChevronDown, Database, BarChart3, Cloud, Code, FileSpreadsheet, Workflow, Zap, Target } from 'lucide-react';

const workExperiences = [
  {
    id: 1,
    company: 'Sunlife Insurance Company',
    role: 'Data Analyst',
    type: 'Full-time',
    period: 'Jul 2024 – Nov 2024',
    location: 'Canada',
    description: 'Transforming complex business data into actionable insights through advanced analytics and visualization.',
    achievements: [
      'Created interactive dashboards using Tableau for stakeholders',
      'Worked with AWS and Snowflake for data storage and analytics',
      'Automated workflows using Python and Excel macros',
      'Collaborated with business teams to deliver actionable data insights'
    ],
    tools: [
      { name: 'Tableau', icon: <BarChart3 className="w-4 h-4" />, color: 'text-blue-600' },
      { name: 'AWS', icon: <Cloud className="w-4 h-4" />, color: 'text-orange-500' },
      { name: 'Snowflake', icon: <Database className="w-4 h-4" />, color: 'text-cyan-600' },
      { name: 'Python', icon: <Code className="w-4 h-4" />, color: 'text-green-600' },
      { name: 'Excel', icon: <FileSpreadsheet className="w-4 h-4" />, color: 'text-emerald-600' }
    ],
    color: 'bg-gradient-primary',
    highlight: 'Led cross-functional collaboration delivering key business insights'
  },
  {
    id: 2,
    company: 'Emerson IT Solutions',
    role: 'Data Integration & Visualization Developer Intern',
    type: 'Internship',
    period: 'Jan 2024 – Jun 2024',
    location: 'India',
    description: 'Specialized in building robust data pipelines and creating compelling visualizations for enterprise systems.',
    achievements: [
      'Built data pipelines using MuleSoft for enterprise integration',
      'Developed Power BI dashboards integrating multiple data sources',
      'Worked with APIs and Postman for data validation and integration',
      'Improved data validation processes and built Capacity Management System',
      'Recognized as Best Intern by the team leader'
    ],
    tools: [
      { name: 'MuleSoft', icon: <Workflow className="w-4 h-4" />, color: 'text-blue-500' },
      { name: 'Power BI', icon: <BarChart3 className="w-4 h-4" />, color: 'text-yellow-600' },
      { name: 'Salesforce', icon: <Cloud className="w-4 h-4" />, color: 'text-blue-400' },
      { name: 'APIs', icon: <Zap className="w-4 h-4" />, color: 'text-purple-600' },
      { name: 'Postman', icon: <Target className="w-4 h-4" />, color: 'text-orange-600' }
    ],
    color: 'bg-gradient-secondary',
    highlight: '🏆 Best Intern Award',
    award: true
  }
];

export default function WorkExperience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="work-experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            From data pipelines to business insights – building impactful solutions across diverse industries and technologies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full opacity-20" />

          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 flex-shrink-0 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-lg animate-pulse-soft" />
                    {experience.award && (
                      <div className="absolute -top-3 -right-3">
                        <Award className="w-6 h-6 text-yellow-500 animate-bounce-gentle" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 max-w-2xl ml-20 md:ml-0">
                  <div 
                    className={`card-glow cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                      expandedCard === experience.id ? 'ring-2 ring-primary/30' : ''
                    }`}
                    onClick={() => toggleCard(experience.id)}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            experience.type === 'Internship' 
                              ? 'bg-accent/20 text-accent-foreground' 
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {experience.type}
                          </span>
                          {experience.award && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                              🏆 Award Winner
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gradient mb-2">
                          {experience.role}
                        </h3>
                        
                        <h4 className="text-xl font-semibold text-primary mb-4">
                          {experience.company}
                        </h4>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {experience.description}
                        </p>

                        {experience.highlight && (
                          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                            <Zap className="w-4 h-4 mr-2" />
                            {experience.highlight}
                          </div>
                        )}
                      </div>

                      <button className="ml-4 p-2 rounded-full hover:bg-muted/50 transition-colors">
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedCard === experience.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    </div>

                    {/* Tools Used */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Technologies & Tools
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {experience.tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className={`skill-badge group hover:scale-105 transition-transform duration-200 ${tool.color}`}
                          >
                            {tool.icon}
                            <span className="ml-2">{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Achievements */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedCard === experience.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-border pt-6">
                        <h5 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                          Key Achievements & Responsibilities
                        </h5>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start gap-3 text-muted-foreground"
                              style={{ animationDelay: `${achIndex * 0.1}s` }}
                            >
                              <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Click Hint */}
                    {expandedCard !== experience.id && (
                      <div className="text-xs text-muted-foreground/60 text-center mt-4">
                        Click to view detailed achievements
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1 max-w-2xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-20 text-center">
          <div className="card-glow max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
            <h3 className="text-3xl font-bold mb-6">
              Professional Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">1</div>
                <div className="text-muted-foreground">Best Intern Award 🏆</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-5 w-8 h-8 bg-primary/10 rounded-full animate-float" />
      <div className="absolute top-60 right-10 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-secondary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}