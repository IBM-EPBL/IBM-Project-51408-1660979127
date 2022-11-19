import React from "react";
import Sidebar from "../components/Sidebar";
import "./home.scss";
import maxhrchest from "../assets/maxhrchest.jpg";
import maxhrage from "../assets/maxhrage.jpg";

const Maxhr = () => {
  return (
    <div className="home ">
      <Sidebar />
      <div className="homeContainer md:ml-7">
        <h1 className="text-center font-Mont uppercase mt-3">Max Heart Rate Visualizations</h1>
        <br />
        <h3>Max HR by Chest pain type</h3>
        <br />
        <p>
          Here 1 refers to Typical Angina; 2 - Atypical Angina; 3 - Non anginal
          pain; 4 - Asymptotic pain
        </p>
        <p>Max HR is high for atypical angina</p>
        <p>Overall the chest pain types, the average max hr is 149.7</p>
        <br />
        <img src={maxhrchest} alt="" className="h-45 w-45" />
        <br />
        <br />
        <h3>Max HR by Age</h3>
        <br />
        <img src={maxhrage} alt="" className="h-45 w-45" />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Maxhr;
