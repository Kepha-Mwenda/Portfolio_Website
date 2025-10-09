import { Card } from "@/components/ui/card";
import { Shield, Database, Search, Users } from "lucide-react";

const About = () => {
  const competencies = [
    {
      icon: Database,
      title: "Data Analytics & Visualization",
      description: "Advanced expertise in data analytics and visualization with proficiency in SQL, Power BI, and Excel"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Forensics",
      description: "Practical experience with Wireshark, Burp Suite, Nmap for vulnerability scanning and network traffic analysis"
    },
    {
      icon: Search,
      title: "Problem Solving",
      description: "Creative problem-solving and analytical thinking to address complex technical challenges"
    },
    {
      icon: Users,
      title: "Communication",
      description: "Strong ability to explain technical findings to non-technical audiences and build stakeholder relationships"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {competencies.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 glow">
          <p className="text-lg text-foreground leading-relaxed text-center">
            Demonstrates exceptional expertise in data analytics, management, and visualization. 
            Experienced in using tools such as Tableau and Power BI to deliver actionable insights. 
            Gained practical experience with cybersecurity tools and completed multiple secure infrastructure labs. 
            Practiced cyber hygiene techniques including secure password policies, system hardening, and awareness of phishing and malware threats. 
            Adept at solving complex problems with creativity and operating independently to achieve desired outcomes.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
