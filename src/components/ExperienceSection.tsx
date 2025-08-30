import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experienceData = [
  {
    company: "Cyber Sentinel Lab",
    position: "Backend Engineering Intern",
    location: "Remote",
    period: "2025",
    type: "Internship",
    description: "Working on backend engineering solutions and security implementations.",
  },
  {
    company: "GlobalLogic",
    position: "Junior Web Developer Intern",
    location: "Noida",
    period: "2024",
    type: "Internship",
    description: "Developed web applications and gained hands-on experience in modern development practices.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                className="card-elegant rounded-xl p-6 md:p-8 hover-glow animate-slide-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}