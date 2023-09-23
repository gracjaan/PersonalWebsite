import React, {useState} from "react";
import Logo from "../assets/projects.webp";
import { PlusIcon } from "@heroicons/react/24/solid";
import ModalExperience from "../components/ModalExperience";
import data from "../data/experience/data.json";

const Questions = () => {

  const handleButton = (id) => {
    const extend = document.getElementById(id);
    const listelement = document.getElementById(id + "0");
    extend.classList.toggle("show");
    listelement.classList.toggle("border-white/[.24]");
    listelement.classList.toggle("border-white");
  }

  return (
    <section className="mt-[240px] 2xl:mt-[320px] px-5 sm:px-10 lg:px-20 2xl:px-40 relative transition-all ease-in" id="questions">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-1 justify-start items-start">
          <h2>Questions?</h2>
        </div>
        <div className="flex flex-col flex-1 2xl:max-w-[45%] z-20">
          <ul className="mt-10 2xl:mt-0 flex flex-col justify-center">
            <li className="flex flex-col cursor-pointer border-t border-white/[.24] pt-10 pb-5 transition-all ease-in duration-300" id="a00">
                <button className="text-left cursor-pointer pt-[2px] pb-[3px] px-[6px]" onClick={() => handleButton("a0")}>
                    <div className="flex flex-row justify-between items-start">
                        <h5 className="text-secondary">What's your thing? Building apps, building businesses, or maybe something else?</h5>
                        <PlusIcon className="text-white h-[30px] ml-5" />
                    </div>
                    <div className="extend" id="a0">
                        <span className="mt-5">It is the mix of both. I incredibly enjoy software development since early days of high school. On the other hand, I always had entrepreneurial mind that always wants to exceed in this area.</span>
                    </div>
                </button>
            </li>
            <li className="flex flex-col cursor-pointer border-t border-white/[.24] pt-10 pb-5 transition-all ease-in duration-300" id="a10">
                <button className="text-left cursor-pointer pt-[2px] pb-[3px] px-[6px]" onClick={() => handleButton("a1")}>
                    <div className="flex flex-row justify-between items-start">
                        <h5 className="text-secondary">Where are you based and what's your availability during the day?</h5>
                        <PlusIcon className="text-white h-[30px] ml-5" />
                    </div>
                    <div className="extend" id="a1">
                        <span className="mt-5">I am based in Enschede, NL (CET time zone). However, I often visit Warsaw, PL. Moreover, I am more than willing to relocate. When it comes to availability, I can work between 20 and 40 hours a week.</span>
                    </div>
                </button>
            </li>
            <li className="flex flex-col cursor-pointer border-t border-white/[.24] pt-10 pb-5 transition-all ease-in duration-300" id="a20">
                <button className="text-left cursor-pointer pt-[2px] pb-[3px] px-[6px]" onClick={() => handleButton("a2")}>
                    <div className="flex flex-row justify-between items-start">
                        <h5 className="text-secondary">What technologies do you work with?</h5>
                        <PlusIcon className="text-white h-[30px] ml-5" />
                    </div>
                    <div className="extend" id="a2">
                        <span className="mt-5">I use variety of technologies for different purposes. I'm definitely profficient in HTML/CSS/JS and React/ReactNative. I also have experience in building back-end systems in JAVA. When it comes to business software, I have certified profficiency in MS Office and Tableau. </span>
                    </div>
                </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Questions;
