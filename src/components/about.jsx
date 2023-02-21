import React from 'react'
import {BsInstagram, BsTwitter,  BsGithub, BsLinkedin} from "react-icons/bs"

const about = () => {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4 border-pink-500'>About</h1>
            </div>
            <div>
                <p className='text-l md:text-xl'>
                I'm a Pre-final year student pursuing B.E 
                Computer Science and Engineering at K.S.Rangasamy College of Technology with strong passion for both
                web development and designing.
                I am proficient in HTML, CSS, JavaScript and has experience in working with frameworks such as React and
                Next.js and also I'm familier with backend development using Node.js and I've experience with databases
                such as MySQL and MangoDB. <br/> As a designer, I'm skilled in using tools such as Adobe Photoshop, 
                Illustrator, XD and Figma I always looking for new challenges and opportunities to further develop their skills.</p>
            </div>
            <div className=" py-10 ">
              <span className='inline-flex space-x-6'>
                <a href='https://www.instagram.com/ponnparamaguru_/'><BsInstagram size={30} className="cursor-pointer hover:text-pink-600"/> </a>
                <a href='https://www.twitter.com/ponnparamaguru_/'><BsTwitter size={30} className="cursor-pointer hover:text-blue-400"/> </a>
                <a href='https://www.linkedin.com/in/ponnparamaguru-chandrasekar-a5847b1a7/'><BsLinkedin size={30} className="cursor-pointer hover:text-sky-700"/> </a>
                <a href='https://github.com/ponnparamaguru'><BsGithub size={30} className="cursor-pointer hover:text-gray-700"/> </a>
              </span>
            </div>
        </div>
    </div>
  )
}

export default about