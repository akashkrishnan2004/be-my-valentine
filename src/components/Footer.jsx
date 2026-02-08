import React from "react";
import "./css/Footer.css";
import VisitorCounter from "./VisitorCounter";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made with ❤️
      </p>
      <p className="footer-subtext">
        © {new Date().getFullYear()} Be My Valentine 💌
      </p>
      <VisitorCounter />
    </footer>
  );
}

export default Footer;
