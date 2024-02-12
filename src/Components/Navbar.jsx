import React from 'react'

function Navbar() {
  return (
   <div className=' bg-yellow-500 text-white  '>
     <div className='flex justify-between p-8 font-bold  max-w-[95%] text-xl '>
        <div>LOGO</div>
        <div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
   </div>
  )
}

export default Navbar