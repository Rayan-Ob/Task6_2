import React from 'react'
import "./About.css"

function About() {
  return (
    <div>

<div className="container-fluid position-relative ro-pad-section my-4">
      <div className="ro-square position-absolute end-0 my-3"></div>
      <div className="container d-flex gap-5 justify-content-between flex-wrap">
        <div className="ro-width-p">
          <h3 className="ro-color-dark-blue text-capitalize my-5">about us</h3>
          <p className="ro-color-ligh-black my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi
            excepturi vitae voluptates, quod
            impedit facere rem eaque incidunt laborum sapiente doloremque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos rem amet impedit ab error! Accusamus aspernatur reprehenderit iste. Deserunt, nulla in quaerat eum quod ea totam vero minima dolorum iusto!</p>

          <p className="ro-color-ligh-black"><i className="fa-solid fa-check ro-color-dark-blue ro-mr"></i>  Lorem ipsum
            dolor sit amet.</p>
          <p className="ro-color-ligh-black"><i className="fa-solid fa-check ro-color-dark-blue ro-mr"></i>  Lorem ipsum
            dolor sit.</p>
          <p className="ro-color-ligh-black"><i className="fa-solid fa-check ro-color-dark-blue ro-mr"></i>  Lorem ipsum
            dolor.</p>
          <div className="d-flex justify-content-between mt-5">
            <div>
              <p className="fs-4 ro-color-dark-blue ro-font-times mb-1">203+</p>
              <p className="ro-co-silver text-capitalize mt-0">No student</p>
            </div>
           
            
          </div>
          <button className="btn btn-primary ro-bg-blue-btn fw-bold mt-3  px-3 ro-mr">admission</button>
          <button className="btn btn-primary ro-bg-white-btn text-uppercase mt-3 fw-bold px-3">learn more</button>

        </div>
      
      </div>
    </div>
    </div>
  )
}

export default About