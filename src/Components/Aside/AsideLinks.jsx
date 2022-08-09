import React, { useEffect, useState } from 'react'
import { FaFacebookF ,FaTwitter,FaTelegramPlane} from 'react-icons/fa';
import { BsInstagram,BsYoutube } from 'react-icons/bs';
import GET from '../../API/GET'
import POST from '../../API/POST'
function AsideLinks() {
  const [data, setData] = useState([]);

  const params = {
    count: 10
  }

  const fetchData = async () => {
    try {
      const newsRest = await GET.config()
  
      setData(newsRest.data)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data.twitter);
  // ${typeof(data !== 'undifined' ? data.twitter / "/")}
  return (
    <div className='aside__boxes d-flex align-items-center'>
      <div className='aside__box facebook'><a className='aside-messangers' href={`https://www.facebook.com/sharer.php?u=${typeof(data) !== 'undefined' ? data.facebook : "/"}`} target="_blank"><FaFacebookF className='facebook'/></a></div>
      <div className='aside__box twitter'><a className='aside-messangers' href={`https://twitter.com/${ typeof(data) !== "undifined" ? data.twitter : "/"}`} target="_blank"><FaTwitter className='twitter' /></a></div>
      <div className='aside__box instagram'><a className='aside-messangers' href={`https://instagram.com/${ typeof(data) !== "undifined" ? data.instagram : "/"}`} target="_blank"><BsInstagram className='instagram' /></a></div>
      <div className='aside__box youtube'><a className='aside-messangers' href="#" target="_blank"><BsYoutube className='youtube ' /></a></div>
      <div className='aside__box telegram'><a className='aside-messangers' href={`https://t.me/${ typeof(data) !== "undifined" ? data.telegram : "/"}`} target="_blank"><FaTelegramPlane className='telegram' /></a></div>
    </div>
  )
}

export default AsideLinks