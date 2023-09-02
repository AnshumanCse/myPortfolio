import React from "react";
import "../styles/service.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <h2> Our Services & Skills</h2>
      <div className="boxes">
        <div className="webdev">
          <lord-icon
            src="https://cdn.lordicon.com/wluyqhxh.json"
            trigger="hover"
            colors="primary:#454343e6"
            style={{ width: "200px", height: "200px" }}
          ></lord-icon>
          <span>Web Applications</span>
          <p>
            Get trending Technology web applications like React.js Node.js etc.{" "}
          </p>
          <a href="https://github.com/AnshumanCse" target="-main">
            View Projects
          </a>
        </div>
        <div className="graphic box">
          <lord-icon
            src="https://cdn.lordicon.com/fgkmrslx.json"
            trigger="hover"
            colors="primary:#121331,secondary:#454343e6"
            style={{ width: "200px", height: "200px" }}
          ></lord-icon>
          <span>Graphic Designing</span>
          <p>I design Websites, YouTube Thumbnails, Posters, Social Media</p>
        </div>
        <div className="graphic box">
          <lord-icon
            src="https://cdn.lordicon.com/tdxypxgp.json"
            trigger="hover"
            colors="primary:#121331,secondary:#1663c7"
            style={{ width: "200px", height: "200px" }}
          ></lord-icon>
          <span>Video Editing</span>
          <p>
            I can edit Reels, YouTube Video Editing with trending and
            professional effects.
          </p>
        </div>
        <div className="social box">
          <lord-icon
            src="https://cdn.lordicon.com/soseozvi.json"
            trigger="hover"
            colors="primary:#121331,secondary:#1663c7"
            style={{ width: "200px", height: "200px" }}
          ></lord-icon>
          <span>Social Media</span>
          <p>
            I can manage social pages media like Instagram, Facebook and
            advertiesment .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
