import React from 'react'

function QualityPropsLeft(props) {
    const{title,image,text}=props
    return (
        <div>
            <div className="ro-box">
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <img src={image} alt="Ic" />
            </div>
        </div>
    )
}

export default QualityPropsLeft