"use client"; // Required for framer-motion

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section className="py-8 sm:py-12 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-zentry mb-8 text-white"
      >
        Sobre Nós
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl mb-12 text-gray-300"
      >
        Descobre quem somos e o que nos move.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          href="/sobre/historia"
          className="p-4 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white hover:text-gray-300"
        >
          História
        </Link>
        <Link
          href="/sobre/equipa"
          className="p-4 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white hover:text-gray-300"
        >
          Equipa
        </Link>
        <Link
          href="/sobre/missao"
          className="p-4 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white hover:text-gray-300"
        >
          Missão e Valores
        </Link>
        <Link
          href="/sobre/conquistas"
          className="p-4 hover:bg-white/10 rounded-lg transition-colors duration-300 text-white hover:text-gray-300"
        >
          Conquistas
        </Link>
      </div>
    </section>
  );
}
