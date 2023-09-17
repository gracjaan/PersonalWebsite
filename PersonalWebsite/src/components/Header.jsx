import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavigationModal from "../components/NavigationModal";
import OvalButton from "./OvalButton";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="bg-black py-5 px-10 xl:py-10 xl:px-20 fixed top-0 left-0 right-0 flex justify-between items-center h-[92px] xl:h-[132px] max-w-[1920px] mx-auto z-50">
      <div className="flex flex-col xl:flex-row xl:gap-5 justify-between xl:items-center">
        <span>Gracjan Chmielnicki</span>
        <span className="text-sm xl:text-lg text-secondary/[.6]">
          Full Stack Developer
        </span>
      </div>
      <nav className="flex justify-between items-center gap-8">
        <button>
          <span className="hover:text-tertiary transition ease-in hidden xl:block">
            Experience
          </span>
        </button>
        <button>
          <span className="hover:text-tertiary transition ease-in hidden xl:block">
            Education
          </span>
        </button>
        <button>
          <span className="hover:text-tertiary transition ease-in hidden xl:block">
            Projects
          </span>
        </button>
        <OvalButton text="Get in touch" />
        <button
          className="h-6 w-6 text-secondary xl:hidden"
          onClick={() => setOpenModal(true)}
        >
          <Bars3Icon />
        </button>
      </nav>
      <NavigationModal openModal={openModal} setOpenModal={setOpenModal} />
    </header>
  );
};

export default Header;
