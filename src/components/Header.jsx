import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavigationModal from "../components/NavigationModal";
import OvalButton from "./OvalButton";
import { useAppContext } from "../context/AppContext";

const Header = ({scrollToSection}) => {
  const [openModal, setOpenModal] = useState(false);
  const { isBackgroundBlack } = useAppContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all ease-in duration-300 ${isBackgroundBlack ? "bg-primary" : "bg-quaternary"}`}>
    <div className={`flex justify-between items-center py-5 px-5 sm:px-10 xl:py-10 xl:px-20 h-[92px] xl:h-[132px] max-w-[1920px] mx-auto transition-all ease-in duration-300`}>
      <button className="flex flex-col xl:flex-row xl:gap-5 justify-between xl:items-center" onClick={() => scrollToTop()}>
        <span>Gracjan Chmielnicki</span>
        <span className="text-sm xl:text-lg text-secondary/[.6]">
          Full Stack Developer
        </span>
      </button>
      <nav className="flex justify-between items-center gap-8">
        <button onClick={() => scrollToSection("experience")}>
          <span className="hover:text-tertiary transition ease-in hidden xl:block">
            Experience
          </span>
        </button>
        {/* <button>
          <span className="hover:text-tertiary transition ease-in hidden xl:block">
            Education
          </span>
        </button> */}
        <button onClick={() => scrollToSection("projects")}>
          <span className="hover:text-tertiary transition ease-in hidden xl:block">
            Projects
          </span>
        </button>
        <button className="text-white text-lg leading-8 hover:text-primary transition ease-in hidden md:block border border-secondary rounded-full px-8 py-4 hover:bg-secondary" onClick={() => scrollToSection("contact")}>
          Get in touch
        </button>
        <button
          className="h-6 w-6 text-secondary xl:hidden"
          onClick={() => setOpenModal(true)}
        >
          <Bars3Icon />
        </button>
      </nav>
      <NavigationModal openModal={openModal} setOpenModal={setOpenModal} scrollToSection={scrollToSection}/>
    </div>
    </header>
  );
};

export default Header;
