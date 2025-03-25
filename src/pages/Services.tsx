
import React from "react";
import { Building, Home, ArrowRight, Settings } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Structural Works",
      description:
        "Our structural works include steel fabrication, architectural steel, and specialized support structures. We design and implement structural solutions that ensure stability, durability, and safety across all projects.",
      icon: <Building className="h-16 w-16 text-[#d0bc8f]" />,
      features: [
        "Steel fabrication",
        "Architectural steel",
        "Support structures",
        "Structural repairs",
        "Steel reinforcement",
      ],
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Building Works",
      description:
        "From commercial properties to residential apartments, schools, and religious buildings, our building works encompass comprehensive construction services. We handle all aspects of the building process, ensuring high-quality results.",
      icon: <Home className="h-16 w-16 text-[#d0bc8f]" />,
      features: [
        "Commercial properties",
        "Residential apartments",
        "Educational institutions",
        "Religious buildings",
        "Interior renovations",
      ],
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Road Works",
      description:
        "Our road construction services include building new roads, maintaining existing infrastructure, and implementing drainage systems. We apply industry best practices to deliver durable, safe, and efficient road networks.",
      icon: <ArrowRight className="h-16 w-16 text-[#d0bc8f]" />,
      features: [
        "Road construction",
        "Drainage systems",
        "Infrastructure development",
        "Road maintenance",
        "Traffic solutions",
      ],
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Specialized Engineering Solutions",
      description:
        "We provide custom engineering solutions for unique project challenges. Our team of experts develops innovative approaches to address specific technical requirements and complex engineering needs.",
      icon: <Settings className="h-16 w-16 text-[#d0bc8f]" />,
      features: [
        "Custom engineering",
        "Technical consulting",
        "Problem-solving",
        "Innovative solutions",
        "Complex project management",
      ],
      imageUrl: "/placeholder.svg",
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Comprehensive engineering and construction solutions for all your
            project needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white">
              What We Offer
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              Fine Engineering Works Ltd provides a wide range of engineering and
              construction services to meet the diverse needs of our clients.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 ${
                  index % 2 === 0 ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr] md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className={index % 2 === 0 ? "" : "md:order-2"}>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#474454] dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-[#d0bc8f] mb-6"></div>
                  <p className="text-[#76737c] dark:text-gray-300 mb-8">
                    {service.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h4 className="font-bold text-[#474454] dark:text-white mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[#76737c] dark:text-gray-300"
                        >
                          <span className="text-[#d0bc8f] font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 0 ? "md:order-2" : ""}>
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-bottom-6 -right-6" : "-bottom-6 -left-6"
                      } w-24 h-24 ${
                        index % 2 === 0 ? "bg-[#f6cf9a]" : "bg-[#c0786a]"
                      } rounded-lg hidden md:block`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#474454]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to discuss your specific project requirements. Our
              team is ready to provide tailored engineering and construction
              solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#d0bc8f] hover:bg-[#c0786a] text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/8520917090"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#474454] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
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

export default Services;
