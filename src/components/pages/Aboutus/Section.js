import React from "react";
import "./AboutUs.css";

const Section = () => {
  return (
    <>
      <section className="course">
        <h1>Our Mission</h1>
        <p>
          “Our mission is to be really good at what we do, to provide
          exceptional value to our customers, to provide a challenging, positive
          work experience for our staff, and to be profitable all while
          maintaining a high standard of ethics and conduct.”
        </p>

        <div className="row">
          <div className="course-col">
            <h2>ETHICS</h2>
            <p>
              We conduct our business in an ethical and legal way. Nothing is
              worth going to jail for, and you sleep better. We don’t want to
              employ people who we cannot trust, or who we trust only because
              they are on our side.
            </p>
          </div>
          <div className="course-col">
            <h2>STEWARDSHIP</h2>
            <p>
              We are diligent and principled when it comes to the safety of our
              staff, our clients, our neighbors, and the environment. Look out
              for their safety as you would your own.
            </p>
          </div>
          <div className="course-col">
            <h2>PROFITABILITY</h2>
            <p>
              We have to be profitable, a happy but broke company won’t last
              long.
            </p>
          </div>
        </div>
      </section>
      <section className="course">
        <div className="row">
          <div className="course-col">
            <h2>RESPECT</h2>
            <p>
              If people are not worthy of respect, they should not work here. We
              have zero tolerance for obnoxious behavior, harassment,
              discrimination, etc.
            </p>
          </div>
          <div className="course-col">
            <h2>WORK ENVIRONMENT</h2>
            <p>
              We strive to maintain a happy and challenged staff who feel like
              they are part of something, not just collecting a check. Work
              should be difficult, rewarding, and fun, if that’s possible.
            </p>
          </div>
          <div className="course-col">
            <h2>COMMUNICATION</h2>
            <p>
              Communication (internal and external) and teamwork are critical
              components of what will make us better than our competition.
              Effective communication should lead to effective teamwork. Our
              people must understand and support the big picture, not just what
              is in their inbox.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
