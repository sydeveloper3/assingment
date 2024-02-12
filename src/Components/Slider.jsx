import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import review from '../reviewdata'

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      Autoplay={true}
      pagination={{ clickable: true }}
      
    >
      {
        review.map((data,index)=>(
            <SwiperSlide>
             <div className='w-[80%] p-10 mx-auto flex flex-col gap-3'>

             <div className='flex gap-4'>
                    <img className='w-12 h-12  rounded-full' src={data.image} alt="" />
                    <p className='w-full'>{data.comment}</p>
                </div>
                <div className='flex justify-center '>
                    <p>{data.name}</p>
                </div>
             </div>
            </SwiperSlide>
        ))
      }
      
      
    </Swiper>
  );
};