"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/data/aboutContent";

const useSectionAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return {
    ref,
    controls,
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.2 },
      },
    },
  };
};

export default function Equipa() {
  const { title, team } = aboutContent.equipa;
  const { ref, controls, variants } = useSectionAnimation();

  return (
    <section ref={ref} className="px-4 pb-16">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-3xl sm:text-4xl md:text-5xl font-zentry text-center mb-8 md:mb-12 text-white"
      >
        {title}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
            className="group perspective"
          >
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] transform-style-3d transition-all duration-1000 group-hover:rotate-y-180">
              <div className="absolute inset-0 backface-hidden">
                <div className="relative w-full h-full overflow-hidden rounded-xl border-2 border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3} // Add priority to the first 3 images
                    className="object-cover filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col justify-center">
                <p className="text-lg sm:text-xl md:text-2xl italic text-white mb-4 md:mb-6 font-light line-clamp-6 sm:line-clamp-none">
                  "{member.quote}"
                </p>
                <p className="text-sm sm:text-base text-gray-300 overflow-y-auto max-h-[150px] sm:max-h-none">
                  {member.bio}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}