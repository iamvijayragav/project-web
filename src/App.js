import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Careers from "./components/pages/Careers/Careers";
// import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={(props) => <Home {...props} />} />
        <Route
          path="/about-us"
          exact
          component={(props) => <AboutUs {...props} />}
        />
        <Route
          path="/contact-us"
          component={(props) => <ContactUs {...props} />}
        />
        <Route
          path="/marketing"
          component={(props) => <Marketing {...props} />}
        />
        <Route
          path="/consulting"
          component={(props) => <Consulting {...props} />}
        />
        <Route path="/careers" component={(props) => <Careers {...props} />} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
