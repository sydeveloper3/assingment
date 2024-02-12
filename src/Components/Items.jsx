import React from 'react'

function Items({ data }) {
  return (
    <div className={`flex ${data.active} bg-black`}>
      <div className='w-[50%]'>
        <img src={data.Image} alt="" className='w-full ' />

      </div>
      <div className='w-[50%] p-9'>
        <h3 className='text-gray-600'>{data.SubHeading}</h3>
        <h1 className='text-white uppercase font-semibold'>{data.Heading}</h1>
        {
          data.grid ?
            (<div className='text-white  p-2 flex flex-wrap gap-8'>

              {
                data.divheading.map((item, index) => (

                  <div className='w-[45%] flex relative -ml-2'>
                    <div className='text-7xl font-bold text-gray-700 absolute '>{item.count}</div>
                    <div className='ml-9'>
                      <h1 className='text-white'>{item.h}</h1>
                      <p className='text-gray-500'>{item.hdata}</p>
                    </div>
                  </div>
                ))
              }

            </div>)
            :
            (<p className='text-gray-500 '>{data.Lorem}</p>)
        }

        <button className='rounded-full text-black-500 border-2 p-1 mt-5 bg-yellow-600'>{data.Button}</button>
      </div>
    </div>
  )
}




export default Items