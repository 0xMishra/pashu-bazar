import React from "react";
import "../static/hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div class="hero-image">
        <div class="hero-text">
          <h1>Pashu Bazar</h1>
          <p>Buy your heart out</p>
          <div className="btnContainer">
            <Link
              to="/buy"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button class="btn-default">Buy</button>
            </Link>
            <Link
              to="/sell"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button class="btn-default">Sell</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
