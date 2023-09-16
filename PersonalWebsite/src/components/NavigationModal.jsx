import React, {useState, useEffect} from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NavigationModal = ({openModal, setOpenModal}) => {

  useEffect(() => {
    if (openModal) {
      showModal();
    }
  }, [openModal]);
  
  const showModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    modal.classList.remove("animate-slideUp");
    modal.classList.add("animate-slideDown");
  }

  const hideModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.remove("animate-slideDown");
    modal.classList.add("animate-slideUp");
    modal.addEventListener("animationend", () => {
      modal.classList.add("hidden");
    }, {once: true});
    setOpenModal(false);
  }

  return (
    <div className="bg-quaternary px-5 py-10 fixed top-0 left-0 right-0 flex flex-col hidden z-50" id="modal">
      <button className="self-end" onClick={() => hideModal()}>
        <XMarkIcon className="h-8 w-8 text-white" />
      </button>
      <div className="flex flex-col items-start">
        <button className="text-white font-medium text-2xl md:text-3xl lg:text-4xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
          Experience
        </button>
        <button className="text-white font-medium text-2xl md:text-3xl lg:text-4xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
          Education
        </button>
        <button className="text-white font-medium text-2xl md:text-3xl lg:text-4xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
          Projects
        </button>
        <button className="text-white font-medium text-lg hover:text-primary hover:bg-secondary transition ease-in w-full border border-secondary rounded-full px-8 py-4">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default NavigationModal;
