import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Careers.css";
import JobOpeningCard from "../Cards/JobOpeningCard";
import ApplyForm from "./ApplyForm";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [applyInfo, setApplyInfo] = useState({ isApply: false, jobTitle: "" });

  useEffect(() => {
    let isMounted = true;

    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/fetch-job");

        if (isMounted) {
          setJobs(response.data);
        }
      } catch (err) {
        console.error("Error in fetching jobs ", err);
      }
    };
    fetchJobs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="main-career">
      <div className="content-container">
        <div className="job-openings-container">
          <h2>Job Openings</h2>
          <div className="job-opening-cards">
            {jobs.length === 0 ? (
              <p
                className="error-career"
                style={{
                  color: "#d83838",
                  fontSize: 23,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                Currently No Jobs Available!
              </p>
            ) : (
              jobs.map((job, id) => (
                <JobOpeningCard
                  key={id}
                  onApply={(isApply, jobTitle) =>
                    setApplyInfo({ isApply, jobTitle })
                  }
                  title={job.title}
                  description={job.description}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {applyInfo.isApply && (
        <div className="apply-form-container">
          <h2>Apply Now for {applyInfo.jobTitle}</h2>
          <ApplyForm
            onApply={() => setApplyInfo({ isApply: false, jobTitle: "" })}
            jobTitle={applyInfo.jobTitle}
          />
        </div>
      )}
    </div>
  );
}

export default Careers;
