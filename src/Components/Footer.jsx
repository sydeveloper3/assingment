import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className='flex flex-col  p-10 bg-yellow-500'>

      <div className='flex item-center justify-between mx-auto'>
      <div className='w-[40%]'>
        <div>
          <h2 className='font-bold'>About Us</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <h2 className='font-bold'> Read Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ut totam magni natus velit facilis, in vel similique animi veritatis asperiores voluptatibus at voluptas illum reiciendis ipsa maxime excepturi enim!</p>
        </div>
        <button className='border-2 text-black font-semibold rounded-full p-2'>Click Me</button>
      </div>
      <div className='w-[40%] ml-12'>
        <div>
          <h2 className='font-bold'>Services</h2>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <h2 className='font-bold'>Special list</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <div className='w-[20%]'>
        <div className=' mb-5 '>
          <h2 className='font-bold mb-2'>Contact Us</h2>
          <div className='flex gap-4'>
          <FaTwitter />
          <FaLinkedin />
          <LuGithub />
          <FaInstagram />
          </div>
        </div>
        <div className='mt-5'>
          <h2 className='font-bold mb-2'>Contact Us</h2>
          <div className='flex gap-4'><FaTwitter />
          <FaLinkedin />
          <LuGithub />
          <FaInstagram /></div>
        </div>
      </div>
      </div>
      <div className='w-[50%] mx-auto mt-4 font-semibold'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat facilis unde nisi! Iure, dolore odio corporis nesciunt amet dicta illo aut quaerat rem,</div>
    </div>
  )
}

export default Footer