import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import data from "../data/experience/data.json";

const ModalExperience = ({ openModal, setOpenModal }) => {

  const projectData = data[openModal] || data["default"];

  useEffect(() => {
    if (openModal !== "") {
      showModal();
    }
  }, [openModal]);

  const showModal = () => {
    const modal = document.getElementById("modalexperience");
    modal.classList.remove("hidden");
    modal.classList.remove("animate-slideDown2");
    modal.classList.remove("animate-slideRight2");

    if (window.innerWidth >= 1536) {
        modal.classList.add("animate-slideLeft2");
    } else {
        modal.classList.add("animate-slideUp2");
    }

    document.body.style.overflow = "hidden";

    const overlay = document.getElementById("modalexperience-overlay");
    overlay.classList.remove("hidden");
    overlay.classList.remove("animate-fadeOut");
    overlay.classList.add("animate-fadeIn");
  };

  const hideModal = () => {
    const modal = document.getElementById("modalexperience");
    modal.classList.remove("animate-slideUp2");
    modal.classList.remove("animate-slideLeft2");

    document.body.style.overflow = "auto";

    if (window.innerWidth >= 1536) {
        modal.classList.add("animate-slideRight2");
    } else {
        modal.classList.add("animate-slideDown2");
    }
    
    modal.addEventListener("animationend", () => {
      modal.classList.add("hidden");
    }, { once: true });

    const overlay = document.getElementById("modalexperience-overlay");
    overlay.classList.remove("animate-fadeIn");
    overlay.classList.add("animate-fadeOut");
    overlay.addEventListener("animationend", () => {
      overlay.classList.add("hidden");
      setOpenModal("");
      document.getElementById("scrollable").scrollTop = 0;
    }, { once: true });
  };

  return (
    <>
      <div id="modalexperience-overlay" className="fixed top-0 left-0 w-full h-full bg-black/[.6] z-40 hidden" onClick={() => hideModal()}/>
      <div className="bg-quaternary px-[20px] md:px-[80px] lg:px-[120px] pt-[40px] lg:pt-[80px] fixed bottom-0 left-0 2xl:left-[50%] right-0 top-[92px] xl:top-[132px] 2xl:top-0 flex flex-col hidden z-50 rounded-t-3xl 2xl:rounded-none" id="modalexperience">
        <button className="self-end" onClick={() => hideModal()}>
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
        <div className="flex flex-col mt-5 pb-10 overflow-y-auto noscrollbar" id="scrollable">
          <h2 className="pb-10">
            {projectData.title}
          </h2>
          <div className="flex flex-col mt-5 gap-[10px]">
            <h3>
              {projectData.company}
            </h3>
            <h5>
                {projectData.period}
            </h5>
            {projectData.description && projectData.description.length > 0 && (
            <ul className="list-disc text-white mt-[60px]">
                {projectData.description.map((bullet, index) => (
                  <li key={index} className="ml-5"> 
                    <span key={index}>{bullet}</span>
                  </li>
                ))}
            </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalExperience;
