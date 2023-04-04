import React from 'react'
import './DownlaadLinks.css'

const DownloadLink = ({MainLink}) => {
  return (
    <div className='DownloadLink_Container'>
      <div>
        <span>{MainLink.name}</span>
      </div>
      <div>
        <span>{MainLink.version}</span>
      </div>
      <div>
        <span>{MainLink.date}</span>
      </div>
      <div>
      <a className='btn btn-secondary' 
        target='_blank'
          href={MainLink.link} style={{width : '80%'}}>
            دانلود
          </a>
      </div>
    </div>
  )
}

export default DownloadLink