import React from "react";
import Logo from "../assets/nametag.webp";

const Introduction = () => {
  return (
    <section className="mt-[480px] px-10 lg:px-20 2xl:px-40 bg-primary flex flex-col-reverse 2xl:flex-row">
      <div className="flex flex-1 justify-center items-center">
        <img src={Logo} alt="Logo" className="h-[660px]" />
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <h2 className="text-white text-7xl font-normal leading-[70px]">
          Hi. I'm Mike Chudziak, and I am a technical consultant with over 10
          years of experience.
        </h2>
        <h2 className="text-tertiary text-7xl font-normal leading-[70px]">
          React Native Core Contributor. Fortune 100 experience. React Native
          since 2016.
        </h2>
        <h2 className="text-white text-7xl font-normal leading-[70px]">
          When I'm not coding, I scale technical teams and help engineers
          develop their skills.
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
