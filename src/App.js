import './App.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main.jsx'
import Aside from './Components/Aside/Aside.jsx'
import VideoNews from './Components/VideoNews/VideoNews';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Habarlar from './Components/Info/Habarlar';
import API from './API/API'
import Muxbir from './Components/Muxbir/Muxbir';
import AsideHeader from './Components/Aside/AsideHeader';
import ResponsiveNavbar from './Components/Sidebar/ResponsiveNavbar';
import ResMenu from './Components/Sidebar/ResMenu';
import Loader from './Components/Loader/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [resmenu, setresmenu] = useState(true);
  // {isLoading ? <LoadingSpinner /> : renderUser}

  let [data, setData] = useState([])
  let [value,setValue] = useState("")
  let [showSearch,setShowSearch] = useState(true)

  // const useAuth = async () => {
  //   try {
  //     const response = await API.login();
  //     const category = await API.category();
  //     setData(category.data)
  //     localStorage.setItem('token', response.data.token)
  //   } catch (err) {
  //     console.error(err);
  //     return;
  //   }
  // }
    // useEffect(() => {
    //   useAuth()
    // },[])
// console.log(data);

// setIsLoading(false)
// console.log(isLoading);

setTimeout(() => {
  setIsLoading(false)
}, 2300);

  return (
    <>
    {
      isLoading ? <Loader /> : <div>
        <div key="over">
          <div className='container'>
            <div className='App'>
                <Sidebar />
                <Main setValue={setValue} value={value} showSearch={showSearch} setShowSearch={setShowSearch} setIsLoading={setIsLoading} isLoading={isLoading} setresmenu={setresmenu} resmenu={resmenu} />
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
              {/* <Route path='resmenu' element={<ResponsiveNavbar setresmenu={setresmenu} resmenu={resmenu} />}/> */}
            </Routes>
          </div>
        </div>
        <Footer />
        <ResponsiveNavbar setresmenu={setresmenu} resmenu={resmenu} />
        <ResMenu setresmenu={setresmenu} resmenu={resmenu}/>
      </div>
    }
    
    </>
  );
}

export default App;
