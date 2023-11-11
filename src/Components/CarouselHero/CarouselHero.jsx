import React from 'react'
import Slider1 from "./images/phono-slider-1.jpg"
import Slider2 from "./images/phono-slider-2.jpg"
import Slider3 from "./images/phono-slider-3.jpg"
import "./CarouselHero.css"


function CarouselHero() {
  return (
    <div>
         <div id="carouselExampleCaptions" className="carousel slide ">

<div className="carousel-inner">
  <div className="carousel-item active ro-position ">
    <img src={Slider1} className="d-block w-100 img-fluid " alt="slide photo" />
    <div className="carousel-caption ro-right-cap">
      <h5 className="fs-1">ZANIA BLACK EDIT</h5>
      <p className="big-p">CURVY BEVEL DUAL AUDIO</p>
      <button className="ro-carousel-btn">SHOP NOW</button>
    </div>
  </div>
  <div className="carousel-item">
    <img src={Slider3} className="d-block w-100" alt="slide photo" />
    <div className="carousel-caption ro-right-cap">
      <h5 className="fs-1">ZANIA BLACK EDIT</h5>
      <p className="big-p">FULL SCREEN DISPLAY</p>
      <button className="ro-carousel-btn">SHOP NOW</button>
    </div>

  </div>
  <div className="carousel-item">
    <img src={Slider2} className="d-block w-100" alt="slide photo" />
    <div className="carousel-caption   ro-right-cap2">
      <h5 className="fs-1">ZANIA BLACK EDIT</h5>
      <p className="big-p">FULL SCREEN DISPLAY</p>
      <button className="ro-carousel-btn">SHOP NOW</button>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}

export default CarouselHero