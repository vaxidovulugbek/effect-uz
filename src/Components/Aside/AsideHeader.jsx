import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebookF ,FaTwitter,FaTelegramPlane} from 'react-icons/fa';
import { BsInstagram,BsYoutube } from 'react-icons/bs';
import './Aside.css'

function AsideHeader() {
  const {i18n} = useTranslation()
  const [bg,setBg] = useState(false)
  let [lang, setLang] = useState('');
  useEffect(() =>{
    switch(lang){
      case 'ru':
        i18n.changeLanguage(lang)
      case 'uz':
        i18n.changeLanguage(lang)
      case 'oz':
        i18n.changeLanguage(lang)
    }
  }, [lang])

  let body = document.querySelector(".light-theme")
  let Light = () => {
    body.classList.remove('dark');
    setBg(false)
  }
  let Dark = () => {
    body.classList.add('dark');
    setBg(true)
  }

  return (
      <div>
        <div className='aside__header d-flex align-items-center justify-content-between'>
        <div className='aside__dl d-flex'>
          <button className={ bg === false ? `aside__dl-btn aside__dl--active` : "aside__dl-btn"} onClick={() => Light()}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M15 22.5C13.0109 22.5 11.1032 21.7098 9.6967 20.3033C8.29018 18.8968 7.5 16.9891 7.5 15C7.5 13.0109 8.29018 11.1032 9.6967 9.6967C11.1032 8.29018 13.0109 7.5 15 7.5C16.9891 7.5 18.8968 8.29018 20.3033 9.6967C21.7098 11.1032 22.5 13.0109 22.5 15C22.5 16.9891 21.7098 18.8968 20.3033 20.3033C18.8968 21.7098 16.9891 22.5 15 22.5ZM13.75 1.25H16.25V5H13.75V1.25ZM13.75 25H16.25V28.75H13.75V25ZM4.39375 6.16125L6.16125 4.39375L8.8125 7.045L7.045 8.8125L4.39375 6.1625V6.16125ZM21.1875 22.955L22.955 21.1875L25.6063 23.8387L23.8387 25.6063L21.1875 22.955ZM23.8387 4.3925L25.6063 6.16125L22.955 8.8125L21.1875 7.045L23.8387 4.39375V4.3925ZM7.045 21.1875L8.8125 22.955L6.16125 25.6063L4.39375 23.8387L7.045 21.1875ZM28.75 13.75V16.25H25V13.75H28.75ZM5 13.75V16.25H1.25V13.75H5Z" fill="#FFF238"/>
            </svg>
          </button>
          <button className={ bg === true ? `aside__dl-btn aside__dl--active` : "aside__dl-btn"} onClick={() => Dark()}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.225 2.5238C13.3039 3.38208 12.5651 4.41708 12.0527 5.56708C11.5403 6.71707 11.2648 7.95849 11.2426 9.21727C11.2204 10.4761 11.452 11.7264 11.9235 12.8938C12.395 14.0611 13.0968 15.1215 13.987 16.0118C14.8773 16.902 15.9377 17.6038 17.105 18.0753C18.2724 18.5469 19.5227 18.7784 20.7815 18.7562C22.0403 18.734 23.2817 18.4585 24.4317 17.9461C25.5817 17.4337 26.6167 16.6949 27.475 15.7738C27.0775 22.3176 21.645 27.5001 15.0013 27.5001C8.09625 27.5001 2.5 21.9038 2.5 15.0001C2.5 8.3563 7.6825 2.9238 14.225 2.5238Z" fill="black"/>
            </svg>
          </button>
        </div>
        <select className='aside__lang' name="lang" id="lang" onChange={(e) => setLang(e.target.value)}> 
          <option className='aside__options' value="uz">Uz</option>
          <option className='aside__options' value="oz">Oz</option>
          <option className='aside__options' value="ru">Ru</option>
        </select>
      </div>
        {/* <div className='aside__boxes d-flex align-items-center'>
          <div className='aside__box facebook'><a className='aside-messangers' href="#"><FaFacebookF className='facebook'/></a></div>
          <div className='aside__box twitter'><a className='aside-messangers' href="#"><FaTwitter className='twitter' /></a></div>
          <div className='aside__box instagram'><a className='aside-messangers' href="#"><BsInstagram className='instagram' /></a></div>
          <div className='aside__box youtube'><a className='aside-messangers' href="#"><BsYoutube className='youtube ' /></a></div>
          <div className='aside__box telegram'><a className='aside-messangers' href="#"><FaTelegramPlane className='telegram' /></a></div>
       </div> */}
      </div>
  )
}

export default AsideHeader