import React from 'react'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/>Tomato App</p>
        <div className='app-download-plateforms'>
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
    </div>
  )
}
import './AppDownload.css'
import { assets } from '../../assets/assets'

export default AppDownload