import { useState, useEffect } from "react";

interface GlitchCursorProps {
  isHovering: boolean;
}

const GlitchCursor: React.FC<GlitchCursorProps> = ({ isHovering }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  useEffect(() => {
    if (isHovering) {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }, 2000);

      return () => clearInterval(glitchInterval);
    }
  }, [isHovering]);

  return (
    <div
      className={`fixed pointer-events-none z-50 mix-blend-difference ${
        isHovering ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={`relative ${isGlitching ? "animate-glitch" : ""}`}>
        <div className="w-12 h-12 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
      </div>
    </div>
  );
};

export default GlitchCursor;
