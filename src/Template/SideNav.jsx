import React, { useState } from 'react'
import './SideNav.css'
import logo from '../Resources/Tazarv.png'
import data from './SideNavData'

const SideNav = () => {
   const [menuItems, setMenuItems] = useState([...data])
   const menuItemClick = (item) => { 
    console.log("menuItemClick" ,"Step 01")
    let temp = [...menuItems]
    console.log("menuItemClick" ,"Step 02")
    temp.map((mItem) => 
        mItem.IsActive = item.ID == mItem.ID
    )
    console.log("menuItemClick" ,"Step 04")
    setMenuItems({...temp}) 
   } 
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '250px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <img src={logo} className="logo"/>
    </a>
    <hr/>
    <div className='itemContainer'>
    <ul className="nav nav-pills flex-column mb-auto">
        {console.log("menuItems" , menuItems)}
        {console.log("data" , data)}
    {menuItems && menuItems.map((item) => {
        return (
            <li key={item.ID} className="nav-item">
            <a href={item.URL} onClick={(e) => menuItemClick(item)}
                className={`nav-link ${item.IsActive ? "active" : "text-white"}`} aria-current="page">
                {item.Title}
            </a>
          </li>
        )
    })}
    </ul>
    </div>
    <hr/>
    <div className='version'>
        وب سایت به روز شده در 1402/01/15
    </div>
  </div>
  )
}

export default SideNav