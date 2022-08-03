import './App.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main.jsx'
import Aside from './Components/Aside/Aside.jsx'
// import PhotoNews from './Components/PhoteNews/PhotoNews';
import VideoNews from './Components/VideoNews/VideoNews';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Habarlar from './Components/Info/Habarlar';
import API from './API/API'
import Muxbir from './Components/Muxbir/Muxbir';
import AsideHeader from './Components/Aside/AsideHeader';

function App() {
  let [data, setData] = useState([])

  const useAuth = async () => {
    try {
      const response = await API.login();
      const category = await API.category();
      setData(category.data)
      localStorage.setItem('token', response.data.token)
    } catch (err) {
      console.error(err);
      return;
    }
  }
    // useEffect(() => {
    //   useAuth()
    // },[])
// console.log(data);


  return (
    <>
    <div key="over">
      <div className='container'>
        <div className='App'>
            <Sidebar />
            <Main/>
            <div className='over-top'>
              <Routes>
                <Route path='/' element={<AsideHeader />}/>  
              </Routes>
             <div className='over-aside'>
              <Routes>
                  <Route path='/' element={<Aside/>}/>  
              </Routes>
             </div>
            </div>
        </div>
          {/* <PhotoNews />
          <VideoNews />
          <DownloadApp /> */}
          
          <Routes>
            <Route path='/' element={<VideoNews />}/>
          </Routes>
          <Routes>
           <Route path='/' element={<DownloadApp />}/>  
          </Routes>

          <Routes>
           <Route path='main:id' element={<Habarlar />}/>
         </Routes>
      </div>
          <Footer />
    </div>
    
    </>
  );
}

export default App;
