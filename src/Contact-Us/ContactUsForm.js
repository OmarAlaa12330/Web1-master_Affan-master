import "./ContactUsPage.css";
import React, { useState, useEffect } from "react";
import logo from "./logo.jpg";

import Facebook from "./Facebook_icon.png";
import Instagram from "./instagram_icon.png";
import Twitter from "./Twitter.png";

function ContactUsForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [enquiry, setenquiry] = useState("");
  const [message, setmessage] = useState("");
  const [valid, setvalid] = useState(false);

  function updatename(event) {
    setname(event.target.value);
  }

  function updateemail(event) {
    setemail(event.target.value);
  }

  function updateenquiry(event) {
    setenquiry(event.target.value);
  }

  function updatemessage(event) {
    setmessage(event.target.value);
  }

  function submitInfo(event) {
    event.preventDefault();
    validateForm();
    if (valid === true) {
      alert("We will get back to you soon.");
    } else {
      alert("Please fill all fields of the form.");
    }
  }

  const checkMessage = () => {
    if (message.split(" ").length >= 5) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    if (name === "" || email === "" || enquiry === "" || !checkMessage) {
      setvalid(false);
    } else {
      setvalid(true);
    }
  };

  return (
    <div className="contact-page">
      <div>
        <form
          onSubmit={(event) => submitInfo(event)}
          className="form-submission"
        >
          <h1 className="form-title"> Contact Us</h1>
          <label className="label-for-input">
            Name
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => updatename(event)}
            />
          </label>
          <label className="label-for-input">
            Email
            <input
              className="input-field"
              type="email"
              name="Email"
              placeholder=" Enter your email"
              value={email}
              onChange={(event) => updateemail(event)}
            />
          </label>
          <label className="label-for-input">
            Enquiry
            <input
              className="input-field"
              type="text"
              name="Enquiry"
              placeholder="Enter your enquiry"
              value={enquiry}
              onChange={(event) => updateenquiry(event)}
            />
          </label>
          <label className="label-for-input">
            Message
            <textarea
              className="input-field"
              type="text"
              name="Message"
              placeholder="Enter your message"
              value={message}
              onChange={(event) => updatemessage(event)}
              rows = "7"
              style ={{"height": "auto", "width":"100%","resize":"none"}}
            />
          </label>
          <input value="SEND MESSAGE" className="submit" type="submit" />
        </form>
        <img className="Titanic-Fitness-logo" src={logo} alt="logo"></img>
      </div>
      <div className="find-us">
        <h2>Find Us</h2>
      </div>
      <div className="logos">
        <a href="https://www.facebook.com/TenHealthFitness/photos/pb.181187291162.-2207520000../10159727844071163/?type=3&theater">
          {" "}
          <img src={Facebook} alt="Facebook logo" />
        </a>
        <a href="https://www.instagram.com/explore/tags/fitness/?hl=en">
          {" "}
          <img src={Instagram} alt="Instagram logo" />
        </a>
        <a href="https://twitter.com/hashtag/fitness">
          {" "}
          <img src={Twitter} alt="Twitter logo" />
        </a>
      </div>
    </div>
  );
}

export default ContactUsForm;
