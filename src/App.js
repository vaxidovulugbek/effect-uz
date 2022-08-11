import './App.css';
import React, { createContext, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main.jsx'
import Aside from './Components/Aside/Aside.jsx'
import VideoNews from './Components/VideoNews/VideoNews';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Habarlar from './Components/Info/Habarlar';
import AsideHeader from './Components/Aside/AsideHeader';
import ResponsiveNavbar from './Components/Sidebar/ResponsiveNavbar';
import ResMenu from './Components/Sidebar/ResMenu';
import Loader from './Components/Loader/Loader';
export let context = createContext(0)

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [resmenu, setresmenu] = useState(true);
  let [value,setValue] = useState("")
  let [showSearch,setShowSearch] = useState(true)

setTimeout(() => {
  setIsLoading(false)
}, 2300);

  return (
    <>
    <context.Provider value={{setValue:setValue,value:value, showSearch:showSearch,setShowSearch:setShowSearch,setIsLoading:setIsLoading,isLoading:isLoading,setresmenu:setresmenu,resmenu:resmenu}} >
    {
      isLoading ? <Loader /> : <div>
        <div key="over">
          <div className='container'>
            <div className='App'>
                <Sidebar />
                <Main />
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
              <Routes>
                <Route path='/' element={<VideoNews />}/>
              </Routes>
              <Routes>
              <Route path='/' element={<DownloadApp />}/>  
              </Routes>

              <Routes>
              <Route path='main/:id' element={<Habarlar />}/>
            </Routes>
          </div>
        </div>
        <Footer />
        <ResponsiveNavbar />
        <ResMenu />
      </div>
    }
    </context.Provider>
    </>
  );
}

export default App;
