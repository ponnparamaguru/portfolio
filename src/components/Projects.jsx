import React from 'react'
import p1 from '../asserts/p1.jpg'
import p2 from '../asserts/p2.jpg'
import p3 from '../asserts/p3.jpg'

const Projects = () => {
    const projects = [
      {
        id: 1,
        src: p1,
      },
      {
        id: 2,
        src: p2,
      },
      {
        id: 3,
        src: p3,
      },
    ];
  
    return (
      <div
        name="projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-500">
              Projects
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src }) => (
              <div key={id} className="">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
            
                <div className="flex items-center justify-center py-5">
                  <button className="bg-gradient-to-r from-pink-500 via-pink-500 to-purple-500
                    w-42 px-6 py-3 m-1 duration-200 rounded-lg hover:scale-105">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  