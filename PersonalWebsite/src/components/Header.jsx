import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavigationModal from "../components/NavigationModal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="bg-black py-5 px-10 xl:py-10 xl:px-20 fixed top-0 left-0 right-0 flex justify-between items-center h-[92px] xl:h-[132px]">
      <div className="flex flex-col xl:flex-row xl:gap-5 justify-between xl:items-center">
        <div className="text-white text-lg font-normal leading-8">
          Gracjan Chmielnicki
        </div>
        <div className="text-white text-sm xl:text-lg font-normal leading-8 text-secondary-200">
          Full Stack Developer
        </div>
      </div>
      <nav className="flex justify-between items-center gap-8">
        <button className="text-white text-lg leading-8 hover:text-tertiary transition ease-in hidden xl:block">
          Experience
        </button>
        <button className="text-white text-lg leading-8 hover:text-tertiary transition ease-in hidden xl:block">
          Education
        </button>
        <button className="text-white text-lg leading-8 hover:text-tertiary transition ease-in hidden xl:block">
          Projects
        </button>
        <button className="text-white text-lg leading-8 hover:text-primary transition ease-in hidden md:block border border-secondary-100 rounded-full px-8 py-4 hover:bg-secondary-100">
          Get in touch
        </button>
        <button className="h-6 w-6 text-secondary-100 xl:hidden" onClick={() => setOpenModal(true)}>
          <Bars3Icon />
        </button>
      </nav>
      <NavigationModal openModal={openModal} setOpenModal={setOpenModal}/>
    </header>
  );
};

export default Header;
