import React from 'react'
import guruImg from '../asserts/dpbw.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
        px-7 md:flex-row text-white'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-3xl sm:text-6xl font-semibold' 
                >Hi I'm Ponnparamaguru</h1>
                <h2 className='text-xl sm:text-3xl font-semibold py-5'
                >I'm a Designer / Developer</h2>
                <p className='text-gray-500 py-3 max-w-md'>
                I'm a Developer & UI/UX Designer,
                Freshman, Open to Work
                </p>
                <div>
                <Link
                to="projects"
                smooth
                duration={500}
                >
                <button className='text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md 
                    bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500 cursor-pointer'>Portfolio 
                        <span className='hover:rotate-90 duration-300'><MdKeyboardArrowRight size={20}/></span>
                    </button></Link>
                    
                </div>
            </div>
            <div>
            <img src={guruImg} alt="My Profile" className='hidden md:flex rounded-3xl mx-auto md:w-10/12 md:m-24'/>
            </div>
        </div>
    </div>
  )
}

export default Home
