import React from 'react'

const Contact = () => {
  return (
    <div name="contact"
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500' >Contact Me</p>
                <p className='my-5'>Get in touch</p>       
            </div>    

            <div className=' flex justify-center items-center'>
                <form action="https://getform.io/f/f2f37be6-7686-4c85-b0f5-8bd30b3af141" method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="Name" placeholder="Enter your name" required 
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                <input type="text" name="E-mail" placeholder="Enter your e-mail" required
                className='p-2 bg-transparent border-2 rounded-md my-5 text-white focus:outline-none'/>

                <textarea name='Message' placeholder='Enter your Message' rows='8' required
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>

                <button className='text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md 
                    bg-gradient-to-r from-pink-500 via-pink to-purple-500 cursor-pointer'>Submit 
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact