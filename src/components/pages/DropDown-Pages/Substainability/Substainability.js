import React, { useEffect } from "react";
import NET from "vanta/src/vanta.dots";
import "../Engineering/Engineering.css";
import "./Substainability.css";

function Substainability() {
  useEffect(() => {
    NET({
      el: "#vanta",
    });
  }, []);

  return (
    <div className="engineer-container">
      <div className="engineer-first" id="vanta">
        <h2>Substainability Consulting</h2>
      </div>
      <div className="engineer-middle">
        <div className="engineer-middle-content">
          <span>Managing ESG Risks</span>
          <h4>Creating Sustainable Value</h4>
        </div>
        <div className="engineer-middle-img">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/ESG-Infograph-01-2-768x524.png"
            alt="show"
          />
        </div>
      </div>
      <div className="engineer-paragh">
        <h3>Enhancing ESG Performance by Solving The Right Problems</h3>
        <p>
          Working for the common good is good business. Companies worldwide are
          ramping up their efforts to manage environmental, social, and
          governance (ESG) risks to protect their reputations, avoid legal and
          financial liabilities, and become better corporate citizens. A culture
          of sustainability is also becoming critical to attracting future
          employees. But sustainability issues are complex and far-reaching,
          impacting the very culture of your organization. Meaningful
          improvement hinges on knowing the right moves to make and when to make
          them. That’s where Tecnicoe can help. Whether you are developing your
          first coordinated sustainability effort or looking to enhance an
          existing program, M&H offers the expertise and resources you need to
          create sustainable value. Our teams analyze your operations, benchmark
          your standing among your peers, develop effective improvement
          strategies, and prepare step-by-step implementation plans.
        </p>
        <p>
          Not only do we help you identify what can be improved, we also help
          develop specific plans to implement those improvements at the facility
          level. With our years of consulting experience, we have helped
          implement numerous projects that have a tangible impact on ESG
          performance.
        </p>
        <p>
          In the complicated world of sustainability, we deliver results
          effectively and efficiently by identifying and solving the right
          problems.
        </p>
      </div>
      <div className="engineer-last-div">
        <div className="engineer-last-left">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-bali-demiri-3415148-768x1024.jpg"
            alt="show"
          />
        </div>
        <div className="engineer-last-right">
          <h4>How Tecnicoe Boosts Your ESG Performance</h4>
          <span>ENTERPRISE-WIDE PROGRAMS</span>
          <div className="engineer-services">
            <ul>
              <li>Prepare a gap analysis of current sustainability plans</li>
              <li>Assist during rating agency score updates</li>
              <li>
                Optimize ESG rankings through reporting and program development
              </li>
              <li>
                Review ESG score reports and metrics from rating agencies for
                completeness and accuracy
              </li>
              <li>Develop and analyze peer groups for industry benchmarking</li>
              <li>
                Provide specific engineering solutions for environmental
                programs
              </li>
              <li>
                Provide project management, procurement, startup, and
                commissioning services as necessary for solution implementation
              </li>
            </ul>
            <span>FACILITY-BASED PROGRAMS</span>
            <div className="engineer-services">
              <ul>
                <li>
                  Develop or update existing green house gas (GHG) reporting in
                  accordance with regulatory requirements
                </li>
                <li>
                  Develop an assessment of EPA Scope 1 and Scope 2 emissions at
                  facility and corporate levels
                </li>
                <li>
                  Determine opportunities to improve overall efficiency of
                  facility operations and reduction of energy consumption
                </li>
                <li>Develop and implement programs for :</li>
                <ol>
                  <li>Flare reduction</li>
                  <li>
                    Fugitive methane emissions, including instrument gas
                    conversion projects
                  </li>
                  <li>Spill containment</li>
                  <li>Pipeline and facility leak detection</li>
                  <li>Safety</li>
                  <li>Water stewardship</li>
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="datamanagement-last-div">
        <div className="datamanagements-last-left">
          <div className="datamanagement-last-content-p">
            <h3>For Private Companies With Public Plans</h3>
            <p>
              If your firm is working toward an initial public offering, or
              attracting private investors, the time to improve ESG performance
              is now.
            </p>
            <p>
              Tecnicoe Sustainability consulting will coordinate each essential
              step to assure you are ready to gain maximum value.
            </p>
          </div>
          <div className="datamanagement-content-two">
            <ul>
              <li>
                Review existing programs and policies and provide guidance on
                improvement
              </li>
              <li>
                Identify information required for reporting as a public
                corporation
              </li>
              <li>Perform gap analysis on existing programs</li>
              <li>Conduct peer group analysis</li>
              <li>Develop corporate sustainability programs</li>
              <li>
                Liaise with ranking entities to establish mock ESG reports prior
                to public status
              </li>
            </ul>
          </div>
        </div>
        <div className="datamanagements-last-right">
          <img
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/3-ways-to-raise-capital-for-your-business.webp"
            alt="show"
          />
        </div>
      </div>
      <div className="engineer-middle">
        <div className="engineer-middle-content">
          <span>Learn More About E, S, and G</span>
          <h2>
            Environmental, Social, and Governance (ESG) factors are the keys to
            understanding sustainability. If you’d like to know more about each
            segment, we’ve prepared brief overviews to explain the major issues
            and how they can affect your business.
          </h2>
        </div>
        <div className="engineer-middle-img">
          <img
            src="	https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-sameera-madusanka-1572036.jpg"
            alt="show"
          />
          <div className="button-div">
            <button type="sumbit" className="button">
              Environmental Factor
            </button>
            <button type="sumbit" className="button">
              Social Factor
            </button>
            <button type="sumbit" className="button">
              Governance Factor
            </button>
          </div>
        </div>
      </div>

      <div className="engineer-paragh">
        <h3>A Full-Service Resource for Sustainability Support</h3>
        <p className="our-implement">
          Tecnicoe is uniquely qualified to assist your Sustainability and ESG
          efforts, with more than 40 years of consulting experience in a diverse
          range of disciplines and applications.
        </p>
      </div>
    </div>
  );
}

export default Substainability;
