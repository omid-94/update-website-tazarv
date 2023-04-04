import React from 'react'
import './Notes.css'
const Notes = ({Notes}) => {
  return (
    <div className='Container'>
      <span>نکات</span>
      <ol>
        {Notes.map((item , index) => {
          return (<li key={index}>
            {item}
          </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Notes