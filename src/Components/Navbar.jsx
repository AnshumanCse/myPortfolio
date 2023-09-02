import React from "react";
import "../styles/navbar.css";
import logo from "./imgs/props.jpg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Anshuman Tiwari</span>
        </div>
        <div className="navs">
          <ul>
            <li>
              <a href="/#"> Home</a>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>

            <li className="drop">
              <a href="/#services" className="dropdown">
                Services <i class="ri-arrow-down-s-line"></i>
                <div class="dropdown-content">
                  <a href="/#contact">Web Applications</a>
                  <a href="/contact">Graphic Designing</a>
                  <a href="/contact">Video Editing</a>
                  <a href="/contact">Social Media Management</a>
                </div>
              </a>
              <div className="dropdown"> </div>
            </li>

            <li>Work Proof</li>
            <li>Contact</li>
          </ul>
          <div className="hmburger">
            <lord-icon
              src="https://cdn.lordicon.com/bwhjesak.json"
              trigger="morph"
              colors="primary:#ffffff,secondary:#000000"
              // style="width:250px;height:250px"
            ></lord-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
