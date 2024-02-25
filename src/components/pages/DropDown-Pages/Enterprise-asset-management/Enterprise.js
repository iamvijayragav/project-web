import React from "react";
import "../RiskManagement/RiskManagement.css";
import "./Enterprise.css";
import Footer from "../../Footer/Footer";

function Enterprise() {
  return (
    <>
      <div className="risk-container">
        <div className="enterprise-first">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-kampus-production-8190804.jpg"
            alt="show"
          />
          <h2>Enterprise Asset Management </h2>
        </div>
        <div className="engineer-middle">
          <div className="engineer-middle-content">
            <h5>We solve the right problems</h5>
            <h4>Asset Integrity and Compliance Assurance</h4>
          </div>
          <div className="engineer-middle-img">
            <img
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-mikhail-nilov-8297487-1200x800.jpg"
              alt="show"
            />
          </div>
        </div>
        <div className="engineer-paragh">
          <h3>
            Translating Mechanical Integrity and Compliance Needs into
            Maintenance Systems
          </h3>
          <p>
            Tecnicoe works with our clients to help meet their plant and
            facility maintenance program requirements to improve efficiencies
            and track compliance assurance.
          </p>
          <ul>
            <li>
              Help identify Asset Integrity tasks regulatory requirements such
              as DOT/PHMSA, OSHA/PSM, and EPA. Conduct RCM/RBI and criticality
              studies as necessary.
            </li>
            <li>
              Define equipment data structure and collect via facility
              walkdowns, drawings, existing data sources, etc.
            </li>
            <li>
              Develop maintenance strategies, procedures, and tasks to satisfy
              the asset integrity and compliance requirements. Design reports
              and KPIs.
            </li>
            <li>
              Analyze and recommend work processes to increase efficiencies
              throughout, such as scheduling, routes, PM structure and
              optimization, hand-held devices, equipment tagging and barcode
              scanning, document links, etc.
            </li>
            <li>
              Define spare part data structure, develop spare parts, and bills
              of material (BOM).
            </li>
            <li>
              Assist with CMMS selection (cloud or server-based), data migration
              and implementation. Provide user support and on-site training.
              Provide data management of change support.
            </li>
          </ul>
          <p>
            Tecnicoe has successfully completed hundreds of projects of various
            sizes and scopes. We have experience with many world-class programs
            including: SAP PM/MM, Maximo, Infor, Oracle / JD Edwards, Asset
            Essentials/Dude Solutions and integration with various RBI,
            corrosion monitoring, and document management applications.
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
                <li>Identify Asset Integrity tasks</li>
                <li>Identify regulatory requirements</li>
                <li>Conduct RCM/RBI and criticality studies</li>
                <li>Collect and structure equipment data</li>
                <li>Develop maintenance strategies, procedures, and tasks</li>
                <li>Design reports and KPIs</li>
                <li>Optimize PM structure</li>
                <li>Recommend work efficiencies</li>
                <li>Collect and structure spare part data</li>
                <li>Assistance with selection of maintenance systems</li>
                <li>CMMS</li>
                <li>RCM</li>
                <li>RBI</li>
                <li>CMP</li>
                <li>Perform data migration and implementation</li>
                <li>Provide user support and training</li>
                <li>Support data management of change</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="engineer-paragh">
          <h3>We Are Maintenance People</h3>
          <p className="our-implement">
            We are maintenance and operation professionals with field experience
            using CMMS. From strategy and design to IT implementation, we
            understand your requirements and how they translate into various
            computer maintenance systems. Whether upstream or downstream, we
            understand the nuances of each and can implement practical frontline
            solutions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Enterprise;
