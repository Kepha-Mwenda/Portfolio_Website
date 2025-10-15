import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactChat = () => {
  // Replace this URL with your actual Google Form link
  const googleFormUrl = "https://forms.gle/YOUR_FORM_ID";

  const handleContactClick = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg glow-strong hover:scale-110 transition-all"
      onClick={handleContactClick}
      title="Get in Touch via Google Form"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ContactChat;
