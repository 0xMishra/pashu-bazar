import React from "react";
import "../static/aboutUs.css";

const AboutUs = () => {
  return (
    <div class="main">
      <div className="reviewTitle">
        <h2>
          <span>/</span>A little About Us
        </h2>
      </div>
      <ul class="aboutCards">
        <li class="cards_item">
          <div class="aboutCard">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="aboutCard">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="aboutCard">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
