import { Slider } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaPlay,FaPause } from 'react-icons/fa';
import './Audios.css'
import GET from '../../API/GET'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { context } from '../../App';
function Audios({filtered}) {
  let contexts = useContext(context)
  
  const [count, setCount] = useState(1)
  
  const {t,i18n} = useTranslation()
  let [voise,setVoisec] = useState([])
  let [voisesAll,setVoisesAll] = useState([])
  const fetchData = async () => {
    try {
      const voisec = await GET.voice_one(count);
      // console.log(count);
      const voisec_all = await GET.voisec();
      setVoisec(voisec.data);
      setVoisesAll(voisec_all.data.items)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Plyer uchun
  let [currentsong, setcurrentsong] = useState(voisesAll[0])
  let audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState({ current: 0, duration: 0 })

  const timeHandler = (e) => {
    let current = e.target.currentTime
    let duration = e.target.duration
    setTime({ ...time, current, duration })
  }
  
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setTime({...time, current: e.target.value})
  }

  const volumeHandler = (e) => {
    audioRef.current.volume = e.target.value / 100
  }

  const play = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }
// START NEXT MUSIC
//   let nextMusic = () => {
//     // setisplaying(false)
//     // setcolor(false)
// // console.log(voisesAll[0]);

//     let next = voisesAll.findIndex((song) => song.id === currentsong.id)
//     if (shufflecolor) {
//       setcurrentsong(voisesAll[(next + Math.floor(Math.random() * voisesAll.length)) % voisesAll.length ])
//     }
//     else {
//       setcurrentsong(voisesAll[(next + 1) % voisesAll.length ])
//     }
//   }

const nextHendler = () => {
  setCount(count + 1)
  // console.log(count);
  if (count === 5) {
    setCount(1)
  }
}
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
      <div className='audios'>
        <p className='audios__name'>{t("audio-habarlar")}</p>
        <div className='audios__content'>
          <h2 className='audios__title'> {i18n.language === "uz" ? voise.title_uz : i18n.language === "oz" ?  voise.title_oz :  i18n.language === "ru" ?  voise.title_ru : voise.title_uz }</h2>
          <div className='audios__bottom d-flex align-items-center justify-content-between'>
            <div className="audios__control d-flex align-items-center">

              <button className="PREV audios__control-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8273 12L15.7773 16.95L14.3633 18.364L7.99934 12L14.3633 5.63601L15.7773 7.05001L10.8273 12Z" fill="#072D4B"/></svg></button>
              <button className="audios__control-center" onClick={play}>{!playing ? <FaPlay /> : <FaPause />}</button>
              <button className="NEXT audios__control-btn" onClick={() => nextHendler} >

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1727 12L8.22266 7.04999L9.63666 5.63599L16.0007 12L9.63666 18.364L8.22266 16.95L13.1727 12Z" fill="#072D4B"/>
                </svg>
              </button>
            </div>
            <div className='a-l-content d-flex align-items-center justify-content-between'>
              <div className='audios__cv d-flex align-items-center'>
                <div className="audios__time d-flex align-items-center"><span>{getTime(time.current)}</span> <span className='ms-1 me-1'>/</span> <span>{getTime(time.duration)}</span></div>
                <Slider
                  className="audios__time-controller"
                  aria-label="Default"
                  defaultValue={30}
                  color="primary"
                  size="small"
                  onChange={dragHandler}
                  value={time.current}
                  max={+time.duration}
                />
                
              </div>
              <Slider className="audios__value" defaultValue={50} aria-label="Default" size="small" onChange={volumeHandler}/>
              <audio
                onTimeUpdate={timeHandler}
                onLoadedMetadata={timeHandler}
                ref={audioRef}
                src={voise.voice}></audio>
                {/* <audio onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler}  ref={audioRef} src={currentsong.audio}></audio> */}
            </div>
          </div>
        </div>

        <div className='audios__info'>
          {
            voisesAll.map((item,i)=> {
              // voise
              // audiosarr
              return <div className='audios__info-item d-flex' key={i} >
              <img className='audios__info-img' src={item.img} alt="news_voise" />
              <div className='audios__info-c'>
                <h3 className='audios__info-title'>{i18n.language === "uz" ? item.title_uz : i18n.language === "oz" ?  item.title_oz :  i18n.language === "ru" ?  item.title_ru : item.title_uz }</h3>
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
                  <div className='audios__info-time d-flex align-items-center'><span>11:45</span>  <span className='ms-2 me-2'>|</span>  <span>{item.created_date}</span></div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <button className='audios__info-btn'>{item.category_id}</button>
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
    </>
  )
}

export default Audios