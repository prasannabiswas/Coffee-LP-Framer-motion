import React from "react";
import NavbarHead from "../../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from 'framer-motion';
import "./Page1.css";

import hotcup from "../../../Images/hotCoffeCup.gif";
import rotatingLogo from "../../../Images/rotatingCoffeeLogo.png";

const Page1 = () => {

  return (
    <motion.div
      id="page1-hero"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{duration:1}}
    >
      <div className="hero-gradient-box"/>
      <div className="img1 container-fluid">
        <motion.span
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{duration:1}}
        style={{ marginTop: "3rem" }}>
          <NavbarHead />
        </motion.span> 
        <div className="row mt-5">          

          <div className="col-md-3" style={{textAlign:"center"}}>
            <motion.img
              className="hero-cup-gif "
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{duration:1.5}}
              src={hotcup}
            />
          </div>

          <div className="hero-container col-md-6" style={{textAlign:"center"}}>
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{duration:1.5}}
              className="hero-text "
            >
              <span className="hero-text-quote">"</span>
              Discover a world of bold flavors and exquisite blends on our coffee
              journey
              <span className="hero-text-quote">"</span>
            </motion.div>            
          </div>

          <div className="col-md-3 hero-rotate-container" style={{textAlign:"center"}}>
            <motion.img 
              className="hero-rotate-logo"
              animate={{rotate:[0,360] }}
              transition={{repeat:Infinity, duration:2}}
              src={rotatingLogo}
            />
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Page1;
