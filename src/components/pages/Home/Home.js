import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
// import Popup from "../../Modal/Popup";

export default function Home() {
  return (
    <>
      <div>
        <div className="risk-container">
          <div className="riskmanagement-first">
            <img
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/175969-31loujd8v2.jpg
              "
              alt="show"
            />
            <h2>
              To Provide Quality,Time Innovative & Cost Effective Engineering
              Solution To Achieve Client Satisfaction
            </h2>
          </div>
        </div>
        {/* <div className="Top-area" style={{ overflowX: "hidden" }}>
          <div className="Top-Left">
            <div className="margin-top">
              <p className="p-quality">To Provide Quality,Time</p>
              <p className="p-innovation">
                Innovative & Cost Effective Engineering Solution
              </p>
              <p className="span-achieve">To Achieve Client Satisfaction</p>
            </div>
          </div>
          <div className="Top-Right">
            <img
              src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="show"
            />
          </div>
        </div> */}
        <p className="p-company" style={{ marginTop: 30 }}>
          Welcome To Our Company
        </p>
        <div className="datamanagement-middle">
          <div className="datamanagement-middle-content">
            <p>
              Tecnico EPC Projects Global Pvt. Limited is an Engineering and
              Management Consultancy specializing in comprehensive services for
              the Oil & Gas, Refining, Petrochemical, and Water Treatment
              industries. Their expertise lies in both Basic and Detailed
              Engineering, offering top-notch solutions in these sectors.
            </p>
          </div>
          <div className="datamanagement-middle-img">
            <img
              src="https://images.unsplash.com/photo-1667015048811-612f197bf398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="show"
            />
          </div>
        </div>
        <div className="last-div">
          <div className="last-left">
            <h4>Industries We Serve</h4>

            <div className="main-container">
              <div className="left-home">
                <img
                  src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Left-Home"
                />
                <p>Oil & Gas</p>
              </div>
              <div className="right-home">
                <div className="grid-item">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="show-1"
                  />
                  <p>Petro Chemical</p>
                </div>
                <div className="grid-item">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661900547591-80ee79e20d1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="show-2"
                  />
                  <p>Fertilizers & Chemicals</p>
                </div>
                <div className="grid-item">
                  <img
                    src="https://images.unsplash.com/photo-1533077162801-86490c593afb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="show-3"
                  />
                  <p>Waste Water Treatment</p>
                </div>
                <div className="grid-item">
                  <img
                    src="https://images.unsplash.com/photo-1509390981263-4d8df07d826c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="show"
                  />
                  <p>Renewables</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="last-right">
            <Popup />
          </div> */}
        </div>
      </div>
      <div className="last-middle">
        <p>
          TEPC, beyond its Engineering and Management Consultancy expertise,
          extends its services to encompass training, procurement management,
          and skilled manpower supply. These additional offerings play pivotal
          roles in facilitating project execution across Engineering,
          Construction, and Commissioning phases, ensuring comprehensive support
          for project success.
        </p>
      </div>
      <Footer />
    </>
  );
}
