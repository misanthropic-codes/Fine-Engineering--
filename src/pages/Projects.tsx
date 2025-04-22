import React, { useState } from "react";
import PageHeader from "./Projects/PageHeader";
import FilterButtons from "./Projects/FilterButtons.tsx";
import ProjectsGrid from "./Projects/ProjectsGrid";
import OngoingProjectsSection from "./Projects/OngoingProjectsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";

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

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <PageHeader />

      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FilterButtons
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ProjectsGrid projects={filteredProjects} />

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#76737c] dark:text-gray-300">
                No projects found in this category. Please select another category or view all projects.
              </p>
            </div>
          )}
        </div>
      </section>

      <OngoingProjectsSection />
      <WhatsAppButton />
      <Chatbot />
      <BackToTop />
    </>
  );
};

export default ProjectsPage;
