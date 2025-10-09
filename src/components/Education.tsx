import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "Cybersecurity Bootcamp",
      institution: "Moringa School",
      status: "Ongoing",
      description: "Intensive training in cybersecurity fundamentals, threat intelligence, digital forensics, and security operations",
      skills: ["Wireshark", "Burp Suite", "Nmap", "LAMP Stack Hardening", "Secure PHP", "Cyber Hygiene"]
    },
    {
      degree: "Bachelor of Science in Forensic Science",
      institution: "Kirinyaga University, Kenya",
      status: "Completed",
      description: "Comprehensive study in forensic science, criminal investigation techniques, and scientific analysis methods",
      skills: ["Digital Forensics", "Crime Scene Investigation", "Fingerprint Analysis", "Evidence Analysis"]
    },
    {
      degree: "Computer Packages Certification",
      institution: "FR. John Hannon Memorial Computer College",
      status: "Completed",
      description: "Professional certification in essential computer applications and office productivity tools",
      skills: ["Microsoft Office Suite", "Google Workspace", "Data Management"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education & Training</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto glow" />
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:glow group"
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={edu.status === "Ongoing" ? "default" : "secondary"}
                    className="flex items-center gap-1"
                  >
                    <Clock className="h-3 w-3" />
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
