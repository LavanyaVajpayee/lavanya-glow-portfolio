export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="card-elegant rounded-2xl p-8 md:p-12 hover-glow">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-foreground">
                I'm a passionate Computer Science student at <span className="text-primary font-semibold">VIT Chennai</span> with a 
                strong foundation in software development, system design, and artificial intelligence. Currently pursuing my 
                B.Tech in Computer Science Engineering (2022–2026) with a CGPA of 8.91.
              </p>
              
              <p className="text-muted-foreground">
                My journey in technology is driven by curiosity and the desire to create meaningful solutions. I specialize in 
                backend engineering and web development, with hands-on experience in building scalable applications and 
                conducting research in federated learning algorithms.
              </p>
              
              <p className="text-muted-foreground">
                Beyond coding, I'm deeply interested in system design, data structures & algorithms, and collaborative 
                problem-solving. I believe in the power of technology to transform ideas into reality and am always 
                eager to take on new challenges that push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}