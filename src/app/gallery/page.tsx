"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { useState } from "react";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Dummy gallery data
  const photos = [
    { title: "Automated Tractors & Feed Unloading", aspect: "aspect-square" },
    { title: "Continuous Sheds Exterior", aspect: "aspect-[4/3]" },
    { title: "Veterinary Check in Sheds", aspect: "aspect-[3/4]" },
    { title: "Sanitization Station", aspect: "aspect-video" },
    { title: "Warehouse Storage", aspect: "aspect-square" },
    { title: "Egg Conveyor Belt", aspect: "aspect-[3/4]" },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-dark mb-6">Farm <span className="text-brand">Gallery</span></h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Take a visual tour of our sprawling facilities, advanced automation, and the daily life at Sunrise Egg Farms.
        </p>
      </AnimatedSection>

      <StaggerChildren className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, i) => (
          <StaggerItem key={i} className="break-inside-avoid">
            <div 
              className={`relative bg-slate-100 rounded-3xl overflow-hidden cursor-pointer group ${photo.aspect} border border-slate-200`}
              onClick={() => setSelectedImage(i)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                <span className="text-sm font-semibold opacity-50 px-4 text-center">{photo.title}</span>
              </div>
              <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-slate-800 rounded-3xl w-full max-w-4xl relative flex flex-col text-white overflow-hidden border border-slate-700 shadow-2xl ${photos[selectedImage].aspect === 'aspect-[3/4]' ? 'max-h-[80vh] w-auto aspect-[3/4]' : 'aspect-video'}`}
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-slate-900">
                <ImageIcon className="w-20 h-20 mb-4 opacity-50 text-slate-600" />
                <h3 className="text-2xl font-bold">{photos[selectedImage].title}</h3>
                <p className="mt-2 text-slate-500">Sunrise Egg Farms Infrastructure</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
