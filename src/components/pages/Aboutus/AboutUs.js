
import React, { useEffect } from "react";
import "./AboutUs.css";
import CLOUDS from "vanta/src/vanta.rings";
import Section from "./Section";
import CounterUp from "../Counter-UP/CounterUp";

function AboutUs() {
  useEffect(() => {
    CLOUDS(
      {
        el: "#vanta",
        speed: 5,
      },
      []
    );
  });
  return (
    <>
      <div className="bird">
        <div className="bg" id="vanta">
          <div className="text-content">
            <h3 className="h3-our">Our Company</h3>
            <p className="about-p">
              Empowering oil and gas endeavors through pioneering technology and
              tailored solutions, we redefine industry standards at Tecnico.
              Partner with us for innovation that drives efficiency and
              sustainability in every application
            </p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-left">
          <h3>Engineering & Consulting for Oil & Gas</h3>
          <p>
            Tecnicoepc provides engineering and consulting services to the oil
            and gas industry. Our services include project management, design
            engineering, risk management, technical documentation and
            maintenance management solutions.
          </p>
          <p>
            We believe the formula for success is solid and simple. It starts
            with a highly focused corporate philosophy committed to innovative
            solutions in the world’s most challenging environments. It’s backed
            by a seasoned team of professionals dedicated to quality and client
            satisfaction. The result is a multidisciplinary engineering and
            consulting firm that speaks your language and understands your
            unique management and operational issues. This gives us the
            competitive edge to deliver projects on-budget, on-time, every time.
          </p>
          <p>
            Tecnicoepc can develop solutions for your project’s complete life
            cycle in the upstream, midstream, downstream, LNG, and petrochemical
            industries.
          </p>
        </div>
        <div className="about-right">
          <img
            className="about-img"
            src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/pexels-mikael-blomkvist-8961026-1200x1800.jpg"
            alt="show"
          />
        </div>
      </div>
      <CounterUp />
      <div className="all-div">
        <Section />
      </div>
    </>
  );
}

export default AboutUs;
