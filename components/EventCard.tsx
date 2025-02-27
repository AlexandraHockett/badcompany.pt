"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type EventCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function EventCard({ title, image, href }: EventCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-lg overflow-hidden"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 1, y: 0 }} // Agora o texto é sempre visível
            whileHover={{ opacity: 1, y: -5 }} // E ganha um leve efeito no hover
            className="text-2xl font-semibold text-white text-center px-2"
          >
            {title}
          </motion.h2>
        </div>
      </motion.div>
    </Link>
  );
}
