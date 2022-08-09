import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom';
import newsimg from '../../Assets/imgs/newsimg.png';
import parse from 'html-react-parser';
import News from './News';

import GET from '../../API/GET'
import POST from '../../API/POST'
import Footer from '../Footer/Footer';

function NewsContent({showSearch,value,filtered}) {
  const {t,i18n} = useTranslation()

  const [data, setData] = useState([]);
  const [newsFour, setNewsFour] = useState([]);
  const [newsRest, setNewsRest] = useState([]);
  const [newsContent ,setNewsContent] = useState([])
  const [search,setSearch] = useState([])
  const params = {
    count: 4
  }


  const fetchData = async () => {
    try {
      const category = await GET.category();
      const newsEnd = await POST.newsFour(params)
      const newsRest = await GET.news()
      const searching = await GET.search()
      
      setData(category.data);
      setNewsFour(newsEnd.data.items.slice(0, params.count))
      setNewsContent(newsEnd.data.items.slice(0, 1))
      setNewsRest(newsRest.data.items)
      setSearch(searching.data)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
// console.log(search);

  return (
    <>
      <News />
      <div>
      {
          filtered.map((item,i) => {
            return <NavLink className={showSearch ? 'show-news-content' : ""} to={`main/${item.id}`}>
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
      <div className={showSearch ? 'news__content' : "show-news-content"}>
        {
          newsContent.map((item,i) => {
            return <div className='news__content-info'>
            <div className='news__content-img-container'><img className='news__content-img' src={item.default_img} alt="news" /></div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center mt-2'>
                <svg className='news__content-icon news__svg' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                  <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="#072D4B" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.6667 8H12" stroke="#072D4B" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.00004 8H1.33337" stroke="#072D4B" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 4.00004V1.33337" stroke="#072D4B" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 14.6667V12" stroke="#072D4B" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <h3 className='news__content-subtitle'>{item.category_id}</h3>
              </div>
              <div className='d-flex align-items-center'>
                <svg className='news__svg' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.6">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 4.66663V7.99996L10 9.99996" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <p className='news__content-infotime'><span></span><span className='news__content-infotext'></span><span>{item.created_date}</span></p>
              </div>
  
            </div>
            <NavLink to={`main/${item.id}`}>
               {/* <h3 className='news__content-title'>{i18n.language === "uz" ? parse(item.title_uz).substring(0,110) : i18n.language === "oz" ? parse(item.title_oz).substring(0,110) : parse(item.title_uz).substring(0,110)}</h3> */}
               <h3 className='news__content-title'>{i18n.language === "uz" ? (item.title_uz).substring(0,110) : i18n.language === "oz" ?  (item.title_oz).substring(0,110) :  i18n.language === "ru" ?  (item.title_ru).substring(0,110) : (item.title_uz).substring(0,110) }</h3>
            </NavLink>
           </div>
          })
        }

        <div className='news__content-cards'>
            {
              newsFour.map((item,i) => {
                return <NavLink to={`main/${item.id}`}>
                  <div className='news__content-item' key={i+100}>
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
                    <h3 className='news__content-cardstitle'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ?  item.title_oz :  i18n.language === "ru" ?  item.title_ru : item.title_uz }</h3>
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
      </div>

      <div className='news__f d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12V22H4V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 7H2V12H22V7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 22V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className='news__f-subscribetext'>Subscribe to Premium</span>
        </div>
        <div className='d-flex align-items-center'>
          <span className='news__f-price'>$8<span className='news__f-price-m'>/m</span></span>
          <button className='news__f-btn'>Upgrade</button>
        </div>
      </div>  

      <div className='news__info'>
          {
            newsRest.map((item,i) => {
               return <Link className='news__info-item' to={`main/${item.id}`}>
              {/* <span className='news__info-category'>{item.category_id}</span> */}
              <div className='news__info-main'>
                <h4 className='news__info-title'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ?  item.title_oz :  i18n.language === "ru" ?  item.title_ru : item.title_uz }</h4>
                <div className='news__info-date'>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <g opacity="0.4">
                    <path d="M9 2.5H3C2.44772 2.5 2 2.94772 2 3.5V9.5C2 10.0523 2.44772 10.5 3 10.5H9C9.55228 10.5 10 10.0523 10 9.5V3.5C10 2.94772 9.55228 2.5 9 2.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 1.5V3.5" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 5.5H10" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 7.5H4V8.5H5V7.5Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <span className='news__info-dttime'>11:45, <span>{item.created_date}</span></span>
                  <span className='news__info-hr'></span>
                 <svg className='news__info-comments' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                  <path d="M8.35449 10.412L11 11L10.412 8.3545C10.7992 7.63019 11.0012 6.82132 11 6C11 3.2385 8.76149 1 5.99999 1C3.23849 1 0.999994 3.2385 0.999994 6C0.999994 8.7615 3.23849 11 5.99999 11C6.82132 11.0012 7.63019 10.7992 8.35449 10.412ZM8.20949 9.3555L7.88299 9.5305C7.30372 9.84007 6.6568 10.0014 5.99999 10C5.20887 10 4.43551 9.7654 3.77771 9.32588C3.11992 8.88635 2.60723 8.26164 2.30448 7.53073C2.00173 6.79983 1.92251 5.99556 2.07685 5.21964C2.23119 4.44371 2.61216 3.73098 3.17157 3.17157C3.73098 2.61216 4.44371 2.2312 5.21963 2.07686C5.99556 1.92252 6.79982 2.00173 7.53073 2.30448C8.26163 2.60723 8.88635 3.11992 9.32587 3.77772C9.7654 4.43552 9.99999 5.20887 9.99999 6C9.99999 6.667 9.83749 7.309 9.52999 7.883L9.35549 8.2095L9.68299 9.683L8.20949 9.3555Z" fill="black"/>
                  </g>
                 </svg>
                <div><span>12</span><span> izoh</span></div>
                </div>
              </div>
              <img className='news__info-img' src={item.default_img} alt="yangiliklar-malumot" />
               </Link>
            })
          }
      </div>
      <button className='all-news-btn'>{t('barcha-yangiliklar')}</button>
    </>
  )
}

export default NewsContent