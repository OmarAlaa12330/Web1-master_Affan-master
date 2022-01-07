import './HomePage.css'
import LandPage from './LandPage'
import FreeWorkouts from './FreeWorkouts'
import SuccessStories from './SuccessStory/SuccessStories'
import NewsLetter from './NewsLetter/NewsLetter'

export default function HomePage (){
    return(
        <div className= "home-page">
            <LandPage />
            <FreeWorkouts />
            <SuccessStories />
            <NewsLetter/>
        </div>
    )
}