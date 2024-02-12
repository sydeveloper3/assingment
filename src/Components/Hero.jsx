import React from 'react'
import girl from '../Assets/girl.png'
function Hero() {
  return (
    <div className='flex justify-center relative '>
        <div className='flex flex-col gap-4 text-center mt-16 text-white '>
            <h1 className='uppercase font-bold text-5xl '>award winning agency</h1>
            <div className='bg-white w-[85%] h-[4px] flex items-center justify-center mx-auto rounded-md'>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum?</p>
            <button className='text-xl  mx-auto  rounded-full px-3 border-2 max-w-fit '> Welcome to My Layout</button>
        </div>
        <div className='absolute right-4'>
            <img className='w-60 h-52 ' src={girl} alt="" />
        </div>
    </div>
  )
}

export default Hero