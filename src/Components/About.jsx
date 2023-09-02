import React from "react";
import "../styles/about.css";
import pic from "./imgs/props-remo.png";

const About = () => {
  return (
    <div id="About" className="about">
      <h2>Read About Me... </h2>
      <div className="about-content">
        <div className="my-photo">
          <img src={pic} alt="pic" />
        </div>
        <div className="about-text">
          <span>Anshuman Tiwari</span>
          <p>
            Hi, I'm Skilled Full stack developer good understanding of DevOps.
            Confident in Graphic designing like Web designing Thumbnails,
            Posters and lot more. I have done several projects in MERN Stack and
            designed a lot of graphical things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
