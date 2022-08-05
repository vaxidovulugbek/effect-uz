import { Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Aside from '../Aside/Aside'
import './Audios.css'
import GET from '../../API/GET'
import { useTranslation } from 'react-i18next'
function Audios() {
  let audiosarr = [1,2,3,4,5,6,7]
  const {t,i18n} = useTranslation()
  let [voise,setVoisec] = useState([])
  const fetchData = async () => {
    try {
      const voisec = await GET.voisec();
      
      setVoisec(voisec.data);
      // setNewsFour(newsEnd.data.items.slice(0, params.count))
      // setNewsContent(newsEnd.data.items.slice(0, 1))
      // setNewsRest(newsRest.data.items)

    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(voise);

  return (
    <div className='d-flex'>
     <div className='audios'>
      <p className='audios__name'>{t("audio-habarlar")}</p>
      <div className='audios__content'>
        <h2 className='audios__title'>Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</h2>
        <div className='audios__bottom d-flex align-items-center justify-content-between'>
          <div className="audios__control d-flex align-items-center">
            <button className="audios__control-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8273 12L15.7773 16.95L14.3633 18.364L7.99934 12L14.3633 5.63601L15.7773 7.05001L10.8273 12Z" fill="#072D4B"/>
              </svg>
            </button>
            <button className="audios__control-center">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.22 15.52L10.9713 24.3525C10.8771 24.4152 10.7678 24.4511 10.6549 24.4565C10.5419 24.4619 10.4297 24.4366 10.33 24.3832C10.2303 24.3298 10.147 24.2504 10.0889 24.1535C10.0308 24.0565 10.0001 23.9456 10 23.8325V6.16752C10.0001 6.05447 10.0308 5.94355 10.0889 5.84658C10.147 5.7496 10.2303 5.67021 10.33 5.61685C10.4297 5.56349 10.5419 5.53816 10.6549 5.54356C10.7678 5.54896 10.8771 5.58489 10.9713 5.64752L24.22 14.48C24.3056 14.5371 24.3758 14.6144 24.4243 14.7051C24.4729 14.7958 24.4983 14.8971 24.4983 15C24.4983 15.1029 24.4729 15.2042 24.4243 15.2949C24.3758 15.3856 24.3056 15.4629 24.22 15.52Z" fill="#072D4B"/>
              </svg>
            </button>
            <button className="audios__control-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13.1727 12L8.22266 7.04999L9.63666 5.63599L16.0007 12L9.63666 18.364L8.22266 16.95L13.1727 12Z" fill="#072D4B"/>
              </svg>
            </button>
          </div>
          <div className='audios__cv d-flex align-items-center'>
            <div className="audios__time d-flex align-items-center"><span>01:25</span> <span className='ms-1 me-1'>/</span> <span>03:38</span></div>
            <Slider
              className="audios__time-controller"
              aria-label="Default"
              defaultValue={30}
              color="primary"
              size="small"
            />
          </div>
          <Slider className="audios__value" defaultValue={50} aria-label="Default" size="small" />
        </div>
      </div>

      <div className='audios__info'>
        {
          audiosarr.map((item,i)=> {
            // voise
            // audiosarr
            return <div className='audios__info-item d-flex' key={i} >
            <img className='audios__info-img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f6/60/caption.jpg?w=700&h=500&s=1" alt="news" />
            <div className='audios__info-c'>
              <h3 className='audios__info-title'>hghgh</h3>
              {/* {item.title_uz} */}
              <div className='d-flex '>
                <div className='audios__info-w d-flex align-items-center'>
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <path d="M11.9993 3.33325H3.99935C3.26297 3.33325 2.66602 3.93021 2.66602 4.66659V12.6666C2.66602 13.403 3.26297 13.9999 3.99935 13.9999H11.9993C12.7357 13.9999 13.3327 13.403 13.3327 12.6666V4.66659C13.3327 3.93021 12.7357 3.33325 11.9993 3.33325Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.666 2V4.66667" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.33398 2V4.66667" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.66602 7.33325H13.3327" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.66732 10H5.33398V11.3333H6.66732V10Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                 </svg>
                 <div className='audios__info-time d-flex align-items-center'><span>11:45</span>  <span className='ms-2 me-2'>|</span>  <span>13.07.2022</span></div>
                </div>
                <div className='d-flex align-items-center'>
                  <button className='audios__info-btn'>Tech</button>
                  <button className='audios__info-btn'>Mobile</button>
                </div>
              </div>
            </div>
          </div>
          })
        }
        <button className='audios__info-yy'>Yana yuklash</button>
      </div>
    </div>
    </div>
  )
}

export default Audios