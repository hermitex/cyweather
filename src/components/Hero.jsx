<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
>>>>>>> b83c5f8d898efd5ff9c6c383b29e33d22a11c416
import "../assets/css/hero.css";
import video from "../assets/videos/clouds1.mp4";
import Widget from "./Widget";

const getDate = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let year = date.getFullYear();
  let seconds = date.getSeconds();
  return `${year} - ${hours}:${minutes}:${seconds}`;
};

const Hero = ({ data, title, id }) => {
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
<<<<<<< HEAD
              <h3>
                {" "}
                <i class="fa-solid fa-location-dot"></i> Nairobi
              </h3>
            </div>
            <div className="date">
              <h3>
                <i class="fa-regular fa-calendar-days"></i> {date}
              </h3>
=======
              <h3>Nairobi</h3>
            </div>
            <div className="date">
              <h3>{new Date().getFullYear()}</h3>
>>>>>>> b83c5f8d898efd5ff9c6c383b29e33d22a11c416
            </div>
          </div>
          <div className="middle flex">
            <div className="average-temp ">
<<<<<<< HEAD
              <div className="temp">12</div>
=======
              <div className="temp flex">
                <var className="xl-font">12 <sup>0</sup></var>
              </div>
>>>>>>> b83c5f8d898efd5ff9c6c383b29e33d22a11c416
              <small className="comment">Mostly Clear</small>
            </div>
          </div>
          <div className="bottom flex flex-row">
<<<<<<< HEAD
            <div className="wind">
              <i class="fa-solid fa-wind"></i> 12km/h
            </div>
            <div className="humidity">
              <i class="fa-solid fa-droplet"></i> 40
            </div>
            <div className="clouds">
              <i class="fa-solid fa-cloud"></i> 10%
            </div>
=======
            <div className="wind">12km/h</div>
            <div className="humidity">40</div>
            <div className="clouds">10%</div>
>>>>>>> b83c5f8d898efd5ff9c6c383b29e33d22a11c416
          </div>
        </div>
        <div className="hero-chart-container">
          <Widget data={data} title={title} aspect={2} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
