import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../../i18n';
import GET from '../../API/GET'
import POST from '../../API/POST'
function News() {
  let newsArrCategory = ["Barchasi","Siyosat","Jamiyat","Sport","Iqtisod","Ilm-Fan","Texnologiya","Turizm"]

  const {t} = useTranslation()
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

  return (
    <div className='news'>
      <h2 className='news__title'>{t('title')}</h2>
      <ul className='news__list'>
        {
          data.map((item,index) => {
            return <li className='news__item' key={index+100}>
            <button className='news__btn'>{item.name_uz}</button>
          </li>
          })
        }
      </ul>
    </div>
  )
}

export default News