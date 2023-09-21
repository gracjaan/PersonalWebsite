import React from "react";

const Footer = () => {

  const linkedinURL = "https://www.linkedin.com/in/gracjanchmielnicki";
  const githubURL = "https://github.com/gracjaan";

  const redirectToSocialMedia = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="px-5 sm:px-10 lg:px-20 2xl:px-40 transition-all ease-in duration-300">
      <div className="flex flex-row my-10 gap-10">
        <button onClick={() => redirectToSocialMedia(linkedinURL)}>
          <span>LinkedIn</span>
        </button>
        <button onClick={() => redirectToSocialMedia(githubURL)}>
          <span>GitHub</span>
        </button>
      </div>
      <div className="py-5">
        <span>
          Copyright © 2023 Gracjan Chmielnicki. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
