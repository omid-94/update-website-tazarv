import React, { useState } from 'react'
import { Details } from '..'
/*
"name" : "aaa",
"version" : "1.0.2",
"date" : "1402/01/15",
"link" : "aaaaaaaaaaaaaaaaaaa",
"isActive" : true
*/
const OtherDownloadLinks = ({OtherLinks}) => {
  const [allLinks , setAllLinks] = useState([...OtherLinks])
  const tabItemClick = (e, Id) => {
    // e.preventDefault();
    
    console.log("tabItemClick-Id" , Id)
    let temp = [...allLinks]
    temp.map((mItem) => 
        mItem.isActive = mItem.Id == Id
    )
    console.log("tabItemClick-temp" , temp)
    setAllLinks([...temp]) 
} 
  return (
    <div>
      <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
        {allLinks.map((item , index) => {
            return(
            <li key={index} className="nav-item" role="presentation">
              <a onClick={(e) => tabItemClick(e , item.Id)}
                className="nav-link "
                id={"ex1-tab-" + index}
                data-mdb-toggle="tab"
                href={"#ex1-tabs-" + index}
                role="tab"
                aria-controls={"#ex1-tabs-" + index}
                aria-selected="true"
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
              <h1>{item.name}</h1>
              {/* <Details /> */}
          </div>
          </div>
          )
      })}
        {/* <div
          className="tab-pane fade "
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          Tab 1 content
        </div>
        <div className="tab-pane fade " id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
          Tab 2 content
        </div>
        <div className="tab-pane fade show active" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
          Tab 3 content
        </div> */}
    </div>
  )
}

export default OtherDownloadLinks