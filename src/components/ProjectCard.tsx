
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <CardHeader className="pb-2">
        <div className="mb-1">
          <Badge variant="outline" className="bg-[#f6cf9a]/10 text-[#c0786a]">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-[#474454] dark:text-white">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#76737c] dark:text-gray-300">
          {project.description}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          to={`/projects/${project.id}`}
          className="text-[#d0bc8f] hover:text-[#c0786a] font-medium"
        >
          View Project Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
