import React from "react";
import "../Engineering/Engineering.css";
import "./RiskManagement.css";
import Footer from "../../Footer/Footer";

function RiskManagement() {
  return (
    <>
      <div className="risk-container">
        <div className="riskmanagement-first">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-gustavo-fring-7155794.jpg"
            alt="show"
          />
          <h2>Risk Management</h2>
        </div>
        <div className="engineer-middle">
          <div className="engineer-middle-content">
            <p>We help you achieve safety and compliance</p>
            <h4>Managing Corporate Enterprise Risk</h4>
          </div>
          <div className="engineer-middle-img">
            <img
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-kindel-media-7714867-1200x900.jpg"
              alt="show"
            />
          </div>
        </div>
        <div className="engineer-paragh">
          <h3>How Safety Concepts Become Safety Culture</h3>
          <p>
            Our goal is to help you decrease operational risk while improving
            safety within your company, community, and the environment. We
            create a repeatable risk management program that strives to
            eliminate deviations and redundancies and can be sustained
            cost-effectively. We can also provide individual risk management
            assistance where our expertise is needed.
          </p>
          <p>
            Because we understand the issues facing your business and industry,
            we can help you prepare for audits, inspections, and internal
            reporting mandates.
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
                <li>HSE program development and implementation</li>
                <li>PSM and RMP development and implementation support</li>
                <li>Assessment and gap analysis</li>
                <li>Training needs analysis</li>
                <li>On-site safety support</li>
                <li>
                  Emergency response exercise development, facilitation, and
                  evaluation
                </li>
                <li>Pre-purchase and post-acquisition due diligence</li>
                <li>PHA revalidation</li>
                <li>PHA, HAZID, HAZOP facilitation</li>
                <li>Industry and corporate initiatives</li>
                <li>Procedures, publications, and training</li>
                <li>Technical training programs (hard and soft skills)</li>
                <li>Skills progression program development</li>
                <li>Incident investigation</li>
                <li>
                  Ongoing support for positions which you choose not to staff
                  internally
                </li>
                <li>Regulatory expertise</li>
                <li>Content maintenance</li>
                <li>Document control</li>
                <li>Objective performance monitoring and oversight</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="engineer-paragh">
          <h3>Thorough, Effective Implementation</h3>
          <p className="our-implement">Our implementation programs include :</p>
          <div className="risk-last-div">
            <ul>
              <li>
                Working with you to develop program documents that answer the
                questions: “What do we need to do?”; “What are we going to do?”;
                and “How are we going to do it?” This includes definition of
                roles, responsibilities, processes, and documentation.
              </li>
              <li>
                Conducting a gap analysis of the facilities and organizations
              </li>
              <li>
                Developing an implementation plan and schedule based on the
                results of the gap analysis
              </li>
              <li>Presentation and training on the program</li>
              <li>
                Development of program content such as drawings (P&IDs, PFDs,
                SFDs) and subsurface safety systems (SSS)
              </li>
              <li>
                Procedures (operating and maintenance), hazard analyses, and
                mechanical integrity content
              </li>
              <li>
                Design reviews of safety systems and other documentation and
                training around specific program elements
              </li>
              <li>
                Maintenance of content documents after implementation, as
                facilities and organizations change
              </li>
              <li>Management of Change (MOC) program development</li>
              <li>
                Periodic internal audits and revalidation of certain elements
                (such as hazard analyses) as required by regulations
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RiskManagement;
