import React from 'react'
import './Carrers.css'
import JobOpeningCard from '../Cards/JobOpeningCard';
import ApplyForm from './ApplyForm';
function Careers() {
  return (
    <div className='main-career'>
      <div className="content-container">
        <div className="job-openings-container">
          <h2>Job Openings</h2>
          <div className="job-opening-cards">
            <JobOpeningCard
              title="Frontend Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />

            {/* Add more job opening cards as needed */}
          </div>
        </div>
      </div>
      <div className="apply-form-container">
        <h2>Apply Now</h2>
        <ApplyForm />
      </div>
    </div>
  )
}

export default Careers