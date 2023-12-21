import React, { useState } from "react";
import { ProjectItems } from "./MenuItems";
import "./ProjectDropdown.css";
import { Link } from "react-router-dom";

function ProjectDropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        style={{ background: "white" }}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {ProjectItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProjectDropdown;
