import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import Projects from "./components/pages/Projects";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Careers from "./components/pages/Careers/Careers";
import Footer from "./components/pages/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={(props) => <Home {...props} />} />
        <Route
          path="/contact-us"
          component={(props) => <ContactUs {...props} />}
        />
        <Route
          path="/projects"
          component={(props) => <Projects {...props} />}
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
        <Route path="/service" component={(props) => <Services {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
