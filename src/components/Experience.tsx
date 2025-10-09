import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data and System Manager",
      company: "Crowd Communication Limited",
      period: "January 2022 – July 2024",
      responsibilities: [
        "Designed and implemented automated reporting systems using SQL to improve data accessibility and decision-making processes",
        "Developed real-time data visualization dashboards in Power BI, enabling effective business insights",
        "Oversaw data collection and management, ensuring data integrity and compliance with organizational policies",
        "Provided technical support and training to colleagues, enhancing system integration and functionality"
      ]
    },
    {
      title: "Data and System Manager",
      company: "County Government of Kajiado (Kajiado North Sub-County)",
      period: "January 2024 – July 2024",
      responsibilities: [
        "Conducted detailed data collection and analysis to support policy development and resource allocation",
        "Leveraged SQL and Excel for trend analysis and reporting",
        "Created interactive Power BI dashboards to present insights to non-technical stakeholders",
        "Trained staff on best practices for data management and visualization tools, fostering organizational efficiency"
      ]
    },
    {
      title: "Investigative Assistant",
      company: "Directorate of Criminal Investigations, Kenya",
      period: "September 2021 – December 2021",
      responsibilities: [
        "Analyzed complex data sets to support criminal investigations",
        "Participated in digital forensics, crime scene investigations, and fingerprint identification",
        "Assisted in developing secure data storage systems to maintain confidentiality of sensitive information"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto glow" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:glow group"
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/90">
                      <span className="text-primary mt-1.5 font-bold">▹</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-card/50 backdrop-blur-sm border-secondary/20 glow-accent">
          <h3 className="text-xl font-semibold mb-4 text-secondary">Key Achievements</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="text-secondary mt-1.5 font-bold">★</span>
              <span className="leading-relaxed">Spearheaded the implementation of Power BI dashboards</span>
            </li>
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="text-secondary mt-1.5 font-bold">★</span>
              <span className="leading-relaxed">Identified and addressed inefficiencies in data processes, saving significant resources for the County Government of Kajiado</span>
            </li>
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="text-secondary mt-1.5 font-bold">★</span>
              <span className="leading-relaxed">Recognized for outstanding analytical contributions during the internship at the Directorate of Criminal Investigations Kenya</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
