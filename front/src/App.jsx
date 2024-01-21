import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./layouts/header";
import HomePage from "./Pages/homePage";
import Footer from "./layouts/footer";
import About from "./Pages/about";
import Offer from "./Pages/offer";
import Add from "./Pages/add";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
