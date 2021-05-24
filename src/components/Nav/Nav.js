import { render } from "@testing-library/react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/Soma_Logo_w500.svg";
import { AppendScript } from "../AppendScript";

class Nav extends Component {
  componentDidMount() {
    AppendScript("/src/components/functionFX.js");
  }

  render() {
    return (
      <div className="nav">
        <Link to="/" className="nav-logo-home">
          <h1 class="nav-logo">JOHN McENTIRE</h1>
          musician/producer/engineer
        </Link>
        <div className="soma-logo-box">
          <Logo className="soma-img" />
        </div>
        <Link to="/about" className="nav-li about">
          about
        </Link>
        <a
          href="http://www.instagram.com/soma_ems/?hl=en"
          target="_blank"
          className="nav-li social"
          rel="noreferrer"
        >
          social
        </a>
        <Link to="/gear" className="nav-li gear">
          gear
        </Link>
        <Link to="/discography" className="nav-li discography">
          discography
        </Link>
        <Link to="mailto:ian@icldesign.com" className="nav-li contact">
          contact
        </Link>
        <Link to="/services" className="nav-li services">
          services
        </Link>
      </div>
    );
  }
}

export default Nav;
