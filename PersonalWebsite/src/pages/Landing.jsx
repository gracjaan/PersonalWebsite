import React from "react";

const Landing = () => {
  return (
    <section className="px-10 lg:px-20 2xl:px-40 pt-40 h-screen">
      <h1 className="text-white text-7xl font-bold leading-[90px]">Enhance your</h1>
      <div className="h-[90px] overflow-hidden"> 
        <h1 className="text-white text-7xl font-bold animate-rotatingText leading-[90px]">business development</h1>
        <h1 className="text-white text-7xl font-bold animate-rotatingText leading-[90px]">application performance</h1>
        <h1 className="text-white text-7xl font-bold animate-rotatingText leading-[90px]">developers' knowledge</h1>
      </div>
      <h1 className="text-white text-7xl font-bold leading-[90px]">with me!</h1>
    </section>
  );
};

export default Landing;
