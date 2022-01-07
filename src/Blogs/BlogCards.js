import { useNavigate } from "react-router-dom";
import react from "react";


export default function BlogCard(props) {
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
        <img src={props.data.image} alt="blog" />
        <h3 className ="blog-title">{props.data.title}</h3>
        <Longtext content={props.data.description} limit={250} />
      </div>
    </div>
  );
}