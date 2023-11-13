import React from 'react'


function CardArrival(props) {
    const { Image, name, price, rating } = props
    return (
        <div>



            <div className="card cardArrival align-items-center">
                {/* image in card */}
                <img src={Image} alt="phone " className=" card-img-top ro-swiper-img img-fluid" />

                    {/* card body */}
                <div className="card-body ro-card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Rating : {rating} %</p>
                    <p class="text-center">Price : ${price}</p>
                </div>

            </div>
        </div>

    )
}

export default CardArrival