// aboutContent.ts

// Define interface types for each content section
export interface HistoriaContent {
  title: string;
  timeline: {
    year: string;
    title: string;
    description: string;
    image: string;
  }[];
}

export interface EquipaContent {
  title: string;
  team: {
    name: string;
    role: string;
    bio: string;
    quote: string;
    image: string;
  }[];
}

export interface MissaoContent {
  title: string;
  text: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ConquistasContent {
  title: string;
  stats: {
    label: string;
    value: number;
    description: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    role: string;
  }[];
}

// Define a type for the content map
export type AboutContentMap = {
  historia: HistoriaContent;
  equipa: EquipaContent;
  missao: MissaoContent;
  conquistas: ConquistasContent;
};

// Export the about page content data
export const aboutContent: AboutContentMap = {
  historia: {
    title: "Nossa História",
    timeline: [
      {
        year: "2004",
        title: "O Início da Revolução",
        description:
          "Primeiro evento no Convento Club em Santos, onde Anyfá Dias e Sanger Chilala transformaram sua paixão pela vida noturna em uma visão que redefiniria a cena de eventos em Portugal.",
        image: "/img/bclandia.jpg",
      },
      {
        year: "2006",
        title: "Primeira Festa na Discoteca Luanda",
        description:
          "Um marco significativo que consolidou nossa presença no setor de eventos, demonstrando nossa dedicação às sonoridades africanas e inaugurando uma nova era.",
        image: "/img/bclandia.jpg",
      },
      {
        year: "2019",
        title: "BC Fest no Altice Arena",
        description:
          "Um evento sem precedentes que reuniu milhares de pessoas celebrando a música e cultura africana no mais prestigiado local de espetáculos em Portugal.",
        image: "/img/bclandia.jpg",
      },
      {
        year: "2021",
        title: "Bissau Xperience",
        description:
          "Expandimos para a Guiné-Bissau com uma experiência imersiva de seis meses, conectando nossa audiência europeia às raízes culturais africanas.",
        image: "/img/bclandia.jpg",
      },
      {
        year: "2022",
        title: "Tour pelo Brasil",
        description:
          "Uma jornada inesquecível de 21 dias explorando Fortaleza, Rio de Janeiro e São Paulo, levando nossa visão e energia para o outro lado do Atlântico.",
        image: "/img/bclandia.jpg",
      },
      {
        year: "2023",
        title: "The Indigo Tour em Londres",
        description:
          "Conquistamos o icónico espaço The O2 em Londres, elevando nossas produções ao patamar internacional e reafirmando nosso compromisso com a excelência.",
        image: "/img/bclandia.jpg",
      },
    ],
  },
  equipa: {
    title: "Nossa Equipa",
    team: [
      {
        name: "Anyfá Vera Cruz",
        role: "Fundador & Produtor Executivo",
        bio: "Visionário por trás dos maiores festivais de música africana em Portugal, com mais de 20 anos dedicados à criação de experiências culturais únicas. Sua liderança transformou a BadCompany em referência no mercado de eventos.",
        quote:
          "A música não é apenas som, é a ponte que conecta culturas e transforma vidas.",
        image: "/img/bclandia.jpg",
      },
      {
        name: "Equipa de Produção",
        role: "Os Maestros dos Bastidores",
        bio: "Profissionais dedicados que transformam conceitos em experiências memoráveis, gerenciando cada detalhe logístico e técnico para que nossos eventos superem todas as expectativas.",
        quote:
          "Cada evento é uma história esperando para ser contada e vivida.",
        image: "/img/bclandia.jpg",
      },
      {
        name: "Equipa Criativa",
        role: "Os Visionários",
        bio: "Mentes inovadoras que projetam a identidade visual e atmosfera de cada evento, garantindo que cada experiência BadCompany seja única e autêntica.",
        quote: "Criatividade é reimaginar o possível e torná-lo realidade.",
        image: "/img/bclandia.jpg",
      },
    ],
  },
  missao: {
    title: "Missão e Valores",
    text: "Proporcionamos uma fuga ao quotidiano através de experiências imersivas que celebram a diversidade cultural e conectam pessoas através da música e da arte.",
    values: [
      {
        title: "Autenticidade",
        description:
          "Valorizamos as raízes culturais e as expressões genuínas que tornam cada evento uma celebração da identidade.",
        icon: "star",
      },
      {
        title: "Inovação",
        description:
          "Buscamos constantemente novas formas de surpreender e transformar conceitos em experiências inesquecíveis.",
        icon: "lightbulb",
      },
      {
        title: "Excelência",
        description:
          "Comprometemo-nos com os mais altos padrões em cada detalhe, desde o planejamento até a execução.",
        icon: "award",
      },
      {
        title: "Conexão",
        description:
          "Criamos ambientes onde pessoas se encontram, culturas se fundem e memórias são construídas.",
        icon: "users",
      },
    ],
  },
  conquistas: {
    title: "Números e Conquistas",
    stats: [
      {
        label: "Anos de Experiência",
        value: 20,
        description: "Duas décadas redefinindo a indústria de eventos",
      },
      {
        label: "Eventos Realizados",
        value: 500,
        description: "Momentos únicos criados em três continentes",
      },
      {
        label: "Seguidores",
        value: 15000,
        description: "Uma comunidade apaixonada e crescente",
      },
      {
        label: "Parcerias",
        value: 40,
        description: "Colaborações que amplificam nossa visão",
      },
    ],
    testimonials: [
      {
        name: "Altice Arena",
        role: "Parceiro Estratégico",
        text: "A parceria com a BadCompany resultou em eventos memoráveis que elevaram o padrão da indústria em Portugal.",
      },
      {
        name: "Omah Lay",
        role: "Artista Internacional",
        text: "Trabalhar com a BadCompany foi uma experiência transformadora que conectou minha música a um público apaixonado.",
      },
    ],
  },
};

// Helper function to get content by section slug
export function getAboutContentBySlug(slug: keyof AboutContentMap) {
  return aboutContent[slug] || null;
}

// Export all valid section slugs
export const validAboutSections = Object.keys(
  aboutContent
) as (keyof AboutContentMap)[];
