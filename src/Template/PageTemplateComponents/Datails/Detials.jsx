import React from 'react'
import './Detials.css'

const Detials = ({Details}) => {
  return (
    <div className='Detials_Container'>
      <span>تغییرات نسخه {Details.version}</span>
      <ol>
        {Details.description.map((item , index) => {
          return (<li key={index}>
            {item}
          </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Detials