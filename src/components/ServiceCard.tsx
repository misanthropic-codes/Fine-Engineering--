
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, ArrowRight } from "lucide-react";

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const getIcon = () => {
    switch (service.icon) {
      case "building":
        return <Building className="h-10 w-10 text-[#d0bc8f]" />;
      case "home":
        return <Home className="h-10 w-10 text-[#d0bc8f]" />;
      case "arrow-right":
        return <ArrowRight className="h-10 w-10 text-[#d0bc8f]" />;
      default:
        return <Building className="h-10 w-10 text-[#d0bc8f]" />;
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-t-4 border-t-[#d0bc8f]">
      <CardHeader className="pb-2">
        <div className="mb-2">{getIcon()}</div>
        <CardTitle className="text-xl text-[#474454] dark:text-white">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#76737c] dark:text-gray-300">
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
