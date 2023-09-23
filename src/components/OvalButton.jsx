import React from "react";

const OvalButton = ({text}) => {
  return (
    <button className="text-white text-lg leading-8 hover:text-primary transition ease-in hidden md:block border border-secondary rounded-full px-8 py-4 hover:bg-secondary">
      {text}
    </button>
  );
};

export default OvalButton;
