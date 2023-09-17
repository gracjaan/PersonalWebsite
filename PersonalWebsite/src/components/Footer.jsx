import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 lg:px-20 2xl:px-40 bg-primary">
      <div className="flex flex-row my-10 gap-10">
        <button>
          <span>Linkedin</span>
        </button>
        <button>
          <span>Twitter</span>
        </button>
        <button>
          <span>GitHub</span>
        </button>
      </div>
      <div className="py-5">
        <span>
          Copyright © 2023 Michał Chudziak. All rights reserved.
          hello@michalchudziak.dev.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
