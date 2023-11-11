import React from 'react'
import Ic12 from"./images/ic12.png"
import Ic13 from "./images/ic13.png"
import Ic11 from "./images/ic11.png"
import TitleSection from '../TitleSection/TitleSection'
import EssentialProps from './EssentialProps'




function EssentialDifferent() {
  return (
    <div>
      <div className="essntial container  text-center py-5">
        <TitleSection title="WHAT MAKES THE ESSENTIAL DIFFERENT?" paragraph="EXPERIENCE HIGH PERFORMANCE AND SECURE"/>
      <div className="d-flex justify-content-between my-5 essntial-flex gap-5">
      <EssentialProps imag={Ic11} name="MOST POPULAR" title="8GB DDR5 RAM" text="Dictum varius duis at consectetur lorem donec massa sap faucibus." />
      <EssentialProps imag={Ic12} name="PRETTY" title="INTELLIGENT PROCESSING" text="Consequat ac habit amet asse felis donec et odio pellentesque diam." />
      <EssentialProps imag={Ic13} name="PERFECT CUT" title="DUAL CAMERA" text="Tristique senectus et netus et malesuada ant reiet fames" />

      </div>
    </div>
    </div>

  )
}

export default EssentialDifferent