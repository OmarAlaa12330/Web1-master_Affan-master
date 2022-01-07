import './StoryCard.css'
import { useNavigate } from 'react-router-dom';

export default function StoryCard(props) {
  let navigate = useNavigate()

  return (
    <div className="story-card">
      <img className ="profile-story-image" src={props.data.image} alt="image" />
      <section className = "title-para">
        <h1>{props.data.name}</h1>
        <p className="description">{props.data.description}</p>
        <button onClick = {()=> navigate("/Blogs")} className="read-more">READ MORE</button>
      </section>
      
    </div>
  );
}
