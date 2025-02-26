"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import GlitchCursor from "./GlitchCursor";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const badRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const [cursorHovering, setCursorHovering] = useState(false);

  const getVideoSrc = (index: number) => `/videos/hero-${index}.mp4`;

  const loadedVideoSet = new Set<string>();

  const handleVideoLoad = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const src = event.currentTarget.src;

    if (!loadedVideoSet.has(src)) {
      loadedVideoSet.add(src);
      setLoadedVideos((prev) => prev + 1);
    }
  };

  const upComingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upComingVideoIndex);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) {
              nextVideoRef.current.play();
            }
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    const videoFrame = document.getElementById("video-frame");
    if (!videoFrame) return;

    gsap.set(videoFrame, {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from(videoFrame, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: videoFrame,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  // Glitch effect for text
  useEffect(() => {
    const badElement = badRef.current;
    const companyElement = companyRef.current;

    if (badElement && companyElement) {
      gsap.fromTo(
        badElement,
        { opacity: 0, x: -50, y: -50, scale: 0.8 },
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        companyElement,
        { opacity: 0, x: 50, y: 50, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }

    // Automatic glitch effect every 5 seconds
    const glitchLoop = setInterval(() => {
      glitchEffect(badRef.current);
      glitchEffect(companyRef.current);
    }, 5000);

    return () => clearInterval(glitchLoop); // Cleanup on unmount
  }, []);

  // Glitch effect function
  const glitchEffect = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.to(el, {
      x: () => (Math.random() - 0.5) * 10, // Small horizontal shake
      y: () => (Math.random() - 0.5) * 5, // Small vertical shake
      color: () => (Math.random() > 0.5 ? "rgb(255,0,0)" : "rgb(0,255,255)"), // Red & cyan flicker
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut",
    });
  };

  const handleMouseEnter = () => {
    setCursorHovering(true);
  };

  const handleMouseLeave = () => {
    setCursorHovering(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        aria-label="Bad Company Hero Section"
      >
        <GlitchCursor isHovering={cursorHovering} />
        <div>
          <div
            className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"
            aria-description="Click to cycle through videos"
          >
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upComingVideoIndex)}
                loop
                muted
                playsInline
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover object-center"
            onCanPlayThrough={handleVideoLoad}
          />
        </div>

        {/* BAD (Top-Left) with Softer Glow */}
        <div
          ref={badRef}
          onMouseEnter={() => {
            glitchEffect(badRef.current);
            handleMouseEnter();
          }}
          onMouseLeave={handleMouseLeave}
          className="absolute top-20 left-10 z-40 text-5xl sm:text-7xl md:text-8xl font-bold opacity-0 neon-glow cursor-none"
          data-text="BAD"
        >
          BAD
        </div>

        {/* COMPANY (Bottom-Right) with Softer Glow */}
        <div
          ref={companyRef}
          onMouseEnter={() => {
            glitchEffect(companyRef.current);
            handleMouseEnter();
          }}
          onMouseLeave={handleMouseLeave}
          className="absolute bottom-10 right-10 z-40 text-5xl sm:text-7xl md:text-8xl font-bold opacity-0 neon-glow cursor-none"
          data-text="COMPANY"
        >
          COMPANY
        </div>
      </div>
      {/* "BadCompany" estático no mesmo estilo */}
      <div className="absolute bottom-10 right-10 text-5xl sm:text-7xl md:text-8xl font-bold text-white">
        COMPANY
      </div>
      <style jsx>{`
        /* Extra Glow Effect */
        .neon-glow::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          filter: blur(15px);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Hero;
