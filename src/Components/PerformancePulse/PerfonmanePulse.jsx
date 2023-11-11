import React from 'react'
import Ic7 from "./images/ic7.png";
import Ic8 from "./images/ic8.png";
import Ic9 from "./images/ic9.png";
import Ic10 from "./images/ic10.png";
import mainImg from "./images/pulse.png"
import TitleSection from '../TitleSection/TitleSection';
import PulseProps from './PulseProps';
import "./PerfonmanePulse.css"


function PerfonmanePulse() {
    return (
        <div>


            <div className="center container text-center py-5 ro-height">

                <TitleSection title="POSSIBILITIES. PERFORMANCE. POWER" paragraph='FASTER PROCESSING WITH LESS POWER' />


                <div className="ro-position container">
                    {/* main image */}
                    <img src={mainImg} alt="mobile" className="img-fluid" />

                    {/* pulses and pulses information */}
                    <div className=" ro-mobile-point img-fluid">

                        <PulseProps classMain="pulse-1" hrDiv="h-hr h-hr-2" marginDiv="ro-margin-top ro-margin-top-2" imag={Ic7} title="SCORPION PROCESSOR" text="Tristique senectus et netus et malesuada fames ac turpis." />
                        <PulseProps classMain="pulse-2" hrDiv="h-hr " marginDiv="ro-margin-top" imag={Ic8} title="DUAL SIM CARDS" text="Donec ultrices tincidunt arcu non sodales neque sodales ut." />
                        <PulseProps classMain="pulse-3" hrDiv="h-hr" marginDiv="ro-margin-top" imag={Ic9} title="48 MP CAMERA" text="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed." />
                        <PulseProps classMain="pulse-4" hrDiv="h-hr h-hr-2" marginDiv="ro-margin-top ro-margin-top-2" imag={Ic10} title="48 HRS BACKUP" text="Tristique senectus et netus et malesuada fames ac turpis." />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default PerfonmanePulse