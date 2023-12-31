import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import data from "../data/projects/data.json";

const ModalProjects = ({ openModal, setOpenModal }) => {

  const projectData = data[openModal] || data["default"];

  useEffect(() => {
    if (openModal !== "") {
      showModal();
    }
  }, [openModal]);

  const showModal = () => {
    const modal = document.getElementById("modalprojects");
    modal.classList.remove("hidden");
    modal.classList.remove("animate-slideDown2");
    modal.classList.remove("animate-slideRight2");

    if (window.innerWidth >= 1536) {
        modal.classList.add("animate-slideLeft2");
    } else {
        modal.classList.add("animate-slideUp2");
    }

    document.body.style.overflow = "hidden";

    const overlay = document.getElementById("modalprojects-overlay");
    overlay.classList.remove("hidden");
    overlay.classList.remove("animate-fadeOut");
    overlay.classList.add("animate-fadeIn");
  };

  const hideModal = () => {
    const modal = document.getElementById("modalprojects");
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

    const overlay = document.getElementById("modalprojects-overlay");
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
      <div id="modalprojects-overlay" className="fixed top-0 left-0 w-full h-full bg-black/[.6] z-40 hidden" onClick={() => hideModal()}/>
      <div className="bg-quaternary px-[20px] md:px-[80px] lg:px-[120px] pt-[40px] lg:pt-[80px] fixed bottom-0 left-0 2xl:left-[50%] right-0 top-[92px] xl:top-[132px] 2xl:top-0 flex flex-col hidden z-50 rounded-t-3xl 2xl:rounded-none" id="modalprojects">
        <button className="self-end" onClick={() => hideModal()}>
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>
        <div className="flex flex-col mt-5 pb-10 overflow-y-auto noscrollbar" id="scrollable">
          <h2 className="pb-10">
            {projectData.name}
          </h2>
          <div className="flex flex-col mt-5 gap-[10px]">
            <h3>
              {projectData.description}
            </h3>
            <div className="flex flex-row items-center gap-2 w-full overflow-x-scroll noscrollbar">
                {projectData.hashtags.map((hashtag, index) => (
                  <h5 key={index}>{hashtag}</h5>
                ))}
            </div>
            {projectData.media && projectData.media.length > 0 && (
            <div className="flex flex-row w-full overflow-x-scroll noscrollbar gap-2 mt-10">
                {projectData.media.map((image, index) => (
                  <img key={index} src={image} className="max-h-[300px] object-cover rounded-xl" />
                ))}
            </div>
            )}
            {projectData.videos && projectData.videos.length > 0 && (
            <div className="flex flex-row w-full overflow-x-scroll noscrollbar gap-2 mt-10">
                {projectData.videos.map((video, index) => (
                  <video key={index} src={video} className="max-h-[300px] object-cover rounded-xl" controls autoPlay={true}/>
                ))}
            </div>
            )}
            <span className="text-justify mt-10">
              {projectData.message}
            </span>
            <div className="flex flex-row gap-5 mt-20">
              {projectData.links?.github ? (
                <a href={projectData.links.github} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
                  <span className="underline">GitHub</span>
                </a>
              ) : null}
              {projectData.links?.appstore ? (
                <a href={projectData.links.appstore} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
                  <span className="underline">App Store</span>
                </a>
              ) : null}
              {projectData.links?.website ? (
                <a href={projectData.links.website} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
                  <span className="underline">Website</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProjects;
