"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

// Interface para os eventos
interface Evento {
  id: number;
  nome: string;
  data: string;
  imagem: string;
  link: string;
}

// Dados fictícios dos eventos
const eventos: Evento[] = [
  {
    id: 1,
    nome: "BCLANDIA 25",
    data: "2025-03-03T23:59:00", // Corrigido para 3 de março de 2025 às 23:59
    imagem: "/img/bclandia.jpg",
    link: "https://3cket.com/event/bclandia-25/",
  },
  {
    id: 2,
    nome: "BCLANDIA 25",
    data: "2025-03-03T23:59:00", // Corrigido para 3 de março de 2025 às 23:59
    imagem: "/img/bclandia.jpg",
    link: "https://3cket.com/event/bclandia-25/",
  },
];

// Interface para o tempo restante
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Componente Countdown
const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-white text-xl font-bold">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

// Componente Carrossel
const CarrosselEventos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotação automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 w-screen text-white">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-zentry text-center mb-12">
          Próximos Eventos
        </h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {eventos.map((evento) => (
              <div
                key={evento.id}
                className="flex-shrink-0 w-full h-[28rem] sm:h-[36rem] md:h-[40rem] rounded-xl shadow-2xl relative"
              >
                <img
                  src={evento.imagem}
                  alt={evento.nome}
                  className="w-full h-full object-contain rounded-xl" // Mudado para object-contain
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end items-start p-6 sm:p-8 md:p-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                    {evento.nome}
                  </h3>
                  <Countdown targetDate={evento.data} />
                  <a href={evento.link} className="mt-6">
                    <Button title="Comprar Bilhetes" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Controles */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + eventos.length) % eventos.length
              )
            }
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl z-20 hover:text-gray-300 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % eventos.length)
            }
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl z-20 hover:text-gray-300 transition-colors"
          >
            →
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-8">
          {eventos.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 sm:w-5 sm:h-5 mx-2 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrosselEventos;
