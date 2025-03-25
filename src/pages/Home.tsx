import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import GreetingModal from "@/components/GreetingModal";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Show greeting modal after 1.5 seconds
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
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
      description: "14-floor commercial/residential building with modern architecture and amenities.",
      category: "Building Works",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Associated Vehicle Assemblers Ltd",
      description: "Construction of Godown in Mombasa with state-of-the-art facilities.",
      category: "Structural Works",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Nasserpuria Memon Jamat",
      description: "9-floor apartment & commercial complex with modern amenities.",
      category: "Building Works",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <>
      {/* Hero Section - Updated with cleaner construction background */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a36]/95 to-[#001a36]/80 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <img 
              src="/lovable-uploads/908cdee3-d2b9-45bb-86fb-3a7fe2ad3529.png" 
              alt="Construction site" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-[#d0bc8f]/80 px-4 py-1 text-sm font-medium mb-6 backdrop-blur-sm light-mode-visible">
              Welcome to Fine Engineering Works Ltd
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in hero-text light-mode-visible">
              Building Excellence 
              <span className="text-[#d0bc8f]"> Since 1979</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in max-w-2xl hero-text light-mode-visible">
              Your Trusted Partner in Engineering & Construction - delivering exceptional structural, building, and road construction projects internationally.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button
                asChild
                className="bg-[#d0bc8f] hover:bg-[#c0b080] text-white rounded-md"
                size="lg"
              >
                <Link to="/projects" className="flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#001a36] rounded-md"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center animate-pulse">
          <p className="mb-2 text-sm light-mode-visible">Scroll to discover</p>
          <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a36] dark:text-white">
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
              className="border-[#d0bc8f] text-[#001a36] hover:bg-[#d0bc8f] hover:text-white dark:text-white"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#001a36] dark:text-white mb-6">
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
                  src="/lovable-uploads/32b4e699-e55b-4f8f-87ff-3542be16fcce.png"
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
      <section className="py-20 bg-[#f5f5f0] dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a36] dark:text-white">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of our notable completed projects, highlighting our expertise and commitment to excellence.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button className="px-6 py-2 rounded-full bg-[#d0bc8f] text-white">
              All Projects
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-[#d0bc8f] hover:text-white text-[#001a36] transition-colors">
              Building Works
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-[#d0bc8f] hover:text-white text-[#001a36] transition-colors">
              Structural Engineering
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-[#d0bc8f] hover:text-white text-[#001a36] transition-colors">
              Road Works
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-[#d0bc8f] hover:text-white text-[#001a36] transition-colors">
              Specialized Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#f5f5f0] text-[#001a36]">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-[#001a36] dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#76737c] dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-[#d0bc8f] hover:text-[#c0786a] flex items-center gap-1 text-sm font-medium"
                  >
                    View Project Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-[#d0bc8f] text-[#001a36] hover:bg-[#d0bc8f] hover:text-white dark:text-white"
            >
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001a36]">
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
                className="border-white text-white hover:bg-white hover:text-[#001a36]"
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
