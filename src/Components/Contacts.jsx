import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Us or Place your Service</h2>

      <div className="nameEmail">
        <input placeholder=" Your Email" type="email" />
        <input placeholder=" Your Contact Number" />
      </div>
      <div className="textarea">
        <div className="dropdown">
          <select
            name="select Service"
            className="dropContent"
            placeholder="Select Service"
          >
            <option value="Service">-- Select Services --</option>
            <option value="web">Web Applications</option>
            <option value="graphic designing ">Graphic Designing</option>
            <option value="Video Editing">Video Editing</option>
            <option value="Social Media Management">
              Social Media Management
            </option>
          </select>
        </div>
        <textarea placeholder="Inpur yout Query" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
