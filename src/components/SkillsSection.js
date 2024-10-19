import React from "react";
import HTMLIcon from "../images/htmlIcon.png";
import CSSIcon from "../images/cssIcon.png";
import JsIcon from "../images/jsicon.webp";
import ReactIcon from "../images/reactIcon.png";
import ChakraIcon from "../images/icons8-chakra-ui-48.png";
import TailwindIcon from "../images/icons8-tailwindcss.svg";
import Wordpresslogo from "../images/wordpress logo.png"
import PHPlogo from "../images/PHP LOGO.png"
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills">
      <div id="skills" className="flex w-full h-auto mb-6 sm:mb-44 py-5">
        <div className="flex flex-col w-full ">
          <span className="text-white text-xl sm:text-2xl flex justify-center sm:justify-start">
            My{" "}
            <span style={{ fontWeight: "700" }} className="font-semibold">
              Skills
            </span>
          </span>

          <div
            className="w-full flex justify-center items-center flex-wrap gap-6 p-8 mt-10 rounded"
            style={{
              background:
                "linear-gradient(99deg, #171b2c 0%, rgba(18, 19, 24, 0) 100%)",
            }}
          >
            <img src={HTMLIcon} width="60" alt="Icons" />
            <img src={CSSIcon} width="60" alt="Icons" />
            <img src={JsIcon} width="60" alt="Icons" />
            <img src={ReactIcon} width="60" alt="Icons" />
            <img src={TailwindIcon} width="60" alt="Icons" />
            <img src={ChakraIcon} width="60" alt="Icons" />
            <img src={Wordpresslogo} width="60" alt="Icons" />
            <img src={PHPlogo} width="60" alt="Icons" />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default SkillsSection;
