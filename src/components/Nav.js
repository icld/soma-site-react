import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/Soma_Logo_w500.svg";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-logo-home">
        <h1 class="nav-logo">John McEntire</h1>
        musician/producer/engineer
      </Link>
      <div className="soma-logo-box">
        <Logo className="soma-img" />
      </div>
      <Link to="/about" className="nav-li about">
        About
      </Link>
      <a
        href="http://www.instagram.com/soma_ems/?hl=en"
        target="_blank"
        className="nav-li social"
        rel="noreferrer"
      >
        Social
      </a>
      <Link to="/gear" className="nav-li gear">
        Gear
      </Link>
      <Link to="/discography" className="nav-li discography">
        Discography
      </Link>
      <Link to="mailto:ian@icldesign.com" className="nav-li contact">
        Contact
      </Link>
      <Link to="/services" className="nav-li services">
        Services
      </Link>
    </div>
  );
};

export default Nav;
