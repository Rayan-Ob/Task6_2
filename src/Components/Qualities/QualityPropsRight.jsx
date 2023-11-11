import React from 'react'

function QualityPropsRight(props) {
    const{image,title,text}=props
    return (
        <div>
            <div class="ro-box">
                <img src={image} alt="Ic" />

                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default QualityPropsRight