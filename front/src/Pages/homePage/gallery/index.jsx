import React from "react";
import "./index.scss";
const Gallery = () => {
  return (
    <div id="gallery">
      <div className="container">
        <div className="gallery">
          <h1 className="gallery-h1">Gallery</h1>
          <p className="gallery-p">
            Far far away, behind the word mountains, far from the countries{" "}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="gallery-imgs">
            <img
              className="gallery-img"
              src=" https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
