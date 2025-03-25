
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { toast } from "sonner";
import GreetingModal from "@/components/GreetingModal";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    // Show greeting modal after 1.5 seconds
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Structural Works",
      description: "Steel fabrication, architectural steel, and more.",
      icon: "building",
    },
    {
      id: 2,
      title: "Building Works",
      description: "Apartments, commercial properties, schools, and religious buildings.",
      icon: "home",
    },
    {
      id: 3,
      title: "Road Works",
      description: "Road construction, drainage systems, and infrastructure.",
      icon: "arrow-right",
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Maahad Daawah Organization",
      description: "14-floor commercial/residential building",
      category: "Building Works",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Associated Vehicle Assemblers Ltd",
      description: "Construction of Godown, Mombasa",
      category: "Structural Works",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Two Rivers Development Ltd",
      description: "Steel AC platforms installation",
      category: "Specialized Projects",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#474454]/90 to-[#474454]/60 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[#474454] opacity-70">
            {/* Video or image background would go here */}
            <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Building Excellence 
              <span className="text-[#f6cf9a]"> Since 1979</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
              Your Trusted Partner in Engineering & Construction
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button
                asChild
                className="bg-[#d0bc8f] hover:bg-[#c0786a] text-white"
                size="lg"
              >
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#474454]"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive engineering and construction solutions to meet all your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#d0bc8f] text-[#474454] hover:bg-[#d0bc8f] hover:text-white dark:text-white"
            >
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white mb-6">
                About Fine Engineering Works Ltd
              </h2>
              <div className="w-24 h-1 bg-[#d0bc8f] mb-6"></div>
              <p className="text-[#76737c] dark:text-gray-300 mb-6">
                Founded in 1979 by Ahmed Nurmohamed Elias, Fine Engineering Works Ltd is an 
                international engineering and construction company with headquarters in Nairobi, 
                Kenya, and a branch in Kampala, Uganda.
              </p>
              <p className="text-[#76737c] dark:text-gray-300 mb-8">
                We work in long-term relationships to develop and sustain our clients' capital 
                assets by providing specialized engineering products, services, and solutions 
                to all sectors including manufacturing, construction, and service industries.
              </p>
              <Button
                asChild
                className="bg-[#d0bc8f] hover:bg-[#c0786a] text-white"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Fine Engineering Works"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#d0bc8f] rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of our notable completed projects, highlighting our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#d0bc8f] text-[#474454] hover:bg-[#d0bc8f] hover:text-white dark:text-white"
            >
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#474454]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to start your project?
              </h2>
              <p className="text-gray-300">
                Contact us today for a free consultation and quote.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="bg-[#d0bc8f] hover:bg-[#c0786a] text-white"
                size="lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#474454]"
                size="lg"
              >
                <a
                  href="https://wa.me/8520917090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone size={18} /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals and Floating Buttons */}
      <GreetingModal open={showGreeting} onClose={() => setShowGreeting(false)} />
      <WhatsAppButton />
      <Chatbot />
      <BackToTop />
    </>
  );
};

export default Home;
