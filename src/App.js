import React from "react";
import Home from "./Components/pages/Home";
import "./index.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
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
