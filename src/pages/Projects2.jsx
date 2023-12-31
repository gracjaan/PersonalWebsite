import React, {useState} from "react";
import Logo from "../assets/projects.webp";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ModalProjects2 from "../components/ModalProjects2";
import data from "../data/business/data.json";

const Projects2 = () => {
  const [openModal, setOpenModal] = useState("");

  return (
    <section className="mt-[240px] 2xl:mt-[320px] px-5 sm:px-10 lg:px-20 2xl:px-40 transition-all ease-in" id="projects2">
      <h2>
        Business Projects
      </h2>
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-col flex-1 2xl:max-w-[45%]">
          <ul className="mt-5">
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id0")}>
                <h4>
                  {data.id0?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id1")}>
                <h4>
                  {data.id1?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id2")}>
                <h4>
                  {data.id2?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id3")}>
                <h4>
                  {data.id3?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id4")}>
                <h4>
                  {data.id4?.name || "not found."}
                </h4>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-center items-center mt-20 2xl:mt-0">
          <img src={Logo} alt="Logo" className="max-h-[620px]" />
        </div>
      </div>
      <ModalProjects2 openModal={openModal} setOpenModal={setOpenModal}/>
    </section>
  );
};

export default Projects2;
