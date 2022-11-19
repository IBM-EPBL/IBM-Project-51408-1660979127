import React from "react";
import Sidebar from "../components/Sidebar";
import "./home.scss";
import bpage from "../assets/bpage.jpg";
import bpbychest from "../assets/bpbychest.jpg";

const Bp = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer md:ml-7">
        <h1 className="text-center font-Mont uppercase mt-3">BP Visualizations</h1>
        <br />
        <h3>BP by Age</h3>
        <br />
        <p>Over all ages, the average of BP is 131.3.</p>
        <p>BP is unusually high when Age is 59.</p>
        <br />
        <img src={bpage} alt="" className="h-45 w-45" />
        <br />
        <br />
        <h3>BP by Chest pain type</h3>
        <br />
        <p>
          Here 1 refers to Typical Angina; 2 - Atypical Angina; 3 - Non anginal
          pain; 4 - Asymptotic pain
        </p>
        <br />
        <img src={bpbychest} alt="" className="h-45 w-45" />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Bp;
