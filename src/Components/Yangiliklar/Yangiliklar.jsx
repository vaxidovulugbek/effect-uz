import React, { useEffect, useState } from 'react'
import Aside from '../Aside/Aside'
import AsideHeader from '../Aside/AsideHeader'
import './Yangiliklar.css'
import GET from '../../API/GET'
import { NavLink } from 'react-router-dom'
function Yangiliklar() {
  let cardArray = [1,2,3,4,5]

  const [newsAll, setnewsAll] = useState([])
  const newsall = async () => {
    try {
      const news = await GET.news();
      setnewsAll(news.data.items)
      // console.log(news);

    } catch(err) {}
  }
  // const fetchData = async () => {
  //   try {
  //     const category = await GET.category();
  //     const newsEnd = await POST.newsFour(params)
  //     const newsRest = await GET.news()
      
  //     setData(category.data);
  //     setNewsFour(newsEnd.data.items.slice(0, params.count))
  //     setNewsContent(newsEnd.data.items.slice(0, 1))
  //     setNewsRest(newsRest.data.items)
  //   } catch (error) {}
  // };
  useEffect(() => {
    newsall();
  }, []);
  // console.log(newsAll);
  return (
    <div className='d-flex'>
      <div>
        <p className='yangiliklar-name'>Yangiliklar lentasi</p>
        <div className='yangiliklar'>
        <div className='yangiliklar__date'>
          <span>22.07.2022</span>
        </div>
       {
          newsAll.map((item,i) => {
            return <NavLink to={`/main/${item.id}`} >
              <div className='yangiliklar__c'>
                  <div className='yangiliklar__content d-flex'>
                    <div className='yangiliklar__c-time'>
                      <div className='yangiliklar__c-content'>
                        <span>17:20</span>
                        <svg className='yangiliklar__c-svg1' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_128_336)">
                          <circle cx="12.5" cy="12.5" r="8.5" fill="white"/>
                          </g>
                          <path d="M12.5001 17.0833C9.96871 17.0833 7.91675 15.0314 7.91675 12.5C7.91675 9.96862 9.96871 7.91666 12.5001 7.91666C15.0315 7.91666 17.0834 9.96862 17.0834 12.5C17.0834 15.0314 15.0315 17.0833 12.5001 17.0833ZM12.5001 16.1667C13.4725 16.1667 14.4052 15.7803 15.0928 15.0927C15.7804 14.4051 16.1667 13.4725 16.1667 12.5C16.1667 11.5275 15.7804 10.5949 15.0928 9.90727C14.4052 9.21963 13.4725 8.83332 12.5001 8.83332C11.5276 8.83332 10.595 9.21963 9.90736 9.90727C9.21972 10.5949 8.83341 11.5275 8.83341 12.5C8.83341 13.4725 9.21972 14.4051 9.90736 15.0927C10.595 15.7803 11.5276 16.1667 12.5001 16.1667ZM12.9584 12.5H14.7917V13.4167H12.0417V10.2083H12.9584V12.5Z" fill="#C6C6C6"/>
                          <defs>
                          <filter id="filter0_d_128_336" x="0" y="0" width="25" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_336"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_336" result="shape"/>
                          </filter>
                          </defs>
                        </svg>
                        <svg className='yangiliklar__c-svg2' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_128_238)">
                          <circle cx="12.5" cy="12.5" r="8.5" fill="white"/>
                          </g>
                          <path d="M9.92509 9.73537C10.6556 9.15011 11.564 8.83188 12.5 8.83337C13.474 8.83337 14.3691 9.17071 15.0749 9.73537L15.7409 9.06942L16.389 9.7175L15.723 10.3835C16.2078 10.9904 16.5114 11.7218 16.5988 12.4936C16.6862 13.2654 16.554 14.0463 16.2172 14.7462C15.8805 15.4462 15.3529 16.0368 14.6953 16.4502C14.0377 16.8636 13.2768 17.0829 12.5 17.0829C11.7233 17.0829 10.9623 16.8636 10.3047 16.4502C9.64706 16.0368 9.11953 15.4462 8.78279 14.7462C8.44605 14.0463 8.31379 13.2654 8.40122 12.4936C8.48865 11.7218 8.79222 10.9904 9.277 10.3835L8.61104 9.71796L9.25913 9.06987L9.92509 9.73583V9.73537ZM12.9583 12.5V10.4352L10.6667 13.4167H12.0417V15.4792L14.3333 12.5H12.9583ZM10.6667 7.45837H14.3333V8.37504H10.6667V7.45837Z" fill="#999999"/>
                          <defs>
                          <filter id="filter0_d_128_238" x="0" y="0" width="25" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_128_238"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_128_238" result="shape"/>
                          </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <img className='yangiliklar__img' src={item.default_img} alt="yangiliklar" />
                    <div className='yangiliklar__info'>
                    <p className='yangiliklar__info-text'>{item.title_uz}</p>
                    <div className='yangiliklar__f d-flex align-items-center justify-content-between'>
                      <span>{item.category_id}</span>
                      <div className='yangiliklar__f-l d-flex align-items-center'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.4">
                          <path d="M8.35449 10.412L11 11L10.412 8.3545C10.7992 7.63019 11.0012 6.82132 11 6C11 3.2385 8.76149 1 5.99999 1C3.23849 1 0.999994 3.2385 0.999994 6C0.999994 8.7615 3.23849 11 5.99999 11C6.82132 11.0012 7.63019 10.7992 8.35449 10.412ZM8.20949 9.3555L7.88299 9.5305C7.30372 9.84007 6.6568 10.0014 5.99999 10C5.20887 10 4.43551 9.7654 3.77771 9.32588C3.11992 8.88635 2.60723 8.26164 2.30448 7.53073C2.00173 6.79983 1.92251 5.99556 2.07685 5.21964C2.23119 4.44371 2.61216 3.73098 3.17157 3.17157C3.73098 2.61216 4.44371 2.2312 5.21963 2.07686C5.99556 1.92252 6.79982 2.00173 7.53073 2.30448C8.26163 2.60723 8.88635 3.11992 9.32587 3.77772C9.7654 4.43552 9.99999 5.20887 9.99999 6C9.99999 6.667 9.83749 7.309 9.52999 7.883L9.35549 8.2095L9.68299 9.683L8.20949 9.3555Z" fill="black"/>
                          </g>
                        </svg>
                        <div><span>{item.comment_count}</span><span>Izoh</span></div>
                      </div>
                    </div>
                    </div>
                  </div>
              </div>
            </NavLink>

          })
        }
        <button className='reload-btn'>Yana yuklash</button>
      </div>
      </div>
     <div className='yangiliklar-aside'>
       <Aside/>  
     </div>
    </div>
  )
}

export default Yangiliklar