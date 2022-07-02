import Hero from "./Hero";
import Widget from "./Widget";

function DisplayForecast(props) {
  if (props.data.length > 0) {
    const [temperature, wind, humidity, cloud] = [...props.data];
    return (
      <div className="forecast-container">        
        <div className="top temperature">
          <Hero data={temperature.hourly} title="Temperature" />
          <div className="inner-widgets">
            <div className="wind-speed">
              <div><h2>Wind Speed</h2></div>
              <Widget data={wind.hourly} title="Wind Speed" />
            </div>
            <div className="relative-humidity">
            <div><h2>Relative Humidity</h2></div>
              <Widget data={humidity.hourly} title="Relative Humidity" />
            </div>
            <div className="cloud-cover">
            <div><h2>Cloud Cover</h2></div>
              <Widget data={cloud.hourly} title="Cloud Cover" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayForecast;
