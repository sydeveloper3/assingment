import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function Header() {
  return (
    <div className='bg-yellow-500 md:h-[350px] h-screen '>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header