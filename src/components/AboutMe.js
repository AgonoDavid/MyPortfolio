import React from "react";
import AboutMePic from "../images/profile1.png";
import { Element } from "react-scroll";

function AboutMe() {
  return (
    <Element name="aboutMe">
      <div className=" mb-6 sm:mb-44 text-gray-300 w-full h-auto text-2xl  text-center md:text-left py-5">
        <span className="flex text-xl sm:text-2xl justify-center mb-5 sm:justify-start">
          About <span className="font-semibold ml-2">ME</span>
        </span>
        <div className="flex flex-col justify-center md:flex-row h-auto">
          <div className="w-full h-auto mt-10">
            <div
              style={{ borderRadius: "50%" }}
              className="h-48 w-48 lg:h-80 lg:w-96 mx-auto"
            >
              <img
                src={AboutMePic}
                alt="MyPic"
                width="100%"
                className="mx-auto mt-[-140px] rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col text-lg mt-20 md:mt-16 lg:mt-28">
            <span className="text-sm text-gray-300">Hello, I am</span>
            <span className="text-2xl font-semibold mt-2 text-blue-500">
              David Agono
            </span>
            <span className="mt-2 text-sm text-gray-300 leading-relaxed">
              I am based in Lagos Nigeria. I am currently a freelance Frontend
              Web Developer open to Internships, So as grow my knowlegde and
              hone my skills with trending technologies. I have around 1 year of
              experience. I believe in hard work and I am very passionate about
              self development
            </span>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default AboutMe;
