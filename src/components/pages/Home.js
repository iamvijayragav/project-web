import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Modal/Popup";

export default function Home() {
  return (
    <>
      <div>
        <div className="Top-area">
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
        </div>
        <p className="p-company">Welcome To Our Company</p>
        <hr className="hr-first" />
        <hr className="hr-second" />
        <div className="welcome">
          <div className="left-content">
            <img
              src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="show"
            />
          </div>

          <div className="middle-content">
            <p>
              Tecnico EPC Projects Global Pvt. Limited is an Engineering and
              Management Consultancy specializing in comprehensive services for
              the Oil & Gas, Refining, Petrochemical, and Water Treatment
              industries. Their expertise lies in both Basic and Detailed
              Engineering, offering top-notch solutions in these sectors.
            </p>
          </div>

          <div className="right-content">
            <img
              src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="last-div">
          <div className="last-left">
            <h4>Industries We Serve</h4>

            <div className="list-item">
              <FontAwesomeIcon icon={faCircleDot} />
              <p>Oil & Gas</p>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCircleDot} />
              <p>Petrochemical</p>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCircleDot} />
              <p>Fertilizers</p>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCircleDot} />
              <p>Chemicals</p>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCircleDot} />
              <p>Waste Water Treatement</p>
            </div>
            <div className="list-item">
              <FontAwesomeIcon icon={faCircleDot} />
              <p>Renewables</p>
            </div>
          </div>
          <div className="last-middle">
            <p>
              TEPC, beyond its Engineering and Management Consultancy expertise,
              extends its services to encompass training, procurement
              management, and skilled manpower supply. These additional
              offerings play pivotal roles in facilitating project execution
              across Engineering, Construction, and Commissioning phases,
              ensuring comprehensive support for project success.
            </p>
          </div>
          <div className="last-right">
            <Popup />
          </div>
        </div>
        <div className="footer">
          <p>Copyright © tecnicoepc.com by All Right Reserved. </p>
        </div>
      </div>
    </>
  );
}
