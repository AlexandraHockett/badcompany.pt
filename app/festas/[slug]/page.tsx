import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";

// Define the page props type correctly
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ContentMap = {
  "festas-passadas": {
    title: string;
    description: string;
    image: string;
  };
  festivais: {
    title: string;
    description: string;
    image: string;
  };
  "eventos-privados": {
    title: string;
    description: string;
    image: string;
  };
};

const contentMap: ContentMap = {
  "festas-passadas": {
    title: "Festas Passadas",
    description: "Reviva os melhores momentos das nossas festas passadas.",
    image: "/img/contact-1.webp",
  },
  festivais: {
    title: "Festivais",
    description: "Descubra os festivais incríveis que organizamos.",
    image: "/img/contact-2.webp",
  },
  "eventos-privados": {
    title: "Eventos Privados",
    description: "Eventos exclusivos e personalizados para você.",
    image: "/img/swordman.webp",
  },
};

async function getContentBySlug(slug: keyof ContentMap) {
  return contentMap[slug] || null;
}

export async function generateStaticParams() {
  return [
    { slug: "festas-passadas" },
    { slug: "festivais" },
    { slug: "eventos-privados" },
  ];
}

export default async function FestaSubpage({ params }: PageProps) {
  // Await the params to get the slug
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const validSlugs = Object.keys(contentMap) as (keyof ContentMap)[];
  if (!validSlugs.includes(slug as keyof ContentMap)) {
    notFound();
  }

  const content = await getContentBySlug(slug as keyof ContentMap);

  if (!content) {
    notFound();
  }

  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold mb-8">{content.title}</h1>
      <p className="text-lg text-gray-300 mb-8">{content.description}</p>
      <img
        src={content.image}
        alt={content.title}
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </section>
  );
}
