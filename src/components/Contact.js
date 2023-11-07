import React, { useRef } from "react";

import { Element } from "react-scroll";

function Contact() {
  return (
    <Element name="contactMe">
      <div className="w-full h-auto flex flex-col text-white py-5">
        <span className="text-xl sm:text-2xl flex justify-center sm:justify-start">
          Contact Me
        </span>
        <div
          className="w-full h-auto flex lg:space-x-6 shadow-lg p-6 lg:p-16 mt-6 justify-center items-align-center text-gray-300 rounded-lg"
          style={{
            background:
              "linear-gradient(99deg, #171b2c 0%, rgba(18, 19, 24, 0) 100%)",
          }}
        >
          <span className="text-sm mt-4 text-center">
            Directly contact me{" "}
            <span className="text-blue-600">agonodavid99@gmail.com</span>
          </span>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
