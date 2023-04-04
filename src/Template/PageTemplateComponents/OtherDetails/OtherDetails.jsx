import React, { useState } from 'react'
import { Details } from '..'
import { FaAngleDoubleDown , FaAngleDoubleUp } from 'react-icons/fa';

const OtherDetails = ({PrevDetails}) => {
  const[isOpen , setIsOpen] = useState(false)
  return (
    <div className='OtherDetails_Container'>
        <a className="btn btn-secondary" data-bs-toggle="collapse" style={{width : '100%'}}
            onClick={() => setIsOpen(prev => !prev)}
           href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          تغییرات قدیمی نرم افزار
          &nbsp; &nbsp; {isOpen ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />} 
        </a>
        <div className="collapse" id="collapseExample">
          <div className="card card-body"
                style={{backgroundColor : 'lightgrey' , borderRadius : '10px',marginTop : '10px'}}>
            {PrevDetails.map((item , index) => {
              return <Details key={index} Details={item}/>
            })}
          </div>
      </div>
    </div>
  )
}

export default OtherDetails