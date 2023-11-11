// import React from 'react'
// import "./Arrival.css"
// import  {Swiper} from 'swiper';
// import 'swiper/css';
// import SwiperSlide from 'swiper'
// import  {Navigation,Pagination}  from 'swiper/modules';
// // import 'swiper/swiper.scss'; // core Swiper
// // import 'swiper/modules/navigation.scss'; // Navigation module
// // import 'swiper/modules/pagination.scss'; // 
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// // import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';






// function Arrival() {

//     const result = fetch("https://dummyjson.com/products")
//   .then(function (result) {
//     return result.json();
//   })
//   .then(function (result) {
//     displayData((result.products));
//   });

// function displayData(arr) {
//   let num;
//   for (let i = 1; i < 7; i++) {
//     let cardsArea = document.querySelector(".cards-area");
    
//     num = `<div class="card swiper-slide">
//       <img src= ${arr[i].images[0]} class="card-img-top ro-swiper-img img-fluid" alt="..."/>
//       <div class="card-body ro-card-body text-center">
//         <h5 class="card-title  ">${arr[i].title}</h5>
//         <p class="card-text">Rating : ${Math.ceil(Number((arr[i].rating) * 20))} %</p>
//         <p class="text-center">Price : $ ${arr[i].price}</p>
//       </div>
//     </div>`
//     cardsArea.innerHTML += num;
    

//     console.log(arr[i].images[0]);
//   }
// }

// //to cards slider
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,

//     Pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     a11y: {
//         prevSlideMessage: 'Previous slide',
//         nextSlideMessage: 'Next slide',
//       },
//    navigationavigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//         delay: 1000,
//       },
//     breakpoints:{
//       0:{
//         slidesPerView: 1,
  
//       },
//       700:{
//         slidesPerView: 2,
  
//       },
//       925:{
//         slidesPerView: 3,
  
//       }
  
  
//     }
//   });
//   return (
//     <div>
//          <div class="py-5 container">
//       <div class="mb-2 text-center py-5">
//         <h2>NEW ARRIVALS</h2>
//         <p>FIND THE PERFECT PHONE FOR YOU</p>
//       </div>

//       var swiper = new Swiper(".slide-content", {
//     slidesPerView= 3,
//     spaceBetween= 30,
//     freeMode= true,

//     Pagination={
//       el= ".swiper-pagination",
//       clickable= true,
//     },
//     a11y={
//         prevSlideMessage= 'Previous slide',
//         nextSlideMessage= 'Next slide',
//       },
//    navigationavigation= {
//       nextEl= ".swiper-button-next",
//       prevEl= ".swiper-button-prev",
//     },
//     autoplay= {
//         delay= 1000,
//     },
//     breakpoints={
//       0:{
//         slidesPerView: 1,
  
//       },
//       700:{
//         slidesPerView: 2,
  
//       },
//       925={
//         slidesPerView: 3,
  
//       }
  
  
//     }
//   });

     
// <div class="slide-container swiper">
//   <div class="slide-content">
//     <div class="card-wrapper swiper-wrapper cards-area">


//     </div>
//   </div>
//   <div class="swiper-button-next"></div>
//   <div class="swiper-button-prev"></div>

// </div>
//     </div>
//     </div>
//   )

  



// }

// export default Arrival