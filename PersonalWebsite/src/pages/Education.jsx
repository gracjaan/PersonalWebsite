import React, {useState} from "react";
import Logo from "../assets/projects.webp";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ModalExperience from "../components/ModalExperience";
import data from "../data/experience/data.json";

const Education = () => {
  return (
    <section className="mt-[320px] px-10 lg:px-20 2xl:px-40 relative" id="experience">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-1 justify-start items-start">
          <h2>Education</h2>
        </div>
        <div className="flex flex-col flex-1 2xl:max-w-[45%] z-20">
          <ul className="mt-10 2xl:mt-0">
            <li className="mb-5 border-b border-white/[.24]">
              <div className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id0")}>
                <div className="flex flex-col justify-start items-start">
                    <span>
                        GPA: 8.4/10
                    </span>
                    <h3>
                        University of Twente
                    </h3>
                    <span className="opacity-[0.4]">
                        Sep 2022 - Jun 2025
                    </span>
                </div>
              </div>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <div className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id1")}>
              <div className="flex flex-col justify-start items-start">
                    <span>
                        GPA: 4.2/6
                    </span>
                    <h3>
                        High School "Reytan"
                    </h3>
                    <span className="opacity-[0.4]">
                        Sep 2019 - Apr 2022
                    </span>
                </div>
              </div>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <div className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id2")}>
              <div className="flex flex-col justify-start items-start">
                    <span>
                        GPA: 5.7/6
                    </span>
                    <h3>
                        Gymnasium "300"
                    </h3>
                    <span className="opacity-[0.4]">
                        Sep 2016 - Jun 2019
                    </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
