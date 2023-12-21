// import React from "react";
import React, { useEffect } from "react";
import "./AboutUs.css";
import CLOUDS from "vanta/src/vanta.rings";

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
            alt="Right Image"
          />
        </div>
      </div>
      <div className="all-div">
        <section class="course">
          <h1>Our Mission</h1>
          <p>
            “Our mission is to be really good at what we do, to provide
            exceptional value to our customers, to provide a challenging,
            positive work experience for our staff, and to be profitable all
            while maintaining a high standard of ethics and conduct.”
          </p>

          <div class="row">
            <div class="course-col">
              <h2>ETHICS</h2>
              <p>
                We conduct our business in an ethical and legal way. Nothing is
                worth going to jail for, and you sleep better. We don’t want to
                employ people who we cannot trust, or who we trust only because
                they are on our side.
              </p>
            </div>
            <div class="course-col">
              <h2>STEWARDSHIP</h2>
              <p>
                We are diligent and principled when it comes to the safety of
                our staff, our clients, our neighbors, and the environment. Look
                out for their safety as you would your own.
              </p>
            </div>
            <div class="course-col">
              <h2>PROFITABILITY</h2>
              <p>
                We have to be profitable, a happy but broke company won’t last
                long.
              </p>
            </div>
          </div>
        </section>
        <section class="course">
          <div class="row">
            <div class="course-col">
              <h2>RESPECT</h2>
              <p>
                If people are not worthy of respect, they should not work here.
                We have zero tolerance for obnoxious behavior, harassment,
                discrimination, etc.
              </p>
            </div>
            <div class="course-col">
              <h2>WORK ENVIRONMENT</h2>
              <p>
                We strive to maintain a happy and challenged staff who feel like
                they are part of something, not just collecting a check. Work
                should be difficult, rewarding, and fun, if that’s possible.
              </p>
            </div>
            <div class="course-col">
              <h2>COMMUNICATION</h2>
              <p>
                Communication (internal and external) and teamwork are critical
                components of what will make us better than our competition.
                Effective communication should lead to effective teamwork. Our
                people must understand and support the big picture, not just
                what is in their inbox.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
