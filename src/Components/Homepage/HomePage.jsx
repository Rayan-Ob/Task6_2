import React from 'react'
import CarouselHero from '../CarouselHero/CarouselHero'
import EssentialDifferent from '../EssentialDifferent/EssentialDifferent'
import PerfonmanePulse from '../PerformancePulse/PerfonmanePulse'
import Qualities from '../Qualities/Qualities'
import SeeCustomers from '../SeeCustomers/SeeCustomers'
import "./Home.css"
import ArrivalSlider from '../ArrivalSlider/ArrivalSlider'

function HomePage() {
  return (
    <div>

        <CarouselHero/>
        <EssentialDifferent/>
        <PerfonmanePulse/>
        <Qualities/>
       <ArrivalSlider/>        
        <SeeCustomers/>
         
         
    </div>
  )
}

export default HomePage