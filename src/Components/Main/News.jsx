import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import '../../i18n';
import GET from '../../API/GET'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function News() {
  const {t,i18n} = useTranslation()
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const category = await GET.category();
      setData(category.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  // CARUSEL PART 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 2000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 2000, min: 824 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 824, min: 264 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 264, min: 0 },
      items: 1
    }
  };

  return (
    <div className='news'>
      <h2 className='news__title'>{t('title')}</h2>
        <Carousel className='news__list' responsive={responsive}>
        {
          data.map((item,index) => { 
            return <NavLink to={`/rukn/${item.id}`}><button className='news__btn' key={item.id}>{i18n.language === "uz" ? item.name_uz : i18n.language === "oz" ?  item.name_oz :  i18n.language === "ru" ?  item.name_ru : item.name_uz }</button></NavLink>
                })
        }
        </Carousel>

      <ul className='news__list-respond'>
        {
          data.map((item,index) => { 
            return <li className=''>
              <NavLink to={`/rukn/${item.id}`}><button className='news__btn' key={item.id}>{i18n.language === "uz" ? item.name_uz : i18n.language === "oz" ?  item.name_oz :  i18n.language === "ru" ?  item.name_ru : item.name_uz }</button></NavLink>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default News