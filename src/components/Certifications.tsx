import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import certDeloitte from "@/assets/cert-deloitte.jpg";
import certMastercard from "@/assets/cert-mastercard.jpg";
import certTelstra from "@/assets/cert-telstra.jpg";
import certThmPresec from "@/assets/cert-thm-presec.jpg";
import certThmSoc from "@/assets/cert-thm-soc.jpg";
import certCti from "@/assets/cert-cti.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "SOC Level 1",
      issuer: "TryHackMe",
      date: "August 2025",
      duration: "87 hours 50 minutes",
      image: certThmSoc,
      tags: ["SOC", "Blue Team", "SIEM"]
    },
    {
      title: "Cyber Threat Intelligence 101",
      issuer: "arcX",
      date: "June 2025",
      duration: "Foundation Level",
      image: certCti,
      tags: ["CTI", "Threat Analysis", "Intelligence"]
    },
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Deloitte",
      date: "October 2025",
      duration: "Practical Tasks",
      image: certDeloitte,
      tags: ["Cybersecurity", "Industry Simulation"]
    },
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Mastercard",
      date: "October 2025",
      duration: "Phishing Analysis",
      image: certMastercard,
      tags: ["Phishing", "Social Engineering"]
    },
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Telstra",
      date: "October 2025",
      duration: "Malware Response",
      image: certTelstra,
      tags: ["Malware", "Incident Response"]
    },
    {
      title: "Pre Security Learning Path",
      issuer: "TryHackMe",
      date: "August 2025",
      duration: "7 hours 38 minutes",
      image: certThmPresec,
      tags: ["Fundamentals", "Security Basics"]
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto glow" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group"
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{cert.date}</span>
                  <span className="text-xs text-secondary">{cert.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
