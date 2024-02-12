import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import Items from './Items'
import data from '../data'
import Slider from './Slider'

function HomePage() {
  
  return (
    <div>
      <Header/> 
      
       <p className='uppercase p-4 text-center font-bold text-3xl bg-white'>lets build something great</p>
      {
        data.map((item,index)=>(
          <Items key={index} data={item}/>
        ))
      }
      <Slider/>
      <Footer/>
      
    </div>
  )
}

export default HomePage