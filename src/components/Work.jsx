import React from "react";
import playtime from "../assets/playtime.png";
import irenthotels from "../assets/irenthotels.png";
import bojano from "../assets/bojano.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ee3756]">
            Work
          </p>
          <p className="py-6">
            See examples of my recent projects. Hover to get a link to each live
            website! These projects were all made using HTML, CSS, JavaScript,
            Bootstrap, and PHP when necassary. Each site's design is tailored
            for a unique demographic and audience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${playtime})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Playtime Learning Acad.
              </span>
              <div className="pt-8 text-center">
                <a
                  target="blank"
                  href="https://www.playtimelearningacademy.com/index.html"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See full site
                  </button>
                </a>
                <a href="/"></a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${bojano})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bojano Homes
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://www.bojanohomes.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See full site
                  </button>
                </a>
                <a href="/"></a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${irenthotels})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                iRentHotels.com
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://irenthotels.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See full site
                  </button>
                </a>
                <a href="/"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
