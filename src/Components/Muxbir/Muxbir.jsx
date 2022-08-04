import React, { useEffect, useState } from 'react'
import './Muxbir.css'
import GET from '../../API/GET'
import { useLocation, useParams } from 'react-router-dom'
function Muxbir() {
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)

  let [data, setData] = useState([])
 
  const infoUser = async () => {
    try{
      const data = await GET.reporter(location1)
      setData(data.data)
    }catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    infoUser()
  }, [])

  // console.log(data);

  return (
    <div className='muxbir'>
      <div className='muxbir__content'>
        <div className='muxbir__bottom'>
        <img className='muxbir__img' src="https://www.lullabot.com/sites/default/files/styles/max_800/public/2020-02/slack-imgs.com_.jpeg?itok=OretdAIw" alt="muxbir" />
          <div>
          <h3 className='muxbir__title'>Sobirov Saidalixon</h3>
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
            <span className='muxbir__info-name'>Maqolalar:</span>
            <span className='muxbir__info-num'>1605</span>
          </div>
          <div className='muxbir__info-items d-flex align-items-center'>
            <span className='muxbir__info-name'>Baholangan:</span>
            <span className='muxbir__info-num'>1605</span>
          </div>
          <div className='muxbir__info-items d-flex align-items-center'>
            <span className='muxbir__info-name'>Reyting:</span>
            <span className='muxbir__info-num'>3.5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Muxbir