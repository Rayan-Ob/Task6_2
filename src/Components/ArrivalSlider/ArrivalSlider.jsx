import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios'
import TitleSection from '../TitleSection/TitleSection';
import CardArrival from './CardArrival';
import "./ArrivalSlider.css"


function ArrivalSlider() {
    const [data, SetData] = useState([]);

    const displayData = async () => {
        try {
          const result = await axios.get(
            "https://dummyjson.com/products/category/smartphones"
          );
          SetData(result.data.products);

        } catch (error) {
          console.error("Error fetch:", error);
        }
      };
      useEffect(() => {
        displayData()
      }, []);

      const result = {
        desktop: {
          breakpoint: { max: 3000, min: 1044 },
          items: 3,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1044, min: 668 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 668, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };


  return (
    <div className='py-5 my-5'>
        <TitleSection title="NEW ARRIVALS"   />
        <div className='slide-container'>
        <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={result}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.map((product) => (
          <div key={product.id}>
            <CardArrival Image={product.images[0]} name={product.title} rating={Math.ceil(Number((product.rating) * 20))} price={product.price}/>
          </div>
        ))}
      </Carousel>
      </div>




    </div>
  )
}

export default ArrivalSlider