import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Info from '../Info/Info';
import Yangiliklar from '../Yangiliklar/Yangiliklar';
import Header from './Header';
import './Main.css'
import NewsContent from './NewsContent';
import Audios from '../../Components/Audios/Audios';
import Muxbir from '../Muxbir/Muxbir';
import VideoHabarlar from '../VideoHabarlar/VideoHabarlar';
import GET from '../../API/GET'
import RuknLinks from '../RuknLinks/RuknLinks';
import { context } from '../../App';
function Main() {
  // PROVIDER
  let contexts = useContext(context)

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
    return el.title_uz.toLocaleLowerCase().includes(contexts.value.toLocaleLowerCase())
  })
  return (
    <>
    <div className='main'>
     <div>
     <Header />
      <Routes>
          <Route path='/' element={<NewsContent filtered={filtered} />} />
          <Route path='yangiliklar-lentasi' element={<Yangiliklar filtered={filtered} />}/>
          <Route path='/rukn/:id' element={<RuknLinks filtered={filtered} />}/>
          <Route path='main/:id' element={<Info filtered={filtered} />}/>
          <Route path='audio-habarlar' element={<Audios filtered={filtered} />}/>
          <Route path='video-habarlar' element={<VideoHabarlar filtered={filtered} />}/>
          <Route path='main/muxbir/:id' element={<Muxbir filtered={filtered} />}/>
      </Routes>
     </div>
    </div>
    </>
  )
}

export default Main