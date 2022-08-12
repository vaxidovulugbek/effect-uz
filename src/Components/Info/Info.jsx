import { Rating } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation ,useParams } from 'react-router-dom'
import Aside from '../Aside/Aside'
import parse from 'html-react-parser';
import './Info.css'
import GET from '../../API/GET'
import POST from '../../API/POST'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import Habarlar from './Habarlar';
import { context } from '../../App';
function Info({filtered}) {
  let contexts = useContext(context)

  const {t,i18n} = useTranslation()
  const [inputValue,setInputValue] = useState("")
  const [userValue, setUSerValue] = useState("");
  const [star, setStar] = useState([])
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)

  const addComment = async (e) => {
    let commentObj = {
      new_id: location1,
      description: e.nativeEvent.path[2][1].value,
      userAgent: e.nativeEvent.path[2][0].value
    }
    return await POST.comment(commentObj)
  }


  // let commentObj = {
  //   new_id: location1,
  //   description: inputValue,
  //   userAgent: userValue
  // }

  // const addCommentClicked = async () => {
  //   setInputValue("");
  //   setUSerValue("");
  //   return await POST.comment(commentObj);
  // };
  const params = {
    count: 10
  }

  const [newsLocRes, setNewsLocRes] = useState([]);
  const [newcomments, setNews] = useState([]);
  const [data,setData] = useState([])
  const [newsTop10, setNewsTop10] = useState([]);
  const [baxolangan, setBaxolangan] = useState([])
  const [reyting, setReyting] = useState([])
  const [newsCategory, setNewsCategory] = useState([])
  const [rotate, setRotate] = useState(true)
  // setIsLoading(true)
  const fetchData = async () => {
    try {
      const newsRest = await GET.news()
      const TOP10NEWS = await GET.top10news(params)
      const newcomment = await GET.newItem(location1);
      const newsShare = await GET.config()
      const response = await GET.newItem(location1);
      // const news_categor = await GET.news_category(location1)
      // console.log(newsRest.status);

      // setNewsCategory(news_categor.data.items)
      // console.log(newsCategory);
      setReyting(response.data)
      
      setData(newsShare.data)
      setNews(newcomment.data);
      setNewsLocRes(newsRest.data.items)
      setNewsTop10(TOP10NEWS.data.items)

    } catch (error) {}
    // setIsLoading(false)
  };
  useEffect(() => {
    fetchData();
  }, []);

  const RotateHendler = () => {
    setRotate(!rotate)
    console.log(rotate);
  }

  let stars = {
    star: star,
    new_id: location1
  }
  const addStar = async () => {
    return await POST.star(stars)
  }
  return (
      <>
   <div className='d-flex justify-content-between'>
     {
       newsLocRes.map((item,i) => {
        if(+location1 === item.id) {
          return  <div className='info'>

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

         <h2 className='info__title'>{i18n.language === "uz" ? item.title_uz :  i18n.language === "ru" ?  item.title_ru  : i18n.language === "oz" ?  item.title_oz : item.title_uz }</h2>
         <div className='info__category-btns d-flex align-items-center'>
           <button>{item.category_id}</button>
         </div>
         <img className='info__img' src={item.default_img} alt="info-news" />
         <p className='info__text'>{parse(`${i18n.language === "uz" ? item.description_uz : i18n.language === "oz" ? item.description_oz : i18n.language === "ru" ?  item.description_ru : item.description_uz}`)}</p>

         <div className='info__n'>
           <div className='info__n__rankings'>
            <NavLink to={`/main/muxbir/${item.id}`}><span className='info__n-title'>{item.user}</span></NavLink>
             <div className='info__n-main d-flex align-items-center'>
               <div className='d-flex align-items-center'>
                 <p className='info__bottom-text'>{t("yangilik-baho")}</p>
                 <Rating className='info__n-rating' name="size-medium" defaultValue={1} onChange={(e) => setStar(e.target.value)} onClick={() => addStar()}  />
               </div>
               <div className='info__n-btns d-flex align-items-center'>
                 <button><p>{t("baholangan")}:</p> <span>hali yozmadim 1203</span></button>
                 <button><p>{t("Reyting")}:</p> <span>{reyting.stars === null ? "0" : reyting.stars}</span></button>
               </div>
             </div>
           </div>
           <div className='info__bottom d-flex align-items-center'>
             <div className='d-flex align-items-center'>
               <p className='info__bottom-text'>{t("maqola-ulashing")}</p>
               <div className='info__bottom__messengers d-flex align-items-center'>
                 <a href={`https://telegram.me/share/url?url=${typeof(data) !== 'undefined' ? data.telegram : "/"}`} target="_blank">
                 <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.5003 32.0834C9.44595 32.0834 2.91699 25.5544 2.91699 17.5C2.91699 9.44565 9.44595 2.91669 17.5003 2.91669C25.5547 2.91669 32.0837 9.44565 32.0837 17.5C32.0837 25.5544 25.5547 32.0834 17.5003 32.0834ZM12.9649 19.2063L12.9839 19.1961L14.2526 23.3815C14.4159 23.835 14.6405 23.9167 14.9132 23.8788C15.1874 23.8423 15.3318 23.695 15.5112 23.5229L17.2437 21.8488L20.9624 24.6021C21.642 24.9769 22.1305 24.7829 22.2997 23.9721L24.7162 12.565C24.983 11.5034 24.5164 11.0775 23.6924 11.4159L9.49845 16.8992C8.53012 17.2871 8.53595 17.8296 9.32345 18.0702L12.9649 19.2077V19.2063Z" fill="#314FFC" fill-opacity="0.96"/>
                   </svg>
                 </a>
                 <a href={`https://www.facebook.com/sharer.php?u=${typeof(data) !== 'undefined' ? data.facebook : "/"}`} target="_blank">
                   <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.5003 2.91669C9.44595 2.91669 2.91699 9.44565 2.91699 17.5C2.91699 24.7786 8.25012 30.8117 15.2224 31.9069V21.7146H11.5182V17.5H15.2224V14.2873C15.2224 10.6327 17.3982 8.6144 20.7305 8.6144C22.3259 8.6144 23.9943 8.89877 23.9943 8.89877V12.4863H22.1568C20.3441 12.4863 19.7797 13.6106 19.7797 14.7642V17.5H23.8237L23.1776 21.7146H19.7797V31.9069C26.7505 30.8131 32.0837 24.7771 32.0837 17.5C32.0837 9.44565 25.5547 2.91669 17.5003 2.91669Z" fill="#000CFF"/>
                   </svg>
                 </a>
                 <a href={`https://twitter.com/${typeof(data) !== 'undefined' ? data.twitter : "/"}`} target="_blank">
                   <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M32.3199 8.24835C31.2066 8.74082 30.0259 9.06425 28.817 9.20793C30.0912 8.44586 31.0449 7.24649 31.5004 5.83335C30.3045 6.54501 28.9935 7.04376 27.627 7.31356C26.7092 6.33148 25.4925 5.68017 24.1663 5.46087C22.8401 5.24157 21.4786 5.46656 20.2934 6.10088C19.1083 6.7352 18.1659 7.7433 17.6128 8.96846C17.0597 10.1936 16.9269 11.5672 17.2349 12.8756C14.8099 12.7541 12.4375 12.1239 10.2718 11.026C8.10612 9.92806 6.19554 8.38696 4.6641 6.50272C4.12202 7.4338 3.83716 8.49222 3.83868 9.5696C3.83868 11.6842 4.91494 13.5523 6.55119 14.6461C5.58286 14.6156 4.63586 14.3541 3.7891 13.8833V13.9592C3.78939 15.3675 4.27672 16.7324 5.16846 17.8224C6.0602 18.9124 7.30147 19.6605 8.68181 19.9398C7.78292 20.1834 6.84038 20.2193 5.92556 20.0448C6.31474 21.257 7.07328 22.3172 8.09496 23.0768C9.11665 23.8365 10.3503 24.2576 11.6233 24.2813C10.3581 25.2749 8.90957 26.0094 7.36039 26.4428C5.8112 26.8762 4.19179 27 2.59473 26.8071C5.38262 28.6 8.62799 29.5519 11.9426 29.5488C23.1616 29.5488 29.2968 20.2548 29.2968 12.1946C29.2968 11.9321 29.2895 11.6667 29.2779 11.4071C30.472 10.544 31.5027 9.47483 32.3214 8.24981L32.3199 8.24835Z" fill="#09B9FF"/>
                   </svg>
                 </a>
               </div>
             </div>
             <button className='info__bottom-btn d-flex align-items-center'>
               <span className='info__bottom-link'>https://effect.uz/posts/1548</span>
               <span className='info__bottom-hr'></span>

             

               <span className='info__bottom-copy'
                onClick={() => {
                  return (
                    navigator.clipboard.writeText("https://effect.uz/posts/1548"),
                    toast.info("Nusxalandi", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  )
                }}>
                <ToastContainer />
                {t("nusxa-olish")}</span>
             </button>
           </div>
         </div>

         <div className='izoh'> 
         <span>{t("izoh-qoldirish")}</span>
         <form className='izoh__form'>
           <div className='izoh__form-top'>
               <input name='ism' type="text" placeholder={t("ismingiz-placehoder")} onChange={(e) => setUSerValue(e.target.value)} required />
           </div>
           <div className='izoh__form-bottom'>
               <textarea name="izoh" cols="30" rows="10" placeholder={t("izohingiz-placeholder")} onChange={(e) => setInputValue(e.target.value)}></textarea>
               <button onClick={addComment}>{t("jonatish")}</button>
           </div>
         </form>
         </div>

         <div className='comments'>
           <div className='comments__top'>
             <div className='comments__top-text'>{t("barcha-izohlar")} (<span>{item.comment_count}</span>)</div>
             <button className={`rotate-btn ${rotate ? 'rotated' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={RotateHendler} >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="11.9683" cy="11.9683" r="11.9683" transform="rotate(-90 11.9683 11.9683)" fill="#2F9FF8"/>
               <line x1="16.0488" y1="13.1651" x2="12.567" y2="9.68335" stroke="white" stroke-linecap="round"/>
               <line x1="0.5" y1="-0.5" x2="5.42398" y2="-0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 8.37793 13.1651)" stroke="white" stroke-linecap="round"/>
             </svg>
             </button>
           </div>
           <div className='collapse' id="collapseExample">
             
                {
                  newcomments.comments.reverse().map((item,index) => {
                    return  <div class="card card-body " key={item.id}>
                    <div className='comments__info'>
                    <div className='comments__info-l'>
                      <button>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.8762 10.896C7.02043 10.896 7.14499 10.8463 7.24989 10.747C7.35478 10.6477 7.40723 10.5298 7.40723 10.3932V7.004H10.9081C11.0523 7.004 11.1769 6.95434 11.2818 6.85503C11.3867 6.75571 11.4391 6.63777 11.4391 6.50121V5.27216C11.4391 5.1356 11.3867 5.01766 11.2818 4.91834C11.1769 4.81903 11.0523 4.76937 10.9081 4.76937H7.40723V1.39879C7.40723 1.26223 7.35478 1.14429 7.24989 1.04497C7.14499 0.945655 7.02043 0.895996 6.8762 0.895996H5.38144C5.23721 0.895996 5.11265 0.945655 5.00775 1.04497C4.90286 1.14429 4.85041 1.26223 4.85041 1.39879V4.76937H1.32986C1.18563 4.76937 1.06107 4.81903 0.956171 4.91834C0.851276 5.01766 0.798828 5.1356 0.798828 5.27216V6.50121C0.798828 6.63777 0.851276 6.75571 0.956171 6.85503C1.06107 6.95434 1.18563 7.004 1.32986 7.004H4.85041V10.3932C4.85041 10.5298 4.90286 10.6477 5.00775 10.747C5.11265 10.8463 5.23721 10.896 5.38144 10.896H6.8762Z" fill="#C5C6EF"/>
                        </svg>
                      </button>
                     <span>0</span>
                      <button>
                        <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.96653 2.66C10.1823 2.66 10.3686 2.60445 10.5255 2.49334C10.6824 2.38223 10.7609 2.25028 10.7609 2.0975V0.722504C10.7609 0.569726 10.6824 0.437781 10.5255 0.32667C10.3686 0.215559 10.1823 0.160004 9.96653 0.160004H0.993549C0.777805 0.160004 0.59148 0.215559 0.434576 0.32667C0.277671 0.437781 0.199219 0.569726 0.199219 0.722504V2.0975C0.199219 2.25028 0.277671 2.38223 0.434576 2.49334C0.59148 2.60445 0.777805 2.66 0.993549 2.66H9.96653Z" fill="#C5C6EF"/>
                        </svg>
                      </button>
                    </div>
  
                    <div className='comments__info-r'>
                      <div className='comments__info-top d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <span className='comments__info-top-name'>{item.userAgent}</span>
                        <div className='comments__info-avatar'>12.11.2022</div>
                      </div>
                      <p className='comments__info-text'>{item.description}</p>
                    </div>
                  </div>
                </div>
                  })
                }
            </div>
         </div>
     </div>
        }
       })
     }

{
   newsTop10.map((item,i) => {
        //  console.log(item);
        if(+location1 === item.id) {
          return  <div className='info'>
         <h2 className='info__title'>{i18n.language === "uz" ? item.title_uz :  i18n.language === "ru" ?  item.title_ru  : i18n.language === "oz" ?  item.title_oz : item.title_uz }</h2>
         <div className='info__category-btns d-flex align-items-center'>
           <button>{item.category_id}</button>
         </div>
         <img className='info__img' src={item.img} alt="info-news" />
         <p className='info__text'>{parse(`${i18n.language === "uz" ? item.description_uz : i18n.language === "oz" ? item.description_oz : i18n.language === "ru" ?  item.description_ru : item.description_uz}`)}</p>

         <div className='info__n'>
           <div className='info__n__rankings'>
            <NavLink to={`/main/muxbir/${item.id}`}><span className='info__n-title'>{item.user}</span></NavLink>
             <div className='info__n-main d-flex align-items-center'>
               <div className='d-flex align-items-center'>
                 <p className='info__bottom-text'>{t("yangilik-baho")}</p>
                 <Rating className='info__n-rating' name="size-medium" defaultValue={1} />
               </div>
               <div className='info__n-btns d-flex align-items-center'>
                 <button><p>{t("baholangan")}:</p> <span>1203</span></button>
                 <button><p>{t("Reyting")}:</p> <span>{reyting.stars === null ? "0" : reyting.stars}</span></button>
               </div>
             </div>
           </div>
           <div className='info__bottom d-flex align-items-center'>
             <div className='d-flex align-items-center'>
               <p className='info__bottom-text'>{t("maqola-ulashing")}</p>
               <div className='info__bottom__messengers d-flex align-items-center'>
                 <a href={`https://telegram.me/share/url?url=${typeof(data) !== 'undefined' ? data.telegram : "/"}`} target="_blank">
                 <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.5003 32.0834C9.44595 32.0834 2.91699 25.5544 2.91699 17.5C2.91699 9.44565 9.44595 2.91669 17.5003 2.91669C25.5547 2.91669 32.0837 9.44565 32.0837 17.5C32.0837 25.5544 25.5547 32.0834 17.5003 32.0834ZM12.9649 19.2063L12.9839 19.1961L14.2526 23.3815C14.4159 23.835 14.6405 23.9167 14.9132 23.8788C15.1874 23.8423 15.3318 23.695 15.5112 23.5229L17.2437 21.8488L20.9624 24.6021C21.642 24.9769 22.1305 24.7829 22.2997 23.9721L24.7162 12.565C24.983 11.5034 24.5164 11.0775 23.6924 11.4159L9.49845 16.8992C8.53012 17.2871 8.53595 17.8296 9.32345 18.0702L12.9649 19.2077V19.2063Z" fill="#314FFC" fill-opacity="0.96"/>
                   </svg>
                 </a>
                 <a href={`https://www.facebook.com/sharer.php?u=${typeof(data) !== 'undefined' ? data.facebook : "/"}`} target="_blank">
                   <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.5003 2.91669C9.44595 2.91669 2.91699 9.44565 2.91699 17.5C2.91699 24.7786 8.25012 30.8117 15.2224 31.9069V21.7146H11.5182V17.5H15.2224V14.2873C15.2224 10.6327 17.3982 8.6144 20.7305 8.6144C22.3259 8.6144 23.9943 8.89877 23.9943 8.89877V12.4863H22.1568C20.3441 12.4863 19.7797 13.6106 19.7797 14.7642V17.5H23.8237L23.1776 21.7146H19.7797V31.9069C26.7505 30.8131 32.0837 24.7771 32.0837 17.5C32.0837 9.44565 25.5547 2.91669 17.5003 2.91669Z" fill="#000CFF"/>
                   </svg>
                 </a>
                 <a href={`https://twitter.com/${typeof(data) !== 'undefined' ? data.twitter : "/"}`} target="_blank">
                   <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M32.3199 8.24835C31.2066 8.74082 30.0259 9.06425 28.817 9.20793C30.0912 8.44586 31.0449 7.24649 31.5004 5.83335C30.3045 6.54501 28.9935 7.04376 27.627 7.31356C26.7092 6.33148 25.4925 5.68017 24.1663 5.46087C22.8401 5.24157 21.4786 5.46656 20.2934 6.10088C19.1083 6.7352 18.1659 7.7433 17.6128 8.96846C17.0597 10.1936 16.9269 11.5672 17.2349 12.8756C14.8099 12.7541 12.4375 12.1239 10.2718 11.026C8.10612 9.92806 6.19554 8.38696 4.6641 6.50272C4.12202 7.4338 3.83716 8.49222 3.83868 9.5696C3.83868 11.6842 4.91494 13.5523 6.55119 14.6461C5.58286 14.6156 4.63586 14.3541 3.7891 13.8833V13.9592C3.78939 15.3675 4.27672 16.7324 5.16846 17.8224C6.0602 18.9124 7.30147 19.6605 8.68181 19.9398C7.78292 20.1834 6.84038 20.2193 5.92556 20.0448C6.31474 21.257 7.07328 22.3172 8.09496 23.0768C9.11665 23.8365 10.3503 24.2576 11.6233 24.2813C10.3581 25.2749 8.90957 26.0094 7.36039 26.4428C5.8112 26.8762 4.19179 27 2.59473 26.8071C5.38262 28.6 8.62799 29.5519 11.9426 29.5488C23.1616 29.5488 29.2968 20.2548 29.2968 12.1946C29.2968 11.9321 29.2895 11.6667 29.2779 11.4071C30.472 10.544 31.5027 9.47483 32.3214 8.24981L32.3199 8.24835Z" fill="#09B9FF"/>
                   </svg>
                 </a>
               </div>
             </div>
             <button className='info__bottom-btn d-flex align-items-center'>
               <span className='info__bottom-link'>https://effect.uz/posts/1548</span>
               <span className='info__bottom-hr'></span>

             

               <span className='info__bottom-copy'
                onClick={() => {
                  return (
                    navigator.clipboard.writeText("https://effect.uz/posts/1548"),
                    toast.info("Nusxalandi", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  )
                }}>
                <ToastContainer />
                Nusxa olish</span>
             </button>
           </div>
         </div>

         <div className='izoh'> 
         <span>Izoh qoldirish</span>
         <form className='izoh__form'>
           <div className='izoh__form-top'>
               <input type="text" placeholder='Ismingiz' onChange={(e) => setUSerValue(e.target.value)} required />
           </div>
           <div className='izoh__form-bottom'>
               <textarea name="izoh" cols="30" rows="10" placeholder='Izohingizni bu yerga yozing…' onChange={(e) => setInputValue(e.target.value)}></textarea>
               <button onClick={addComment}>JO’NATISH</button>
           </div>
         </form>
         </div>

         <div className='comments'>
           <div className='comments__top'>
             <div className='comments__top-text'>Barcha izohlar (<span>{item.comment_count}</span>)</div>
             <button className={`rotate-btn ${rotate ? 'rotated' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={RotateHendler}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
               <circle cx="11.9683" cy="11.9683" r="11.9683" transform="rotate(-90 11.9683 11.9683)" fill="#2F9FF8"/>
               <line x1="16.0488" y1="13.1651" x2="12.567" y2="9.68335" stroke="white" stroke-linecap="round"/>
               <line x1="0.5" y1="-0.5" x2="5.42398" y2="-0.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 8.37793 13.1651)" stroke="white" stroke-linecap="round"/>
             </svg>
             </button>
           </div>
           <div className='collapse' id="collapseExample">
             
                {
                  newcomments.comments !== undefined ? newcomments.comments.map((item,index) => {
                    return  <div class="card card-body " key={item.id}>
                    <div className='comments__info'>
                    <div className='comments__info-l'>
                      <button>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.8762 10.896C7.02043 10.896 7.14499 10.8463 7.24989 10.747C7.35478 10.6477 7.40723 10.5298 7.40723 10.3932V7.004H10.9081C11.0523 7.004 11.1769 6.95434 11.2818 6.85503C11.3867 6.75571 11.4391 6.63777 11.4391 6.50121V5.27216C11.4391 5.1356 11.3867 5.01766 11.2818 4.91834C11.1769 4.81903 11.0523 4.76937 10.9081 4.76937H7.40723V1.39879C7.40723 1.26223 7.35478 1.14429 7.24989 1.04497C7.14499 0.945655 7.02043 0.895996 6.8762 0.895996H5.38144C5.23721 0.895996 5.11265 0.945655 5.00775 1.04497C4.90286 1.14429 4.85041 1.26223 4.85041 1.39879V4.76937H1.32986C1.18563 4.76937 1.06107 4.81903 0.956171 4.91834C0.851276 5.01766 0.798828 5.1356 0.798828 5.27216V6.50121C0.798828 6.63777 0.851276 6.75571 0.956171 6.85503C1.06107 6.95434 1.18563 7.004 1.32986 7.004H4.85041V10.3932C4.85041 10.5298 4.90286 10.6477 5.00775 10.747C5.11265 10.8463 5.23721 10.896 5.38144 10.896H6.8762Z" fill="#C5C6EF"/>
                        </svg>
                      </button>
                     <span>0</span>
                      <button>
                        <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.96653 2.66C10.1823 2.66 10.3686 2.60445 10.5255 2.49334C10.6824 2.38223 10.7609 2.25028 10.7609 2.0975V0.722504C10.7609 0.569726 10.6824 0.437781 10.5255 0.32667C10.3686 0.215559 10.1823 0.160004 9.96653 0.160004H0.993549C0.777805 0.160004 0.59148 0.215559 0.434576 0.32667C0.277671 0.437781 0.199219 0.569726 0.199219 0.722504V2.0975C0.199219 2.25028 0.277671 2.38223 0.434576 2.49334C0.59148 2.60445 0.777805 2.66 0.993549 2.66H9.96653Z" fill="#C5C6EF"/>
                        </svg>
                      </button>
                    </div>
  
                    <div className='comments__info-r'>
                      <div className='comments__info-top d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <span className='comments__info-top-name'>{item.userAgent}</span>
                        <div className='comments__info-avatar'>12.11.2022</div>
                      </div>
                      <p className='comments__info-text'>{item.description}</p>
                    </div>
                  </div>
                </div>
                  })
                  : ""
                }
            </div>
         </div>
     </div>
        }
       })
     }



      <div className='info-respons-aside'>
       <Aside />
      </div>
    </div>
    {/* <Habarlar /> */}
  </>
  )
}

export default Info