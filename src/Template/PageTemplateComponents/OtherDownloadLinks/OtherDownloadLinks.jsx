import React, { useState } from 'react'
import DownloadLink from '../DownloadLink/DownloadLink'

const OtherDownloadLinks = ({OtherLinks}) => {
  const [allLinks , setAllLinks] = useState([...OtherLinks])
  const tabItemClick = (e, Id) => {
    let temp = [...allLinks]
    temp.map((mItem) => 
        mItem.isActive = mItem.Id == Id
    )
    setAllLinks([...temp]) 
} 
  return (
    <div style={{marginTop : '10px'}}>
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        {allLinks.map((item , index) => {
            return(
            <li key={index} className="nav-item" role="presentation">
              <a onClick={(e) => tabItemClick(e , item.Id)}
                className={"nav-link " + (item.isActive ? "active" : "")}
                id={"ex1-tab-" + index}
                data-mdb-toggle="tab"
                href={"#ex1-tabs-" + index}
                role="tab"
                aria-controls={"#ex1-tabs-" + index}
                aria-selected={item.isActive}
                > {item.name}
                </a>
            </li>
            )
        })}
      </ul>
      {allLinks.map((item , index) => { 
          return(
            <div className="tab-content" id="ex1-content" key={index}>
            <div key={index}
              className={"tab-pane fade " + (item.isActive ? "show active": "")}
              id={"ex1-tabs-" + index}
              role="tabpanel"
              aria-labelledby={"ex1-tab-" + index}
            >
              <DownloadLink MainLink={item}/>
          </div>
          </div>
          )
      })}
    </div>
  )
}

export default OtherDownloadLinks