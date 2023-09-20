import React from 'react'
import '../components/header.css'
import logo from '../images/logo4.jpg'
import right_logo from '../images/right-logo.jpg'
import {BiDownArrowAlt} from 'react-icons/bi';

const Header = () => {
  return (
    
    <>
    
    <div className="header">
         <div className="left-side">
            <img src={logo} alt="logo" />
            <div className="skew"></div>
         </div>
         
         <div className="right">
             <div className="content">
              <img src={right_logo} alt="" />
              <p>xyz Enterprises Pvt.Ltd</p>
             </div>
             <div className="drop-list"><p><BiDownArrowAlt/></p></div>
         </div>
     </div>
        </>
  )
}

export default Header