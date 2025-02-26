"use client";
import BudgetForm from "@/components/BudgetForm";
import { motion } from "framer-motion";
import Button from "@/components/Button"; // Importe o componente Button

type EventExample = {
  title: string;
  image: string;
  description: string;
};

export default function EventosPrivados() {
  const eventExamples: EventExample[] = [
    {
      title: "BCLândia",
      image: "/img/bclandia.jpg",
      description:
        "Um evento de Carnaval único onde os participantes se mascaram, criando um ambiente de celebração e criatividade inigualável.",
    },
    {
      title: "White Emotion",
      image: "/img/bclandia.jpg",
      description:
        "Celebração do verão com dress code branco, realizada tanto em Portugal como no Brasil, proporcionando uma atmosfera elegante e vibrante.",
    },
    {
      title: "BC Best",
      image: "/img/bclandia.jpg",
      description:
        "Festival de música no Altice Arena que reúne milhares de pessoas e artistas de renome internacional para uma experiência inesquecível.",
    },
    {
      title: "A Casa Assombrada",
      image: "/img/bclandia.jpg",
      description:
        "Festa temática de Halloween com decoração assustadora e competição de fantasias, criando um ambiente de mistério e diversão.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Eventos Privados
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            Queres a tua festa BadCompany?
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Personalizamos cada detalhe para criar uma experiência única e
            inesquecível para você e seus convidados.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Solicite um Orçamento
            </h2>
            <BudgetForm />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Por Que Escolher a BadCompany?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-purple-600 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>
                  Mais de 20 anos de experiência em eventos nacionais e
                  internacionais
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>
                  Equipe especializada em produção, som, iluminação e
                  entretenimento
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>
                  Parcerias exclusivas com os melhores fornecedores do mercado
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-600 p-1 rounded-full mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>
                  Atendimento personalizado do início ao fim do projeto
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Nossos Eventos Emblemáticos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventExamples.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="mb-6">
            Entre em contato também pelo WhatsApp ou e-mail:
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href="https://wa.me/351926036987"
              title="WhatsApp"
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              }
            />
            <Button
              href="mailto:geral@badcompany.pt"
              title="Email"
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
