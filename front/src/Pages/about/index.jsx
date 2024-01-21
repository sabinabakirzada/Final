import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eatwell || About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      About Page
    </div>
  );
};

export default About;
