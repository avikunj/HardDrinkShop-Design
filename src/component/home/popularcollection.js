import React from 'react'
import './home.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Heineken from '../../img/Heineken.jpg'
import Kingfisher from '../../img/kingfisher.webp'
import Arna from '../../img/arna.png'
import Budweiser from '../../img/Budweiser.webp'
import { Link } from "react-router-dom"


const Popularcollection = () => {
  return (
    <div className='PopularCollection'>

        <div className='popularHeading'>
<h2 className='greeting'>Popular Collection</h2>
        </div>
        <div className='buttonposition'> <button  className='button'>view all </button> </div>
        <div className='popularcategoriesList'>
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
            <SwiperSlide className="popularAlcohal">
              <Link to="/viewproduct" className='link'>

             <img src={Kingfisher} height={150} width={100} />
             <p>Kingfisher</p>
             <p className='price'>$150.00</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="popularAlcohal">
             <img src={Heineken} height={150} width={100}/>
             <p>Heineken</p>
             <p className='price'>$105.99</p>
            </SwiperSlide>

            <SwiperSlide className="popularAlcohal">
             <img src={Arna} height={150} width={100}/>
             <p>Arna</p>
             <p className='price'>$150.00</p>
            </SwiperSlide>

            <SwiperSlide className="popularAlcohal">
             <img src={Budweiser} height={150} width={100}/>
             <p>Budweiser</p>
             <p className='price'>$150.00</p>
            </SwiperSlide>

            
            
          </div>
          
        </Swiper>
        <div className='secondswiper'>

        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={14}
          >
          <div >
            <SwiperSlide className="popularAlcohal">
             <img src={Kingfisher} height={150} width={100} />
             <p>Kingfisher</p>
             <p className='price'>$150.00</p>
            </SwiperSlide>
            <SwiperSlide className="popularAlcohal">
             <img src={Heineken} height={150} width={100}/>
             <p>Heineken</p>
             <p className='price'>$105.99</p>
            </SwiperSlide>

            <SwiperSlide className="popularAlcohal">
             <img src={Arna} height={150} width={100}/>
             <p>Arna</p>
             <p className='price'>$150.00</p>
            </SwiperSlide>

            <SwiperSlide className="popularAlcohal">
             <img src={Budweiser} height={150} width={100}/>
             <p>Budweiser</p>
             <p className='price'>$150.00</p>
            </SwiperSlide>

            
            
          </div>
          
        </Swiper>
          </div>
      </div>



    </div>

    </div>
  )
}

export default Popularcollection