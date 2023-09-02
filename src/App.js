import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import "./index.css";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <span style={{ display: "flex", position: "absolute" }}>
        <i class="ri-arrow-up-circle-line"></i>
      </span>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
