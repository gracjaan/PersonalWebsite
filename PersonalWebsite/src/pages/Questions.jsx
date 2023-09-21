import React, {useState} from "react";
import Logo from "../assets/projects.webp";
import { PlusIcon } from "@heroicons/react/24/solid";
import ModalExperience from "../components/ModalExperience";
import data from "../data/experience/data.json";

const Questions = () => {
  return (
    <section className="mt-[240px] 2xl:mt-[320px] px-10 lg:px-20 2xl:px-40 relative" id="questions">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex flex-1 justify-start items-start">
          <h2>Questions?</h2>
        </div>
        <div className="flex flex-col flex-1 2xl:max-w-[45%] z-20">
          <ul className="mt-10 2xl:mt-0 flex flex-col justify-center">
            <li className="flex flex-col cursor-pointer border-t border-white/[.24] py-10">
                <button className="text-left cursor-pointer pt-[2px] pb-[3px] px-[6px]">
                    <div className="flex flex-row justify-between items-start">
                        <h5 className="text-secondary">Where are you based and what's your availability during the day?</h5>
                        <PlusIcon className="text-white h-[30px] ml-5" />
                    </div>
                    <div className="hidden">
                        <p>I am based in Warsaw, Poland (GMT+1) and I am available from 9:00 to 21:00.</p>
                    </div>
                </button>
            </li>
            <li className="flex flex-col cursor-pointer border-t border-white/[.24] py-10">
                <button className="text-left cursor-pointer pt-[2px] pb-[3px] px-[6px]">
                    <div className="flex flex-row justify-between items-start">
                        <h5 className="text-secondary">Where are you based and what's your availability during the day?</h5>
                        <PlusIcon className="text-white h-[30px] ml-5" />
                    </div>
                    <div className="hidden">
                        <p>I am based in Warsaw, Poland (GMT+1) and I am available from 9:00 to 21:00.</p>
                    </div>
                </button>
            </li>
            <li className="flex flex-col cursor-pointer border-t border-white/[.24] py-10">
                <button className="text-left cursor-pointer pt-[2px] pb-[3px] px-[6px]">
                    <div className="flex flex-row justify-between items-start">
                        <h5 className="text-secondary">Where are you based and what's your availability during the day?</h5>
                        <PlusIcon className="text-white h-[30px] ml-5" />
                    </div>
                    <div className="hidden">
                        <p>I am based in Warsaw, Poland (GMT+1) and I am available from 9:00 to 21:00.</p>
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
