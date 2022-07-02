import video from "../assets/videos/clouds.mp4";
import Widget from "./Widget";
function Hero({ data, title }) {
  return (
    <div className="hero-container">
      <div className="video-wrapper">
        <video playsInline autoPlay muted loop poster="" >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="temp-widget">
        <div className="summary">
          <h1>Temp Summary</h1>
        </div>
      <Widget data={data} title={title} />
      </div>
      
    </div>
  );
}

export default Hero;
