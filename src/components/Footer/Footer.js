// import { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <nav className="floating-footer">
        <button onClick={scrollToTop}>Top</button>
        <a href="mailto:ian@icldesign.com">contact</a>
      </nav>
    </div>
  );
};

export default Footer;
