import React from 'react'

function NavbarCollectionProps(props) {
  const{title,I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12 }=props
  return (
    <div>

      <h5 className="ro-hr">{title}</h5>

<ul className="list-group ro-nav-list pt-2">
  <li><a href="#"> {I1}</a></li>
  <li><a href="#"> {I2}</a></li>
  <li><a href="#"> {I3} </a></li>
  <li><a href="#">{I4} </a></li>
  <li><a href="#"> {I5} </a></li>
  <li><a href="#"> {I6} </a></li>
  <li><a href="#"> {I7} </a></li>
  <li><a href="#"> {I8} </a></li>
  <li><a href="#"> {I9}</a></li>
  <li><a href="#"> {I10}</a></li>
  <li><a href="#">{I11} </a></li>
  <li><a href="#"> {I12} </a></li>

</ul>
    </div>
  )
}

export default NavbarCollectionProps