// import { useEffect } from "react";
// import { Link } from "react-router-dom";
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
        <button onClick={scrollToTop}>Top</button>
      </nav>
    </div>
  );
};

export default Header;
