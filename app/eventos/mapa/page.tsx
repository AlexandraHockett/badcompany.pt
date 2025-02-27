"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamically import InteractiveMap with SSR disabled
const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false, // This ensures the component only loads on the client
});

type Event = {
  name: string;
  date: string;
  description: string;
};

type Location = {
  name: string;
  coords: [number, number];
  images: string[];
  events: Event[];
};

export default function MapaEventos() {
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

  const locations: Location[] = [
    {
      name: "Londres, Inglaterra",
      coords: [51.5074, -0.1278],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
      ],
      events: [
        {
          name: "The Indigo Tour 2023",
          date: "2023",
          description: "Evento realizado no espaço The O2, em Londres.",
        },
      ],
    },
    {
      name: "Suíça",
      coords: [46.8182, 8.2275],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
      ],
      events: [
        {
          name: "Evento na Suíça",
          date: "2022",
          description:
            "Presença da BadCompany na Suíça durante a tour europeia.",
        },
      ],
    },
    {
      name: "Guiné-Bissau",
      coords: [11.8037, -15.1804],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
      ],
      events: [
        {
          name: "Bissau Xperience",
          date: "2021",
          description:
            "Festival de 6 meses para promover a cultura e música da Guiné-Bissau.",
        },
        {
          name: "Tour Guiné-Bissau",
          date: "2022",
          description: "Evento realizado durante a tour de 2022.",
        },
      ],
    },
    {
      name: "Brasil",
      coords: [-14.235, -51.9253],
      images: [
        "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
      ],
      events: [
        {
          name: "Tour Brasil 2022",
          date: "2022",
          description:
            "Tour de 21 dias com eventos em Fortaleza, Rio de Janeiro e São Paulo.",
        },
      ],
    },
    {
      name: "Luxemburgo",
      coords: [49.8153, 6.1296],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
      ],
      events: [
        {
          name: "Evento no Centro de Luxemburgo",
          date: "2023",
          description: "Presença da BadCompany no centro de Luxemburgo.",
        },
      ],
    },
  ];

  return (
    <section className="py-12 text-center text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Eventos Internacionais da BadCompany
      </h1>
      <p className="mb-8 text-lg max-w-2xl mx-auto">
        A BadCompany realizou eventos significativos em diversos países,
        consolidando sua presença global.
      </p>
      <InteractiveMap locations={locations} />
    </section>
  );
}
