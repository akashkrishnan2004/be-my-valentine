import VisitorCounter from "./VisitorCounter";

import "./css/Footer.css";

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
