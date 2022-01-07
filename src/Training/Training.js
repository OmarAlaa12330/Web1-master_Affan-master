import "./Training.css";

import WorkoutCard from "./WorkoutCard";
import data from './test.json';

export default function Training() {
  return (
    <div className="training-page">
      {data.map((info) => { 
         return <WorkoutCard data={info} />;
      })}
    </div>
  );
}