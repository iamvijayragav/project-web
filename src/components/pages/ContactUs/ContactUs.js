import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p10bpeb",
        "template_rjxevub",
        form.current,
        "jOkGsXaS-RakMpruA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main>
      <section className="contact">
        <div className="container">
          <div className="left">
            <div className="form-wrapper">
              <div className="contact-heading">
                <h1>
                  Let's Work Together<span>.</span>
                </h1>
                <p className="text">
                  Or reach us via :
                  <a href="mailto:Foxeus@email.com">tecnico@gmail.com</a>
                </p>
              </div>

              <form
                action="index.html"
                ref={form}
                method="post"
                className="contact-form"
                onSubmit={sendEmail}
              >
                <div className="input-wrap">
                  <input
                    className="contact-input"
                    name="First_Name"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                  <FontAwesomeIcon className="icon" icon={faAddressCard} />
                </div>

                <div className="input-wrap">
                  <input
                    className="contact-input"
                    name="Last_Name"
                    placeholder="Last Name"
                    type="text"
                    required
                  />
                  <FontAwesomeIcon className="icon" icon={faAddressCard} />
                </div>

                <div className="input-wrap w-100">
                  <input
                    className="contact-input"
                    name="Email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </div>

                <div className="input-wrap textarea w-100">
                  <textarea
                    name="Message"
                    auto-complete="off"
                    className="contact-input"
                    placeholder="Message"
                    required
                  ></textarea>
                  <FontAwesomeIcon className="icon" icon={faInbox} />
                </div>

                <div className="contact-buttons">
                  <input type="submit" value="Send message" className="btn" />
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560885036-3adb13b6308c?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img"
                alt="show"
              />
              <div className="wave-wrap">
                <svg
                  className="wave"
                  viewBox="0 0 783 1536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="wave"
                    d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                  />
                </svg>
              </div>
              <svg
                className="dashed-wave"
                viewBox="0 0 345 877"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="dashed-wave"
                  d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
