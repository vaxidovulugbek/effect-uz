import React, { useState } from 'react'
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

function Main() {
  let [showSearch,setShowSearch] = useState(true)
  let [filtered , setFiltered] = useState([])
  let [value,setValue] = useState("")
  return (
    <>
      <div className='main'>
      <Header setShowSearch={setShowSearch} setValue={setValue}/>
      <Routes>
          <Route path='/' element={<NewsContent setShowSearch={setShowSearch} value={value} showSearch={showSearch}/>} />
          <Route path='yangiliklar-lentasi' element={<Yangiliklar />}/>
          <Route path='main/:id' element={<Info />}/>
          <Route path='main/:id' element={<Habarlar />}/>
          <Route path='audio-habarlar' element={<Audios />}/>
          <Route path='video-habarlar' element={<VideoHabarlar />}/>
          <Route path='main/muxbir/:id' element={<Muxbir />}/>

          {/* <PhotoNews />
          <VideoNews />
        <DownloadApp /> */}
        {/* <Route path='/' element={<News />}/> */}
      </Routes>
    </div>
    </>
  )
}

export default Main