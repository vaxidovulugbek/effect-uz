import React from 'react'
import { FaFacebookF ,FaTwitter,FaTelegramPlane} from 'react-icons/fa';
import { BsInstagram,BsYoutube } from 'react-icons/bs';
function AsideLinks() {
  return (
    <div className='aside__boxes d-flex align-items-center'>
      <div className='aside__box facebook'><a className='aside-messangers' href="#"><FaFacebookF className='facebook'/></a></div>
      <div className='aside__box twitter'><a className='aside-messangers' href="#"><FaTwitter className='twitter' /></a></div>
      <div className='aside__box instagram'><a className='aside-messangers' href="#"><BsInstagram className='instagram' /></a></div>
      <div className='aside__box youtube'><a className='aside-messangers' href="#"><BsYoutube className='youtube ' /></a></div>
      <div className='aside__box telegram'><a className='aside-messangers' href="#"><FaTelegramPlane className='telegram' /></a></div>
    </div>
  )
}

export default AsideLinks