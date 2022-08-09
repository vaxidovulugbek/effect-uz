import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NavLink, Route, Routes } from 'react-router-dom'
import AsideHeader from '../Aside/AsideHeader'
import AsideLinks from '../Aside/AsideLinks'
import logo from '../../Assets/imgs/logo.svg'

import GET from '../../API/GET'
import POST from '../../API/POST'
import { useTranslation } from 'react-i18next';

function Header({setShowSearch,setValue,setresmenu,resmenu}) {
  const {t,i18n} = useTranslation()

// START SEARCH PART
  let [ResSearch,setResSearch] = useState(true)

  // let [value,setValue] = useState("")
  let searchHendler = (e) => {
    setValue(e.target.value)
    setShowSearch(false)
    
    if(e.target.value === "") {
      setShowSearch(true)
    }
  }

  // START VALYUTA PART
  const [post, setPost] = useState([{
    ONE:1
  }]);
  useEffect(() => {
    // axios.get("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/currency")
    axios.get("https://cbu.uz/ru/arkhiv-kursov-valyut/json/")
      .then((response) => {
      setPost(response);
    });
    // if (!post) return null;
    // console.log(post);
  }, []);
  // console.log(post);


  return (
    <>
     <div className='hc d-flex align-items-center justify-content-between'>
      <header className='header'>
        <button className='header__respons-search' onClick={() => setResSearch(!ResSearch)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.75 15.75L12.4875 12.4875" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <a className='sidebar__respons-link' href="/"><img className='sidebar__respons-logo' src={logo} alt="logo" /></a>
       <div className={ResSearch ? `header__form` : "header__res-top"}>
       <form className='res-form-search'>
          <input className='header__search' type="search" placeholder={t('sayt-boylab-izlash')} onChange={(e) => searchHendler(e)} />
          <button className='header__search-btn'>
            <svg className='header__search-icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 15.75L12.4875 12.4875" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </form>
        <button className='sidebar-respond-close' onClick={() => setResSearch(!ResSearch)} >x</button>
       </div>
       {/* <NavLink className="respons-menu" to="resmenu"> */}
        <div className='respons-menu' onClick={() => setresmenu(!resmenu)}>
            <button className='respons-menu-btn'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="#072D4B"/>
              </svg>
            </button>
          </div>
       {/* </NavLink> */}
        <div className='header__valuta'>
          <div className='header__valuta-item'>
            <span className='header__valuta-text'>USD = </span>
            <span className='header__valuta-price'>10891.93</span>
            <svg className='header__valuta-icon' width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.81849 4.52499L0.98999 1.69749L1.69699 0.98999L4.52549 3.81849L6.99999 1.34349V6.99999H1.34349L3.81849 4.52499Z" fill="#F90000"/>
            </svg>
          </div>
          <span className='header__valuta-hr'></span>
          <div className='header__valuta-item'>
            <span>EUR = </span>
            <span>12891.00</span>
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4.52499 4.18003L1.69699 7.00904L0.98999 6.30154L3.81849 3.47353L1.34349 0.998535H6.99999V6.65504L4.52499 4.18003Z" fill="#2FCC71"/>
            </svg>

          </div>
          <span className='header__valuta-hr'></span>
          <div className='header__valuta-item'>
            <span>RUB = </span>
            <span>190.93</span>
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.52499 4.18003L1.69699 7.00904L0.98999 6.30154L3.81849 3.47353L1.34349 0.998535H6.99999V6.65504L4.52499 4.18003Z" fill="#2FCC71"/>
            </svg>
          </div>
        </div>
      </header>
      <div className='yangiliklar-respons-lentasi'>

        <Routes>
            <Route path='yangiliklar-lentasi' element={<AsideHeader />}/>
        </Routes>
      </div>
      <div className='main-yangilik-respons'>
        <Routes>
            <Route path='main/:id' element={<AsideHeader />}/>  
        </Routes>
      </div>
      <div className='aside-muxbir flex-column'>
        <Routes>
            <Route path='main:id/muxbir' element={<AsideHeader />}/>  
        </Routes>
        <Routes>
          <Route path='audio-habarlar' element={<AsideHeader />}/>  
       </Routes>
       <Routes>
          <Route path='video-habarlar' element={<AsideHeader />}/>  
       </Routes>
        <div className='aside-muxbir-link'>
            <Routes>
                <Route path='main:id/muxbir' element={<AsideLinks />}/>  
            </Routes>
        <Routes>
            <Route path='audio-habarlar' element={<AsideLinks />}/>  
        </Routes>
        <Routes>
            <Route path='video-habarlar' element={<AsideLinks />}/>  
        </Routes>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header