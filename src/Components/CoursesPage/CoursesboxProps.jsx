import React from 'react'

function CoursesboxProps(props) {
    const{icon,name,number}=props
  return (
    <div>

<div className="box d-flex my-3">
          <div className="ro-icon mx-3">
            <i className={icon}></i>
          </div>
          <div>
            <h5 className="mt-3 mb-1 text-capitalize fs-6 ro-color-ligh-black">{name}</h5>
            <p className="ro-co-silver">{number}</p>
          </div>
        </div>
    </div>
  )
}

export default CoursesboxProps