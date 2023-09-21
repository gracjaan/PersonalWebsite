import React from "react";
import Logo from "../assets/contact.webp";
import OvalButton from "../components/OvalButton";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (name.value === "") {
      document.getElementById("nameerror").classList.remove("hidden");
    }
    if (email.value === "") {
      document.getElementById("emailerror").classList.remove("hidden");
    }
    if (message.value === "") {
      document.getElementById("messageerror").classList.remove("hidden");
    }
  };

  return (
    <section
      className="mt-[240px] 2xl:mt-[320px] px-5 sm:px-10 lg:px-20 2xl:px-40 flex flex-col xl:flex-row transition-all ease-in"
      id="contact"
    >
      <div className="flex flex-col flex-1 2xl:max-w-[45%]">
        <h2 className="text-white text-7xl font-normal">Contact</h2>
        <form className="flex flex-col gap-5 my-10" onSubmit={sendEmail}>
          <input placeholder="name" name="name" id="name"></input>
          <span className="text-secondary/[0.4] hidden" id="nameerror">
            This field is required.
          </span>
          <input placeholder="email" name="email" id="email"></input>
          <span className="text-secondary/[0.4] hidden" id="emailerror">
            This field is required.
          </span>
          <textarea
            placeholder="message"
            name="message"
            id="message"
            rows={2}
          ></textarea>
          <span className="text-secondary/[0.4] hidden" id="messageerror">
            This field is required.
          </span>
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
