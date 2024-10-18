import { useContext, useState } from "react";
import "./landing.scss";

import { Link, useNavigate ,json} from "react-router-dom";
   
function Landing(){



  return(
    
    <div className="body">
    

    <div >
   
        <header>
            <div className="container">
                <div className="header d-lg-flex justify-content-between align-items-center py-lg-3 px-lg-3">
                    <div id="logo">
                        <h1><a href="index.html"><span className="fa fa-recycle mr-2"></span>Repay</a></h1>
                    </div>
                    <div className="w3pvt-bg">
                        <div className="nav_w3pvt">
                            <nav>
                                <label htmlFor="drop" className="toggle">Menu</label>
                                <input type="checkbox" id="drop" />
                                <ul className="menu">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="blog.html">Blogs</a></li>
                                    <li>
                                        <label htmlFor="drop-2" className="toggle toogle-2">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span>
                                        </label>
                                        <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                        <input type="checkbox" id="drop-2" />
                                        <ul>

                                            <li><a href="#process" className="drop-text">Process</a></li>

                                            <li><a href="#stats" className="drop-text">Statistics</a></li>
                                            <li><a href="#services" className="drop-text">Services</a></li>
                                            <li><a href="about.html" className="drop-text">Our Team</a></li>
                                            <li><a href="#test" className="drop-text">Clients</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="justify-content-center">
                            <div className="apply-w3-pvt ml-lg-3">
                                <a className="btn read" href="contact.html" role="button">Apply Now</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
     
        <section className="banner_w3pvt">
            <div className="csslider infinity" id="slider1">
                <input type="radio" name="slides" checked="checked" id="slides_1" />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />

                <ul>
                    <li>
                        <div className="banner-top">
                            <div className="overlay">
                                <div className="container">
                                    <div className="banner-info">
                                        <div className="banner-w3ls-inner">
                                            <h4>Invest in your Future</h4>
                                            <h3>Personal Loans</h3>
                                            <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>

                                            <div className="test-info text-left mt-lg-5 mt-4">
                                                <a href="single.html" className="btn mr-2">Read More</a>
                                                <a href="contact.html" className="btn">Contact Us</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="banner-top1">
                            <div className="overlay sec">
                                <div className="container">
                                    <div className="banner-info">
                                        <div className="banner-w3ls-inner">
                                            <h4>We Support Your Dream</h4>
                                            <h3>Home Loans</h3>
                                            <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                                            <div className="test-info text-left mt-lg-5 mt-4">
                                                <a href="single.html" className="btn mr-2">Read More</a>
                                                <a href="contact.html" className="btn">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="banner-top2">
                            <div className="overlay">
                                <div className="container">
                                    <div className="banner-info">
                                        <div className="banner-w3ls-inner">
                                            <h4>Invest in your Future</h4>
                                            <h3>Business Loans</h3>
                                            <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                                            <div className="test-info text-left mt-lg-5 mt-4">
                                                <a href="single.html" className="btn mr-2">Read More</a>
                                                <a href="contact.html" className="btn">Contact Us</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="arrows">
                    <label htmlFor="slides_1"></label>
                    <label htmlFor="slides_2"></label>
                    <label htmlFor="slides_3"></label>

                </div>
            </div>
        </section>
    </div>


    <section className="banner-bottom py-5" id="process">
        <div className="container py-md-5">
            <div className="row bottom-grids text-center">
                <div className="col-md-4 bottom-grid">
                    <span className="fa clr1 fa-star-half-o"></span>
                    <p className="number">1</p>
                    <h4>Check Your Rate</h4>
                    <p className="mt-4">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint.
                        Suspendisse venenatis</p>
                </div>
                <div className="col-md-4 mt-md-0 mt-5 bottom-grid">
                    <span className="fa clr2 fa fa-money"></span>
                    <p className="number">2</p>
                    <h4>Choose Your Loan</h4>
                    <p className="mt-4">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint.
                        Suspendisse venenatis</p>
                </div>
                <div className="col-md-4 mt-md-0 mt-5 bottom-grid">
                    <span className="fa clr3 fa-credit-card"></span>
                    <p className="number">3</p>
                    <h4>Get Your Funds</h4>
                    <p className="mt-4">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint.
                        Suspendisse venenatis</p>
                </div>
                <span className="border-line"></span>
            </div>
        </div>
    </section>

    <section className="about py-md-5 py-5" id="loans">
        <div className="container py-md-5">
            <div className="feature-grids row mt-3">
                <div className="col-lg-6 ab-content-img">
                    <img src="./ab.jpg" alt="" className="img-fluid image1"/>
                </div>
                <div className="col-lg-6 ab-content-inf pl-lg-5">
                    <h3 className="title-w3ls my-3">Small Business Loans
                        For a Daily Expenses</h3>
                    <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint. Suspendisse venenatis</p>
                    <ul className="tic-info list-unstyled mt-5">
                        <li>

                            <span className="fa fa-check-square-o mr-2"></span> Personal Loan @ 10.75%
                        </li>
                        <li>

                            <span className="fa fa-check-square-o mr-2"></span> Repayable in 12 to 60 EMIs

                        </li>
                        <li>

                            <span className="fa fa-check-square-o mr-2"></span>Business Loan
                            @ 11.65%

                        </li>
                        <li>
                            <span className="fa fa-check-square-o mr-2"></span> Home Loan
                            @ 7.75%
                        </li>
                        <li>

                            <span className="fa fa-check-square-o mr-2"></span> Credit & Debit Card
                            @ 5.15%

                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
   
    <section className="products py-5" id="stats">
        <div className="container py-lg-5 py-3">
            <h3 className="title-w3ls mb-sm-5 mb-4 text-center"> Previous Record</h3>
            <div className="row products_grids text-center mt-5">
                <div className="col-lg-3 col-6 grid4">
                    <div className="prodct1">
                        <a href="#">
                            <div className="icon-w3ls f1">
                                <span className="fa fa fa-users"></span>
                            </div>
                            <h4 className="mt-2"> Personal Loan</h4>
                            <h4 className="mt-2"> <strong>1170</strong></h4>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6 grid5">
                    <div className="prodct1">
                        <a href="#">
                            <div className="icon-w3ls f2">
                                <span className="fa fa-handshake-o"></span>
                            </div>
                            <h4 className="mt-2">Fixed Deposit</h4>
                            <h4 className="mt-2"><strong> 1070</strong></h4>

                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6 grid6 mt-md-0 mt-3">
                    <div className="prodct1">
                        <a href="#">
                            <div className="icon-w3ls f3">
                                <span className="fa fa-podcast"></span>
                            </div>
                            <h4 className="mt-2">Savings Account</h4>
                            <h4 className="mt-2"> <strong>1270</strong></h4>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6 grid7 mt-md-0 mt-3">
                    <div className="prodct1">
                        <a href="#">
                            <div className="icon-w3ls f4">
                                <span className="fa fa-credit-card"></span>
                            </div>
                            <h4 className="mt-2">Credit Cards</h4>
                            <h4 className="mt-2"><strong> 1070</strong></h4>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="collections-gid-w3-pvt py-5" id="skills">
        <div className="container py-md-5">
            <div className="row">
                <div className="col-lg-6 progress-content text-left">
                    <div className="py-lg-3 px-lg-5 p-md-5 p-3">
                        <h3 className="title-w3ls mb-5">Our Skills</h3>

                        <div className="progress-w3ls mt-5">
                            <div className="progress-one mt-5">
                                <h4 className="progress-vj">Simple Websites</h4>

                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width:" 25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress-one mt-5">
                                <h4 className="progress-vj">Online Marketing</h4>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width:"  50%", ariaValuenow:"50", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                </div>
                            </div>
                            <div className="progress-one mt-5">
                                <h4 className="progress-vj">Social Media</h4>

                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%", ariaValuenow:"75" ,ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
                                </div>
                            </div>
                            <div className="progress-one mt-5">
                                <h4 className="progress-vj">24/7 support</h4>

                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%" ,ariaValuenow:"100", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 progress-content-img mt-4">
                    <img src="./skill1.jpg" alt="" className="img-fluid image1"/>
                </div>
                <div className="col-lg-3 progress-content-img mt-4">
                    <img src="./skill2.jpg" alt="" className="img-fluid image1"/>
                </div>

            </div>
        </div>
    </section>
  
    <section className="mid-w3-pvt-content">
        <div className="overlay-inner py-5">
            <div className="container py-lg-5 py-md-3">
                <div className="test-info text-right ml-auto">
                    <h3 className="title-w3ls two">Helping Your Business Reach</h3>
                    <h4 className="tittle">Its Full
                        Potential</h4>
                    <p className="mt-4">Duis nisi sapien, elementum finibus fermentum eget, aliquet leo et. Mauris hendrerit vel ex. Quisque vitae luctus massa. Phasellus sed aliquam leo a massa eu fringilla. Integer ultrices finibus sed nisi. in convallis felis dapibus finibus lorem ipsum sit amet.</p>
                    <div className="text-right mt-5">
                        <a href="single.html" className="btn mr-2">Read More</a>

                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <div className="welcome py-5">
        <div className="container py-xl-5 py-lg-3" id="services">
            <div className="row">
                <div className="col-lg-5 welcome-left">
                    <h4>What We Provide</h4>
                    <h3 className="title-w3ls mt-2 mb-3">Services we’re Provided</h3>

                    <p className="mt-4 pr-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros
                        sagittis, quis
                        hendrerit
                        libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
                </div>
                <div className="col-lg-7 welcome-right text-center mt-lg-0 mt-5">
                    <div className="row">
                        <div className="col-sm-4 service-1-w3pvt serve-gd1">
                            <div className="serve-grid mt-4">
                                <span className="fa fa-users s1"></span>
                                <p className="mt-2">Personal Loan </p>
                            </div>
                        </div>
                        <div className="col-sm-4 service-1-w3pvt serve-gd2">
                            <div className="serve-grid mt-4">
                                <span className="fa fa-handshake-o s2"></span>
                                <p className="mt-2">Business Loan </p>
                            </div>
                            <div className="serve-grid mt-4">
                                <span className="fa fa-home s3"></span>
                                <p className="mt-2">Home Loan </p>
                            </div>
                        </div>
                        <div className="col-sm-4 service-1-w3pvt serve-gd3">
                            <div className="serve-grid mt-4">
                                <span className="fa fa-car s4"></span>
                                <p className="mt-2">Auto Loan </p>
                            </div>
                            <div className="serve-grid mt-4">
                                <span className="fa fa-stethoscope s5"></span>
                                <p className="text-li mt-2">Health Loan </p>
                            </div>
                            <div className="serve-grid mt-4">
                                <span className="fa fa-graduation-cap s6"></span>
                                <p className="mt-2">Education Loan </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="news-letter-w3-pvt">
        <div className="container contact-form mx-auto text-left">
            <h3 className="title-w3ls two text-left mb-5">Newsletter </h3>
            <form method="post" action="#" className="w3pvt-frm">
                <div className="row subscribe-sec">
                    <p className="news-para col-lg-3">Quisque vitae luctus massa. Phasellus sed aliquam leo a massa eu fringilla.</p>
                    <div className="col-lg-6 con-gd">
                        <input type="email" className="form-control" id="email" placeholder="Your Email here..." name="email" required/>

                    </div>
                    <div className="col-lg-3 con-gd">
                        <button type="submit" className="btn btn-default read">Subscribe</button>
                    </div>

                </div>

            </form>
        </div>
    </section>
   
    <div className="welcome py-5" id="test">
        <div className="container py-xl-5 py-lg-3">
            <div className="row">
                <div className="col-lg-7 welcome-right text-center mt-lg-0 mt-5">
                    <div className="row">
                        <div className="col-sm-4 service-1-w3pvt serve-gd3">
                            <div className="serve-grid test-gd mt-4">
                                <img src="./t1.jpg" alt="" className="img-fluid image1"/>
                                <p className="mt-2">Client1 </p>
                            </div>
                            <div className="serve-grid test-gd mt-4">
                                <img src="./t2.jpg" alt="" className="img-fluid image1"/>
                                <p className="mt-2">Client2 </p>
                            </div>
                            <div className="serve-grid test-gd mt-4">
                                <img src="./t3.jpg" alt="" className="img-fluid image1"/>
                                <p className="mt-2">Client3 </p>
                            </div>
                        </div>

                        <div className="col-sm-4 service-1-w3pvt serve-gd2">
                            <div className="serve-grid test-gd mt-4">
                                <img src="./t2.jpg" alt="" className="img-fluid image1"/>
                                <p className="mt-2">Client4 </p>
                            </div>
                            <div className="serve-grid test-gd mt-4">
                                <img src="./t1.jpg" alt="" className="img-fluid image1"/>
                                <p className="mt-2">Client5 </p>
                            </div>
                        </div>
                        <div className="col-sm-4 service-1-w3pvt serve-gd1">
                            <div className="serve-grid test-gd mt-4">
                                <img src="./t4.jpg" alt="" className="img-fluid image1"/>
                                <p className="mt-2">Client6 </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-5 welcome-left pl-lg-5">
                    <h4>Words </h4>
                    <h3 className="title-w3ls mt-2 mb-3">From Customer
                        Testimonial</h3>

                    <p className="mt-4 test"><span className="fa fa-quote-left"></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros
                        sagittis, quis
                        hendrerit
                        libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
                </div>

            </div>
        </div>
    </div>
   
    <footer className="footer-content py-5">
        <div className="container py-md-3">
            <div className="footer-top text-center">
                <h2>
                    <a className="navbar-brand pt-3 mb-5" href="index.html">
                        <span className="fa fa-recycle"></span> Repay
                    </a>
                </h2>
            </div>
            <div className="row footer-top-inner-w3-pvt">
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="footer-wthree">
                        <h3 className="mb-3 wthree_title">Links</h3>
                        <hr/>
                        <ul className="list-info-wthree">
                            <li>
                                <a href="about.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Latest Posts
                                </a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Explore
                                </a>
                            </li>
                            <li>
                                <a href="contact.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Find us
                                </a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="footer-wthree">
                        <h3 className="mb-3 wthree_title">Navigation</h3>
                        <hr/>
                        <ul className="list-info-wthree">
                            <li>
                                <a href="index.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="about.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="single.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Single Page
                                </a>
                            </li>
                            <li>
                                <a href="about.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="contact.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="footer-wthree">
                        <h3 className="mb-3 wthree_title">Customer Care</h3>
                        <hr/>
                        <ul className="list-info-wthree">
                            <li>
                                <a href="about.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Our Mission
                                </a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Latest Posts
                                </a>
                            </li>
                            <li><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                <a href="#">
                                    Explore
                                </a>
                            </li>
                            <li>
                                <a href="contact.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Find us
                                </a>
                            </li>
                            <li>
                                <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
                    <div className="footer-wthree">
                        <h3 className="mb-3 wthree_title">Contact Us</h3>
                        <hr/>
                        <div className="last-w3-pvt-contact">
                            <p>
                                <a href="mailto:example@email.com">info@example.com</a>
                            </p>
                        </div>
                        <div className="last-w3-pvt-contact my-2">
                            <p>+ 456 123 7890</p>
                        </div>
                        <div className="last-w3-pvt-contact">
                            <p>+ 90 nsequursu dsdesdc,
                                <br />xxx Honey Street 049436.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </footer>
    <div className="copy-right">
        <div className="container">
            <div className="row">
                <p className="copy-right-grids text-md-left text-center my-sm-4 my-4 col-md-6">© 2019 Repay. All Rights Reserved | Design by
                    <a href="http://w3layouts.com/"> W3layouts </a>
                </p>
                <div className="w3-pvt-footer text-md-right text-center mt-4 col-md-5">
                    <ul className="list-unstyled w3-pvt-icons">
                        <li>
                            <a href="#">
                                <span className="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="fa fa-vk"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="move-top text-right col-md-1"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>

            </div>
        </div>
    </div>

    </div>
  )
}
export default Landing