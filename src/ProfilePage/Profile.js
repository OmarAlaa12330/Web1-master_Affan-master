import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  //BUGS WITH USENAVIGATE NEED TO BE FIXED

  //funtion to limit characters appearing in bio
  const LimitText = ({ content, limit }) => {
    let navigate = useNavigate();

    if (content.length <= limit) {
      return <div>{content}</div>;
    } else {
      const toShow = content.substring(0, limit) + "...";
      return <div>{toShow}</div>;
    }
  };
  let userInfo = JSON.parse(localStorage.getItem('user'));
  let status = localStorage.getItem('isLoggedIn')

  const logOutFunc =()=>{
    localStorage.setItem('IsLoggedIn', 'FALSE')
    navigate('/Log-in')
  }

  return (

    <div className={status === "TRUE" ? "profile-page" : "not-logged-in"}>

      {
        userInfo === null ? (
          <p>No info</p>
        ) :
          userInfo.map((catfish) => (
            <div className="profile-container">
              <div className="header-container">
                <img src={catfish.image} alt="lol" />
                <section>
                  <h2>{catfish.FirstName + " " + catfish.LastName}</h2>
                  <p>tier: {catfish.Membership}</p>
                </section>

              </div>

              <div className="bio">
                Bio:
                <br /> <LimitText content={catfish.Bio} limit={200} />

              </div>
              <body className="age-weight-heigh-info">
                <div className="container-info">
                  <div className="display-info">
                    <h5 className="shown-info"> Age</h5>
                    {catfish.Age}
                  </div>
                  <div className="display-info">
                    <h5 className="shown-info">Weight</h5>
                    {catfish.Weight} kg
                  </div>
                  <div className="display-info">
                    <h5 className="shown-info">Height</h5>
                    {catfish.Height.Feet}" {catfish.Height.Inches}"
                  </div>
                </div>
              </body>

              <section className="personal-info">
                <div className="shown-info">
                  <p>Name</p>
                  <p>Email</p>
                  <p>Phone</p>
                </div>
                <div>
                  <p>{catfish.FirstName + " " + catfish.LastName}</p>
                  <p>{catfish.Email}</p>
                  <p>{catfish.Phone}</p>
                </div>
                <button className="log-out" onClick={logOutFunc}>LogOut</button>
              </section>
            </div>
          ))}
    </div>
  );
}
