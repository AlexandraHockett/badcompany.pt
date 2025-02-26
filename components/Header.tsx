"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

import { FaBars, FaTimes } from "react-icons/fa"; // Using react-icons
import Playbutton from "./Playbutton";

const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Eventos", href: "/eventos" },
  { label: "Media", href: "/media" },
  { label: "Loja", href: "/loja" },
  { label: "Contactos", href: "/contactos" },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (navContainerRef.current) {
      if (currentScrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove("floating-nav");
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current.classList.add("floating-nav");
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.add("floating-nav");
      }
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (isMenuOpen && mobileNavRef.current) {
      gsap.fromTo(
        mobileNavRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3 }
      );
    } else if (!isMenuOpen && mobileNavRef.current) {
      gsap.to(mobileNavRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <img src="/images/logo-black.png" alt="logo" className="w-20" />
            </div>
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-hover-btn"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:block">
                <button
                  className="ml-10 flex items-center space-x-0.5"
                  onClick={toggleAudioIndicator}
                >
                  <audio
                    ref={audioElementRef}
                    className="hidden"
                    src="/audio/loop.mp3"
                    loop
                  />
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                      style={{ animationDelay: `${bar * 0.1}s` }}
                    />
                  ))}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full min-h-[4rem] md:hidden">
              <Playbutton
                onClick={toggleAudioIndicator}
                isPlaying={isAudioPlaying}
                aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="relative block md:hidden">
              <button
                className="text-xl z-50 text-blue-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Navigation Menu - Below Header with Left-Aligned Links */}
      <div
        ref={mobileNavRef}
        className="fixed top-20 inset-x-0 z-40 bg-black/30 backdrop-blur-md overflow-hidden h-0 opacity-0 transition-all duration-300 md:hidden"
      >
        <nav className="p-5 flex flex-col items-start w-full max-w-md mx-auto space-y-6 text-white text-xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-gray-300 p-2 w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
