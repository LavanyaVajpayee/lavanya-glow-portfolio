import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    institution: "VIT Chennai",
    degree: "B.Tech Computer Science Engineering",
    period: "2022 – 2026",
    grade: "CGPA: 8.91",
    icon: GraduationCap,
  },
  {
    institution: "St. Francis School",
    degree: "Class XII",
    period: "2022",
    grade: "93.2%",
    icon: Award,
  },
  {
    institution: "St. Francis School",
    degree: "Class X",
    period: "2020",
    grade: "89.2%",
    icon: Award,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="card-elegant rounded-xl p-6 md:p-8 hover-glow animate-slide-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-2">
                      {edu.degree}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-primary">
                        {edu.grade}
                      </span>
                    </div>
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