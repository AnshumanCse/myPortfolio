import React from "react";
import gif from "../imgs/ill.gif";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h1>Hi👋🏻 I'm Anshuman Tiwari</h1>
        <span>
          Full Stack Developer || Graphic Designer || Freelancer || 1+ year of
          experience of open source contribution.
        </span>
        <p>
          I'm have 1+ year of experience in Web development, graphic designing,
          Open source contribution. I have done several international projects
          and gain better understanding of web applications.
        </p>
        <button>
          Place Service{" "}
          <lord-icon
            src="https://cdn.lordicon.com/jxwksgwv.json"
            trigger="hover"
            colors="primary:#f7f7f7" // style="width:250px;height:250px"
          ></lord-icon>
        </button>

        <span className="icons">
          <i class="ri-linkedin-box-fill"></i>
          <i class="ri-github-fill"></i>
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-line"></i>
        </span>
      </div>
      <div className="home-right">
        <img src={gif} alt="img" />
      </div>
    </div>
  );
};

export default Home;
