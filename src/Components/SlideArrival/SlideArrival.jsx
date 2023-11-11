import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import "./SlideArrival.css";

const SlideArrival = () => {
    const data=0;
    const result = fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
     return ((result.products));
  });
  data= ((result.products).slice(1,7))

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <h2>Carousel Component</h2>
      <Slider {...settings}>
      {data.map((item) => (
            <div key={item.id}>
              <div className="img-body">
                <img src={item.src} alt={item.alt} />
              </div>
              <div> 
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SlideArrival;