import video from "../assets/videos/clouds.mp4";
import Widget from "./Widget";
function Hero({ data, title }) {
  return (
    <div className="hero-container">
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop poster="">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="temp-widget flex flex-row">
        <div className="summary flex">
         <div className="first flex flex-row">
          <div className="location">
            <h3>Nairobi</h3>
          </div>
          <div className="date">
            <h3>{new Date().getFullYear()}</h3>
          </div>
         </div>
         <div className="middle flex">
          <div className="average-temp ">
            <div className="temp">12</div>
            <small className="comment">Mostly Clear</small>
          </div>
         </div>
         <div className="bottom flex flex-row">
          <div className="wind">12km/h</div>
          <div className="humidity">40</div>
          <div className="clouds">10%</div>
         </div>
        </div>
        <div className="hero-chart-container">
        <Widget data={data} title={title} aspect={2}/>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
