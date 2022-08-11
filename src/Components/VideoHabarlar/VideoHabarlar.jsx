import { Slider } from '@mui/material'
import React, {useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Aside from '../Aside/Aside'
import './VideoHabarlar.css'
import GET from '../../API/GET'
import { NavLink } from 'react-router-dom'
import { context } from '../../App'
function VideoHabarlar({filtered}) {
  let contexts = useContext(context)

  const {t,i18n} = useTranslation()

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

  // console.log(video);
  return (
      <>
        <div className='audios-search'>
              {
                  filtered.map((item,i) => {
                    return <NavLink className={contexts.showSearch ? 'show-news-content' : ""} to={`/main/${item.id}`}>
                      <div className='news__content-item'>
                        <div className='news__content-subitem d-flex'>
                          <div className='d-flex flex-column'>
                            <div className='news__content-cardsheader '>
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                <path d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 5.5H10" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5 7.5H4V8.5H5V7.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                              </svg>
                              <p>11:45  |  <span>{item.created_date}</span></p>
                            </div>
                            <h3 className='news__content-cardstitle'>
                            {/* {i18n.language === "uz" ? parse(item.description_uz) : i18n.language === "rus" ? parse(item.description_ru) : i18n.language === "rus" ? parse(item.description_oz) : parse(item.description_uz)} */}
                              {i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ?  item.title_oz :  i18n.language === "ru" ?  item.title_ru : item.title_uz }
                              </h3>
                          </div>
                          <div>
                            <img className='news__content-cardsimg' src={item.default_img} alt="card" />
                          </div>
                        </div>
                      </div>
                  </NavLink>
                  })
                }
          </div>
            
          <div className='d-flex'>
            <div className='videos'>
              <p className='videos__name'>{t("video-habarlar")}</p>

              <div className='videos__info'>
                {
                  video.map((item,i)=> {
                    return <div className='videos__info-item d-flex' key={i} >
                    <img className='videos__info-img' src={item.default_img} alt="news" />
                    <div className='videos__info-c'>
                      <h3 className='videos__info-title'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ? item.title_oz : item.title_uz}</h3>
                      <div className='d-flex '>
                        <div className='videos__info-w d-flex align-items-center'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M11.9993 3.33325H3.99935C3.26297 3.33325 2.66602 3.93021 2.66602 4.66659V12.6666C2.66602 13.403 3.26297 13.9999 3.99935 13.9999H11.9993C12.7357 13.9999 13.3327 13.403 13.3327 12.6666V4.66659C13.3327 3.93021 12.7357 3.33325 11.9993 3.33325Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.666 2V4.66667" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.33398 2V4.66667" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.66602 7.33325H13.3327" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.66732 10H5.33398V11.3333H6.66732V10Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                        <div className='videos__info-time d-flex align-items-center'><span>11:45</span>  <span className='ms-2 me-2'>|</span>  <span>{item.created_date}</span></div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <button className='videos__info-btn'>{item.category_id}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  })
                }
                <button className='videos__info-yy'>Yana yuklash</button>
              </div>
            </div>
            </div>
        </>
  )
}

export default VideoHabarlar