import "./sidebar.scss"
import { Link } from "react-router-dom";

const Sidebar = () => {


  return (
    <div className="sidebar pr-5 md:pr-0 font-Mont text-cyan-500">
      <div className="center">
        <ul>
          <p className="title">HOME</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">VISUALIZATIONS</p>
          <Link to="/bp" style={{ textDecoration: "none" }}>
            <li>
              <span>BP</span>
            </li>
          </Link>
          <Link to="/cholesterol" style={{ textDecoration: "none" }}>
            <li>
              <span>Cholesterol</span>
            </li>
          </Link>
          <Link to="/maxhr" style={{ textDecoration: "none" }}>
            <li>
              <span>Max HR</span>
            </li>
          </Link>
          <Link to="/heartdisease" style={{ textDecoration: "none" }}>
            <li>
              <span>Heart Disease</span>
            </li>
          </Link>
          <Link to="/thallium" style={{ textDecoration: "none" }}>
            <li>
              <span>Thallium</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <span>Logout</span>
            </li>
          </Link>
        </ul>

      </div>
    </div>
  )
}

export default Sidebar