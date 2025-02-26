"use client";

import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Button from "./Button";

// Define props interfaces
interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

// Contact component
const Contact: React.FC = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 z-0">
          <ImageClipBox
            clipClass="contact-clip-path-1"
            src="img/contact-1.webp"
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 z-0">
          <ImageClipBox
            clipClass="absolute md:scale-125"
            src="img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125"
            src="img/swordman.webp"
          />
        </div>

        <div className="flex flex-col items-center text-center relative z-10">
          <p className="font-general text-[10px] uppercase">
            💬 Junta-te a Nós
          </p>
          <p
            className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]"
            style={{
              WebkitTextStroke: "0.5px black",
              textShadow: "0 0 8px rgba(0,0,0,0.4)",
            }}
          >
            Tens um evento <br /> para organizar?
            <br />
          </p>
          <br />

          <div style={{ position: "relative", zIndex: 50 }}>
            <Button title="Fala Connosco" href="mailto:geral@badcompany.pt" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 [text-shadow:0_0_3px_rgba(0,0,0,0.8),0_0_8px_rgba(0,0,0,0.9)]">
            <a
              href="https://www.instagram.com/badcompany_oficial"
              className="text-pink-500 hover:text-white font-medium"
            >
              🔹 Instagram
            </a>
            <a
              href="https://www.facebook.com/badcompany"
              className="text-blue-600 hover:text-white font-medium"
            >
              🔹 Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/badcompany"
              className="text-red-600 hover:text-white font-medium"
            >
              🔹 YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
