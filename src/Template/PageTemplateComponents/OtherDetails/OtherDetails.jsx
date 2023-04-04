import React from 'react'
import { Details } from '..'

const OtherDetails = ({PrevDetails}) => {
  return (
    <div>
      {PrevDetails.map((item , index) => {
        return <Details key={index} Details={item}/>
      })}
    </div>
  )
}

export default OtherDetails