import React from "react";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ee3756]">
              About
            </p>
          </div>
        </div>

        <div></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Michael - glad you could make it! Please feel free to look
              around.
            </p>
          </div>
          <div>
            <p>
              I'm a 24 year-old graduate from the University of South Florida 
              with a B.S. in Information Science (Web Development Tech. concentration). 
              I've been taking on freelance web development
              projects since the age of 17 for small/medium sized businesses in
              the Tampa area with no particular goal in mind: I just really like
              developing. I love the process of learning something new or
              discovering a better way to build my sites for both front-end and
              back-end development. For front-end development, I like to use
              HTML & CSS, Javascript/TypeScript, React.js, Next.js, and Tailwind. For
              back-end, I use a wide range of languages/frameworks including PHP, Node.js, Java, and Python. Regardless, I always take the time before starting each project to make sure the technologies I'm using are the best ones available for the project's unique needs.
            </p>
          </div>
        </div>
      </div>
    </div> //end about
  );
};

export default About;
