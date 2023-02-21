import React from 'react'
import html5 from '../asserts/html.png'
import css3 from '../asserts/css-3.png'
import js from '../asserts/js.png'
import react from '../asserts/atom.png'
import node from '../asserts/node-js.png'
import tailwind from '../asserts/tailwind.png'
import java from '../asserts/java.png'
import python from '../asserts/python.png'
import nextjs from '../asserts/nextjs.png'


const Skills = () => {
  return (
    <div name="skills"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 border-pink-500'>Skills</h1>
                <p className='py-4' data-aos="fade-left">These are the technologies I've learnt</p>
            </div>
            <div className='w-full grid grid-cols-3 sm:gird-cols-3
            gap-8 text-center py-8 px-12 sm:px-0' data-aos="fade-up" data-aos-delay="300" data-aos-duration="300">
              <div >
                <img src={html5} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>HTML</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-full h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={css3} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>CSS</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-full h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={js} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>JavaScript</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-11/12 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={react} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>ReactJS</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-2/3 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={node} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>NodeJS</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-2/3 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={nextjs} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>NextJS</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-2/3 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={tailwind} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>Tailwind</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-10/12 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={java} alt="" className='w-14 mx-auto'></img>
                <p className='py-2'>Java</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-10/12 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              <div>
                <img src={python} alt="" className='w-14 mx-auto '></img>
                <p className='py-2'>Python</p>
                <div class="w-full bg-gray-200 rounded-full h-1 ">
                <div class="w-2/3 h-1 rounded-full bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500"></div>
                </div>
              </div>
              </div>
            </div>
        </div>
  )
}

export default Skills