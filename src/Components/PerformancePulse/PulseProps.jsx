import React from 'react'

function PulseProps(proprs) {
    const{ classMain,hrDiv,marginDiv, imag,title,text }=proprs
  return (
    <div>


<div className={classMain}>
            <div className={hrDiv}></div>
            <div className={marginDiv}>
              <img src={imag} alt="ic "/>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>

          </div>
    </div>
  )
}

export default PulseProps