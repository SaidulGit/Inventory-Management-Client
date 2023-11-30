import React from 'react'
import pic1 from "../../assets/Banner/picture1.jpg"
import pic2 from "../../assets/Banner/picture2.jpg"
import pic3 from "../../assets/Banner/picture3.jpg"
import pic4 from "../../assets/Banner/picture4.jpg"
import pic5 from "../../assets/Banner/picture5.jpg"
import { Navigation, Pagination, Scrollbar,A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carusel = () => {
  return (
    <div>
          <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <div>
 
      <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={pic2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={pic3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={pic4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={pic5} alt="" /></SwiperSlide>
    </div>
   
      ...
    </Swiper>
    </div>
  )
}

export default Carusel