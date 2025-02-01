import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <li>
          <a href="https://peerlist.io/boorge">Peerlist</a>
        </li>
        <li>
          <a href="https://dev.to/@boorge">Dev</a>
        </li>
        <li>
          <a href="https://codepen.io/borgekiran">Codepen</a>
        </li>
        <li>
          <a href="https://medium.com/@boorge">Medium</a>
        </li>
      </footer>
      <div className="icons">
        <i class="fa-brands fa-product-hunt"><a href="https://peerlist.io/boorge"></a></i>
        <i class="fa-solid fa-code-compare"><a href="#"></a></i>
        <i class="fa-brands fa-youtube"><a href="#"></a></i>
        <i class="fa-brands fa-instagram"><a href="#"></a></i>
        <i class="fa-brands fa-twitter"><a href="#"></a></i>
        <i class="fa-thin fa-hippo"><a href="#"></a></i>
      </div>
    </>
  );
};

export default Footer;
