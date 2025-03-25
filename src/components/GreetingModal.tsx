
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GreetingModalProps {
  open: boolean;
  onClose: () => void;
}

const GreetingModal: React.FC<GreetingModalProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#474454]">
            Hey, there!
          </DialogTitle>
        </DialogHeader>
        <div className="text-center py-4">
          <p className="text-[#76737c]">
            Welcome to Fine Engineering Works Ltd
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GreetingModal;
