
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "building", label: "Building Works" },
    { id: "road", label: "Road Works" },
    { id: "structural", label: "Structural Engineering" },
    { id: "specialized", label: "Specialized Projects" },
  ];

  const projects = [
    {
      id: 1,
      title: "Maahad Daawah Organization",
      description: "14-floor commercial/residential building",
      category: "building",
      location: "Nairobi, Kenya",
      completionYear: 2020,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Associated Vehicle Assemblers Ltd",
      description: "Construction of Godown",
      category: "structural",
      location: "Mombasa, Kenya",
      completionYear: 2019,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Nasserpuria Memon Jamat",
      description: "9-floor apartment & commercial complex",
      category: "building",
      location: "Nairobi, Kenya",
      completionYear: 2018,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Muslim Children Trust",
      description: "School, mosque, hostel",
      category: "building",
      location: "Nairobi, Kenya",
      completionYear: 2017,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Two Rivers Development Ltd",
      description: "Steel AC platforms installation",
      category: "specialized",
      location: "Nairobi, Kenya",
      completionYear: 2021,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Nairobi City County",
      description: "Renovation & aluminum partitioning",
      category: "specialized",
      location: "Nairobi, Kenya",
      completionYear: 2022,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 7,
      title: "Kawangware Access Road",
      description: "Road construction and drainage system",
      category: "road",
      location: "Nairobi, Kenya",
      completionYear: 2021,
      imageUrl: "/placeholder.svg",
    },
    {
      id: 8,
      title: "Kampala Commercial Center",
      description: "5-story commercial building",
      category: "building",
      location: "Kampala, Uganda",
      completionYear: 2023,
      imageUrl: "/placeholder.svg",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryLabel = (categoryId: string) => {
    switch (categoryId) {
      case "building":
        return "Building Works";
      case "road":
        return "Road Works";
      case "structural":
        return "Structural Engineering";
      case "specialized":
        return "Specialized Projects";
      default:
        return categoryId;
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#474454]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#474454]/90 to-[#474454]/60 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[#474454] opacity-70">
            <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Explore our portfolio of completed construction and engineering
            projects.
          </p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={
                  activeFilter === filter.id
                    ? "bg-[#d0bc8f] hover:bg-[#c0786a] border-[#d0bc8f]"
                    : "border-[#d0bc8f] text-[#474454] hover:text-white hover:bg-[#d0bc8f] dark:text-white"
                }
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
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
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#76737c] dark:text-gray-300">
                No projects found in this category. Please select another
                category or view all projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white">
              Ongoing Projects
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at our current projects under construction.
            </p>
          </div>

          {/* Example of ongoing projects - would be replaced with actual data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg p-6"
              >
                <div className="flex items-start gap-6">
                  <div className="w-1/3">
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src="/placeholder.svg"
                        alt="Ongoing Project"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </AspectRatio>
                  </div>
                  <div className="w-2/3">
                    <Badge className="bg-[#c0786a] text-white mb-3">
                      In Progress
                    </Badge>
                    <h3 className="text-xl font-bold text-[#474454] dark:text-white mb-2">
                      Ongoing Project Name
                    </h3>
                    <p className="text-[#76737c] dark:text-gray-300 mb-3">
                      Brief description of the ongoing project and its current
                      status.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#d0bc8f]">Location</span>
                      <span className="text-[#76737c] dark:text-gray-400">
                        Expected completion: 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Components */}
      <WhatsAppButton />
      <Chatbot />
      <BackToTop />
    </>
  );
};

export default Projects;
