import React from "react";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home/Home";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import Careers from "./components/pages/Careers/Careers";
import Substainability from "./components/pages/DropDown-Pages/Substainability/Substainability";
import AboutUs from "./components/pages/Aboutus/AboutUs";
import Engineering from "./components/pages/DropDown-Pages/Engineering/Engineering";
import RiskManagement from "./components/pages/DropDown-Pages/RiskManagement/RiskManagement";
import Enterprise from "./components/pages/DropDown-Pages/Enterprise-asset-management/Enterprise";
// import HashLoader from "react-spinners/HashLoader";
import DataManagement from "./components/pages/Projects-Drop/DataMangement/DataManagement";
import EngineeringProject from "./components/pages/Projects-Drop/Engineering-Proj/EngineeringProject";
import RiskManagementProject from "./components/pages/Projects-Drop/RiskManagementProject/RiskManagementProject";
import Login from "./components/LoginCredential/Login";
// import Footer from "./components/pages/Footer/Footer";
import "./App.css";
import EnvironmentalFactor from "./components/pages/DropDown-Pages/Substainability/EnvironmentalFactor";
import SocialFactor from "./components/pages/DropDown-Pages/Substainability/SocialFactor";
import GovernanceFactor from "./components/pages/DropDown-Pages/Substainability/GovernanceFactor";
import Admin from "./components/pages/Admin-Dashboard/Admin";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const notShowNavbar = () => {
    const excludedPaths = ["/login", "/admin-dashboard"];
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      return true;
    }
    return !excludedPaths.includes(currentPath);
  };

  return (
    <div>
      {/* {loading ? (
        <HashLoader
          color={"#D0021B"}
          loading={loading}
          style={{ alignItems: "center" }}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
<<<<<<< HEAD
      ) : ( */}
      <Router>
        {notShowNavbar() && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/sustainability-consulting"
            element={<Substainability />}
          />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/login" element={<Login />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/data-management-project" element={<DataManagement />} />
          <Route path="/engineering-project" element={<EngineeringProject />} />
          <Route
            path="/risk-management-project"
            element={<RiskManagementProject />}
          />
          <Route path="/enterprise-asset-management" element={<Enterprise />} />
          <Route
            path="/environmental-factors"
            element={<EnvironmentalFactor />}
          />
          <Route path="/social-factors" element={<SocialFactor />} />
          <Route path="/admin-dashboard" element={<Admin />} />
          <Route path="/governance-factors" element={<GovernanceFactor />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      {/* )} */}
    </div>
  );
}

export default App;
