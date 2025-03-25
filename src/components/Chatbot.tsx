
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([{ text: "Hi, feel free to ask any questions.", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);

    // Simulate bot response
    setTimeout(() => {
      // This would be where you call an actual AI service with PDF data
      let botResponse = "Thank you for your question. How can I help you further?";

      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes("service")) {
        botResponse = "We offer structural works, building works, road works, and specialized engineering solutions. Our services include steel fabrication, architectural steel, construction of apartments, commercial properties, schools, religious buildings, road construction, and drainage systems.";
      } else if (input.toLowerCase().includes("project")) {
        botResponse = "Our notable projects include Maahad Daawah Organization (14-floor commercial/residential building), Associated Vehicle Assemblers Ltd (Construction of Godown, Mombasa), and many others. Would you like to know more about a specific project?";
      } else if (input.toLowerCase().includes("contact") || input.toLowerCase().includes("office")) {
        botResponse = "You can contact us at info@fineeng.co.ke or via WhatsApp at +254 8520917090. Our Kenya HQ is located at Tirupati Business Park, Warehouse No. 19, Nairobi, and our Uganda Branch is in Kyebando, Kampala.";
      }

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-24 right-8 z-30 rounded-full bg-[#d0bc8f] hover:bg-[#c0786a] h-12 w-12 shadow-lg"
            aria-label="Open chatbot"
          >
            <MessageSquare size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-md flex flex-col p-0">
          <SheetHeader className="bg-[#474454] text-white p-4">
            <SheetTitle className="text-white flex items-center gap-2">
              <MessageSquare size={18} /> 
              <span>Fine Engineering Assistant</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-[#d0bc8f] text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-[#474454] dark:text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                className="bg-[#d0bc8f] hover:bg-[#c0786a]"
                size="icon"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Chatbot;
