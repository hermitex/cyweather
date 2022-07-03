import { useEffect, useState } from "react";
import "../assets/css/dashboard.css";
import Hero from "./Hero";
import Widget from "./Widget";

const Dashboard = ({ data, initializeDashBoard }) => {
  const [weatherData, setweatherData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      setweatherData(data);
    } else {
      async function fetchData() {
        const response = await initializeDashBoard().then((data) => data);
        setweatherData(response);
      }
      fetchData();
    }
  }, [data, initializeDashBoard]);
 
  if (weatherData.length > 0) {
    const [temperature, wind, humidity, cloud] = [...weatherData];
    return (
      <div className="forecast-container">
        <div className="top temperature">
          <Hero data={temperature.hourly} title="Temperature" id="hero" />
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
};

export default Dashboard;
