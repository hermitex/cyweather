import { useEffect, useState } from "react";
import "../assets/css/hero.css";
import video from "../assets/videos/clouds.mp4";
import CombinedLineChart from "./CombinedLineChart";
import Widget from "./Widget";

const getDate = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const Hero = ({ temperature, wind, humidity, clouds, title, id }) => {
  const [date, setdate] = useState("");

  useEffect(() => {
    setInterval(() => {
      setdate(getDate());
    }, 1000);
  }, [date]);

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
              <h3>
                {" "}
                <i className="fa-solid fa-location-dot"></i> Nairobi
              </h3>
            </div>
            <div className="date">
              <h3>
                <i class="fa-solid fa-clock"></i> {date}
              </h3>
            </div>
          </div>
          <div className="middle flex">
            <div className="average-temp ">
              <div className="temp flex">
                <var className="xl-font">
                  12 <sup>0</sup>
                </var>
                <small className="comment">Mostly Clear</small>
              </div>
            </div>
          </div>
          <div className="bottom flex flex-row">
            <div className="wind">
              <i className="fa-solid fa-wind"></i> 12km/h
            </div>
            <div className="humidity">
              <i className="fa-solid fa-droplet"></i> 40
            </div>
            <div className="clouds">
              <i className="fa-solid fa-cloud"></i> 10%
            </div>
          </div>
        </div>
        <div
          className="combined-chart widget-container hero-chart-container"
          id="hero"
        >
          <CombinedLineChart
            temperature={temperature}
            wind={wind}
            humidity={humidity}
            clouds={clouds}
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
