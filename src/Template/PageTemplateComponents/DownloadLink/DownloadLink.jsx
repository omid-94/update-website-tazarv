import React from 'react'
import './DownlaadLinks.css'
const DownloadLink = ({MainLink}) => {
  return (
    <div className='DownloadLink_Container'>
      <div className='DownloadLink_Title'>
        <a>
          {MainLink.name}
        </a>
      </div>
      <div className='DownloadLink_Btn'>
        <div>
          <a className='btn btn-primary' href={MainLink.link}>
            دانلود
          </a>
        </div>
      </div>
    </div>
  )
}

export default DownloadLink