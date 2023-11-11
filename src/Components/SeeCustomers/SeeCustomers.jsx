import React from 'react'
import "./SeeCustomers.css"
import TitleSection from '../TitleSection/TitleSection'
import mobileImg from "./images/bg-1.png"
import AccordionProps from './AccordionProps'

function SeeCustomers() {
    return (
        <div>


            <div className="container-fluid re-customer ">
                <div className='text-white py-5'>
                    < TitleSection title="SEE WHY CUSTOMERS LOVE THE OUR MOBILES" paragraph="DESIGNED TO PERFECTION" />
                </div>

                <div className=" ro-accordion container">
                    <div>
                        <img src={mobileImg} alt="mobile" className="img-fluid " />
                    </div>
                    <div className="">
                        <div className="accordion" id="myAccordion">

                            <AccordionProps
                                head="NEW GRADIENT COLOR FINISHES?"
                                body="Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui official." />

                            <AccordionProps
                                head="FOUR-SIDED CURVED CERAMIC BODY"
                                body="Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui official." />

                            <AccordionProps
                                head="4000MAH HIGH-CAPACITY BATTERY"
                                body="Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui official." />

                            <AccordionProps
                                head="FULLY HIDDEN CAMERA LENS"
                                body="Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui official." />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SeeCustomers