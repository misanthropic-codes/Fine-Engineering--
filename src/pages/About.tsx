
import React from "react";
import { Check } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";

const About = () => {
  const coreValues = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering the highest quality construction and engineering solutions.",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our business dealings, ensuring transparency and trust.",
    },
    {
      title: "Innovation",
      description:
        "We continuously seek innovative approaches to overcome challenges and enhance our service delivery.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients, partners, and team members to achieve collective success.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Learn about our history, mission, vision, and the values that drive
            our company.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#474454] dark:text-white mb-6">
                Our History
              </h2>
              <div className="w-24 h-1 bg-[#d0bc8f] mb-6"></div>
              <p className="text-[#76737c] dark:text-gray-300 mb-6">
                Founded in 1979 by Ahmed Nurmohamed Elias, Fine Engineering
                Works Ltd has grown to become a leading engineering and
                construction company in East Africa. With our headquarters in
                Nairobi, Kenya, and a branch in Kampala, Uganda, we've
                established a strong presence in the region.
              </p>
              <p className="text-[#76737c] dark:text-gray-300 mb-6">
                Over the decades, we've built a reputation for delivering
                high-quality structural, building, and road construction
                projects. Our commitment to excellence has allowed us to forge
                long-term relationships with clients across various sectors.
              </p>
              <p className="text-[#76737c] dark:text-gray-300">
                Today, Fine Engineering Works Ltd continues to expand its
                operations, taking on increasingly complex and ambitious
                projects while maintaining the same dedication to quality and
                client satisfaction that has defined us from the beginning.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Company History"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#f6cf9a] rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#474454] dark:text-white mb-4">
                Our Mission
              </h2>
              <div className="w-16 h-1 bg-[#d0bc8f] mb-6"></div>
              <p className="text-[#76737c] dark:text-gray-300">
                We work in long-term relationships to develop and sustain our
                clients' capital assets by providing specialized engineering
                products, services, and solutions to all sectors including
                manufacturing, construction, and service industries.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#474454] dark:text-white mb-4">
                Our Vision
              </h2>
              <div className="w-16 h-1 bg-[#d0bc8f] mb-6"></div>
              <p className="text-[#76737c] dark:text-gray-300">
                To provide state-of-the-art engineering services in the
                industrial sector, becoming the premier choice for construction
                and engineering solutions in East Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              These values guide our decisions, actions, and interactions with
              clients, partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="mt-1 bg-[#d0bc8f] p-2 rounded-full">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#474454] dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#76737c] dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#474454] dark:text-white">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#d0bc8f] mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-[#76737c] dark:text-gray-300 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for team members - would be replaced with actual team data */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-square bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#474454] dark:text-white mb-1">
                    Team Member Name
                  </h3>
                  <p className="text-[#c0786a] mb-4">Position</p>
                  <p className="text-[#76737c] dark:text-gray-300">
                    Brief description about the team member and their expertise.
                  </p>
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

export default About;
