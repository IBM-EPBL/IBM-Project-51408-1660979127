import React from "react";
import Sidebar from "../components/Sidebar";
import "./home.scss";
import heartchol from "../assets/heartchol.jpg";
import heartage from "../assets/heartage.jpg";
import hesexpre from "../assets/hesexpre.jpg";

const Heartdisease = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer md:ml-7">
        <h1 className="text-center font-Mont uppercase mt-3">Heart Disease Factors Visualizations</h1>
        <br />
        <h3>Heart Disease by Cholesterol</h3>
        <br />
        <img src={heartchol} alt="" className="h-45 w-45" />
        <br />
        <h3>Heart Disease by Age</h3>
        <br />
        <img src={heartage} alt="" className="h-45 w-45" />
        <br />
        <h3>Heart Disease by Sex</h3>
        <br />
        <p>
          Heart diseases occur more in men in comparison to women according to
          our data.
        </p>
        <br />
        <img src={hesexpre} alt="" className="h-45 w-45" />
      </div>
    </div>
  );
};

export default Heartdisease;
