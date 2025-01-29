import React from "react";
import "./Hero.css";
import heroImg from "../../assets/Hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="left-h">
          <h1>
            <span>Kiran Borge</span>
          </h1>
        </div>
        <div className="para">
          <p>
            I'm <span className="para-s">Software Engineer</span>{" "}
          </p>
        </div>
        {/* <div className="links">
          <i class="fa-brands fa-product-hunt"></i>
          <i class="fa-solid fa-code-compare"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-thin fa-hippo"></i>
        </div> */}
        <div className="left-btn">
          <a href="https://github.com/boorge" target="_blank">
            <button className="left-cont">
              <i class="fa-brands fa-github"></i> Github
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1YAsBzRsrQSuzit351iz0OH_BScIUU5Mx/view?usp=sharing" target="_blank">
            <button className="left-rem">Resume</button>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="port-img" className="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
