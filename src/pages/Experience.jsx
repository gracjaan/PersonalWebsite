import React, { useState } from "react";
import Logo from "../assets/projects.webp";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ModalExperience from "../components/ModalExperience";
import data from "../data/experience/data.json";
import svg1 from "../assets/elipse-purple.svg";
import svg2 from "../assets/elipse-violet.svg";

const Experience = ({ r }) => {
  const [openModal, setOpenModal] = useState("");

  return (
    <section className="mt-[240px] 2xl:mt-[320px] px-5 sm:px-10 lg:px-20 2xl:px-40 relative transition-all ease-in" id="experience" ref={r}>
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-1 justify-start items-start">
          <h2>Experience</h2>
        </div>
        <div className="flex flex-col flex-1 2xl:max-w-[45%] z-20">
          <ul className="mt-10 2xl:mt-0">
            <li className="border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id6")}>
                <div className="flex flex-col justify-start items-start">
                  <span>
                    {data.id6?.company || "not found."}
                  </span>
                  <h3>
                    {data.id6?.title || "not found."}
                  </h3>
                  <span className="opacity-[0.4]">
                    {data.id6?.period || "not found."}
                  </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id7")}>
                <div className="flex flex-col justify-start items-start">
                  <span>
                    {data.id7?.company || "not found."}
                  </span>
                  <h3>
                    {data.id7?.title || "not found."}
                  </h3>
                  <span className="opacity-[0.4]">
                    {data.id7?.period || "not found."}
                  </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id0")}>
                <div className="flex flex-col justify-start items-start">
                  <span>
                    {data.id0?.company || "not found."}
                  </span>
                  <h3>
                    {data.id0?.title || "not found."}
                  </h3>
                  <span className="opacity-[0.4]">
                    {data.id0?.period || "not found."}
                  </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id1")}>
                <div className="flex flex-col justify-start items-start">
                  <span>
                    {data.id1?.company || "not found."}
                  </span>
                  <h3>
                    {data.id1?.title || "not found."}
                  </h3>
                  <span className="opacity-[0.4]">
                    {data.id1?.period || "not found."}
                  </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mt-[120px] border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id3")}>
                <div className="flex flex-col justify-start items-start">
                  <span>
                    {data.id3?.company || "not found."}
                  </span>
                  <h3>
                    {data.id3?.title || "not found."}
                  </h3>
                  <span className="opacity-[0.4]">
                    {data.id3?.period || "not found."}
                  </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ModalExperience openModal={openModal} setOpenModal={setOpenModal} />
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
        {/* <img src={svg1} className="absolute top-0 left-0 w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px] transform translate-x-[-50%] translate-y-[-50%] 2xl:translate-x-[-25%] 2xl:translate-y-[-25%]" alt="svg1" />
        <img src={svg2} className="absolute bottom-0 right-0 w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px] transform translate-x-[-50%] translate-y-[-50%] 2xl:translate-x-[25%] 2xl:translate-y-[25%]" alt="svg2" /> */}
        <img src={svg1} className="absolute bottom-[-60%] right-[10%] w-[800px] h-[800px]" alt="svg1" draggable="false" />
        <img src={svg2} className="absolute bottom-[-40%] right-0 w-[1000px] h-[1000px] translate-x-[30%]" alt="svg2" draggable="false" />
      </div>
    </section>
  );
};

export default Experience;
