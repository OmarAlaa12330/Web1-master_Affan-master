import { useNavigate } from "react-router-dom";


export default function WorkoutCard(props) {
  let navigate = useNavigate();
  const Longtext = ({ content, limit }) => {
    if (content.length <= limit) {
      return <div>{content}</div>;
    } else {
      const toShow = content.substring(0, limit) + "...";
      return <div>{toShow}</div>;
    }
  };

  return (
    <div>
      <div onClick={() => navigate(props.data.url)} className="card">
        {
         
        }
        <img src={props.data.image} alt="workout" />
        <h3 className="workout-title">{props.data.title}</h3>
        <Longtext content={props.data.description} limit={250} />
      </div>
    </div>
  );
}