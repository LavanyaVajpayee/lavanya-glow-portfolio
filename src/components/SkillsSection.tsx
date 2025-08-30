const skillsData = {
  "Languages": ["C++", "MySQL", "JavaScript", "TypeScript", "Java"],
  "Frameworks": ["React.js", "Node.js", "MATLAB", "R"],
  "Tools": ["Figma", "Git", "Docker", "VS Code"],
  "Strengths": ["System Design", "DSA", "Collaboration", "Problem Solving"]
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <div 
                key={category}
                className="card-elegant rounded-xl p-6 hover-glow animate-slide-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
              Certifications & Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Microsoft Azure AI Certified",
                "Cisco Cyber Security + Packet Tracer Certified", 
                "Best Research Paper Award (High Performance Computing)"
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="card-elegant rounded-lg p-4 text-center hover-glow animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}