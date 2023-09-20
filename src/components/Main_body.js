// import React from 'react'
import '../components/mainbody.css'
import { BsArrowRight } from 'react-icons/bs';
import {AiOutlineUser } from 'react-icons/ai';
import {TiCloudStorageOutline } from 'react-icons/ti';
import {MdOutlineSupportAgent } from 'react-icons/md';
import {MdPlayArrow } from 'react-icons/md';
import {TiTick} from 'react-icons/ti';



const Main_body = () => {
  return (
    
    <>
    <div className="main-body">
       <div className="upper">
          <div className="headline">
            <h3><b>Choose a plan that's just right for you !</b></h3>
          </div>
          <div className="sidebutton">
            <p>monthly</p>
            <p>annually</p>
            <span>10%</span>
          </div>
            
        </div>
        <div className="cards">
             <div className="card">
                 <div className="details">
                    <h1>Basic</h1>
                    <p>$89.99/mo</p>
                    <h2>$9.99/mo</h2>
                      <button className='btn1'>get started <BsArrowRight/></button>
                      <hr />  
                  </div>
                  <div className="details-down">
                      <span>What you'll get:</span>
                      <p><AiOutlineUser/>Upto 25 user</p>
                      <p><TiCloudStorageOutline/>Upto 25gb storage</p>
                      <p><MdOutlineSupportAgent/>Email support</p>
                      <h5 className='feature1'>EXPLORE FEATURES <p><MdPlayArrow/></p></h5>
                  </div>
              </div>
             <div className="card">
             <div className="details">
                    <h1>Standard</h1>
                    <p>$189.99/mo</p>
                    <h2>$99.99/mo</h2>
                      <button className='btn2'>get started <BsArrowRight/></button>
                      <hr />  
                  </div>
                  <div className="details-down">
                      <span>What you'll get:</span>
                      <p><AiOutlineUser/>Upto 50 user</p>
                      <p><TiCloudStorageOutline/>Upto 60gb storage</p>
                      <p><MdOutlineSupportAgent/>Email+chat support</p>
                      <h5 className='feature2'> EXPLORE FEATURES<p><MdPlayArrow/></p></h5>
                  </div>
             </div>
             <div className="card">
             <div className="details">
                    <h1>Premium</h1>
                    <p>$389.99/mo</p>
                    <h2>$199.99/mo</h2>
                      <button className='btn3'>get started <BsArrowRight/></button>
                      <hr />  
                  </div>
                  <div className="details-down">
                      <span>What you'll get:</span>
                      <p><AiOutlineUser/>Upto 75 user</p>
                      <p><TiCloudStorageOutline/>Upto 100gb storage</p>
                      <p><MdOutlineSupportAgent/>Email+email+whatsapp support</p>
                      <h5 className='feature3'>EXPLORE FEATURES<p><MdPlayArrow/></p></h5>
                  </div>
             </div>
        </div>

        <div className="footer">
            <div className="cards-f">
                <div className="card-f">
                    <div className="details-f">
                        <p className='p1'>Free forever</p>
                        <h1>Free Starter</h1>
                        <p>The quikest and easiest way to try protocols with basic functionality</p>
                        <button className='btn4'>Get started</button>
                    </div>
                    <div className="benefit">
                         <span>What you'll get:</span>
                         <p><AiOutlineUser/>Upto 75 user</p>
                         <p><TiCloudStorageOutline/>Upto 100gb storage</p>
                         <p><MdOutlineSupportAgent/>Email support</p>
                         <p><TiTick/>Basic of doucuments,Task flow,voting,Accounting,Banking notes,Investor,Director team and Management Included</p>
                    </div>
                </div>
                
            </div>
            <div className="cards-f">
                <div className="card-f">
                    <div className="details-f">
                        <p className='p2'>Let's connect</p>
                        <h1>Enterprise plan</h1>
                        <p>Effortlessly customise and fine tune service as you needs shift,ensuring the perfect tools and success</p>
                        <button className='btn5'>contact us</button>
                    </div>
                    <div className="benefit1">
                         <span>What you'll get:</span>
                         <p><AiOutlineUser/>more than 75 user</p>
                        <p><TiTick/>customisation of all other features and benefit will be provided</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Main_body