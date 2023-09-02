import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="my-detail">
          <h4>Anshuman Tiwari</h4>
          <ul>
            <li>9569287540</li>
            <li>anshumantiwari.cse@gmail.com</li>
          </ul>
        </div>
        <div className="servce">
          <h4>Services</h4>
          <ul>
            <li>Web Applications</li>
            <li>Graphic Designing</li>
            <li>Video Editing</li>
            <li>Social Media Management</li>
          </ul>
        </div>
        <div className="navigate">
          <h4>Navigate</h4>
          <ul>
            <li>Home</li>
            <li>Graphic Designing</li>
            <li>Video Editing</li>
            <li>Social Media Management</li>
          </ul>
        </div>
      </div>
      <h3>All right reserved Designed and developed by Anshuman Tiwari</h3>
    </div>
  );
};

export default Footer;
