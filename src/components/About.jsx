import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>

                <p className='text-4xl font-bold inline border-b-4 border-[#ee3756]'>About</p>
            </div>
            </div>

            <div></div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Michael - glad you could make it! Please feel free to look around.</p>
                </div>
                <div>
                    <p>Hi, I'm Michael, glad you could make it! Please feel free to look around.</p>
                </div>
            </div>
        </div>
    </div> //end about
  )
}

export default About