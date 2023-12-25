import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home/Home";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Careers from "./components/pages/Careers/Careers";
import AboutUs from "./components/pages/Aboutus/AboutUs";
import Engineering from "./components/pages/Engineering/Engineering";
// import Footer from "./components/pages/Footer/Footer";

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
        <Route path="/careers" component={(props) => <Careers {...props} />} />
        <Route
          path="/engineering"
          component={(props) => <Engineering {...props} />}
        />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
