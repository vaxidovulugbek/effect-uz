import React from 'react'
import './DownloadApp.css'
import appstore from '../../Assets/imgs/appstore.svg'
import googleplay from '../../Assets/imgs/googleplay.svg'
import { useTranslation } from 'react-i18next'
function DownloadApp() {
  const {t} = useTranslation()
  return (
    <div className='downloadapp'>
      <div className='downloadapp__content'>
        <p className='downloadapp__info-text'>{t("habardor-boling")}</p>
        <p className='downloadapp__text'><span className='downloadapp__subtext'>Effect.uz</span> {t("yuklab-oling")}</p>
        <div className='d-flex align-items-center'>
          <a className='downloadapp__link' href="#">
            <img src={appstore} alt="appstore" />
          </a>
        <a href="#">
          <img src={googleplay} alt="googleplay" />
        </a>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp