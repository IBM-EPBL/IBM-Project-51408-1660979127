/* eslint-disable react/button-has-type */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PredictionPage() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [chestPainType, setChestPainType] = useState("");
  const [bp, setBp] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [fbs, setFbs] = useState("");
  const [ekg, setEkg] = useState("");
  const [maxHr, setMaxHr] = useState("");
  const [angina, setAngina] = useState("");
  const [stDepression, setStDepression] = useState("");
  const [slopeOfSt, setSlopeOfSt] = useState("");
  const [fluro, setFluro] = useState("");
  const [thallium, setThallium] = useState("");
  const navigate = useNavigate();

  function predictResult(event) {
    event.preventDefault();
    if (
      age &&
      sex &&
      chestPainType &&
      bp &&
      cholesterol &&
      fbs &&
      ekg &&
      maxHr &&
      angina &&
      stDepression &&
      slopeOfSt &&
      fluro &&
      thallium
    ) {
      const predictionParams = {
        age,
        sex,
        chest_pain_type: chestPainType,
        bp,
        cholesterol,
        fbs_over_120: fbs,
        ekg_results: ekg,
        max_hr: maxHr,
        exercise_angina: angina,
        st_depression: stDepression,
        slope_of_st: slopeOfSt,
        number_of_vessels_fluro: fluro,
        thallium,
      };
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      axios
        .post("http://127.0.0.1:5000/predict", predictionParams, { headers })
        .then((response) => {
          predictionParams.prediction = response.data.prediction;
          [predictionParams.date, predictionParams.time] = new Date()
            .toLocaleString()
            .split(", ");
          sessionStorage.setItem(
            "prediction",
            JSON.stringify(predictionParams)
          );
          navigate("/results");
        }) // eslint-disable-line no-console
        .catch((ex) => console.log(ex)); // eslint-disable-line no-console
    }
  }
  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <a href="/">
          <h1 className="text-2xl font-bold text-white text-center uppercase">
            prediction
          </h1>
        </a>
      </header>

      <main className="bg-white max-w-lg mx-auto p-10 md:p-20 my-5 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl text-center">
            Welcome to Heart Disease Finding Web App
          </h3>
          <p className="text-gray-600 pt-2 text-center">Calculate Now</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={predictResult}>
            <div className="title">Enter your details</div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Age
              </p>
              <input
                type="number"
                name="Age"
                id="text-input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              />
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Sex
              </p>
              <select
                name="sex"
                id="sel-input"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Chest Pain Type
              </p>
              <select
                name="chest-pain"
                id="sel-input"
                value={chestPainType}
                onChange={(e) => setChestPainType(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="1">Typical Angina</option>
                <option value="2">Atypical Angina</option>
                <option value="3">Non Anginal Pain</option>
                <option value="4">Asymptomatic Pain</option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Blood Pressure
              </p>
              <input
                type="number"
                name="bp"
                id="text-input"
                value={bp}
                onChange={(e) => setBp(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              />
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Cholesterol
              </p>
              <input
                type="number"
                name="cholesterol"
                id="text-input"
                value={cholesterol}
                onChange={(e) => setCholesterol(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              />
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Fasting Blood Sugar Over 120
              </p>
              <select
                name="fbs"
                id="sel-input"
                value={fbs}
                onChange={(e) => setFbs(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                EKG Results
              </p>
              <select
                name="ekg"
                id="sel-input"
                value={ekg}
                onChange={(e) => setEkg(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="0">Normal</option>
                <option value="1">
                  Having ST-T wave abnormality (T wave inversions and/or ST
                  elevation or depression of greater than 0.05 mV)
                </option>
                <option value="2">
                  Showing probable or definite left ventricular hypertrophy by
                  Estes`&apos;` criteria
                </option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Maximum Heart Rate
              </p>
              <input
                type="number"
                name="mhr"
                id="text-input"
                value={maxHr}
                onChange={(e) => setMaxHr(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              />
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Exercise Induced Angina
              </p>
              <select
                name="angina"
                id="sel-input"
                value={angina}
                onChange={(e) => setAngina(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                ST Depression
              </p>
              <input
                type="number"
                name="stdep"
                id="text-input"
                value={stDepression}
                onChange={(e) => setStDepression(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              />
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Slope of ST
              </p>
              <select
                name="slope-st"
                id="sel-input"
                value={slopeOfSt}
                onChange={(e) => setSlopeOfSt(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="1">Upsloping</option>
                <option value="2">Flat</option>
                <option value="3">Downsloping</option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Number of major vessels colored by Flouroscopy
              </p>
              <select
                name="fluro"
                id="sel-input"
                value={fluro}
                onChange={(e) => setFluro(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="mb-6 pt-1 rounded bg-gray-200">
              <p className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Thallium
              </p>
              <select
                name="thallium"
                id="sel-input"
                value={thallium}
                onChange={(e) => setThallium(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-2"
              >
                <option value="-1">Select Value</option>
                <option value="3">Normal</option>
                <option value="6">Fixed Defect</option>
                <option value="7">Reversable Defect</option>
              </select>
            </div>
            <button
              type="text"
              className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 mb-1 rounded shadow-lg hover:shadow-xl transition duration-200 flex justify-center items-center text-center"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default PredictionPage;
