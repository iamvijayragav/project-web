import React, { useRef, useState } from "react";
import "./ApplyForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ApplyForm = ({ onApply, jobTitle }) => {
  // const notify = () =>
  //   toast(
  //     "🤗 Your Application was Sent! Our Recruiting team will contact you soon! Stay tuned for further updates"
  //   );
  const [formError, setFormError] = useState(null);
  const initialJobTitle = useRef(jobTitle);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const resumeRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleReset = (e) => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    resumeRef.current.value = null;
    subjectRef.current.value = initialJobTitle.current;
    messageRef.current.value = "";
    setFormError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !subjectRef.current.value ||
      !resumeRef.current.files[0] ||
      !messageRef.current.value
    ) {
      setFormError("* Please fill all the required fields.");
      return;
    }

    onApply(false);
    alert(
      "Your Application was Sent!  \nOur Recruiting team will contact you soon! \nStay tuned for further updates."
    );

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      resume: resumeRef.current.files[0],
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    console.log("Form Data:", formData);
    setFormError(null);
    e.target.form.reset();
  };

  return (
    <>
      {onApply && (
        <div className="apply-form">
          <div className="container">
            <div className="screen">
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT </span>
                    <span>US</span>
                  </div>
                  <p>
                    Join our dynamic team, where innovation thrives and every
                    voice matters. Discover endless opportunities for growth and
                    a supportive, inclusive culture that values your unique
                    contribution.
                  </p>
                  <img
                    src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/download-49.jpeg"
                    alt=""
                  />
                </div>
                <div className="screen-body-item">
                  <form className="app-form">
                    {formError && (
                      <div className="error-message" style={{ color: "red" }}>
                        {formError}
                      </div>
                    )}
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        ref={nameRef}
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="EMAIL"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        type="text"
                        className="app-form-control"
                        placeholder="SUBJECT"
                        ref={subjectRef}
                        defaultValue={jobTitle}
                        readOnly
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        type="file"
                        className="app-form-control"
                        placeholder="RESUME"
                        ref={resumeRef}
                        required
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        className="app-form-control"
                        placeholder="MESSAGE"
                        ref={messageRef}
                        required
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <span onClick={handleReset} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon className="rotate" icon={faRefresh} />
                      </span>
                      <button
                        type="submit"
                        className="app-form-button"
                        onClick={(e) => {
                          e.preventDefault();
                          // notify(e);
                          handleSubmit(e);
                        }}
                        // onClick={notify}
                      >
                        SEND
                      </button>

                      <button
                        className="app-form-button"
                        onClick={() => onApply(false)}
                      >
                        WITHDRAW
                      </button>
                      {/* <ToastContainer /> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyForm;
