"use client";
import { useEffect, useState } from "react";

const stats = [
  { label: "Eventos Realizados", value: 500 },
  { label: "Anos de Experiência", value: 20 },
  { label: "Seguidores", value: 15000 },
  { label: "Parceiros", value: 40 },
];

const Stats = () => {
  const [count, setCount] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      const interval = setInterval(() => {
        setCount((prev) =>
          prev.map((num, i) =>
            i === index
              ? Math.min(num + Math.ceil(stat.value / 50), stat.value)
              : num
          )
        );
      }, 50);

      setTimeout(() => clearInterval(interval), 2500);
    });
  }, []);

  return (
    <section className="py-16 px-6 bg-zinc-700 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Os Nossos Números</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={stat.label} className="text-3xl font-bold">
            <span className="text-yellow-400">{count[index]}</span>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
