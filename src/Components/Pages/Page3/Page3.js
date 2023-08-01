import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page3.css";

import logo from "../../../Images/coffeeLogo.webp";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div id="page3-footer">
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="cta-text">
                    <h4>Find us</h4>
                    <span>Science City, sw A/21, Kolkata</span>
                    </div>
                </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                    <i class="fas fa-phone"></i>
                    <div class="cta-text">
                    <h4>Call us</h4>
                    <span>+91 98500 95000</span>
                    </div>
                </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                    <i class="far fa-envelope-open"></i>
                    <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                    <div class="footer-logo">
                    <a href="#page1-hero" style={{ textDecoration: "none !important" }}>
                        <img src={logo} class="img-fluid" alt="logo" />
                    </a>
                    </div>
                    <div class="footer-text">
                    <p>
                        Awaken Your Senses with Our Rich Coffee Blends
                        <br />
                        Fuel Your Day with the Perfect Brew!
                    </p>
                    </div>
                    <div class="footer-social-icon">
                    <span>Follow us</span>
                    <Link to="/">
                        <i class="bi bi-facebook"></i>
                    </Link>
                    <Link to="/">
                        <i class="bi bi-twitter"></i>
                    </Link>
                    <Link to="/">
                        <i class="bi bi-google"></i>
                    </Link>
                    </div>
                </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                    <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                    </div>
                    <ul>
                    <li>
                        <a href="#page1-hero">Home</a>
                    </li>
                    <li>
                        <Link to="/">about</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <a href="#page2-offers">Offers</a>
                    </li>
                    <li>
                        <Link to="/">Expert Team</Link>
                    </li>
                    <li>
                        <Link to="/">Contact us</Link>
                    </li>
                    </ul>
                </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                    <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                    </div>
                    <div class="footer-text mb-25">
                    <p>
                        Don’t miss to subscribe to our new feeds, kindly fill the
                        form below.
                    </p>
                    </div>
                    <div class="subscribe-form">
                    <form action="/">
                        <input type="text" placeholder="Email Address" />
                        <button>
                            <i class="bi bi-arrow-return-right"></i>
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                    <p>
                    Copyright &copy; 2023, All Right Reserved{" "}
                    <a
                        href="https://www.linkedin.com/in/prasanna-biswas-8878b11a5/"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Prasanna Biswas
                    </a>
                    </p>
                </div>
                </div>
                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                    <ul>
                    <li>
                        <a href="#page1-hero">Home</a>
                    </li>
                    <li>
                        <Link to="/">Terms</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                    <li>
                        <Link to="/">Policy</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default Page3;
