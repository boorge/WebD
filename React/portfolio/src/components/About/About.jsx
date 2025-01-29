import React from "react";
import "./About.css";
import abtImg from "../../assets/abtImg.png"

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1>About</h1>
          <p>
            Hello, My name is <b>Kiran Borge</b>, I am a Computer Programmer
            with knowledge of verious programming languages <br />
            like C++ , Python , Java , JavaScript , MySQL etc. I am a good
            communicator which has helped me take on leadership roles in my
            college. <br />
            I am a quick learner am person of positive attitude hard-working
            dedicated. My biggest passion is kabbadi. I believe sports keep you
            <br /> physically and mentally healthy while instilling discipline
            in you.”
          </p>
        </div>
        <div className="abt">
          <div className="abt-img">
            <img src={abtImg} alt="about" />
          </div>
          <div className="abt-para">
            <h4>kiran borge</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
