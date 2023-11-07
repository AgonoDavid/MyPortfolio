import React from "react";
import Intro from "./Intro";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center z-10">
      <img
        alt="hero-section-bg"
        className="flex absolute justify-center backdrop-filter backdrop-blur-xl bg-cover w-4/5 top-0"
        style={{ zIndex: "-1000" }}
      />
      <img
        alt="grid"
        className="flex absolute justify-center backdrop-filter backdrop-blur-xl bg-cover w-full top-0"
        style={{ zIndex: "-999" }}
      />
      <Intro />
    </div>
  );
}

export default Home;
