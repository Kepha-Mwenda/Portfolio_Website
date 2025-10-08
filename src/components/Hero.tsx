import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
              Kepha Mwenda Kariuki
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full glow" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Forensic Investigator | Cybersecurity Analyst | Data Analyst
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about forensic cybersecurity, cyber threat analysis, and digital investigations. 
            Specialized in threat intelligence, malware analysis, and security operations.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="group hover:scale-110 transition-all duration-300 glow hover:glow-strong animate-pulse hover:animate-none"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group border-secondary/50 hover:border-secondary hover:bg-secondary/10 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--secondary)/0.5)]"
              asChild
            >
              <a href="https://github.com/Kepha-Mwenda" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group border-accent/50 hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)]"
              asChild
            >
              <a href="https://www.linkedin.com/in/kepha-mwenda" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
