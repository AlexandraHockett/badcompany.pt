"use client"; // Add this at the top

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

import { AboutContentMap, ConquistasContent, EquipaContent, getAboutContentBySlug, HistoriaContent, MissaoContent, validAboutSections } from "@/data/aboutContent";

type ContentWrapperProps = {
  slug: string;
};

export default function ContentWrapper({ slug }: ContentWrapperProps) {
  if (!validAboutSections.includes(slug as keyof AboutContentMap)) {
    notFound();
  }

  const content = getAboutContentBySlug(slug as keyof AboutContentMap);
  if (!content) {
    notFound();
  }

  const headingClass =
    "text-4xl sm:text-5xl font-zentry text-center mb-12 text-white mt-0";

  switch (slug) {
    case "historia":
      const historiaContent = content as HistoriaContent;
      return (
        <section className="pb-16 max-w-[90%] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={headingClass}
          >
            {historiaContent.title}
          </motion.h2>

          <div className="space-y-8">
            {historiaContent.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <div className="relative w-full sm:w-[80%] md:w-[300px] h-[200px] sm:h-[250px] md:h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.year} - {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      );

    case "equipa":
      const equipaContent = content as EquipaContent;
      return (
        <section className="pb-16 max-w-[90%] mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={headingClass}
          >
            {equipaContent.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipaContent.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-lg object-cover filter grayscale group-hover:filter-none transition-all"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-lg text-gray-300">{member.role}</p>
                  <p className="text-sm italic text-white mt-2">
                    "{member.quote}"
                  </p>
                  <p className="text-sm text-gray-300 mt-2">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      );

    case "missao":
      const missaoContent = content as MissaoContent;
      return (
        <section className="pb-16 max-w-[90%] mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={headingClass}
          >
            {missaoContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-white text-center"
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
          >
            {missaoContent.text}
          </motion.p>
        </section>
      );

    case "conquistas":
      const conquistasContent = content as ConquistasContent;
      return (
        <section className="pb-16 max-w-[90%] mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={headingClass}
          >
            {conquistasContent.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {conquistasContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg hover:bg-zinc-600 transition-colors"
              >
                <h3 className="text-5xl font-bold text-white">{stat.value}+</h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      );

    default:
      notFound();
  }
}
