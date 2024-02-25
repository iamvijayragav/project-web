import React from "react";
import "../RiskManagement/RiskManagement.css";
import "./Substainability.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

function EnvironmentalFactor() {
  return (
    <>
    <div className="risk-container">
      <div className="enterprise-first">
        <img
          src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-photomix-company-172505.jpg"
          alt="show"
        />
        <h2>Understanding ESG: Environmental Factors </h2>
      </div>
      <div className="engineer-middle">
        <div className="engineer-middle-content">
          <h5>ESG Scope & Impact</h5>
          <h4>Create Value Through Environmental Sustainability</h4>
        </div>
        <div className="engineer-middle-img">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/ESG-Infograph-E-01-1024x699-1-768x524.png"
            alt="show"
          />
        </div>
      </div>
      <div className="engineer-paragh">
        <h3>Summary</h3>
        <p>
          The environmental factor in the ESG equation focuses on how a company
          performs as a steward of nature. It considers how a company uses
          natural resources and how their operations impact the environment. It
          includes not only a company’s direct operations, but also all
          activities across their supply chains. Responsible and effective
          management of environmental factors is an increasingly important
          driver of corporate value.
        </p>
      </div>
      <div className="engineer-last-div">
        <div className="engineer-last-left">
          <img
            src="https://plus.unsplash.com/premium_photo-1663011158130-000b425f421e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29pbCUyMHRlc3R8ZW58MHx8MHx8fDA%3D"
            alt="show"
          />
        </div>
        <div className="engineer-last-right">
          <h5>Environmental Themes & Issues</h5>
          <div className="engineer-serviced">
            <p>
              Environmental concerns can be understood in terms of an
              organization’s outputs and inputs. Outputs consist of what and how
              much the organization produces. Inputs factor in the
              sustainability of the resources required to feed the
              organization’s processes.
            </p>
            <p>
              There is no all-inclusive list of environmental factors, and some
              may overlap with social and governance factors. While some
              environmental factors are universal, such as waste reduction, a
              company will also be evaluated based on industry-specific issues,
              such as the elimination of biohazards in the medical industry or
              the reduction of flaring in oil and gas.
            </p>
            <p>
              Although exact terminology varies, ESG rating agencies generally
              classify environmental factors according to four major themes:
              Climate Change, Natural Resources, Pollution & Waste, and
              Environmental Opportunities. Within each theme, multiple key
              issues are analyzed to arrive at key performance indicators.
            </p>
            <p> These environmental themes and issues are summarized below.</p>
          </div>
        </div>
      </div>
      <div className="engineer-last-div">
        <div className="engineer-last-left">
          <div className="heading-one">
            <h3>Climate Change</h3>
            <ul>
              <li>Reducing greenhouse gases (GHG)</li>
              <li>Decreasing carbon emissions and fossil fuel use</li>
              <li>
                Researching, developing, and implementing renewable energy
                solutions
              </li>
              <li>
                Improving efficiency in carbon-intensive practices (carbon
                footprint)
              </li>
              <li>Financing environmental impact</li>
              <li>Climate change vulnerability</li>
            </ul>
          </div>
          <div className="heading-two">
            <h3>Natural Resources</h3>
            <ul>
              <li>Conserving water and other natural resources</li>
              <li>Sourcing raw materials responsibly</li>
              <li>Protecting biodiversity and ecosystems</li>
              <li>Eliminating deforestation</li>
              <li>Practicing responsible land use</li>
            </ul>
          </div>
          <div className="heading-three">
            <h3>Pollution & Waste</h3>
            <ul>
              <li>Reducing solid waste</li>
              <li>Reducing toxic emissions and water pollution</li>
              <li>Reducing packaging material and waste</li>
              <li>Reducing electronic waste</li>
            </ul>
          </div>
          <div className="heading-four">
            <h3>Environmental Opportunities</h3>
            <ul>
              <li>Adopting clean technology</li>
              <li>Implementing green building practices</li>
              <li>Improving energy efficiency</li>
            </ul>
          </div>
        </div>
        <div className="engineer-last-right" style={{ marginLeft: 0 }}>
          <div className="right-images">
            <img
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-mikhail-nilov-8543582-768x1150.jpg"
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
              Environmental factors are often the most visible component of ESG
              performance to investors, customers, and other stakeholders. At
              one time, environmental concerns were considered more for their
              non-financial, public relations value. Today, high-profile
              environmental factors such as climate change, water scarcity, and
              carbon footprint are evaluated for their direct financial impact
              and effect on a company’s competitive positioning.
            </p>
            <h3>Investment</h3>
            <p>
              Like all ESG criteria, environmental factors may be used as a
              risk-management guide for excluding certain companies, products,
              or services from investment portfolios. Potential investors want
              full disclosure of any risks a company might face up front, as
              well as any plans the company has for mitigating those risks.
            </p>
            <h3>Opportunity Analysis</h3>
            <p>
              Environmental factors are also used to assess potential risks of a
              new venture, a merger, or an expansion. Stakeholders will take
              into consideration issues such as emissions compliance violations,
              ownership of contaminated land, and hazardous waste generation
              before making a commitment.
            </p>
            <h3>Risk Avoidance</h3>
            <p>
              Companies that ignore the impacts of their policies and practices
              on the environment leave themselves exposed to financial and legal
              risks. Failure to protect against extreme environmental incidents,
              such as hazardous material spills or explosions, leave companies
              open to regulatory penalties, criminal prosecution, damage to
              their reputation, and harm to shareholder value.
            </p>
            <p>
              Companies should not only assess and improve their ability to
              operate successfully in the present, but also develop strategies
              for potential long-term environmental disruptions and
              opportunities.
            </p>
          </div>
        </div>
        <div className="datamanagements-last-right">
          <img
            style={{ marginTop: 180 }}
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-pixabay-414943-768x1024.jpg"
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
            Learn More{" "}
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
              <Link to="/social-factors">Social Factor</Link>
            </button>
            <button type="sumbit" className="button">
              <Link to="/governance-factors">Governance Factor</Link>
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
    <Footer/>
    </>
  );
}

export default EnvironmentalFactor;
