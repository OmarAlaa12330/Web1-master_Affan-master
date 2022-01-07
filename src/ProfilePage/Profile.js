import catfish from "./ProfileData.json";
import "./Profile.css";

export default function Profile() {

  //funtion to limit characters appearing in bio
  const LimitText = ({ content, limit }) => {
    if (content.length <= limit) {
      return <div>{content}</div>;
    } else {
      const toShow = content.substring(0, limit) + "...";
      return <div>{toShow}</div>;
    }
  };

  return (
    <div className="profile-page">
      {catfish.map((catfish) => (
        <div className="profile-container">
          <div className="header-container">
            <img src={catfish.image} alt="lol" />
            <h2>{catfish.FirstName + " " + catfish.LastName}</h2>
          </div>
          <p>{catfish.Membership}</p>
          <div className="bio">
            Bio:
            <br /> <LimitText content={catfish.Bio} limit = {200}/>
            {
              //remember character limit need to be added
            }
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
          </section>
        </div>
      ))}
    </div>
  );
}
