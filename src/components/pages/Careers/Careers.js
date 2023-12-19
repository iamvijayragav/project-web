import React from 'react';
import { useState } from 'react';
import './Careers.css'
import JobOpeningCard from '../Cards/JobOpeningCard';
import ApplyForm from './ApplyForm';
function Careers() {

  const [isApply, setIsApply] = useState(false);
  return (
    <div className='main-career'>
      <div className="content-container">
        <div className="job-openings-container">
          <h2>Job Openings</h2>
          <div className="job-opening-cards" >
            <JobOpeningCard
              onApply={setIsApply}
              title="Frontend Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
            <JobOpeningCard
              onApply={setIsApply}
              title="Backend Developer2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur ligula vel augue placerat, eu sagittis est feugiat."
            />
          </div>
        </div>
      </div>
      {
        isApply && (
          <div className="apply-form-container">
            <h2>Apply Now</h2>
            <ApplyForm onSent={setIsApply}/>
          </div>
        )
      }

    </div>
  )
}

export default Careers