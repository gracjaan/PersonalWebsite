import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NavigationModal = () => {
  return (
    <div className="bg-quaternary px-5 py-10 fixed top-0 left-0 right-0 flex flex-col">
      <button className="self-end">
        <XMarkIcon className="h-8 w-8 text-white" />
      </button>
      <div className="flex flex-col items-start">
        <button className="text-white font-medium text-3xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
          Experience
        </button>
        <button className="text-white font-medium text-3xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
          Education
        </button>
        <button className="text-white font-medium text-3xl hover:text-tertiary transition ease-in px-8 py-4 mb-5">
          Projects
        </button>
        <button className="text-white font-medium text-lg hover:text-primary hover:bg-secondary-100 transition ease-in w-full border border-secondary-100 rounded-full px-8 py-4">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default NavigationModal;
