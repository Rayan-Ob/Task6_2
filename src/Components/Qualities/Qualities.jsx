import React from 'react'
import TitleSection from '../TitleSection/TitleSection'
import Ic1 from "./images/ic1.png";
import Ic3 from "./images/ic3.png";
import Ic4 from "./images/ic4.png";
import Ic5 from "./images/ic5.png";
import Ic6 from "./images/ic6.png";
import mobileImg from "./images/centerImageMobile.png";
import QualityPropsLeft from './QualityPropsLeft';
import "./Qualities.css"
import QualityPropsRight from './QualityPropsRight';

function Qualities() {
    return (
        <div>
            <div className="container py-5">

                <TitleSection title="INNOVATIVE QUALITIES & FEATURES" paragraph='SHOW YOURS TO THE WORLD' />



                <div className="container ro-grid2 my-5 py-3">

                    {/* left section */}
                    <div className="first-child container">

                        <QualityPropsLeft title="INTELLIGENT PROCESSOR" text="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri" image={Ic5} />
                        <QualityPropsLeft title="HD SURROUND AUDIO" text="Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am." image={Ic6} />
                        <QualityPropsLeft title="STYLISH BEVEL EDGES" text="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid" image={Ic3} />
                    </div>

                    {/* mobile photo */}
                    <div className="second-child container">
                        <img src={mobileImg} alt="mobile photo"
                            className="img-fluid" />
                    </div>

                    {/* right section */}
                    <div className="third-child container">

                        <QualityPropsRight title="4.0 WIFI SPECS" text="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri" image={Ic1} />
                        <QualityPropsRight title="MULIT TASKING & THREADING" text="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri" image={Ic4} />
                        <QualityPropsRight title="CLOUD STORAGE" text="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri" image={Ic5} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Qualities