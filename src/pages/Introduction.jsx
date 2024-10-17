import React from "react";
import Logo from "../assets/nametag.webp";
import Grako from "../assets/grako.png";

const Introduction = () => {
  return (
    <section className="md:mt-[320px] px-5 sm:px-10 lg:px-20 2xl:px-40 bg-transparent flex flex-col-reverse 2xl:flex-row transition-all ease-in" id="introduction">
      <div className="flex flex-1 justify-center items-center mt-40 2xl:mt-0">
        <img src={Grako} alt="Logo" className="h-[660px]" />
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <h2>
          Hi. I'm Gracjan Chmielnicki, and I am full stack
          developer with a track record of success.
        </h2>
        <h2 className="text-tertiary">
          When I'm not coding, I grow businesses, play basketball, and enjoy life.
        </h2>
        <h2>
          Committed to delivering high-quality results and continuously striving
          for personal growth.
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
