import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo-name">
          K<span className="logo-h">iran .</span>
        </h1>
      </div>
      <div className="listitems">
        <Link className="list" id="active">
          Home
        </Link>
        <Link className="list">About</Link>
        <Link className="list">Project</Link>
        <Link className="list">Skills</Link>
      </div>
      <div className="btn-nav">
        <a href="https://forms.gle/Uz52L9E38sxqLE9R8" target="_blank">
          <button className="cont-btn">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
