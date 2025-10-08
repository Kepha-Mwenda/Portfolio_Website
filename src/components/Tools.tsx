import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Terminal, 
  Search, 
  Database, 
  Eye, 
  Lock,
  Network,
  FileSearch,
  Bug,
  Activity
} from "lucide-react";

const Tools = () => {
  const tools = [
    { name: "Wireshark", icon: Network, category: "Network Analysis" },
    { name: "Metasploit", icon: Bug, category: "Penetration Testing" },
    { name: "Splunk", icon: Activity, category: "SIEM" },
    { name: "Burp Suite", icon: Search, category: "Web Security" },
    { name: "Nmap", icon: Network, category: "Network Scanning" },
    { name: "Volatility", icon: Database, category: "Memory Forensics" },
    { name: "Autopsy", icon: FileSearch, category: "Digital Forensics" },
    { name: "IDA Pro", icon: Terminal, category: "Reverse Engineering" },
    { name: "Snort", icon: Shield, category: "IDS/IPS" },
    { name: "Kali Linux", icon: Terminal, category: "Operating System" },
    { name: "MITRE ATT&CK", icon: Eye, category: "Threat Framework" },
    { name: "REMnux", icon: Lock, category: "Malware Analysis" },
  ];

  return (
    <section id="tools" className="py-20 px-4 bg-gradient-to-b from-transparent to-card/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tools & Technologies</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto glow-accent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <Card
              key={tool.name}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20 group-hover:glow">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tool.category}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
