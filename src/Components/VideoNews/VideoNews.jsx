import React, { useEffect, useState } from 'react'
import './VideoNews.css'

import { useTranslation } from 'react-i18next'
import GET from '../../API/GET'
import VideoPlay from './VideoPlay'
import { NavLink } from 'react-router-dom'
function VideoNews() {
  const {t,i18n} = useTranslation()
  const [video,setVideo] = useState([])
  const [videos ,setVideos] = useState([])
  const [one, setOne] = useState([])
  const fetchData = async () => {
    try {
      const videos  = await GET.videos();
      setVideo(videos.data);
      setOne(videos.data.slice(0, 1))
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='videonews'>
      <h2 className='videonews__title'>{t("video-yangiliklar")}</h2>
      <div className='videonews__content'>

        <VideoPlay one={one} setOne={setOne} setVideos={setVideos} videos={videos} />
        {/* onClick={() => setOne(item)}  */}
        <div className='videonews__ci'>
          <div className='videonews__info'> 
          {
            video.map((item,i) => {
              // console.log(item);
              return <div className='videonews__info-item d-flex' onClick={() => setVideos([item])}>
                  <div className='videonews-l-img-content'>
                    <img className='videonews__video d-flex' src={item.default_img} alt="video-news" />
                    <div className='video-play'>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_b_71_3386)">
                          <ellipse cx="15.0352" cy="14.7574" rx="14.7584" ry="14.7479" fill="black" fill-opacity="0.5"/>
                          </g>
                          <g clip-path="url(#clip0_71_3386)">
                          <path d="M12.6191 10.8948V18.6199L18.9003 14.7574L12.6191 10.8948Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                          <filter id="filter0_b_71_3386" x="-14.7233" y="-14.9906" width="59.5168" height="59.4959" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feGaussianBlur in="BackgroundImage" stdDeviation="7.5"/>
                          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_71_3386"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_71_3386" result="shape"/>
                          </filter>
                          <clipPath id="clip0_71_3386">
                          <rect width="11.5959" height="11.5877" fill="white" transform="translate(9.237 8.96355)"/>
                          </clipPath>
                          </defs>
                        </svg>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='videonews__info-date d-flex align-items-center'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_71_3367)">
                        <path d="M9.20675 15.0137C12.7 15.0137 15.5318 12.1839 15.5318 8.69314C15.5318 5.2024 12.7 2.3726 9.20675 2.3726C5.71353 2.3726 2.88171 5.2024 2.88171 8.69314C2.88171 12.1839 5.71353 15.0137 9.20675 15.0137Z" stroke="#C7C8CA" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.20679 5.18173V8.69315L11.3151 10.8" stroke="#C7C8CA" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_71_3367">
                        <rect width="16.8668" height="16.8548" fill="white" transform="translate(0.773376 0.265747)"/>
                        </clipPath>
                        </defs>
                      </svg>
                      <span>{item.created_date}</span>
                    </div>
                    <h4 className='videonews__info-title'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ?  item.title_oz :  i18n.language === "ru" ?  item.title_ru : item.title_uz }</h4>
                  </div>
                </div>
            })
          }
          </div>
          <NavLink to={"/video-habarlar"}>
            <button className='d-flex align-items-center videonews__info-btn'>
              <p>{t("bo'limga-o'tish")}</p> 
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_71_3435)">
                <path d="M5.81122 13.337H20.5696" stroke="#072D4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.353 17.5507L20.5697 13.337" stroke="#072D4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.353 9.12329L20.5697 13.337" stroke="#072D4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_71_3435">
                <rect width="25.3001" height="25.2822" fill="white" transform="translate(0.540344 0.695923)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default VideoNews