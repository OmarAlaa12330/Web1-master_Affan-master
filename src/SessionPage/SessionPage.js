
import './SessionPage.css';
import data from './Backend.json';

export default function App() {
  return (
    <div className = "session-page">
      {data.map((data)=>(
        <div className = "content">
          <div className = "text">
            <h1>{data.title}</h1>
            <div>{data.text}</div>
          </div>
          <div className = "morecontent">
            <img className = "image" src = {data.image}/>
            <div>
              <div className = "info">            
                  <div>{data.coach}</div>
                  <div>{data.time} </div>
                  <div>{data.price}</div> 
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
