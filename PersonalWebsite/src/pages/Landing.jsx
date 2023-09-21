import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import OvalButton from "../components/OvalButton";

const Landing = () => {
  return (
    <section className="pt-40 h-screen min-h-[100vh] flex flex-col justify-between" id="landing">
      <div className="px-5 sm:px-10 lg:px-20 2xl:px-40 transition-all ease-in duration-300">
        <div className="pb-16">
          <h1>
            Enhance your
          </h1>
          <div className="h-[120px] sm:h-[60px] lg:h-[72px] 2xl:h-[120px] overflow-hidden">
            <h1 className="animate-rotatingText3 sm:animate-rotatingText1 lg:animate-rotatingText2 2xl:animate-rotatingText3 whitespace-nowrap">
              business <br className="sm:hidden" /> development
            </h1>
            <h1 className="animate-rotatingText3 sm:animate-rotatingText1 lg:animate-rotatingText2 2xl:animate-rotatingText3 whitespace-nowrap">
              application <br className="sm:hidden" /> performance
            </h1>
            <h1 className="animate-rotatingText3 sm:animate-rotatingText1 lg:animate-rotatingText2 2xl:animate-rotatingText3 whitespace-nowrap">
              digital <br className="sm:hidden" /> presence
            </h1>
          </div>
          <h1>
            with me!
          </h1>
        </div>
        <a className="w-fit text-white text-lg leading-8 hover:text-primary transition ease-in hidden md:block border border-secondary rounded-full px-8 py-4 hover:bg-secondary" href="/resume.pdf" download={true}>
          Download resume
        </a>
      </div>
      <div className="hidden 2xl:block px-40 mt-10 mb-[120px]">
        <ArrowDownIcon className="h-24 text-tertiary animate-bounce" />
      </div>
    </section>
  );
};

export default Landing;
