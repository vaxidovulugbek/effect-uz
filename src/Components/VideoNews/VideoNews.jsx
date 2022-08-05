import React, { useEffect, useState } from 'react'
import './VideoNews.css'
import soldat from '../../Assets/imgs/soldat.png'
import football from '../../Assets/imgs/football.png'
import { useTranslation } from 'react-i18next'
import GET from '../../API/GET'
function VideoNews() {
  const {t,i18n} = useTranslation()
  let videoArr = [1,2,3,4,5,6,7,8,9]
  let [video,setVideo] = useState([])
  const fetchData = async () => {
    try {
      const voisec = await GET.videos();
      setVideo(voisec.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='videonews'>
      <h2 className='videonews__title'>{t("video-yangiliklar")}</h2>
      <div className='videonews__content'>
        <div className='videonews__content-bar'>
          <img className='videonews__contentbar-img' src={soldat} alt="video-news" />
          <h3 className='videonews__contentbar-title'>O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi</h3>
        </div>
        <div className='videonews__ci'>
          <div className='videonews__info'> 
          {
            video.map((item,i) => {
              return  <div className='videonews__info-item d-flex'>
              <img className='videonews__video d-flex' src={item.default_img} alt="video-news" />
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
                <h4 className='videonews__info-title'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ? item.title_oz : item.title_uz}</h4>
              </div>
            </div>
            })
          }
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default VideoNews