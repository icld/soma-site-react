import { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/Soma_Logo_w500.svg";
// import { AppendScript } from "../AppendScript";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/" className="nav-logo-home">
          <h1 class="nav-logo">JOHN McENTIRE</h1>
          musician/producer/engineer
        </NavLink>
        <div className="soma-logo-box">
          <Logo className="soma-img" />
        </div>
        <NavLink
          to="/about"
          className="nav-li about"
          activeStyle={{ color: "tomato" }}
        >
          about
        </NavLink>
        <a
          href="http://www.instagram.com/soma_ems/?hl=en"
          target="_blank"
          className="nav-li social"
          rel="noreferrer"
        >
          social
        </a>
        <NavLink
          to="/gear"
          className="nav-li gear"
          activeStyle={{ color: "tomato" }}
        >
          gear
        </NavLink>
        <NavLink
          to="/discography"
          className="nav-li discography"
          activeStyle={{ color: "tomato" }}
        >
          discography
        </NavLink>
        <a href="mailto:ian@icldesign.com" className="nav-li contact">
          contact
        </a>
        <NavLink
          to="/services"
          className="nav-li services"
          activeStyle={{ color: "tomato" }}
        >
          services
        </NavLink>
      </div>
    );
  }
}

export default Nav;
