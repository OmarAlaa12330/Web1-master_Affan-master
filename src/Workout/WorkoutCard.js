import { useNavigate } from "react-router-dom";


export default function WorkoutCard(props) {
  let navigate = useNavigate();  //navigation from page to another

  //funtion to limit characters appearing in preview workout
  const Longtext = ({ content, limit }) => {
    if (content.length <= limit) {
      return <div>{content}</div>;
    } else {
      const toShow = content.substring(0, limit) + "...";
      return <div>{toShow}</div>;
    }
  }; //end function

  return (
    <div>
      <div onClick={() => navigate('/Session-page')} className="card">
        {
          // ^= navigation to workout page
          // V=mapping the data from json file to display inside the container
        }
        <img src={props.data.image} alt="workout" />
        <h3>{props.data.title}</h3>
        <Longtext content={props.data.description} limit={250} />
      </div>
    </div>
  );
}