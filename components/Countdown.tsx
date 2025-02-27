"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type CountdownProps = { targetDate: Date };

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })); // Initial static value for SSR
  const [hydrated, setHydrated] = useState(false);

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    setHydrated(true); // Mark as hydrated
    setTimeLeft(calculateTimeLeft()); // Set initial time on client
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const animateNumber = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="flex gap-6 justify-center text-xl">
      {Object.entries(
        hydrated ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 }
      ).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="flex flex-col items-center bg-gray-800/50 p-4 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={animateNumber}
        >
          <span className="text-3xl font-bold text-purple-400">{value}</span>
          <span className="text-sm capitalize">{unit.slice(0, -1)}</span>
        </motion.div>
      ))}
    </div>
  );
}
