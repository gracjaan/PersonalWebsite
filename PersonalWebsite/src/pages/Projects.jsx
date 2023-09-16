import React from "react";
import Logo from "../assets/projects.webp";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <section className="mt-[320px] px-10 lg:px-20 2xl:px-40 bg-primary">
      <h2 className="text-white text-7xl font-normal leading-[70px] mb-10">
        Projects
      </h2>
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-col flex-1 2xl:max-w-[45%]">
          <h4 className="text-white text-3xl font-normal leading-[70px]">
            I over 10 years of commercial experience and 30+ successful business
            cooperations.
          </h4>
          <ul className="mt-5">
            <li className="text-white text-3xl font-normal leading-[70px] mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center">
                <h4 className="text-white text-3xl font-normal leading-[70px]">
                  styll.
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="text-white text-3xl font-normal leading-[70px] mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center">
                <h4 className="text-white text-3xl font-normal leading-[70px]">
                  styll.
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="text-white text-3xl font-normal leading-[70px] mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center">
                <h4 className="text-white text-3xl font-normal leading-[70px]">
                  styll.
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="text-white text-3xl font-normal leading-[70px] mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center">
                <h4 className="text-white text-3xl font-normal leading-[70px]">
                  styll.
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="text-white text-3xl font-normal leading-[70px] mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center">
                <h4 className="text-white text-3xl font-normal leading-[70px]">
                  styll.
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img src={Logo} alt="Logo" className="h-[660px]" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
