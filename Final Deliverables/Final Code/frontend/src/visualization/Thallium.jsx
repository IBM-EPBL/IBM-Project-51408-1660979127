import React from "react";
import Sidebar from "../components/Sidebar";
import "./home.scss";
import thalage from "../assets/thalage.jpg";
import thalheart from "../assets/thalheart.jpg";

const Thallium = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer md:ml-7">
        <h1 className="text-center font-Mont uppercase mt-3">Thallium</h1>
        <br />
        <h3>Thallium by Age</h3>
        <br />
        <p>Overall the ages, the average thallium is 4.696</p>
        <br />
        <img src={thalage} alt="" className="h-45 w-45" />
        <br />
        <br />
        <h3>Thallium by Heart Diseases Presence/Absence</h3>
        <br />
        <img src={thalheart} alt="" className="h-45 w-45" />
      </div>
    </div>
  );
};

export default Thallium;
