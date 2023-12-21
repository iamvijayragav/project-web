import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import ProjectDropdown from "./ProjectDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [seriveDropdown, setServiceDropdown] = useState(false);
  const [projectdropdown, setProjectDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onServiceEnter = () => {
    if (window.innerWidth < 960) {
      setServiceDropdown(false);
    } else {
      setServiceDropdown(true);
    }
  };

  const onProjectEnter = () => {
    if (window.innerWidth < 960) {
      setProjectDropdown(false);
    } else {
      setProjectDropdown(true);
    }
  };

  const onServiceLeave = () => {
    if (window.innerWidth < 960) {
      setServiceDropdown(false);
    } else {
      setServiceDropdown(false);
    }
  };

  const onProjectLeave = () => {
    if (window.innerWidth < 960) {
      setProjectDropdown(false);
    } else {
      setProjectDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Tecnico
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ABOUT US
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onServiceEnter}
            onMouseLeave={onServiceLeave}
          >
            <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
              SERVICES <i className="fas fa-caret-down" />
            </Link>
            {seriveDropdown && (
              <Dropdown one={onProjectEnter} two={onProjectLeave} />
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onProjectEnter}
            onMouseLeave={onProjectLeave}
          >
            <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
              PROJECTS <i className="fas fa-caret-down" />
            </Link>
            {projectdropdown && <ProjectDropdown />}
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
              CAREERS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <div className="icons">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
