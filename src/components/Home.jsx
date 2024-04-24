import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-[#ee3756]">Hello and welcome, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd4f6]">
          Michael Currier
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b8]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b8] py-4 max-w-[700px]">
          I'm a full-stack developer with a wide range of freelance
          experience.
        </p>

        <Link to="work" smooth={true} duration={750}>
          <div>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]">
              See my work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
