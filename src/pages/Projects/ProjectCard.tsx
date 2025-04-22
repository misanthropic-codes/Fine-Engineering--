import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const getCategoryLabel = (categoryId) => {
  switch (categoryId) {
    case "building": return "Building Works";
    case "road": return "Road Works";
    case "structural": return "Structural Engineering";
    case "specialized": return "Specialized Projects";
    default: return categoryId;
  }
};

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </AspectRatio>
      <div className="absolute top-4 right-4">
        <Badge className="bg-[#d0bc8f] text-white hover:bg-[#c0786a]">
          {getCategoryLabel(project.category)}
        </Badge>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#474454] dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-[#76737c] dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-between text-sm">
        <span className="text-[#c0786a]">{project.location}</span>
        <span className="text-[#76737c] dark:text-gray-400">
          Completed: {project.completionYear}
        </span>
      </div>
    </div>
  </div>
);

export default ProjectCard;
