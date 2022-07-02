import Hero from "./Hero";
import Widget from "./Widget";

function DisplayForecast(props) {
  if (props.data.length > 0) {
    const [temperature, wind, humidity, cloud] = [...props.data];
    return (
      <div className="forecast-container">
        s
        <div className="top temperature">
          <Hero />
          <div className="inner-widgets">
            <div className="wind-speed">
              <Widget data={wind.hourly} title="Wind Speed" />
            </div>
            <div className="relative-humidity">
              <Widget data={humidity.hourly} title="Relative Humidity" />
            </div>
            <div className="cloud-cover">
              <Widget data={cloud.hourly} title="Cloud Cover" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayForecast;
