import React, {useState} from "react";
import Logo from "../assets/projects.webp";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ModalExperience from "../components/ModalExperience";
import data from "../data/experience/data.json";

const Experience = () => {
  const [openModal, setOpenModal] = useState("");
  const [showMore, setShowMore] = useState(false); 

  return (
    <section className="mt-[320px] px-10 lg:px-20 2xl:px-40" id="experience">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-1 justify-start items-start">
          <h2>Past job<br></br>positions</h2>
        </div>
        <div className="flex flex-col flex-1 2xl:max-w-[45%]">
          <ul className="mt-5">
            <li className="mb-5 border-b border-white/[.24]">
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
            <li className="mb-5 border-b border-white/[.24]">
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
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id2")}>
              <div className="flex flex-col justify-start items-start">
                    <span>
                        {data.id2?.company || "not found."}
                    </span>
                    <h3>
                        {data.id2?.title || "not found."}
                    </h3>
                    <span className="opacity-[0.4]">
                        {data.id2?.period || "not found."}
                    </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
            <li className="mb-5 border-b border-white/[.24]">
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
            <li className="mb-5 border-b border-white/[.24]">
              <button className="w-full p-[10px] flex flex-row justify-between items-center" onClick={() => setOpenModal("id4")}>
              <div className="flex flex-col justify-start items-start">
                    <span>
                        {data.id4?.company || "not found."}
                    </span>
                    <h3>
                        {data.id4?.title || "not found."}
                    </h3>
                    <span className="opacity-[0.4]">
                        {data.id4?.period || "not found."}
                    </span>
                </div>
                <ArrowRightIcon className="text-white h-[30px]" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ModalExperience openModal={openModal} setOpenModal={setOpenModal}/>
    </section>
  );
};

export default Experience;
