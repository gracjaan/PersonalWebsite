import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Performance from "./pages/Performance";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Questions from "./pages/Questions";
import Projects2 from "./pages/Projects2";
import { useAppContext } from "./context/AppContext";

function App() {
  const { isBackgroundBlack, setisBackgroundBlack } = useAppContext();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
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
    // const sections = document.querySelectorAll("section");
    // sections.forEach((section) => observer.observe(section));
    observer.observe(document.getElementById("projects2"))
  }, []);

  return (
    <div className={`w-full ${isBackgroundBlack ? "bg-primary" : "bg-quaternary"} transition ease-in duration-300 overflow-x-hidden`}>
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <main>
          <Landing />
          <Introduction />
          <Projects />
          <Projects2 />
          <Performance />
          <Experience />
          {/* <Education /> */}
          <Questions />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
