import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Performance from "./pages/Performance";
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
    observer.observe(document.getElementById("projects"))
  }, []);

  return (
    <div className={`w-full ${isBackgroundBlack ? "bg-primary" : "bg-quaternary"} transition ease-in duration-300`}>
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <main>
          <Landing />
          <Introduction />
          <Projects />
          <Performance />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
