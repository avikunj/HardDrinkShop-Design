import React from 'react'
import './home.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Beer from '../../img/beer.webp'
import Vodka from '../../img/vodka.jpg'
import Brandy from '../../img/brandy.jpg'
import Wisky from '../../img/wisky.jpg'
import Wine from '../../img/wine.jpg'
const Categories = () => {
  return (
    <div className='categories'>

        <div className='categoryHeading'>
<h2 className='greeting'>Categories</h2>
        </div>
        <div className='buttonposition'> <button  className='button'>view all </button> </div>
        <div className='categoriesList'>
        <div className="Container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={14}
        >
          <div >
            <SwiperSlide className="alcohalCategory">
             <img src={Beer} height={100} width={40} />
             <p>Beer</p>
            </SwiperSlide>
            <SwiperSlide className="alcohalCategory">
             <img src={Vodka} height={100} width={40}/>
             <p>Vodka</p>
            </SwiperSlide>

            <SwiperSlide className="alcohalCategory">
             <img src={Brandy} height={100} width={40}/>
             <p>Brandy</p>
            </SwiperSlide>

            <SwiperSlide className="alcohalCategory">
             <img src={Wisky} height={100} width={40}/>
             <p>Wisky</p>
            </SwiperSlide>

            <SwiperSlide className="alcohalCategory">
             <img src={Wine} height={100} width={40}/>
             <p>wine</p>
            </SwiperSlide>
            
          </div>
        </Swiper>
      </div>



    </div>

    </div>
  )
}

export default Categories