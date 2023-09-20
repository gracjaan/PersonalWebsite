import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import data from "../data/data.json";

const Modal = ({ openModal, setOpenModal }) => {

  const projectData = data[openModal] || data["default"];

  useEffect(() => {
    if (openModal !== "") {
      showModal();
    }
  }, [openModal]);

  const showModal = () => {
    const modal = document.getElementById("modal2");
    modal.classList.remove("hidden");
    modal.classList.remove("animate-slideDown2");
    modal.classList.remove("animate-slideRight2");

    if (window.innerWidth >= 1536) {
        modal.classList.add("animate-slideLeft2");
    } else {
        modal.classList.add("animate-slideUp2");
    }

    document.body.style.overflow = "hidden";

    const overlay = document.getElementById("modal-overlay2");
    overlay.classList.remove("hidden");
    overlay.classList.remove("animate-fadeOut");
    overlay.classList.add("animate-fadeIn");
  };

  const hideModal = () => {
    const modal = document.getElementById("modal2");
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

    const overlay = document.getElementById("modal-overlay2");
    overlay.classList.remove("animate-fadeIn");
    overlay.classList.add("animate-fadeOut");
    overlay.addEventListener("animationend", () => {
      overlay.classList.add("hidden");
      setOpenModal("");
    }, { once: true });
  };

  return (
    <>
      <div id="modal-overlay2" className="fixed top-0 left-0 w-full h-full bg-black/[.6] z-40 hidden" onClick={() => hideModal()}/>
      <div className="bg-quaternary px-[120px] pt-20 fixed bottom-0 left-0 2xl:left-[50%] right-0 top-[92px] xl:top-[132px] 2xl:top-0 flex flex-col hidden z-50 rounded-t-3xl 2xl:rounded-none" id="modal2">
        <button className="self-end" onClick={() => hideModal()}>
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
        <div className="flex flex-col mt-5 pb-10 overflow-y-auto noscrollbar ">
          <h2 className="pb-10">
            {projectData.name}
          </h2>
          <div className="flex flex-col mt-5">
            <h3 className="py-5">
              {projectData.description}
            </h3>
            <div className="flex flex-row items-center mb-[10px] gap-2 w-full overflow-x-scroll noscrollbar">
                {projectData.hashtags.map((hashtag, index) => (
                  <h5 key={index}>{hashtag}</h5>
                ))}
            </div>
            <span className="text-justify">
              {projectData.message}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
