import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NavigationModal = ({ openModal, setOpenModal, scrollToSection, experienceRef, projectsRef }) => {
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

    document.body.style.overflow = "hidden";

    const overlay = document.getElementById("modal-overlay");
    overlay.classList.remove("hidden");
    overlay.classList.remove("animate-fadeOut");
    overlay.classList.add("animate-fadeIn");
  };

  const hideModal = () => {
    const modal = document.getElementById("modal");
    modal.classList.remove("animate-slideDown");
    modal.classList.add("animate-slideUp");
    modal.addEventListener("animationend", () => {
      modal.classList.add("hidden");
    }, {once: true});

    document.body.style.overflow = "auto";

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
      <div id="modal-overlay" className="fixed top-0 left-0 w-full h-full bg-black/[.6] z-40 hidden" onClick={() => hideModal()}/>
      <div className="bg-quaternary px-5 py-10 fixed top-0 left-0 right-0 flex flex-col hidden z-50" id="modal">
        <button className="self-end" onClick={() => hideModal()}>
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
        <div className="flex flex-col items-start">
          <button className="text-white font-medium text-2xl md:text-3xl lg:text-4xl hover:text-tertiary transition ease-in px-8 py-4 mb-5" onClick={() => scrollToSection(experienceRef)}>
            Experience
          </button>
          <button className="text-white font-medium text-2xl md:text-3xl lg:text-4xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
            Education
          </button>
          <button className="text-white font-medium text-2xl md:text-3xl lg:text-4xl hover:text-tertiary transition ease-in px-8 py-4 mb-5" onClick={() => scrollToSection(projectsRef)}>
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

export default NavigationModal;
