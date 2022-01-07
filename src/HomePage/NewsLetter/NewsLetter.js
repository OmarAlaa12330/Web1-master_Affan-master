import "./NewsLetter.css";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setemail] = useState("");
  const [required, setRequired] = useState(false);

  const updateEmail = (event) => {
    setemail(event.target.email);
  };

  const toSubscribe = (event) => {
    if (email != "") {
      alert("Thanks for subscribing");
    } else {
      event.preventDefault();
      alert("Please fill the required field");
      setRequired(true);
    }
  };

  return (
    <form onSubmit={(event) => toSubscribe(event)} className="news-letter">
      <header>
        <label>Newsletter </label>{" "}
        {required ? <p className="required-field">*</p> : <></>}
      </header>
      <div>
        <input
          value={email}
          onChange={(event) => updateEmail(event)}
          className="enter-email"
          type="email"
          placeholder="Enter email"
        />
        <input className="enter-button" type="submit" value="ENTER" />
      </div>
    </form>
  );
}
