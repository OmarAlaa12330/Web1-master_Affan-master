import "./PreviewStories.css";
import FakeProfiles from "./FakeProfiles.json";
import StoryCard from "./StoryCard";

export default function PreviewStories(props) {
  return (
    <div className= "preview-stories">
      {FakeProfiles.map((info) => (
        <StoryCard data={info} />
      ))}
    </div>
  );
}
/*
<div className="Hello">
<img src = "" alt = "image" />
<section>
    <h1></h1>
</section>
</div>
*/
