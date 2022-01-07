import './FreeWorkouts.css'
import PreviewWorkout from '../Workout/PreviewWorkout'
import FakeData from './FakeData.json'

export default function FreeWorkouts (){

    return(
    <div className="free-workouts">
        <h3>Free Workouts</h3>
        <section>
            <PreviewWorkout data={FakeData}/>
        </section>

    </div>)
}