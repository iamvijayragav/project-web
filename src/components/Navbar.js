import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import ProjectDropdown from "./ProjectDropdown";
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
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ABOUT US
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onServiceEnter}
            onMouseLeave={onServiceLeave}
          >
            <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
              SERVICES <i className="fas fa-caret-down" />
              <div className="underline">
                <span></span>
              </div>
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
              <div className="underline">
                <span></span>
              </div>
            </Link>
            {projectdropdown && <ProjectDropdown />}
          </li>
          <li className="nav-item">
            <Link to="/carrers" className="nav-links" onClick={closeMobileMenu}>
              CAREERS
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CONTACT US
              <div className="underline">
                <span></span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
