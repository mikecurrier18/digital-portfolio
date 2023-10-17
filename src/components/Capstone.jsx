/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import pdfFile from '../assets/FutureCareerAspirations.pdf'
import pdfFile2 from '../assets/CapstoneDataBaseProject.pdf'
import pdfFile3 from '../assets/CapstoneEventAssignment1.pdf'
import pdfFile4 from '../assets/CapstoneEthicalCaseStudyAnls.pdf'
import pdfFile5 from '../assets/CapstoneTechNewsAssignment.pdf'
const Capstone = () => {
    

  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div>
        <p className="text-4xl font-bold border-b-4 border-pink-600 text-gray-300">
            Capstone Coursework-
          </p>
        </div>
        <div>
        <div>
        <button className="text-white border-2 px-6 py-3 my-2 ml-9  flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]">
            <a href={pdfFile5} target='_blank'>Click here to see my assignment: Information Policy/Technology Events in the News</a>
        </button>
        <button className="text-white border-2 px-6 py-3 my-2 ml-9  flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]">
            <a href={pdfFile4} target='_blank'>Click here to see my ethical case study analysis</a>
        </button>
        <button className="text-white border-2 px-6 py-3 my-2 ml-9  flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]">
            <a href={pdfFile3} target='_blank'>Click here to see my event 1 report</a>
        </button>
        <button className="text-white border-2 px-6 py-3 my-2 ml-9  flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]">
            <a href={pdfFile2} target='_blank'>Click here to see my hypothetical database project management paper</a>
        </button>
        </div>
        <button className="text-white border-2 px-6 py-3 my-2 ml-9  flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]">
            <a href={pdfFile} target='_blank'>Click here to see my future aspirations</a>
        </button>
        </div>
            
    </div>
  )
}

export default Capstone