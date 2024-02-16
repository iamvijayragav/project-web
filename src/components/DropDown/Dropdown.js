import React from "react";
import { MenuItems } from "../MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <ul className="dropdown-menu">
      {MenuItems.map((item, index) => (
        <li key={index} className="dropdown-item">
          <Link to={item.path} className="dropdown-link">
            {item.title}
          </Link>
          {index === 0 && item.subDrop && (
            <ul className="sub-dropdown-menu">
              {item.subDrop.map((subItem, subIndex) => (
                <li key={subIndex} className="sub-dropdown-item">
                  <Link to={subItem.path} className="dropdown-link">
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
