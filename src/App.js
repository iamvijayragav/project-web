import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import Projects from "./components/pages/Projects";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Careers from './components/pages/Careers/Careers'
import Footer from "./components/pages/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/projects" component={Projects} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/careers" component={Careers} />
        <Route path="/service" component={Services} />


      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
