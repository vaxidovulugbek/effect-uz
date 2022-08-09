import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Habarlar() {
  const xabarlar = [1,2,3,4,5,6,7]
  const {t,i18n} = useTranslation()
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)
  
  return (
    <div className='xabarlar'>
      <p className='xabarlar-text'>{t("mavzuga-oid")}</p>
      <div className='xabarlar__info  d-flex align-items-center justify-content-between'>
        {/* {
          xabarlar.map((item,i) => {
            return <div className='xabarlar__item'>
            <img className='xabarlar__img' src="https://www.ixbt.com/img/n1/news/2022/3/4/Z-Fold3_large.jpg" alt="habarlar" />
            <div className='xabarlar__item-top d-flex align-items-center justify-content-between'>
              <div>#<span>siyosat</span></div>
              <div className='d-flex align-items-center'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                  <path d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 5.5H10" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 7.5H4V8.5H5V7.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <div>
                  <span>11:45</span>
                   | 
                  <span>13.07.2022</span>
                </div>
              </div>
            </div>
            <h2 className='xabarlar__item-title'>The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)</h2>
          </div>
          })
        } */}
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
             {
          xabarlar.map((item,i) => {
            return <SwiperSlide>
                <div className='xabarlar__item'>
            <img className='xabarlar__img' src="https://www.ixbt.com/img/n1/news/2022/3/4/Z-Fold3_large.jpg" alt="habarlar" />
            <div className='xabarlar__item-top d-flex align-items-center justify-content-between'>
              <div>#<span>siyosat</span></div>
              <div className='d-flex align-items-center'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                  <path d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 5.5H10" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 7.5H4V8.5H5V7.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <div>
                  <span>11:45</span>
                   | 
                  <span>13.07.2022</span>
                </div>
              </div>
            </div>
            <h2 className='xabarlar__item-title'>The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)</h2>
          </div>
            </SwiperSlide> 
          })
        }
          </Swiper>
      </div>
    </div>
  )
}

export default Habarlar