"use client";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { ReactElement, useEffect } from "react";
import Button from "@/components/Button"; // Import your fancy button

// Define interface for link objects
interface SocialLink {
  href: string;
  icon: ReactElement;
  hoverColor: string;
}

const links: SocialLink[] = [
  {
    href: "https://www.instagram.com/badcompany_oficial",
    icon: <FaInstagram size={24} />,
    hoverColor: "hover:text-pink-500",
  },
  {
    href: "https://www.facebook.com/badcompany",
    icon: <FaFacebook size={24} />,
    hoverColor: "hover:text-blue-600",
  },
  {
    href: "https://www.youtube.com/channel/badcompany",
    icon: <FaYoutube size={24} />,
    hoverColor: "hover:text-red-600",
  },
];

interface FooterbcProps {
  className?: string;
}

const Footerbc: React.FC<FooterbcProps> = ({ className }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <footer
      className={`w-screen bg-gradient-to-t from-black to-gray-900 py-8 text-white ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Top Section: Logo/Branding + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <motion.span
              className="text-2xl font-bold text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              BadCompany
            </motion.span>
            <span className="text-sm">Experiências que Marcam</span>
          </div>

          <div className="flex gap-6">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white transition-all duration-300 ${link.hoverColor}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle Section: Contact + CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <p className="text-sm">
            Contato:{" "}
            <a
              href="mailto:geral@badcompany.pt"
              className="text-purple-400 hover:underline"
            >
              geral@badcompany.pt
            </a>
          </p>
          <Button
            title="Junte-se à Festa"
            href="/eventos/proximos"
            leftIcon={<span>🎉</span>}
            containerClass="bg-gray-800 hover:bg-purple-600"
          />
        </div>

        {/* Bottom Section: Legal + Credits */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} BadCompany. Todos os direitos
            reservados.
          </p>

          <div className="flex gap-6">
            <a
              href="/politica-de-privacidade"
              className="hover:text-purple-400 transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-e-condicoes"
              className="hover:text-purple-400 transition-colors"
            >
              Termos e Condições
            </a>
            <a
              href="/politica-de-cookies"
              className="hover:text-purple-400 transition-colors"
            >
              Política de Cookies
            </a>
          </div>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.alexandrahockett.com/"
              className="text-white hover:text-purple-400 transition-colors"
              target="_blank"
            >
              AHockett
            </a>
          </p>
        </div>
      </div>

      {/* Optional: Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4B0082_0%,transparent_70%)] opacity-20"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </footer>
  );
};

export default Footerbc;
