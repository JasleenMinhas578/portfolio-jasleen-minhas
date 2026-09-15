import { useState } from 'react';
import { Calendar, MapPin, Award, ChevronDown, Database, BarChart3, Cloud, Code, FileSpreadsheet, Workflow, Zap, Target, GitBranch, Brain, Users, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const workExperiences = [
  {
    id: 1,
    company: 'GNOSIS Ethical Intelligence',
    role: 'Team Lead, Clinical Informatics and Data Integration',
    type: 'Team Lead',
    period: 'Sep 2026 – Present',
    location: "St. John's, Canada",
    description: "Leading the founding engineering team through Memorial University's AI Initiative, in partnership with the School of Graduate Studies.",
    achievements: [
      "Lead the founding engineering team, through Memorial University's AI Initiative in partnership with the School of Graduate Studies.",
      'Work on data validation and reconciliation for the platform.'
    ],
    tools: [
      { name: 'Team Leadership', icon: <Users className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Data Validation', icon: <ShieldCheck className="w-4 h-4" />, color: 'text-accent' },
      { name: 'Data Reconciliation', icon: <Database className="w-4 h-4" />, color: 'text-secondary' }
    ],
    color: 'bg-gradient-primary',
    highlight: 'Leading the founding engineering team'
  },
  {
    id: 2,
    company: 'Enaimco',
    role: 'Software Developer (Co-op)',
    type: 'Co-op',
    period: 'Jan 5, 2026 – Aug 28, 2026',
    location: "St. John's, NL, Canada",
    description: 'Built end-to-end features for an offshore-energy SaaS platform, from Azure infrastructure and Terraform IaC to backend services, frontend interfaces, and AI-powered tooling.',
    achievements: [
      'Built Azure Function Apps end to end with Terraform, including custom RBAC roles for each use case.',
      'Built a self-serve media-processing pipeline (React, TypeScript, Azure Functions) that cut a manual process from 3+ hours to under 5 minutes.',
      'Built a full duplicate-file detection feature (MongoDB-backed) and ran cleanup across 7 customers, cutting storage costs by 40%.',
      'Integrated LLMs through Azure AI Foundry for GIS overlay extraction and content filtering.',
      'Built internal Claude Code skills and MCP automation.',
      "Helped drive the team's adoption of test-driven development.",
      'Won the internal AI Hackathon during the co-op term.'
    ],
    tools: [
      { name: 'TypeScript', icon: <Code className="w-4 h-4" />, color: 'text-primary' },
      { name: 'React', icon: <Code className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Azure', icon: <Cloud className="w-4 h-4" />, color: 'text-accent' },
      { name: 'Terraform', icon: <Cloud className="w-4 h-4" />, color: 'text-secondary' },
      { name: 'Python', icon: <Code className="w-4 h-4" />, color: 'text-secondary' },
      { name: 'Azure AI Foundry', icon: <Brain className="w-4 h-4" />, color: 'text-accent' },
      { name: 'MongoDB', icon: <Database className="w-4 h-4" />, color: 'text-secondary' },
      { name: 'GitHub Actions', icon: <GitBranch className="w-4 h-4" />, color: 'text-primary' }
    ],
    color: 'bg-gradient-primary',
    highlight: 'End-to-end feature ownership: cloud infrastructure to UI to AI tooling'
  },
  {
    id: 3,
    company: 'Learning Disabilities Association of NL (LDANL)',
    role: 'Full-Stack Developer, Math-MATE',
    type: 'Part-Time',
    period: 'July 2025 – Present',
    location: "St. John's, Canada",
    description: 'Sole developer of an accessible, interactive math-education platform for K1-K3 students with diverse learning needs. Secured $40K in initial funding. Now being tested with students at LDANL.',
    achievements: [
      'Secured $40K in funding for the initial idea.',
      'Designed the data model and database, and built the REST APIs behind the platform.',
      'Built an accessible React/Next.js frontend for K1-K3 students with diverse learning needs, following WCAG 2.2.',
      'Set up automated testing and CI/CD, managing the entire project independently -- live at mathmate.ldanl.ca.'
    ],
    tools: [
      { name: 'React', icon: <Code className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Next.js', icon: <Code className="w-4 h-4" />, color: 'text-accent' },
      { name: 'TypeScript', icon: <Code className="w-4 h-4" />, color: 'text-primary' },
      { name: 'TailwindCSS', icon: <Code className="w-4 h-4" />, color: 'text-secondary' },
      { name: 'Supabase', icon: <Database className="w-4 h-4" />, color: 'text-accent' },
      { name: 'CI/CD', icon: <GitBranch className="w-4 h-4" />, color: 'text-primary' }
    ],
    color: 'bg-gradient-primary',
    highlight: 'Sole developer: data model to accessible frontend to CI/CD, now live with students'
  },
  {
    id: 4,
    company: 'Sun Life Global Solutions',
    role: 'Data Analyst',
    type: 'Full-time',
    period: 'Jul 2024 – Nov 2024',
    location: 'India',
    description: 'Built interactive dashboards and reports in Tableau and Power BI, and automated reporting workflows that cut turnaround time by 40%.',
    achievements: [
      'Built interactive dashboards and reports in Tableau and Power BI for real-time decision-making across business units.',
      'Automated data extraction, transformation, and reporting with Python and Excel macros, cutting turnaround time by 40%.',
      'Used SQL and Snowflake to query and manage large datasets.'
    ],
    tools: [
      { name: 'Tableau', icon: <BarChart3 className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Power BI', icon: <BarChart3 className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Snowflake', icon: <Database className="w-4 h-4" />, color: 'text-secondary' },
      { name: 'Python', icon: <Code className="w-4 h-4" />, color: 'text-accent' },
      { name: 'Excel', icon: <FileSpreadsheet className="w-4 h-4" />, color: 'text-accent' }
    ],
    color: 'bg-gradient-primary',
    highlight: 'Automated reporting workflows, cutting turnaround time by 40%'
  },
  {
    id: 5,
    company: 'Emerson Information Technology Solutions',
    role: 'Data Integration & Visualization Developer Intern',
    type: 'Internship',
    period: 'Jan 2024 – Jun 2024',
    location: 'India',
    description: 'Built MuleSoft ETL pipelines for 8+ data sources (70% faster) and Power BI dashboards serving 4,700+ users.',
    achievements: [
      'Built and optimized ETL pipelines for 8+ data sources using MuleSoft, reducing processing time by 70%.',
      'Developed Power BI dashboards for 4,700+ users, enabling self-service analytics.',
      'Improved data validation and quality checks, reducing reporting errors by 25%.'
    ],
    tools: [
      { name: 'MuleSoft', icon: <Workflow className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Power BI', icon: <BarChart3 className="w-4 h-4" />, color: 'text-primary' },
      { name: 'Salesforce', icon: <Cloud className="w-4 h-4" />, color: 'text-primary' },
      { name: 'APIs', icon: <Zap className="w-4 h-4" />, color: 'text-accent' },
      { name: 'Postman', icon: <Target className="w-4 h-4" />, color: 'text-accent' }
    ],
    color: 'bg-gradient-primary',
    highlight: '🏆 Best Intern Award',
    award: true
  }
];

export default function WorkExperience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: experiencesRef, isVisible: experiencesVisible } = useScrollAnimation();

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="work-experience" className="py-24 px-6 relative bg-section-experience">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-20 scroll-fade-in ${sectionVisible ? 'animate' : ''}`}>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Professional Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            From cloud infrastructure to polished interfaces -- building end-to-end features across diverse industries and technologies
          </p>
        </div>

        {/* Experience Timeline */}
        <div ref={experiencesRef} className={`relative scroll-slide-up ${experiencesVisible ? 'animate' : ''}`}>
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full opacity-20 hidden md:block" />

          <div className="space-y-12">
            {workExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 card-animate ${experiencesVisible ? 'animate' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >

                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 flex-shrink-0 z-10">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-lg animate-pulse-soft" />
                    {experience.award && (
                      <div className="absolute -top-3 -right-3">
                        <Award className="w-6 h-6 text-primary animate-bounce-gentle" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 max-w-2xl">
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
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary`}>
                            {experience.type}
                          </span>
                          {experience.award && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
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
                          <div
                            className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
                            style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }}
                          >
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
                          <span
                            key={toolIndex}
                            className="skill-badge"
                          >
                            {tool.name}
                          </span>
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
                        Click to view details of the work
                      </div>
                    )}
                  </div>
                </div>
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
                <div className="text-4xl font-bold text-gradient mb-2">40+</div>
                <div className="text-muted-foreground">Technologies Used</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">4</div>
                <div className="text-muted-foreground">Honours & Awards 🏆</div>
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