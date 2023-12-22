import React, { useState } from "react";
import Count from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Counterup.css";

function CounterUp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="counter-div">
        <h1>
          {counterOn && <Count start={0} end={100} duration={3} delay={0} />}+
          <p>Year in Business</p>
        </h1>
        <h1>
          {counterOn && <Count start={0} end={100} duration={3} delay={0} />}+
          <p>Countries Served</p>
        </h1>
        <h1>
          {counterOn && <Count start={0} end={100} duration={3} delay={0} />}+
          <p>Products</p>
        </h1>
      </div>
    </ScrollTrigger>
  );
}

export default CounterUp;
