import React from "react";
import { Link } from "react-scroll";
import githubIcon from "../images/icons8-github-30.png";
import linkedInIcon from "../images/icons8-linkedin-2-30.png";
function Intro() {
  return (
    <div className="flex flex-col h-screen text-white justify-center items-center">
      <h1 className="relative font-semibold text-center md:text-5xl sm:text-3xl text-xl -mt-28">
        Hi 👋 I am <span style={{ color: "#5A69DE" }}>David Agono</span>
      </h1>
      <div className="flex space-x-6 mt-3">
        <a
          href="https://docs.google.com/document/d/1Fi2DMnEM1-evr3EtUcZYl9N94NY_2TY1nTwntXCR48A/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="text-gray-200 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105 text-sm w-32 sm:w-40"
            style={{
              background:
                "linear-gradient(89deg, #9a5cff 0%, hsl(228, 64%, 58%) 100%)",
              borderRadius: "40px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            View Resume
          </button>
        </a>
        <Link to="contactMe" smooth={true}>
          <button
            className="bg-gray-200 text-gray-900 mt-4 flex  mx-auto md:mx-0 transition-transform duration-300 transform hover:scale-105 w-32 sm:w-40"
            style={{
              borderRadius: "40px",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            Contact Me
          </button>
        </Link>
      </div>
      <div className="flex flex-col space-y-3 mt-16 absolute bottom-10">
        <p className="text-gray-400">Connect with me in any of the below</p>
        <div className="flex space-x-8 mb-8 mx-auto md:mx-0 justify-center">
          <a
            href="https://github.com/AgonoDavid"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="github"
              src={githubIcon}
              className="fab fa-github  text-gray-300 transform transition-all hover:scale-110"
              style={{ fontSize: "24px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/agono-david-4a50321b4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedInIcon}
              alt="linkedInIcon"
              className="fab fa-github  text-gray-300 transform transition-all hover:scale-110"
              style={{ fontSize: "24px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
