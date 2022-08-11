import React, { useContext, useEffect, useState } from 'react'
import './Muxbir.css'
import GET from '../../API/GET'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { ListItem } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { context } from '../../App'
function Muxbir({filtered}) {
  let contexts = useContext(context)

  const {t,i18n} = useTranslation()
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)

  let [data, setData] = useState([])
 
  const infoUser = async () => {
    try{
      const data = await GET.reporterone()
      setData(data.data)
    }catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    infoUser()
  }, [])

  console.log(data);

  return (
    <>
    <div className='res-mt-search'>
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
    <div className='muxbir'>
      <div className='muxbir__content'>
        <div className='muxbir__bottom'>
        <img className='muxbir__img' src={data.img} alt="muxbir" />
          <div>
          <h3 className='muxbir__title'>{data.fullName}</h3>
          <ul className='muxbir-list d-flex align-items-center'>
            <li className='muxbir__item'>
              <a className='muxbir__link' href="#">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 23.625C7.13181 23.625 2.375 18.8682 2.375 13C2.375 7.13181 7.13181 2.375 13 2.375C18.8682 2.375 23.625 7.13181 23.625 13C23.625 18.8682 18.8682 23.625 13 23.625ZM9.69563 14.2431L9.70944 14.2357L10.6338 17.2851C10.7528 17.6155 10.9164 17.675 11.1151 17.6474C11.3149 17.6208 11.4201 17.5135 11.5507 17.3881L12.813 16.1684L15.5224 18.1744C16.0175 18.4474 16.3734 18.3061 16.4967 17.7154L18.2572 9.4045C18.4517 8.631 18.1117 8.32075 17.5114 8.56725L7.17006 12.5623C6.46456 12.8449 6.46881 13.2401 7.04256 13.4154L9.69563 14.2442V14.2431Z" fill="#314FFC" fill-opacity="0.96"/>
                </svg>
              </a>
            </li>
            <li className='muxbir__item'>
              <a className='muxbir__link' href="#">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 23.625C7.13181 23.625 2.375 18.8682 2.375 13C2.375 7.13181 7.13181 2.375 13 2.375C18.8682 2.375 23.625 7.13181 23.625 13C23.625 18.8682 18.8682 23.625 13 23.625ZM9.69563 14.2431L9.70944 14.2357L10.6338 17.2851C10.7528 17.6155 10.9164 17.675 11.1151 17.6474C11.3149 17.6208 11.4201 17.5135 11.5507 17.3881L12.813 16.1684L15.5224 18.1744C16.0175 18.4474 16.3734 18.3061 16.4967 17.7154L18.2572 9.4045C18.4517 8.631 18.1117 8.32075 17.5114 8.56725L7.17006 12.5623C6.46456 12.8449 6.46881 13.2401 7.04256 13.4154L9.69563 14.2442V14.2431Z" fill="#314FFC" fill-opacity="0.96"/>
                </svg>
              </a>
            </li>
            <li className='muxbir__item'>
              <a className='muxbir__link' href="#">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 23.625C7.13181 23.625 2.375 18.8682 2.375 13C2.375 7.13181 7.13181 2.375 13 2.375C18.8682 2.375 23.625 7.13181 23.625 13C23.625 18.8682 18.8682 23.625 13 23.625ZM9.69563 14.2431L9.70944 14.2357L10.6338 17.2851C10.7528 17.6155 10.9164 17.675 11.1151 17.6474C11.3149 17.6208 11.4201 17.5135 11.5507 17.3881L12.813 16.1684L15.5224 18.1744C16.0175 18.4474 16.3734 18.3061 16.4967 17.7154L18.2572 9.4045C18.4517 8.631 18.1117 8.32075 17.5114 8.56725L7.17006 12.5623C6.46456 12.8449 6.46881 13.2401 7.04256 13.4154L9.69563 14.2442V14.2431Z" fill="#314FFC" fill-opacity="0.96"/>
                </svg>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>

      <div className='muxbir__info'>
        <p className='muxbir__info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio. Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.</p>
        <p className='muxbir__info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio. Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.</p>
        <p className='muxbir__info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio. Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.</p>
        <div className='d-flex align-items-center muxbir__info-co'>  
          <div className='muxbir__info-items d-flex align-items-center'>
            <span className='muxbir__info-name'>{t("Maqolalar")}:</span>
            <span className='muxbir__info-num'>{data.news_count}</span>
          </div>
          <div className='muxbir__info-items d-flex align-items-center'>
            <span className='muxbir__info-name'>{t("baholangan")}:</span>
            <span className='muxbir__info-num'>{data.stars}</span>
          </div>
          <div className='muxbir__info-items d-flex align-items-center'>
            <span className='muxbir__info-name'>{t("Reyting")}:</span>
            <span className='muxbir__info-num'>3.5</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Muxbir