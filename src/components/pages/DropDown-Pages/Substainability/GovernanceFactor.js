import React from "react";
import "../RiskManagement/RiskManagement.css";
import "./Substainability.css";
import { Link } from "react-router-dom";

function GovernanceFactor() {
  return (
    <div className="risk-container">
      <div className="enterprise-first">
        <img
          src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-photomix-company-172505.jpg"
          alt="show"
        />
        <h2 style={{ fontSize: 30 }}>Understanding ESG: Governance Factors </h2>
      </div>
      <div className="engineer-middle">
        <div className="engineer-middle-content">
          <h5>ESG Scope & Impact</h5>
          <h4>Create Value Through Sustainable Governance</h4>
        </div>
        <div className="engineer-middle-img">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/ESG-Infograph-G-1024x699-1-768x524.png"
            alt="show"
          />
        </div>
      </div>
      <div className="engineer-paragh">
        <h3>Summary</h3>
        <p>
          The governance segment of ESG encompasses corporate board and
          management structures, as well as company policies, standards,
          information disclosures, auditing and compliance issues. Is the
          leadership group diverse, accountable, and fairly compensated? Does
          the company encourage shareholder engagement? Are accounting practices
          accurate and transparent? Stakeholders want to know that people
          throughout the company conduct business ethically and responsibly.
        </p>
      </div>
      <div className="engineer-last-div">
        <div className="engineer-last-left">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-rfstudio-3810792-768x1075.jpg"
            alt="show"
          />
        </div>
        <div className="engineer-last-right">
          <h5>Governance Themes & Issues</h5>
          <div className="engineer-serviced">
            <p>
              Investors and consumers are increasingly concerned about the
              integrity of corporate governance and structure. Board diversity,
              executive wages, financial processes, competitive fairness, and
              anti-corruption practices are all coming to light as never before.
            </p>
            <p>
              Good governance and good business go hand in hand. A company that
              ignores weak spots in governance limits its potential, and in some
              cases, invites scandal. The potential damage to markets,
              investors, and workforces can be catastrophic.
            </p>
            <p>
              Maintaining the balance between responsible governance and healthy
              profitability requires vigilance with regard to the key themes and
              issues summarized below.
            </p>
            <p> These environmental themes and issues are summarized below.</p>
          </div>
        </div>
      </div>
      <div className="engineer-last-div">
        <div className="engineer-last-left">
          <div className="heading-one">
            <h3>Corporate Governance</h3>
            <ul>
              <li>Board Diversity</li>
              <li>Executive Pay</li>
              <li>Ownership and Control</li>
              <li>Accounting</li>
            </ul>
          </div>
          <div className="heading-two">
            <h3>Corporate Structure</h3>
            <ul>
              <li>Business Ethics</li>
              <li>Anti-Competitive Practices</li>
              <li>Tax Transparency</li>
              <li>Corruption and Instability</li>
              <li>Financial System Instability</li>
            </ul>
          </div>
        </div>
        <div className="engineer-last-right" style={{ marginLeft: 0 }}>
          <div className="right-images">
            <img
              style={{ height: 450 }}
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-marcus-aurelius-4063792-768x1152.jpg"
              alt="show"
            />
          </div>
        </div>
      </div>
      <div className="datamanagement-last-div">
        <div className="datamanagements-last-left">
          <div className="datamanagement-last-content-p">
            <h3>Impacts on Business</h3>
            <p>
              More than ever, the behavior of corporate managers is in the
              spotlight. Customers, employees, and other stakeholders want to
              know that leadership is operating within an ethical and
              responsible framework. Over time, the effects of sustainable
              governance are especially evident in these areas.
            </p>
            <h3>Management Effectiveness</h3>
            <p>
              Companies that rank low on governance characteristics are more
              exposed to mismanagement, scandal, and tarnished reputations. They
              also are less likely to mitigate risks and capitalize on business
              opportunities over time.
            </p>
            <h3>Workforce Productivity</h3>
            <p>
              Diversity pays dividends. Companies that create inclusive
              workplaces are discovering higher employee commitment, increased
              productivity, and improved financial performance.
            </p>
            <h3>Investor Confidence</h3>
            <p>
              From transparent accounting to leadership accountability, high
              governance scores are a requirement for an increasing number of
              institutional investors.
            </p>
            <p>
              The connection between responsible governance, value creation, and
              risk reduction is clear and increasingly important as cultural and
              political pressures magnify public scrutiny.
            </p>
          </div>
        </div>
        <div className="datamanagements-last-right">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-nataliya-vaitkevich-8062298-768x1152.jpg"
            alt="show"
          />
        </div>
      </div>
      <div className="engineer-middle">
        <div className="engineer-middle-content">
          <h4
            style={{
              color: "#02678b",
              fontFamily: "Poppins",
              letterSpacing: 1.2,
              fontWeight: 500,
              marginBottom: 5,
            }}
          >
            Learn More
          </h4>
          <h2>
            Visit our other “Understanding ESG” pages to learn more about
            sustainability issues and how they affect your business.
          </h2>
        </div>
        <div className="engineer-middle-img">
          <img
            src="	https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-sameera-madusanka-1572036.jpg"
            alt="show"
          />
          <div className="button-div">
            <button type="sumbit" className="button">
              <Link to="/environmental-factors">Environmental Factor</Link>
            </button>
            <button type="sumbit" className="button">
              <Link to="/social-factors">Social Factor</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="engineer-paragh">
        <h3>Full-Service Sustainability Consulting</h3>
        <p className="our-implement">
          Tecnicoe is uniquely qualified to help you manage ESG risks and
          opportunities, with more than 40 years of consulting experience in a
          diverse range of disciplines and applications.
        </p>
      </div>
    </div>
  );
}

export default GovernanceFactor;
