"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import { getAboutContentBySlug, HistoriaContent } from "@/data/aboutContent";

// Animation hook for fading in items
const useItemAnimation = (index: number) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView, index]);

  return {
    ref,
    controls,
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, type: "spring", stiffness: 100 },
      },
    },
  };
};

export default function Historia() {
  const historiaContent = getAboutContentBySlug("historia") as HistoriaContent;
  const { title, timeline } = historiaContent;

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const titleAnimation = useItemAnimation(0);

  // Calculate timeline height
  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight(); // Initial call
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [timeline]);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 pt-[96px]"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "visible",
      }}
    >
      <motion.h1
        ref={titleAnimation.ref}
        initial="hidden"
        animate={titleAnimation.controls}
        variants={titleAnimation.variants}
        className="text-4xl sm:text-5xl font-zentry text-center mb-12 text-white"
      >
        {title}
      </motion.h1>

      <div
        ref={timelineRef}
        className="relative max-w-6xl mx-auto relative-container"
      >
        {/* Animated Timeline Line */}
        <div className="absolute left-3 md:left-1/2 transform md:-translate-x-[1px] top-0 w-[2px] h-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-neutral-700 rounded-full"
          />
        </div>

        <div className="space-y-16 relative">
          {timeline.map((item, index) => {
            const itemAnimation = useItemAnimation(index);

            return (
              <motion.div
                key={index}
                ref={itemAnimation.ref}
                initial="hidden"
                animate={itemAnimation.controls}
                variants={itemAnimation.variants}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8 md:gap-12`}
              >
                {/* Year Dot with Gradient Border */}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 z-30 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-black/80 border-2 gradient-border flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-neutral-200 border border-neutral-300" />
                  </div>
                </div>

                {/* Year Label */}
                <div className="pl-12 md:pl-0 text-white text-lg font-bold md:absolute md:left-1/2 md:transform md:translate-y-[-24px] md:translate-x-[-50%] z-20">
                  {item.year}
                </div>

                {/* Left/Right Side Content */}
                <div
                  className={`pl-12 md:pl-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-[250px] overflow-hidden rounded-lg shadow-2xl group mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
