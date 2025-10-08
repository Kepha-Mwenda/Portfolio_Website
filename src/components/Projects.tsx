import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Email Phishing Analysis",
      description: "Hands-on analysis of phishing emails sourced from the PhishingPot dataset. Using Thunderbird for safe email inspection and REMnux for malware and URL analysis.",
      tags: ["Phishing", "REMnux", "Thunderbird", "Threat Analysis"],
      link: "https://github.com/Kepha-Mwenda/Email-Phishing-Analysis",
      featured: true
    },
    {
      title: "CTF Walkthroughs",
      description: "Detailed writeups of challenges solved on platforms like TryHackMe, HackTheBox, and CTF competitions. Each writeup includes methodology, tools used, and lessons learned.",
      tags: ["CTF", "TryHackMe", "HackTheBox", "Writeups"],
      link: "https://github.com/Kepha-Mwenda/CTF-Walkthroughs",
      featured: true
    },
    {
      title: "Penetration Tests",
      description: "Repository containing offensive security techniques and scripts. Ethical hacking methodologies for authorized security assessments and vulnerability research.",
      tags: ["Pentesting", "Red Team", "Security Assessment", "Exploitation"],
      link: "https://github.com/Kepha-Mwenda/Penetration-Tests",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-card/20 to-transparent">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto glow-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge className="mb-2 bg-secondary/20 text-secondary border-secondary/50">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full group/btn hover:scale-105 transition-all glow hover:glow-strong"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
            asChild
          >
            <a href="https://github.com/Kepha-Mwenda" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
