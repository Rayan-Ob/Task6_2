import React from 'react'
import "./Navbar.css"
import NavbarCollectionProps from './NavbarCollectionProps';
import Logo from "./images/logo.png"
import photo from "./images/centerImageMobile.png"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  navbar-dark shadow container-fluid ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="logo" /> </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-content">
                        <div className="hamburger-toggle">
                            <div className="hamburger " >
                                <i className="fas fa-bars navbar-toggler text-black fs-3 ro-close"></i>

                            </div>


                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-content">

                        <div className="d-flex ms-auto">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ro-nav-item">
                                <li className="nav-item">
                                    <Link className="nav-link active ro-bg-li" aria-current="page" to="/">Home</Link>
                                </li>


                                <li className
                                ="nav-item dropdown dropdown-mega position-static">
                                    <a className
                                    ="nav-link dropdown-toggle active ro-bg-li" href="#" data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside">Collection</a>

                                    <div className
                                    ="dropdown-menu shadow">
                                        <div className
                                        ="mega-content px-4">
                                            <div className
                                            ="container-fluid">
                                                <div className
                                                ="row px-5">
                                                    <div className
                                                    ="col-12 col-sm-4 col-md-2 py-4">

                                                        <NavbarCollectionProps title="SSD CARD" I1="Affinity" I2="Affinity P40 Pro" I3="PO V40 ThinQ" I4="PO V40 ThinQ" I5="Nexian" I6="Nexian" I7="Force Cel" I8="Force Cel" I9="Tencho 8.1" I10="Hisense" I11="Hisense" I12="Tencho 8.1" />
                                                    </div>

                                                    <div className
                                                    ="col-12 col-sm-4 col-md-2 py-4">

                                                        <NavbarCollectionProps title="POWER BANKS" I1="Affinity" I2="Affinity P40 Pro" I3="PO V40 ThinQ" I4="PO V40 ThinQ" I5="Nexian" I6="Nexian" I7="Force Cel" I8="Force Cel" I9="Tencho 8.1" I10="Hisense" I11="Hisense" I12="Tencho 8.1" />
                                                    </div>



                                                    <div className
                                                    ="col-12 col-sm-4 col-md-2 py-4">
                                                        <NavbarCollectionProps title="EARPHONE" I1="Affinity" I2="Affinity P40 Pro" I3="PO V40 ThinQ" I4="PO V40 ThinQ" I5="Nexian" I6="Nexian" I7="Force Cel" I8="Force Cel" I9="Tencho 8.1" I10="Hisense" I11="Hisense" I12="Tencho 8.1" />


                                                    </div>

                                                    <div className="col-12 col-sm-4 col-md-2 py-4">
                                                        <NavbarCollectionProps title="Android" I1="Affinity" I2="Affinity P40 Pro" I3="PO V40 ThinQ" I4="PO V40 ThinQ" I5="Nexian" I6="Nexian" I7="Force Cel" I8="Force Cel" I9="Tencho 8.1" I10="Hisense" I11="Hisense" I12="Tencho 8.1" />


                                                    </div>
                                                    <div className="col-12 col-sm-4 col-md-4 py-4">

                                                        <div className="card border-0">
                                                            <img src={photo} className="img-fluid" alt="image" />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item ">
                                    <Link className="nav-link active ro-bg-li" to="/courses">Courses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active ro-bg-li" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active ro-bg-li" to="/">Accessories</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active ro-bg-li" to="/">Memory & Stage</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active ro-bg-li" to="/" data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside ">Pages</Link>
                                    <ul className="dropdown-menu shadow">
                                        <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link className="dropdown-item" to="/courses">Courses</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="blog.html">Feq's</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item nav-link ro-bg-li">
                                    <a href=""><i className="fa-solid fa-user"></i></a>
                                </li>
                                <li className="nav-item nav-link ro-bg-li">
                                    <a href=""> <i className="fa-solid fa-cart-shopping "></i></a>
                                </li>

                                <li className="nav-item nav-link ro-bg-li">
                                    <a href=""> <i className="fas fa-search "></i></a>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar