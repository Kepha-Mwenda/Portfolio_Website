import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send } from "lucide-react";
import { toast } from "sonner";

const ContactChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    // In a real implementation, this would send to a backend
    toast.success("Message sent! I'll get back to you soon.");
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        size="lg"
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg glow-strong hover:scale-110 transition-all ${
          isOpen ? "rotate-90" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card/95 backdrop-blur-sm border-primary/30 shadow-2xl glow-strong animate-scale-in">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gradient">Get in Touch</h3>
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can I help you?"
                  rows={4}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full group hover:scale-105 transition-all glow hover:glow-strong"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Available for cybersecurity consulting and collaboration
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default ContactChat;
