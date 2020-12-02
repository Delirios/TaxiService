import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="row">
        <div className="col item social">
          <a href="https://www.facebook.com/dima.lushchevskyi">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://github.com/Delirios">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.instagram.com/__dimas1ck__">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/dmytro-lushchevskyi-86a30b1b2/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
