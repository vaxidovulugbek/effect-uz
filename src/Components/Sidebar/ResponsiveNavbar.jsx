import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import GET from '../../API/GET'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { context } from '../../App';
function ResponsiveNavbar() {
  // PROVIDER
  let contexts = useContext(context)

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

  return (
    <div className={contexts.resmenu === true ? 'respons-navbar' : "respons-navbar show"}>
      <p className='respons-navbar__name'>{t("ruknlar")}</p>
      <ul className='respons-navbar__list'>
        {
          data.map((item,i) => {
            return <li className='respons-navbar__item' onClick={() => contexts.setresmenu(true)} ><NavLink className='respons-navbar__link' to={`rukn/${item.id}`}>{i18n.language === "uz" ? item.name_uz : i18n.language === "oz" ?  item.name_oz :  i18n.language === "ru" ?  item.name_ru : item.title_uz }</NavLink></li>
          })
        }
      </ul>
    </div>
  )
}

export default ResponsiveNavbar