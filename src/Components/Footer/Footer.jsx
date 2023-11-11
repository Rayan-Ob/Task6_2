import React from 'react'
import "./Footer.css"
import TitleSection from '../TitleSection/TitleSection'
import paypalImg from"./images/paypal.jfif"
import masterCard from"./images/img-master card.png"
import Visa from"./images/img-visa.png"
import discover from"./images/img-discover.png"
import amex from "./images/img-amex.png"

function Footer() {
  return (
    <div>
        <footer className=" text-center text-white py-3">
    <div className="container p-4 text-white">

      <p className='my-5'>SUBSCRIBE NOW</p>
      <TitleSection title="GET OUR UPDATES ALWAYS FAST" paragraph="YOUR PERSONAL DATA WILL ALWAYS BE SAFE"/>
     

      <div className="btn-email my-5">
        <input type="email" placeholder="Enter your email id" />
        <button><i className="fa-solid fa-angle-right"></i></button>
      </div>
      <ul className="ro-footer-ul">
        <li><a href="">SEARCH</a></li>
        <li>|</li>
        <li><a href="">HELP</a></li>
        <li>|</li>
        <li><a href="">INFORMATION</a></li>
        <li>|</li>
        <li><a href="">PRIVACY POLICY </a></li>
        <li>|</li>
        <li><a href="">SHIPPING DETAILS </a></li>
      </ul>
    </div>
  </footer>
  <div className="d-flex justify-content-between flex-wrap  container-fluid div-footer" >
    <div className="py-0">
      <p>
        © 2023 Copyright: Rayan Obeid <i className="fa-solid fa-heart" style={{color: "#ff0000"}}></i>
      </p>
    </div>
    <div className="py-0 d-flex gap-1 align-items-center ">
      <img src={Visa} alt="logo" className="ro-footer-img"/>
      <img src={amex} alt="logo" className="ro-footer-img"/>
      <img src={paypalImg} alt="logo" className="ro-footer-img"/>
      <img src={discover} alt="logo" className="ro-footer-img"/>
      <img src={masterCard} alt="logo" className="ro-footer-img"/>
    </div>

  </div>
    </div>
   
  )
}

export default Footer