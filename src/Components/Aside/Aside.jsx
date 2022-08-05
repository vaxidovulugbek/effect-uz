import React, { useEffect, useState } from 'react'
import { FaFacebookF ,FaTwitter,FaTelegramPlane} from 'react-icons/fa';
import { BsInstagram,BsYoutube } from 'react-icons/bs';
// import { FaFacebookF ,FaTwitter} from 'react-icons/fa';
import { useTranslation } from 'react-i18next'
import './Aside.css'
import AsideHeader from './AsideHeader';
import AsideLinks from './AsideLinks';
import { NavLink } from 'react-router-dom';
import GET from '../../API/GET'
import POST from '../../API/POST'
// import '../../i18n';

function Aside() {
  const [data, setData] = useState([]);
  const [newsFour, setNewsFour] = useState([]);
  const [newsRest, setNewsRest] = useState([]);

  const params = {
    count: 10
  }

  const fetchData = async () => {
    try {
      // const category = await GET.category();
      const newsEnd = await POST.top10news(params)
      // const newsRest = await GET.news()
      
      // setData(category.data);
      setNewsFour(newsEnd.data.items)
      // setNewsRest(newsRest.data.items)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  // weather API
  const regions = [
    { id: 1, name: "Samarqand" },
    { id: 2, name: "Qarshi"},
    { id: 3, name: "Toshkent"},
    { id: 4, name: "Bukhara"},
    { id: 5, name: "Navoiy"},
    { id: 6, name: "Nukus" },
    { id: 7, name: "Sirdaryo"},
    { id: 8, name: "Urgut"},
    { id: 9, name: "Farg'ona" },
    { id: 10, name: "Andijon"},
    { id: 11, name: "Namangan"},
  ];  
  const [index, setIndex] = useState(0);
  const { name, temp } = regions[index];
  const [weatherName, setWeatherName] = useState("")
  const [weatherTemp, setWeatherTemp] = useState(0)
  const [weatherSituation, setWeatherSituation] = useState("")
  const leftClickedHandler = () => {
    index < regions.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const rightClickedHandler = () => {
    index < 1 ? setIndex(regions.length - 1) : setIndex(index - 1);
  };
  // const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2a2fbcce83edbff63a879e8e1e65b62b`;

  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=33dedde6287575d237be2e1c44271762`)
  .then((res) => res.json())
  .then((birnimr) => {
    // console.log(birnimr.weather[0].main);
    if(birnimr.weather[0].main === 'Clouds') {
      setWeatherSituation("Bulutli")
    }
    if(birnimr.weather[0].main === 'Rain') {
      setWeatherSituation("Yomg'irli")
    }
    if(birnimr.weather[0].main === 'Clear') {
      setWeatherSituation("Toza Havo")
    }
    if(birnimr.weather[0].main === 'Snow') {
      setWeatherSituation("Qor")
    }
    if(birnimr.weather[0].main === 'Haze') {
      setWeatherSituation("Tumanli")
    }
    setWeatherName(birnimr.name)
    setWeatherTemp(birnimr.main.temp)
  })
  return (
    <div className='aside'>
      <AsideLinks />
      <div className='aside__weather'>
          <div className='aside__weather-top d-flex align-items-center justify-content-between'>
            {/* <p>Qashqadaryo, Qarshi</p> */}
            <p>Uzbekistan / {weatherName}</p>
            <div className='d-flex align-items-center'>
              <button className='aside-l-btn' onClick={leftClickedHandler}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="12" cy="12.1492" r="12" transform="rotate(-180 12 12.1492)" fill="#2F9FF8"/>
                   <line x1="13.2001" y1="8.05623" x2="9.70718" y2="11.5491" stroke="white" stroke-linecap="round"/>
                   <line x1="0.5" y1="-0.5" x2="5.4397" y2="-0.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 13.2001 15.7493)" stroke="white" stroke-linecap="round"/>
                </svg>
              </button>
              <button onClick={rightClickedHandler}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#2F9FF8"/>
                  <line x1="10.7999" y1="16.0929" x2="14.2928" y2="12.6" stroke="white" stroke-linecap="round"/>
                  <line x1="0.5" y1="-0.5" x2="5.4397" y2="-0.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 10.7999 8.3999)" stroke="white" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='aside__weather-bottom d-flex justify-content-between'>
            <div className='d-flex flex-column'>
              <span className='aside__weather-text'>{weatherSituation}</span>
              <div className='aside__weather-info'><span>{weatherTemp}<span>°c</span></span> / <span>25<span>°c</span></span></div>
            </div>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 36.8333C31.9831 36.8333 36.8334 31.983 36.8334 26C36.8334 20.0169 31.9831 15.1666 26 15.1666C20.0169 15.1666 15.1667 20.0169 15.1667 26C15.1667 31.983 20.0169 36.8333 26 36.8333Z" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26 2.16663V6.49996" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26 45.5V49.8333" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.14331 9.14331L12.22 12.22" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M39.78 39.78L42.8566 42.8567" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.16669 26H6.50002" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M45.5 26H49.8333" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.14331 42.8567L12.22 39.78" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M39.78 12.22L42.8566 9.14331" stroke="#FFCF26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
          <div className='aside__more'>
            <div className='d-flex align-items-center'>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 8L2 22" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 15H9" stroke="#072D4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Mobil muhbirga aylaning!</span>
            </div>
            <div className='aside__more-bottom d-flex align-items-center'>
              <p>Masofadan bizning muhbirga aylaning !</p>
              <a href="#">Batafsil</a>
            </div>
          </div>

          <div className='aside__more-read'>
            <div className='aside__read-top d-flex align-items-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.99951H6C5.46957 1.99951 4.96086 2.21023 4.58579 2.5853C4.21071 2.96037 4 3.46908 4 3.99951V19.9995C4 20.5299 4.21071 21.0387 4.58579 21.4137C4.96086 21.7888 5.46957 21.9995 6 21.9995H18C18.5304 21.9995 19.0391 21.7888 19.4142 21.4137C19.7893 21.0387 20 20.5299 20 19.9995V7.99951L14 1.99951Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 1.99951V7.99951H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 12.9995H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 16.9995H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 8.99951H9H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Eng ko‘p o‘qilgan</span>
            </div>
            {
              newsFour.map((item,i) => {
                return <NavLink to={`main/${item.id}`}>
                  <div className='aside__read-info' key={i}>
                <div className='d-flex align-items-center'>
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                  <path d="M9 2.49939H3C2.44772 2.49939 2 2.9471 2 3.49939V9.49939C2 10.0517 2.44772 10.4994 3 10.4994H9C9.55228 10.4994 10 10.0517 10 9.49939V3.49939C10 2.9471 9.55228 2.49939 9 2.49939Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 1.49939V3.49939" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 1.49939V3.49939" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 5.49939H10" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 7.49939H4V8.49939H5V7.49939Z" stroke="black" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                 </svg>
                 <div className='aside__read-time'><span>11:45</span>  |  <span>{item.created_date}</span></div>
                </div>
                 <p className='aside__read-text'>{item.title_uz}</p>
              </div>
                </NavLink>
              })
            }
          </div>

          <div className='aside__subscribe'>
            <div className='aside__subscribe-top d-flex align-items-center'>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Subscribe to Premium</span>
            </div>
            <div className='aside__subscribe-bottom d-flex align-items-center'>
              <div><span className='aside__subscribe-price'>$8</span><span>/m</span></div>
              <button>Upgrade</button>
            </div>
          </div>
      </div>
  )
}

export default Aside