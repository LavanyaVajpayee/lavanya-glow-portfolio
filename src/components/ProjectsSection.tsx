import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "Expense Tracker",
    description: "Cross-platform React Native app with Firebase backend and Cloudinary integration for expense management and receipt storage.",
    technologies: ["React Native", "Firebase", "Cloudinary", "JavaScript"],
    category: "Mobile App",
  },
  {
    title: "Organic Oasis",
    description: "React and Redux-based e-commerce platform specifically designed for organic produce with modern UI/UX.",
    technologies: ["React.js", "Redux", "Node.js", "JavaScript"],
    category: "Web App",
  },
  {
    title: "FedProx Algorithm Research",
    description: "Research paper on 'Augmenting FedProx Algorithm in Federated Transfer Learning' published on arXiv, focusing on improving federated learning efficiency.",
    technologies: ["Python", "Machine Learning", "Research", "arXiv"],
    category: "Research",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my work spanning mobile apps, web development, and research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index}
                className="card-elegant rounded-xl p-6 hover-glow group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="glow" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}