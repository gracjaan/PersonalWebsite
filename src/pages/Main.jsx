import React, { useState, useEffect, useRef } from "react";
import Landing from "./Landing";
import Header from "../components/Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Performance from "./Performance";
import Experience from "./Experience";
import Questions from "./Questions";
import Projects2 from "./Projects2";
import { useAppContext } from "../context/AppContext";

function Main() {
  const { isBackgroundBlack, setisBackgroundBlack } = useAppContext();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setisBackgroundBlack(false);
        }
        else {
          setisBackgroundBlack(true);
        }
      });
    },
    {
      threshold: 0, rootMargin: "-50% 0px -50% 0px"
    }
  );

  useEffect(() => {
    observer.observe(document.getElementById("projects2"))
    observer.observe(document.getElementById("questions"))
  }, []);

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (option) => {
    
    const section = document.getElementById(option);

    if (section) {
      const windowHeight = window.innerHeight;
      const sectionHeight = section.clientHeight;
      const scrollPosition = section.offsetTop - (windowHeight - sectionHeight) / 2;
      const isDesktop = window.innerWidth > 1600;
      
      window.scrollTo({
        top: isDesktop ? scrollPosition : section.offsetTop - 132,
        behavior: "smooth"
      });
    }

  }

  return (
    <div className={`w-full ${isBackgroundBlack ? "bg-primary" : "bg-quaternary"} transition ease-in duration-300 overflow-x-hidden`}>
      <div className="max-w-[1920px] mx-auto">
        <Header scrollToSection={scrollToSection}/>
        <main>
          <Landing />
          <Introduction />
          <Projects r={projectsRef}/>
          <Projects2 />
          <Performance />
          <Experience r={experienceRef}/>
          <Questions />
          <Contact r={contactRef}/>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Main;
