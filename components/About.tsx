"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 text-center bg-zinc-700 text-white"
    >
      <h2 className="text-4xl font-bold mb-4">Sobre a BadCompany</h2>
      <p className="max-w-3xl mx-auto text-lg">
        Com mais de 20 anos de experiência, a{" "}
        <span className="text-yellow-400 font-semibold">BadCompany</span>{" "}
        transforma visões em realidade, organizando eventos inesquecíveis e
        promovendo a cultura africana através da música.
      </p>
    </section>
  );
};

export default About;
