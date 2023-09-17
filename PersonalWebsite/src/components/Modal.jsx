import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Modal = ({ openModal, setOpenModal, id }) => {
  useEffect(() => {
    if (openModal) {
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

    const overlay = document.getElementById("modal-overlay");
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

    const overlay = document.getElementById("modal-overlay");
    overlay.classList.remove("animate-fadeIn");
    overlay.classList.add("animate-fadeOut");
    overlay.addEventListener("animationend", () => {
      overlay.classList.add("hidden");
    }, { once: true });

    setOpenModal(false);
  };

  return (
    <>
      <div id="modal-overlay" className="fixed top-0 left-0 w-full h-full bg-black/[.6] z-40 hidden"/>
      <div className="bg-quaternary px-5 py-10 fixed bottom-0 left-0 2xl:left-[50%] right-0 top-[92px] xl:top-[132px] 2xl:top-0 flex flex-col hidden z-50 rounded-t-3xl 2xl:rounded-none" id="modal2">
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
    </>
  );
};

export default Modal;
