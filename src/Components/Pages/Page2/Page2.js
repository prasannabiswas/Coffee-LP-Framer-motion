import React from "react";
import "./Page2.css";
// Splider Imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";

import bestSeller from "../../../Images/bestSeller.png";
import { coffee } from "./coffeedb";

const Page2 = () => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "3rem",
    autoplay: true,
    pauseOnHover: true,
    arrow: false,
    height: "auto",
    autoScroll: {
      speed: 2,
    },
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div className="page2-container" id="page2-offers">
      <div className="container-fluid">
        <Splide options={splideOptions} AutoScroll>
          {coffee.map((item, key) => {
            return (
              <SplideSlide key={key}>
                <div className="col-md-3 col-sm-6 page2-image-container">
                  <div className="page2-image-section">
                    {item.bestSeller && (
                      <img
                        className="pag2-bestSeller"
                        src={bestSeller}
                        alt="best-seller"
                      />
                    )}
                    <img
                      className="page2-image"
                      src={item.image}
                      alt={item.title}
                    />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>

      <div
        className="container-fluid"
        style={{
          height: "32vh",
        }}
      >
        <div className="row page2-offer-container" style={{ height: "100%" }}>
          <div
            className="col-md-6 col-sm-12 page2-offer-container-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#EB81A5",
            }}
          >
            <div>
              <p style={{ textAlign: "center" }}>
                Tropical cooldown Kick back with our vibrant new Frozen
                Pineapple Passionfruit Lemonade Coffee-Mania Refreshers® beverage.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="page2-button">Order Now</span>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-sm-12 page2-offer-container-box"
            style={{
              backgroundColor: "#E5FF67",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h2 style={{ textAlign: "center" }}>Now 50% off cold drinks</h2>
              <p style={{ textAlign: "center" }}>
                WinsDays just got even cooler for Coffee-Mania® Rewards members.
                Now enjoy 50% off a cold drink on Wednesdays after 12 p.m.*
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="page2-button">Order Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
