
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8520917090"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30"
      aria-label="Contact on WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 h-16 w-16 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle size={28} className="text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
