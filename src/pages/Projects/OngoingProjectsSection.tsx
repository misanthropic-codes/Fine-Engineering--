import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const OngoingProjectsSection = () => (
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
                <Badge className="bg-[#c0786a] text-white mb-3">In Progress</Badge>
                <h3 className="text-xl font-bold text-[#474454] dark:text-white mb-2">
                  Ongoing Project Name
                </h3>
                <p className="text-[#76737c] dark:text-gray-300 mb-3">
                  Brief description of the ongoing project and its current status.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#d0bc8f]">Location</span>
                  <span className="text-[#76737c] dark:text-gray-400">Expected completion: 2024</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OngoingProjectsSection;
