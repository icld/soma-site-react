// import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <nav className="floating-nav">
        <button onClick={scrollToTop}>Top</button>
      </nav>
    </div>
  );
};

export default Header;
