import React from "react";
import Welcome from "./welcome";
import Story from "./story";
import News from "./news";
import Gallery from "./gallery";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eatwell || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Welcome />
      <Story />
      <News />
      <Gallery />
    </div>
  );
};

export default HomePage;
