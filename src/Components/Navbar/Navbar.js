import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import coffeeLogo from "../../Images/coffeeLogo.webp";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarHead = () => {
  return (
    <>
      <div className="container-fluid nav-container">
        <div className="row mt-4" style={{ height: "5rem" }}>
          <div className="col-4 nav-container-logo">
            <img src={coffeeLogo} alt="coffee-website-logo" />
          </div>
          <div className="col-4 nav-container-heading">Coffee Mania</div>
          <div
            className="col-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul className="nav-container-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#page2-offers">Offers</a>
              </li>
              <li>
                <a href="#page3-footer">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHead;
