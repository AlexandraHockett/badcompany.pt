"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Button from "@/components/Button"; // Adjust path as needed

export default function ContactosPage() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ nome: "", email: "", mensagem: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="py-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight text-center">
        Contactos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 shadow-lg relative overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)",
          }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 opacity-30 pointer-events-none" />
          <h2 className="text-md sm:text-lg font-bold text-white mb-3 sm:mb-4">
            Fale Connosco
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4 relative z-10"
          >
            <div>
              <label
                htmlFor="nome"
                className="block text-[10px] sm:text-xs font-medium text-gray-200 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formState.nome}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="O seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] sm:text-xs font-medium text-gray-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="O seu email"
              />
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-[10px] sm:text-xs font-medium text-gray-200 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formState.mensagem}
                onChange={handleChange}
                required
                rows={2}
                className="w-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="A sua mensagem"
              />
            </div>
            <div className="flex justify-center">
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-3 w-3 sm:h-4 sm:w-4 text-white mr-1 sm:mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm text-white">
                    A processar...
                  </span>
                </div>
              ) : (
                <Button
                  title="Enviar"
                  type="submit"
                  disabled={isSubmitting}
                  containerClass="w-full py-0.5 sm:py-1 text-xs sm:text-sm"
                />
              )}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 sm:mt-2 p-1 sm:p-2 bg-green-600/20 border border-green-600/30 rounded-md text-green-200 text-[10px] sm:text-xs text-center w-full"
                >
                  Mensagem enviada!
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Contact Info */}
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10">
            <h3 className="text-sm sm:text-md font-semibold text-white mb-3 sm:mb-4">
              Informações
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start">
                <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400">Email</p>
                  <a
                    href="mailto:geral@badcompany.pt"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    geral@badcompany.pt
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Telefone
                  </p>
                  <a
                    href="tel:+351926036987"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +351 926 036 987
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-400">Morada</p>
                  <p className="text-white">
                    Praceta Major Aviador Humberto da Cruz, n°9
                    <br />
                    2745-026 Queluz
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10">
            <h3 className="text-sm sm:text-md font-semibold text-white mb-3 sm:mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-2 sm:space-x-3 justify-center">
              <motion.a
                href="https://www.instagram.com/badcompany_oficial"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/badcompany"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center"
              >
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/kanalbadcompany"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center"
              >
                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10">
            <h3 className="text-sm sm:text-md font-semibold text-white mb-3 sm:mb-4">
              Localização
            </h3>
            <div className="rounded-md overflow-hidden h-36 sm:h-48 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.492990379808!2d-9.262929684686598!3d38.75797347959149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf4dc4cc10ed%3A0x2c4eb125bae35c2f!2sPraceta%20Major%20Aviador%20Humberto%20da%20Cruz%209%2C%202745-026%20Queluz!5e0!3m2!1spt-PT!2spt!4v1645724163125!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="absolute inset-0"
              />
              <a
                href="https://maps.google.com/?q=Praceta+Major+Aviador+Humberto+da+Cruz+9,+2745-026+Queluz,+Portugal"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-blue-600 hover:bg-blue-700 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium transition-colors flex items-center"
              >
                <FaMapMarkerAlt className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                Direções
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
