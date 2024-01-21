import React from "react";
import "./index.scss";
const News = () => {
  return (
    <div id="news">
      <div className="container">
        <div className="news">
          <h1 className="news-h1">News</h1>
          <p className="news-p">
            Far far away, behind the word mountains, far from the countries{" "}
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="news-cards">
            <div className="news-card">
              <div className="card-img">
                <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg" />
              </div>
              <div className="card-body">
                <h3 className="news-card-h3">We Have Dilecious Food</h3>
                <p className="news-card-p">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="news-card-btn">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="card-img">
                <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" />
              </div>
              <div className="card-body">
                <h3 className="news-card-h3">Chef Special Menu</h3>
                <p className="news-card-p">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="news-card-btn">Read More</button>
              </div>
            </div>

            <div className="news-card">
              <div className="card-img">
                <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg" />
              </div>
              <div className="card-body">
                <h3 className="news-card-h3">Merriage Celebrations</h3>
                <p className="news-card-p">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className="news-card-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
