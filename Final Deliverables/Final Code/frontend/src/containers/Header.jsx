import { Link } from "react-router-dom";
import "./header.css"

export default function Header() {
  return (
    <div className="ihd__header section__padding" id="home">
      <div className="ihd__header-content">
        <h1 className="gradient__text">
          MCMA Heart Disease Prediction Tool Heart Disease Prediction Tool
        </h1>
        <p>
          CardioCare Heart Disease Prediction Tool provides you the option of
          diagnosing whether you have heart disease or not without visiting a
          hospital.
        </p>

        <div className="ihd__header-content__input">
          <Link to="/register">
            <button type="button">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


