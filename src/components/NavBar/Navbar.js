// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Dropdown from "../DropDown/Dropdown";
// import ProjectDropdown from "../ProjectDropDown/ProjectDropdown";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [seriveDropdown, setServiceDropdown] = useState(false);
//   const [projectdropdown, setProjectDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onServiceEnter = () => {
//     if (window.innerWidth < 960) {
//       setServiceDropdown(true);
//     } else {
//       setServiceDropdown(true);
//     }
//   };

//   const onProjectEnter = () => {
//     if (window.innerWidth < 960) {
//       setProjectDropdown(true);
//     } else {
//       setProjectDropdown(true);
//     }
//   };

//   const onServiceLeave = () => {
//     if (window.innerWidth < 960) {
//       setServiceDropdown(false);
//     } else {
//       setServiceDropdown(false);
//     }
//   };

//   const onProjectLeave = () => {
//     if (window.innerWidth < 960) {
//       setProjectDropdown(false);
//     } else {
//       setProjectDropdown(false);
//     }
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//           Tecnico
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               HOME
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/about-us"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               ABOUT US
//             </Link>
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onServiceEnter}
//             onMouseLeave={onServiceLeave}
//           >
//             <p className="nav-links">
//               SERVICES <i className="fas fa-caret-down" />
//             </p>
//             {/* <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
//               SERVICES <i className="fas fa-caret-down" />
//             </Link> */}
//             {seriveDropdown && (
//               <Dropdown one={onProjectEnter} two={onProjectLeave} />
//             )}
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onProjectEnter}
//             onMouseLeave={onProjectLeave}
//           >
//             <Link to="/#" className="nav-links" onClick={closeMobileMenu}>
//               PROJECTS <i className="fas fa-caret-down" />
//             </Link>
//             {projectdropdown && <ProjectDropdown />}
//           </li>
//           <li className="nav-item">
//             <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
//               CAREERS
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/contact-us"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               CONTACT US
//             </Link>
//           </li>
//         </ul>
//         <div className="icons">
//           <a href="https://www.facebook.com/">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="https://twitter.com/">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href="https://www.instagram.com/">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    children: [
      {
        id: 31,
        title: "Sustainability Consulting",
        path: "/sustainability-consulting",
        children: [
          {
            id: 311,
            title: "Environmental Factor",
            path: "/environmental-factors",
          },
          {
            id: 312,
            title: "Social Factors",
            path: "/social-factors",
          },
          {
            id: 313,
            title: "Governance Factors",
            path: "/governance-factors",
          },
        ],
      },
      {
        id: 32,
        title: "Engineering",
        path: "/engineering",
      },
      {
        id: 33,
        title: "Enterprise Asset Management",
        path: "/enterprise-asset-management",
      },
      {
        id: 34,
        title: "Risk Management",
        path: "/risk-management",
      },
    ],
  },
  {
    id: 4,
    title: "Projects",
    children: [
      {
        id: 41,
        title: "Engineering Projects",
        path: "/engineering-project",
      },
      {
        id: 42,
        title: "Data Management Project",
        path: "/data-management-project",
      },
      {
        id: 43,
        title: "Risk Management Project",
        path: "/risk-management-project",
      },
    ],
  },
  {
    id: 5,
    title: "Careers",
    path: "/careers",
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact-us",
  },
];

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
