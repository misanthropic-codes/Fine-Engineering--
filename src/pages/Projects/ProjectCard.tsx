"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react';

const getCategoryLabel = (categoryId) => {
  switch (categoryId) {
    case "building": return "Building Works";
    case "road": return "Road Works";
    case "structural": return "Structural Engineering";
    case "specialized": return "Specialized Projects";
    default: return categoryId;
  }
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isPaused && !isExpanded && project.images?.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isExpanded, project.images]);

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <>
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <motion.img
              src={project.images?.[currentImageIndex] || project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsExpanded(true)}
            />
          </AspectRatio>
          {project.images?.length > 1 && (
            <motion.div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </motion.div>
          )}
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
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative max-w-4xl max-h-screen p-4"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={project.images?.[currentImageIndex] || project.imageUrl}
                alt={`Expanded ${project.title}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
              />
              {project.images?.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;