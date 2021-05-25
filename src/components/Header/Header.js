// import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  console.log(window.pageYOffset);

  // console.log(headerNav);

  window.addEventListener("scroll", (e) => {
    const headerNav = document.querySelector(".header");
    if (window.pageYOffset > 167) {
      headerNav.classList.add("show");
    } else if (window.pageYOffset <= 167) {
      headerNav.classList.remove("show");
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <nav className="floating-nav">
        <Link to="" onClick={scrollToTop}>
          Top
        </Link>
        <NavLink
          to="/about"
          className="nav-about"
          activeClassName="active-nav-item"
        >
          about
        </NavLink>
        <span />
        <NavLink
          to="/discography"
          className="nav-about"
          activeClassName="active-nav-item"
        >
          discog
        </NavLink>
        <button onClick={scrollToTop} className="top-nav-btn">
          ᐃ
        </button>
      </nav>
    </div>
  );
};

export default Header;
