import React from 'react'

function EssentialProps(props) {
  const {name,title,text,imag}=props
  return (
    <div>
        <div>
          <img src={imag} alt="Ic" />
          <p>{name}</p>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>

    </div>
  )
}

export default EssentialProps