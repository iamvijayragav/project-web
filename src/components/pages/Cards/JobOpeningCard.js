import React from "react";
import "./JobOpeningCard.css";
import { Link } from "react-scroll";

const JobOpeningCard = ({ title, description, onApply }) => {
  const handleApply = () => {
    onApply(true, title);
  };
  return (
    <div className="job-opening-card">
      <div className="job-opening-header">
        <h3>{title}</h3>
      </div>
      <div className="job-opening-content">
        <p>{description}</p>
        <Link to="apply-form" smooth={true} duration={500}>
          <button className="apply-now-button" onClick={handleApply}>
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobOpeningCard;
