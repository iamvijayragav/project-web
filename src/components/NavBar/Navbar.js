import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "../MenuItems";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [subDropdownVisible, setSubDropdownVisible] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleToggleDropdown = (index) => {
    if (dropdownVisible === index) {
      setDropdownVisible(null);
    } else {
      setDropdownVisible(index);
    }
  };

  const handleToggleSubDropdown = (index) => {
    if (subDropdownVisible === index) {
      setSubDropdownVisible(null);
    } else {
      setSubDropdownVisible(index);
    }
  };

  const handleMouseEnter = (index) => {
    setDropdownVisible(index);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
    setSubDropdownVisible(null);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link to="/">
            <img
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/download-49.jpeg"
              alt="logo"
              className="logo"
            />
          </Link>

          <div
            className={`nav__toggle ${isMenuOpen ? "show-icon" : ""}`}
            id="nav-toggle"
            onClick={toggleMenu}
          >
            <i
              className={`ri-${isMenuOpen ? "close" : "menu"}-line ${
                isMenuOpen ? "nav__close" : "nav__burger"
              }`}
            ></i>
          </div>
        </div>
        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {MenuItems.map((menu, index) => (
              <React.Fragment key={index}>
                {menu.children ? (
                  <li
                    className="dropdown__item"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="nav__link">
                      {menu.title}{" "}
                      <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                    </div>
                    <ul
                      className={`dropdown__menu ${
                        dropdownVisible === index ? "show" : ""
                      }`}
                      onClick={() => handleToggleDropdown(index)}
                    >
                      {menu.children.map((submenu, id) => (
                        <React.Fragment key={id}>
                          {submenu.children ? (
                            <li
                              className="dropdown__subitem"
                              onMouseEnter={() => handleToggleSubDropdown(id)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <Link
                                to={submenu.path}
                                className="dropdown__link"
                              >
                                {submenu.title}
                                <i className="ri-arrow-right-s-line dropdown__arrow"></i>
                              </Link>
                              <ul
                                className={`dropdown__submenu ${
                                  subDropdownVisible === id ? "show" : ""
                                }`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {submenu.children.map((submenuChild, subId) => (
                                  <li key={subId}>
                                    <Link
                                      to={submenuChild.path}
                                      className="dropdown__sublink"
                                      onClick={closeMenu}
                                    >
                                      {submenuChild.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={id}>
                              <Link
                                to={submenu.path}
                                className="dropdown__link"
                                onClick={closeMenu}
                              >
                                {submenu.title}
                              </Link>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link
                      to={menu.path}
                      className="nav__link"
                      onClick={closeMenu}
                    >
                      {menu.title}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
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
    </header>
  );
}

export default Navbar;
