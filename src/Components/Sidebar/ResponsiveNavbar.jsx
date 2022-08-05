import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import GET from '../../API/GET'
import { useTranslation } from 'react-i18next';
function ResponsiveNavbar() {
  // const [resn, setn] = useState(["Madaniyat","Sport","Siyosat","Ilm-fan","Iqtisodiyot","Texnologiya","Siyosat","Ilm-fan"])
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
    <div className='respons-navbar'>
      <p className='respons-navbar__name'>{t("ruknlar")}</p>
      <ul className='respons-navbar__list'>
        {
          data.map((item,i) => {
            return <li className='respons-navbar__item'><a className='respons-navbar__link' href="#">{i18n.language === "uz" ? item.name_uz : i18n.language === "oz" ? item.name_oz : item.name_uz}</a></li>
          })
        }
      </ul>
    </div>
  )
}

export default ResponsiveNavbar