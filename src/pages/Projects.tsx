import React, { useState } from "react";
import PageHeader from "./Projects/PageHeader";
import FilterButtons from "./Projects/FilterButtons";
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
    images: [
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Associated Vehicle Assemblers Ltd",
    description: "Construction of Godown",
    category: "structural",
    location: "Mombasa, Kenya",
    completionYear: 2019,
    images: [
      "https://images.unsplash.com/photo-1582268612480-c803f4d7a311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f35678d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Nasserpuria Memon Jamat",
    description: "9-floor apartment & commercial complex",
    category: "building",
    location: "Nairobi, Kenya",
    completionYear: 2018,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https:// grok-prod-user-uploads.s3.amazonaws.com/1729875297_9f08ab63-8cd9-4e04-b3ae-6b3c2d86fb6d.png"
    ]
  },
  {
    id: 4,
    title: "Muslim Children Trust",
    description: "School, mosque, hostel",
    category: "building",
    location: "Nairobi, Kenya",
    completionYear: 2017,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590402494587-44b67d99b33e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 5,
    title: "Two Rivers Development Ltd",
    description: "Steel AC platforms installation",
    category: "specialized",
    location: "Nairobi, Kenya",
    completionYear: 2021,
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f35678d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582268612480-c803f4d7a311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 6,
    title: "Nairobi City County",
    description: "Renovation & aluminum partitioning",
    category: "specialized",
    location: "Nairobi, Kenya",
    completionYear: 2022,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 7,
    title: "Kawangware Access Road",
    description: "Road construction and drainage system",
    category: "road",
    location: "Nairobi, Kenya",
    completionYear: 2021,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470217956765-48a3f4eab603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497436072909-60f69e1b28b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 8,
    title: "Kampala Commercial Center",
    description: "5-story commercial building",
    category: "building",
    location: "Kampala, Uganda",
    completionYear: 2023,
    images: [
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
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
