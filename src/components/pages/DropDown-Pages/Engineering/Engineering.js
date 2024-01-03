import React, { useEffect } from "react";
import NET from "vanta/src/vanta.dots";
import "./Engineering.css";

function Engineering() {
  useEffect(() => {
    NET({
      el: "#vanta",
    });
  }, []);

  return (
    <div className="engineer-container">
      <div className="engineer-first" id="vanta">
        <h2>Engineering</h2>
      </div>
      <div className="engineer-middle">
        <div className="engineer-middle-content">
          <span>We solve the right problems</span>
          <h4>
            Engineering The Safest, Most Effective Outcome for Your Project
          </h4>
        </div>
        <div className="engineer-middle-img">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-thisisengineering-3861947-768x512.jpg"
            alt="show"
          />
        </div>
      </div>
      <div className="engineer-paragh">
        <h3>
          How The Right Technical Solution Saves You Time, Money, and Headaches
        </h3>
        <p>
          Our integrated team of engineers, designers, and project managers work
          collaboratively to complete your project safely, on time, and within
          budget. We aggressively cross-train our engineers and designers to
          reduce the overall number of people required to execute your project,
          resulting in fewer man-hours and faster project execution.
        </p>
        <p>
          M&H has the ability to support your project from beginning to end for
          both new and existing facilities.
        </p>
      </div>
      <div className="engineer-last-div">
        <div className="engineer-last-left">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-anna-shvets-5324972-768x1152.jpg"
            alt="show"
          />
        </div>
        <div className="engineer-last-right">
          <h4>Services</h4>
          <div className="engineer-services">
            <ul>
              <li>Conceptual design</li>
              <li>Full field development planning</li>
              <li>FEED studies</li>
              <li>Permit support services</li>
              <li>Detailed engineering</li>
              <li>Construction/fabrication management</li>
              <li>Start-up and commissioning</li>
              <li>Production optimization analysis</li>
              <li>Decommissioning, abandonment, and removal engineering</li>
              <li>Procurement assistance</li>
              <li>Project controls and business optimization support</li>
              <li>Complete project cost tracking</li>
              <li>Owner’s engineering support</li>
              <li>Equipment and fabrication inspection</li>
              <li>Budgetary project planning estimates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineering;
