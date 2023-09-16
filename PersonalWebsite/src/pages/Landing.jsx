import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const Landing = () => {
  return (
    <section className="pt-40 h-screen min-h-[100vh] flex flex-col justify-between">
      <div className="px-10 lg:px-20 2xl:px-40">
        <div className="pb-16">
          <h1 className="text-white text-7xl font-bold leading-[90px]">
            Enhance your
          </h1>
          <div className="h-[90px] overflow-hidden">
            <h1 className="text-white text-7xl font-bold animate-rotatingText leading-[90px]">
              business development
            </h1>
            <h1 className="text-white text-7xl font-bold animate-rotatingText leading-[90px]">
              application performance
            </h1>
            <h1 className="text-white text-7xl font-bold animate-rotatingText leading-[90px]">
              developers' knowledge
            </h1>
          </div>
          <h1 className="text-white text-7xl font-bold leading-[90px]">
            with me!
          </h1>
        </div>
        <button className="text-white text-lg leading-8 hover:text-primary transition ease-in hidden md:block border border-secondary-100 rounded-full px-8 py-4 hover:bg-secondary-100">
          Get in touch
        </button>
      </div>
      <div className="hidden 2xl:block px-40 mt-10 mb-[120px]">
        <ArrowDownIcon className="h-24 text-tertiary animate-bounce" />
      </div>
    </section>
  );
};

export default Landing;
