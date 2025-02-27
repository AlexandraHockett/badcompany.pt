"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { aboutContent } from "@/data/aboutContent";

const useSectionAnimation = () => {
  useEffect(() => {
    // Force normal scrolling behavior at the document level
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    return () => {
      // Cleanup when component unmounts
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

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

export default function Conquistas() {
  const { title, stats, testimonials } = aboutContent.conquistas;
  const { ref, controls, variants } = useSectionAnimation();

  return (
    <section ref={ref} className="pb-16">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-4xl sm:text-5xl font-zentry text-center mb-12 text-white"
      >
        {title}
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 },
              },
            }}
            className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:from-white/10 hover:to-white/20 transition-all duration-300 text-center"
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -10px rgba(138, 43, 226, 0.3)",
            }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              {stat.value}+
            </h3>
            <p className="text-xl text-white font-semibold mb-2">
              {stat.label}
            </p>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 0.8, staggerChildren: 0.3 },
          },
        }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-center text-white mb-8">
          Parceiros & Colaboradores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative"
            >
              <div className="absolute -top-4 -left-4 text-6xl text-purple-500 opacity-50">
                "
              </div>
              <p className="text-gray-300 italic mb-4 relative z-10">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div className="ml-3">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
