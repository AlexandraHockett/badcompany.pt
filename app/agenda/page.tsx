import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";

const Page = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="text-center py-28 bg-cover bg-center">
        <h1 className="text-5xl font-bold text-white shadow-md">
          Bem-vindo à BadCompany
        </h1>
        <p className="text-xl mt-4 text-white shadow-md">Agenda</p>
      </section>
      <section className="text-center py-28 bg-cover bg-center">
        <h1 className="text-5xl font-bold text-white outline-white outline-2">
          Bem-vindo à BadCompany
        </h1>
        <p className="text-xl mt-4 text-white outline-white outline-2">
          Agenda
        </p>
      </section>
      <section className="text-center py-28 bg-cover bg-center">
        <h1 className="text-5xl font-bold text-stroke">
          Bem-vindo à BadCompany
        </h1>
        <p className="text-xl mt-4 text-stroke">Agenda</p>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default Page;
