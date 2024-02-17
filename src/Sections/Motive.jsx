import React from 'react'
import motive from '../Assets/whatwedo.png'
import t from '../Assets/t.png'
import '../Assets/fonts.css'

function Motive() {
  return (
    <div className='md:min-h-[100vh] h-auot w-full flex items-end justify-end mt-10 '>
        <div className='bg-gray1 w-[70%] sm:h-[100%]  p-10 h-auto  sm:pl-[50px]'>

        <img src={motive} className='w-[600px]' alt="" />
        <div className='md:-translate-x-10 md:-translate-y-15 flex flex-row items-center w-full'>
        <img src={t} className='hidden md:block h-[275px] md:[320px] lg:h-[380px] ' alt="" />
        <p className='text-white text-sm  font3  md:text-md lg:text-lg md:-translate-x-[70px]  lg:-translate-x-[70px] w-full lg:w-[400px] '>

        Teradell Company stands out as a premier provider of comprehensive technological solutions,
         catering to a wide array of needs in today's digital landscape. With a strong focus on 
         excellence and innovation, Teradell offers a diverse range of services including web development,
          AI integration, SaaS solutions, UI design, and LLM fine-tuning. 
          Our dedicated team of professionals brings a wealth of expertise and creativity to 
          every project, ensuring that each client receives tailored solutions that not only 
          meet but exceed their expectations.</p>
        </div>  
        </div>
    
      
    </div>
  )
}

export default Motive
