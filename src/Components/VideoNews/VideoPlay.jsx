import React, { useEffect, useState } from 'react'
import soldat from '../../Assets/imgs/soldat.png'
import GET from '../../API/GET'
import { useTranslation } from 'react-i18next'
function VideoPlay({one,setOne,setVideos,videos}) {
  const {t,i18n} = useTranslation()
  const [videobool , setVideobool] = useState(false)

  const fetchData = async () => {
    try {
      const videos  = await GET.videos();
      setVideos(videos.data.slice(0, 1));
      // setOne(...videos.data.slice(0, 1))
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(one);

  return (
    <>
    {
      videos.map((item,i) => {
        return videobool === false ? <div className='videonews__content-bar'>
        <img className='videonews__contentbar-img' src={item.default_img} alt="video-news" />
        <h3 className='videonews__contentbar-title'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ?  item.title_oz :  i18n.language === "ru" ?  item.title_ru : item.title_uz }</h3>
        <div className='video-play' onClick={() => setVideobool(!videobool)}>
         <svg width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_71_3357)">
            <ellipse cx="42.8405" cy="42.6108" rx="42.1669" ry="42.137" fill="black" fill-opacity="0.5"/>
            </g>
            <path d="M35.8125 31.3743V53.8473L54.0848 42.6108L35.8125 31.3743Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <filter id="filter0_b_71_3357" x="-14.3264" y="-14.5262" width="114.334" height="114.274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="7.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_71_3357"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_71_3357" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>
      </div> : <iframe className="videonews-video" src={`https://www.youtube.com/embed/${one.video_url}?autoplay=1`} allow="autoplay"></iframe>
      })
    }
    </>
  )
}

export default VideoPlay