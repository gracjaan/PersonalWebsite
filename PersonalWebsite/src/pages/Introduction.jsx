import React from "react";
import Logo from "../assets/nametag.webp";
import Grako from "../assets/grako.png";

const Introduction = () => {
  return (
    <section className="mt-[480px] px-10 lg:px-20 2xl:px-40 bg-primary flex flex-col-reverse 2xl:flex-row">
      <div className="flex flex-1 justify-center items-center">
        <img src={Grako} alt="Logo" className="h-[660px]" />
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <h2 className="text-white text-7xl font-normal leading-[70px]">
          Hi. I'm Gracjan Chmielnicki, and I am an independent full stack
          developer with a track record of success in a variety of technologies.
        </h2>
        <h2 className="text-tertiary text-7xl font-normal leading-[70px]">
          Committed to delivering high-quality results and continuously striving
          for personal and professional growth.
        </h2>
        <h2 className="text-white text-7xl font-normal leading-[70px]">
          When I'm not coding, I grow businesses, play basketball, and enjoy life.
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
