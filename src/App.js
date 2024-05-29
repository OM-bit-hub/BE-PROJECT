import { useEffect,useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/data/fetch",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setData(data[0]);
  };
  useEffect(() => {
    fetchData();
  }
  , []);
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Sun Track
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Logs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SignIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="user container my-3">
        <p><b>UserName </b>: Om Dhengle </p>
        <hr/>
      </div>
      <div className="highlights container">
        <div className="box1 "><b>Production Today</b><p className="inner">0 kWh</p></div>
        <div className="box1 "><b>Total Production</b><p className="inner">0 kWh</p></div>
        <div className="box1 "><b>Income Today </b><p className="inner">0 INR</p></div>
        <div className="box1 "><b>Total Income </b><p className="inner">0 INR</p></div>
      </div><p></p>
      <div className="overview container">
        <h3>Overview</h3>
        <p className="info mx-3" id="TH">
          <p><b>Total Hours : 0</b></p>
        </p>
        <p className="info mx-3" id="CAP">
          <b>Capacity</b> : 18 v
        </p>
        <p className="info mx-3" id="RCO">
          <b>Reduce CO<sub>2</sub></b> : {data.CO2} t
        </p>
        <p className="info mx-3" id="WTH">
          <b>Weather </b>: {data.Weather}
        </p>
        <p className="info mx-3" id="HUM">
          <b>Humidity</b> : {data.Humidity} %
        </p>
        <p className="info mx-3" id="RAM">
          <b>Rainmeter</b> : {data.Rainmeter} mm
        </p>
        <p className="info mx-3" id="TEMP">
          <b>Temperature </b>: {data.Temp} <sup>o</sup>C
        </p>
      </div>

      <div className="footer">
        <div className="row1">
          <a href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="/">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
          </ul>
        </div>

        <div className="row">
          Sun Track Updates Copyright © 2024 - All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
