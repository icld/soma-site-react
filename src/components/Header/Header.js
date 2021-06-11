// import { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
      <div className="floating-nav">
        <button onClick={scrollToTop} className="top-nav-btn">
          ᐃ
        </button>
        <NavLink
          exact
          to="/"
          className="nav-home"
          activeClassName="active-nav-item"
        >
          home
        </NavLink>

        <NavLink
          to="/about"
          className="nav-about"
          activeClassName="active-nav-item"
        >
          about
        </NavLink>

        <NavLink
          to="/discography"
          className="nav-about"
          activeClassName="active-nav-item"
        >
          discog
        </NavLink>

        <NavLink
          exact
          to="/services"
          className="nav-home"
          activeClassName="active-nav-item"
        >
          services
        </NavLink>
        <NavLink
          exact
          to="/gear"
          className="nav-home"
          activeClassName="active-nav-item"
        >
          gear
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
