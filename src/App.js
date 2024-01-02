import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home/Home";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Careers from "./components/pages/Careers/Careers";
import Substainability from "./components/pages/DropDown-Pages/Substainability/Substainability";
import AboutUs from "./components/pages/Aboutus/AboutUs";
import Engineering from "./components/pages/DropDown-Pages/Engineering/Engineering";
import RiskManagement from "./components/pages/DropDown-Pages/RiskManagement/RiskManagement";
import Enterprise from "./components/pages/DropDown-Pages/Enterprise-asset-management/Enterprise";
import HashLoader from "react-spinners/HashLoader";
import DataManagement from "./components/pages/Projects-Drop/DataMangement/DataManagement";
import EngineeringProject from "./components/pages/Projects-Drop/Engineering-Proj/EngineeringProject";
import RiskManagementProject from "./components/pages/Projects-Drop/RiskManagementProject/RiskManagementProject";
// import Footer from "./components/pages/Footer/Footer";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <HashLoader
          color={"#D0021B"}
          loading={loading}
          style={{ alignItems: "centre" }}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
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
              path="/careers"
              component={(props) => <Careers {...props} />}
            />
            <Route
              path="/sustainability-consulting"
              component={(props) => <Substainability {...props} />}
            />
            <Route
              path="/engineering"
              component={(props) => <Engineering {...props} />}
            />
            <Route
              path="/risk-management"
              component={(props) => <RiskManagement {...props} />}
            />
            <Route
              path="/data-management-project"
              component={(props) => <DataManagement {...props} />}
            />
            <Route
              path="/engineering-project"
              component={(props) => <EngineeringProject {...props} />}
            />
            <Route
              path="/risk-management-project"
              component={(props) => <RiskManagementProject {...props} />}
            />
            <Route
              path="/enterprise-asset-management"
              component={(props) => <Enterprise {...props} />}
            />
          </Switch>
          {/* <Footer /> */}
        </Router>
      )}
    </div>
  );
}

export default App;
