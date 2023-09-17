import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import OvalButton from "../components/OvalButton";

const Landing = () => {
  return (
    <section className="pt-40 h-screen min-h-[100vh] flex flex-col justify-between">
      <div className="px-10 lg:px-20 2xl:px-40">
        <div className="pb-16">
          <h1>
            Enhance your
          </h1>
          <div className="h-[60px] lg:h-[72px] 2xl:h-[120px] overflow-hidden">
            <h1 className="animate-rotatingText1 lg:animate-rotatingText2 2xl:animate-rotatingText3">
              business development
            </h1>
            <h1 className="animate-rotatingText1 lg:animate-rotatingText2 2xl:animate-rotatingText3">
              application performance
            </h1>
            <h1 className="animate-rotatingText1 lg:animate-rotatingText2 2xl:animate-rotatingText3">
              developers' knowledge
            </h1>
          </div>
          <h1>
            with me!
          </h1>
        </div>
        <OvalButton text="Get in touch" />
      </div>
      <div className="hidden 2xl:block px-40 mt-10 mb-[120px]">
        <ArrowDownIcon className="h-24 text-tertiary animate-bounce" />
      </div>
    </section>
  );
};

export default Landing;
