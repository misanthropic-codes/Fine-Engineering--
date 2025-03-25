
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8520917090"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-30"
      aria-label="Contact on WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12 shadow-lg transition-transform hover:scale-110"
      >
        <Phone size={20} className="text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
