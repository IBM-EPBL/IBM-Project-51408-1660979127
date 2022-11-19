import axios from "axios";
import React, { useState, Suspense, useRef } from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Model } from '../components/Model'

function Results() {
  const ref = useRef()
  const predictionObject = JSON.parse(sessionStorage.getItem("prediction"));
  const [saveState, setSaveState] = useState(false);
  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };
  function saveResult() {
    axios
      .put("http://127.0.0.1:5000/save_result", predictionObject, { headers })
      .then(() => setSaveState(true))
      .catch((ex) => console.log(ex)); // eslint-disable-line no-console
  }

  return (
    <div className="main max-w-md mx-auto md:max-w-xl overflow-x-hidden">
      <h1 className="text-center text-md mt-5 font-Mont">
        Based on the parameters provided, our ML model has predicted the{" "}
        <sapn className="text-xl text-green-600 underline">{predictionObject.prediction}</sapn> of heart disease
      </h1>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}
        style={{
          height: "50vh",
          width: "100vw",
          // maxHeight: "500px"
          zIndex: -1
        }}
        className="max-h-[330px] md:max-h-[800px]"
      >
        <PerspectiveCamera makeDefault fov={50} position={[90, 20, 80]} />
        <ambientLight />
        <ambientLight />
        <ambientLight />
        <pointLight intensity={1} position={[200, 0, 100]} />
        <pointLight intensity={1} position={[200, 0, 100]} />
        <directionalLight intensity={1} position={[100, 200, 100]} />
        <directionalLight intensity={1} position={[-100, -200, -100]} />
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
            false
            <Model />
            false
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
      <div className="button-container space-y-3 md:space-x-5 md:mb-10">
        {saveState ? (
          <h3>Your result has been successfully saved</h3>
        ) : (
          <>
            <h3 className="font-Mont">Do you want to save the results?</h3>
            <button type="submit" onClick={saveResult} className="bg-green-500 px-16 py-3 rounded-md">
              Save
            </button>
          </>
        )}
        <Link to="/dashboard">
          <button type="submit" className="bg-red-500 px-10 py-3 rounded-md">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Results;
