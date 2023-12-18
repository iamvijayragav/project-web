import React, { useRef } from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const resumeRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleReset = (e) => e.target.form.reset();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form data using refs
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      resume: resumeRef.current.files[0],
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    console.log('Form Data:', formData);

    // Reset form fields
    e.target.form.reset();
  };

  return (
    <div className="apply-form">
      <div className="container">
        <div className="screen">
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
            </div>
            <div className="screen-body-item">
              <form className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME" ref={nameRef} required />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" ref={emailRef} required/>
                </div>
                <div className="app-form-group">
                  <input type='text' className="app-form-control" placeholder="SUBJECT" ref={subjectRef} required/>
                </div>
                <div className="app-form-group">
                  <input type='file' className="app-form-control" placeholder="RESUME" ref={resumeRef} required/>
                </div>
                <div className="app-form-group message">
                  <textarea className="app-form-control" placeholder="MESSAGE" ref={messageRef} required/>
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" onClick={handleReset}>CANCEL</button>
                  <button type="submit" className="app-form-button" onClick={handleSubmit}>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
