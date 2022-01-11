import { useState, useEffect } from "react";
import users from "./testData.json";
import './CreateAccount.css'
import { Link, useNavigate } from "react-router-dom";
import './CreateAccount.css'
import {persona} from "../ProfilePage/Profiletest";
import catfish from '../ProfilePage/ProfileData.json'

export default function CreateAccount(props) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Age, setAge] = useState(23);
  const [checkbox, setcheckbox] = useState(false);
  const [valid, setvalid] = useState(false);
  const navigate = useNavigate();
  //let gender = "";
  let passwordsame = false;

  const checkPasswordIsValid = () => {
    let errorArr = []
    if (!(password.match(/[a-z]/) && password.match(/[A-Z]/))) { //check contain one UPPER one lower
      errorArr.push("- Password must contain one uppercase AND one lowercase letter \n")
    }
    if (password.length < 8){ 
      errorArr.push("- Password must at LEAST be 8 characters long. \n")
    }
    if (!password.match(/\d/)) { //check containment of a number
      errorArr.push("- Password must contain at leat one number. \n")
    }
    if (!password.match(/[*@!#%&()^~{}]+/)) { //check at least one special character
      errorArr.push("- Password must contain at least one special character.\n")
    }
    if (errorArr.length !== 0){
      alert(errorArr)
      return false;
    } else return true;
  }

  function checkPasswordsSame() {
    if (password === confirmpassword) {
      passwordsame = true;
      if (checkPasswordIsValid()) {
        
        let dataObject = [
          {
            "FirstName": firstname,
            "LastName": lastname,
            "Membership": 'free',
            "Email": email,
            "Phone": ContactNumber,
            "Age": Age,
            "Weight": "82",
            "Height": {
              "Feet": "5",
              "Inches": "11"
            },
            "Bio": "On a mission to inspire one new person everyday to exercise and cook a healthy meal",
            "image": "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          }
        ]
        localStorage.setItem('user',JSON.stringify(dataObject))
        localStorage.setItem('isLoggedIn',"TRUE")

        alert("Account Created");
        navigate("/Profile-Page");
      }
    } else {
      passwordsame = false;
      alert("Passwords must match");
    }
  }

  function checkUserExists() {
    let existinguser = false;

    users.map((user) => {
      if (email === user.email) {
        existinguser = true;
      }
    });
    if (existinguser === true) {
      alert("Email has already been registered");
    } else {
      checkPasswordsSame();
      if (passwordsame === false) {
        setpassword("");
        setconfirmpassword("");
      }
    }
  }

  useEffect(() => {
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      setvalid(false);
    } else {
      setvalid(true);
    }
  }, [firstname, lastname, email, password, confirmpassword]);

  return (
    <div className="create-account-box">
      <h1 className="title">Create your account</h1>
      <form className="form-box" onSubmit={(event) => checkUserExists(event)}>
        <div className="names-div">
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(event) => setfirstname(event.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(event) => setlastname(event.target.value)}
          />
        </div>
        {/*
        <div >
          <p> Gender</p>
          <ul className="gender-options">
            <li><input type="radio" name="gender" value="Male" checked={gender="Male"}/>Male</li>
            <li><input type="radio" name="gender" value="Female" checked={gender="Female"}/>Female</li>
            <li><input type="radio" name="gender" value="Prefer not say" checked={gender="Prefer not to say"}/>Prefer not say</li>
          </ul>
        </div>
        */}
        <div className="email-div">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
        </div>
        <div className="password-div">
          <input
            type={!checkbox ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
          <input
            type={!checkbox ? "password" : "text"}
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(event) => setconfirmpassword(event.target.value)}
          />
        </div>
        <div className="show-password-div">
          <input
            type="checkbox"
            value="Show password"
            checked={checkbox}
            onClick={() => setcheckbox(!checkbox)}
          />
          <label>Show Password</label>
        </div>
        <div className="button-div">
          <input
            className={valid ? "submit-button" : "submit-button-disabled"}
            type="submit"
            value="Submit"
            disabled={!valid}
          />
        </div>

        <div>
          {" "}
          <Link to="/Log-In">
            {" "}
            Already have an account? Click Here to log in{" "}
          </Link>{" "}
        </div>
      </form>
    </div>
  );
}
