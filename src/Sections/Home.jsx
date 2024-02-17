import React from 'react'
import teradell from '../Assets/teradell_white.png'
import linkedIn from '../Assets/linkedInlogo.png'
import Arrow from '../Assets/scrollArrow.png'
import '../Assets/fonts.css'
function Home() {
  return (
    <div className='min-h-screen w-full h-screen justify-between '>
        <nav className='flex flex-row items-center justify-between px-10 md:px-20 py-2 h-[15%]'>
            <div>
                <img src={teradell} className='w-[140px]' alt="" />
            </div>
            <div className=' hidden md:flex flex-row gap-10 text-white'>
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            </div>
           
        </nav>

        <div className='flex flex-col min-h-[460px]  h-[69%] justify-center items-center text-white pt-[40px]'>
            <div className=''>
            <h1 className='font2 text-[50px] md:text-[90px]  leading-[40px] md:leading-[80px]'>We are <br />&nbsp;&nbsp; Full Service</h1>
            </div>
            <div className=' -translate-y-[50px] md:-translate-y-[83px] -translate-x-[25px] md:-translate-x-[50px] gap-3 md:gap-5 flex flex-row justify-center items-center relative '>
            <div className='aboslute md:-translate-y-[120px] -translate-y-[70px] flex flex-row gap-[2px] md:gap-2 translate-x-[43px] md:translate-x-[80px]'>
            <div className='bg-primary_blue w-[15px] h-[15px] md:w-[30px] md:h-[30px] rounded-full  '></div>
            <div className='bg-primary_blue w-[15px] h-[15px] md:w-[30px] md:h-[30px] rounded-full  '></div>
            </div>
            <h1 className='font1 text-[90px] sm:text-[120px]  md:text-[190px]'>Agency</h1>
             
            <p className='font3  text-md sm:text-xl md:text-3xl'>Leading the <br /> way in tech <br /> evolution</p>
            </div>
        
        </div>

        <div className='flex flex-row justify-between items-center text-white px-10 md:px-20 py-2  h-[15%]'>
            <img src={linkedIn} className='w-[50px]' alt="" />
            <div className='flex-row justify-center items-center hidden md:flex'>
                <img src={Arrow} className='w-[60px]' alt="" />
                <h1 className='font1 leading-5 k'>Scroll <br /> down</h1>
            </div>
            <p>@Teradell</p>

        </div>
      
    </div>
  )
}

export default Home
