import './SuccessStories.css'
import PreviewStories from './PreviewStories'

export default function SuccessStories(){

    return(
        <div>
            <div>
                <header className="stories-header">
                    <h1>Success Stories</h1>
                </header>
                <section>
                    <PreviewStories />
                </section>
            </div>
        </div>
    )
}