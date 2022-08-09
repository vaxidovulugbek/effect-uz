import React, { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import Habarlar from '../Info/Habarlar';
import Info from '../Info/Info';
import Yangiliklar from '../Yangiliklar/Yangiliklar';
import Header from './Header';
import './Main.css'
import News from './News';
import NewsContent from './NewsContent';
import Audios from '../../Components/Audios/Audios';
import Muxbir from '../Muxbir/Muxbir';
import Aside from '../Aside/Aside';
import VideoHabarlar from '../VideoHabarlar/VideoHabarlar';
import Footer from '../Footer/Footer';
import GET from '../../API/GET'
function Main({value,setValue,showSearch,setShowSearch,isLoading,setIsLoading,resmenu,setresmenu}) {
  const [newsRest, setNewsRest] = useState([]);

  const fetchData = async () => {
    try {
      const newsRest = await GET.news()      
      setNewsRest(newsRest.data.items)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  
// SEARCH PART
  let filtered = newsRest.filter(el => { 
    return el.title_uz.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  })
  return (
    <>
    <div className='main'>
     <div>
     <Header setShowSearch={setShowSearch} setValue={setValue} resmenu={resmenu} setresmenu={setresmenu} />
      <Routes>
          <Route path='/' element={<NewsContent setShowSearch={setShowSearch} value={value} showSearch={showSearch} filtered={filtered} />} />
          <Route path='yangiliklar-lentasi' element={<Yangiliklar filtered={filtered} showSearch={showSearch} />}/>
          <Route path='main/:id' element={<Info filtered={filtered} showSearch={showSearch} setIsLoading={setIsLoading} isLoading={isLoading} />}/>
          <Route path='audio-habarlar' element={<Audios filtered={filtered} showSearch={showSearch} />}/>
          <Route path='video-habarlar' element={<VideoHabarlar filtered={filtered} showSearch={showSearch} />}/>
          <Route path='main/muxbir/:id' element={<Muxbir filtered={filtered} showSearch={showSearch} />}/>
      </Routes>
     </div>
    </div>
    </>
  )
}

export default Main