// import React from 'react'
import '../components/sidebar.css'
import profile from '../images/profile.avif'
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiDashboardFill } from 'react-icons/ri';
import { GiTreeBranch } from 'react-icons/gi';
import {BsFillBagPlusFill} from 'react-icons/bs';
import {FaQuestionCircle} from 'react-icons/fa';
import {BiSupport} from 'react-icons/bi';
import {AiOutlineLogout} from 'react-icons/ai';


const Sidebar = () => {
  return (
      <>
      <div className="side-bar">
         <div className="profile">
           <img src={profile} alt="profile-pic" />
            <div className="profile-name">
               <h3>sam ansari</h3>
              <p><BiRightArrowAlt/></p>
            </div>
            <p className='email'>samimansari02@gmail.com</p>
         </div>
         <div className="menu">
             <ul>
                <div className="list"><li><p><RiDashboardFill/></p>Dashbord</li></div>
                <div className="list"><li><p><GiTreeBranch/></p>Perks</li></div>
                <div className="list"><li><p><BsFillBagPlusFill/></p>Addons</li></div>
                <div className="list"><li><p><FaQuestionCircle/></p>FAQ</li></div>
                <div className="list"><li><p><BiSupport/></p>Support</li></div>
             </ul>
         </div>
             <div className="logout">Logout<p><AiOutlineLogout/></p></div>
      </div>
      </>
  )
}

export default Sidebar