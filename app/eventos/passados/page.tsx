"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/Button";

const events = [
  {
    title: "Monsanto Fest",
    category: "Festivais",
    year: 2022,
    image: "/img/bclandia.jpg",
    video: "/videos/feature-1.mp4",
    testimonial: "Incrível!",
  },
  {
    title: "BC Best White Emotion",
    category: "Nacionais",
    year: 2022,
    image: "/img/bclandia.jpg",
    video: null,
    testimonial: "Noite mágica.",
  },
  {
    title: "A Casa Assombrada",
    category: "Nacionais",
    year: 2022,
    image: "/img/bclandia.jpg",
    video: null,
    testimonial: "Adrenalina pura!",
  },
  {
    title: "Bissau Xperience",
    category: "Internacionais",
    year: 2022,
    image: "/img/bclandia.jpg",
    video: "/videos/feature-1.mp4",
    testimonial: "Cultura viva.",
  },
];

export default function EventosPassados() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Scroll to the current event when 'current' changes
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / events.length;
      scrollRef.current.scrollTo({
        left: scrollWidth * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  // Arrow navigation handlers
  const handlePrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrent((prev) => Math.min(prev + 1, events.length - 1));

  return (
    <section className="relative min-h-screen text-white py-12 overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-8">Eventos Passados</h1>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4"
        style={{
          scrollSnapType: "x mandatory",
          touchAction: "pan-x", // Allows vertical scrolls to propagate to the window
        }}
        onScroll={(e) => {
          // Prevent this scroll event from stopping propagation
          e.stopPropagation = function () {};
        }}
      >
        {events.map((event, idx) => (
          <motion.div
            key={event.title}
            className="flex-shrink-0 w-full md:w-3/4 lg:w-1/2 snap-center relative h-[80vh] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {event.video ? (
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src={event.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
              <motion.h3
                className="text-4xl font-bold"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {event.title}
              </motion.h3>
              <p className="text-lg italic mt-2">"{event.testimonial}"</p>
              <Button title="Explore More" containerClass="mt-6" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          title="←"
          onClick={handlePrev}
          disabled={current === 0}
          containerClass="bg-gray-800/50"
        />
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          title="→"
          onClick={handleNext}
          disabled={current === events.length - 1}
          containerClass="bg-gray-800/50"
        />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {events.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-purple-500" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </section>
  );
}
