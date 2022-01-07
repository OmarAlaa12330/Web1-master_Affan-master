import './LandPage.css'


export default function LandPage() {
  return (
    <div className="LandPage">
      <section>
        <div>
          <h1>Welcome to Titanic Fitness</h1>
          <h2>Join the West London leading platform for health and fitness</h2>
          {
            //need to fix css of button (border)
          }
        </div>
        <div>
          <button>HOW TO START</button>
          <button>FIND A COURSE</button>
        </div>
        <div>
          <button>
            GET YOU FREE 7-DAY PERSONALISED WEIGHT-LOSS ACTION PLAN
          </button>
        </div>
      </section>
    </div>
  );
}
