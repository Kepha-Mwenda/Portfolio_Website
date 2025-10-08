import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar = ({ name, level, delay }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2 skill-bar group cursor-pointer">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105 inline-block">{name}</span>
        <span className="text-sm text-muted-foreground group-hover:text-secondary transition-all duration-300 group-hover:scale-110 font-bold">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden border border-border group-hover:border-primary group-hover:h-4 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-1000 ease-out glow group-hover:glow-strong relative overflow-hidden group-hover:animate-pulse"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Cyber Threat Intelligence", level: 95 },
    { name: "Digital Forensics", level: 90 },
    { name: "Malware Analysis", level: 85 },
    { name: "Incident Response", level: 88 },
    { name: "Network Security", level: 82 },
    { name: "SIEM & Log Analysis", level: 87 },
    { name: "Vulnerability Assessment", level: 80 },
    { name: "Python Scripting", level: 78 },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto glow" />
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 glow">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
