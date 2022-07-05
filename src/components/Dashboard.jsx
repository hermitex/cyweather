import { useEffect, useState } from "react";
import "../assets/css/dashboard.css";
import CombinedLineChart from "./CombinedLineChart";
import Hero from "./Hero";
import Widget from "./Widget";

const Dashboard = ({ data, initializeDashBoard, location }) => {
  console.log(location)
  const [weatherData, setweatherData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      setweatherData(data);
    } else {
      async function fetchData() {
        const response = await initializeDashBoard(location).then((data) => data);
        setweatherData(response);
      }
      fetchData();
    }
  }, [data, initializeDashBoard, location]);

  if (weatherData.length > 0) {
    const [temperature, wind, humidity, cloud] = [...weatherData];
    return (
      <div className="forecast-container">
        <div className="top temperature">
          <div className="hero">          
             <Hero  temperature={temperature.hourly}
                wind={wind.hourly}
                humidity={humidity.hourly}
                clouds={cloud.hourly}
                title="Combined Chart"  id="hero" />
          </div>
         
          <div className="inner-widgets">
            <div className="wind-speed widget-container">
              <Widget data={wind.hourly} title="Wind Speed" />
            </div>
            <div className="relative-humidity widget-container">
              <Widget data={humidity.hourly} title="Relative Humidity" />
            </div>
            <div className="cloud-cover widget-container">
              <Widget data={cloud.hourly} title="Cloud Cover" />
            </div>
            <div className="temperature widget-container">
              <Widget data={temperature.hourly} title="Temperature" />
            </div>
           
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
