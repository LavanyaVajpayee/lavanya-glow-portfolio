import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lavanyavajpayee@gmail.com",
    href: "mailto:lavanyavajpayee@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9654960488",
    href: "tel:+919654960488"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "lavanyavajpayee",
    href: "https://github.com/lavanyavajpayee"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "lavanyavajpayee",
    href: "https://linkedin.com/in/lavanyavajpayee"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-elegant rounded-xl p-6 hover-glow group animate-slide-left block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <div className="card-elegant rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Based in India</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently pursuing B.Tech at VIT Chennai and actively seeking opportunities in software engineering, 
                backend development, and research collaborations.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:lavanyavajpayee@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}