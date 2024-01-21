import React from "react";
import "./index.scss";
const Story = () => {
  return (
    <div id="story">
      <div className="container">
        <div className="story">
          <div className="story-text">
            <h5 className="story-h5">OUR STORY</h5>
            <h1 className="story-h1">WELCOME</h1>
            <p className="story-p story-p1">
              Far far away, behind the word mountains far from the countrie
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="story-p">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <button className="story-btn">Learn More About Us</button>
          </div>
          <div className="story-img">
            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
