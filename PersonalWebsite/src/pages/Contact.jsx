import React from "react";
import Logo from "../assets/contact.webp";

const Contact = () => {
  return (
    <section className="mt-[320px] px-10 lg:px-20 2xl:px-40 bg-primary flex flex-col 2xl:flex-row">
      <div className="flex flex-col flex-1 2xl:max-w-[45%]">
        <h2 className="text-white text-7xl font-normal">Contact</h2>
        <form className="flex flex-col gap-5 my-10">
          <input
            placeholder="name"
            name="name"
            className="border border-white/[.24] rounded-lg bg-transparent p-4 text-white text-lg font-normal"
          ></input>
          <input
            placeholder="email"
            name="email"
            className="border border-white/[.24] rounded-lg bg-transparent p-4 text-white text-lg font-normal"
          ></input>
          <textarea
            placeholder="message"
            name="message"
            rows={2}
            className="border border-white/[.24] rounded-lg bg-transparent p-4 text-white text-lg font-normal"
          ></textarea>
          <button className="text-white text-lg leading-8 hover:text-primary transition ease-in hidden md:block border border-secondary rounded-full px-8 py-4 hover:bg-secondary self-start mt-5">
            Send me a message!
          </button>
        </form>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={Logo} alt="Logo" className="h-[496px]" />
      </div>
    </section>
  );
};

export default Contact;