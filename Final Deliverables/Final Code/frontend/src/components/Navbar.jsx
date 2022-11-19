import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/DS.png';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="ihd__navbar border-b">
      <div className="ihd__navbar-links justify-between">
        <div className="ihd__navbar-links_logo">
          <Link to="/"></Link>
        </div>
        <div>
          <Link
            className="mr-3 text-white uppercase text-xs md:text-sm md:mr-5 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-lg"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mr-3 text-white uppercase text-xs md:text-sm md:mr-5 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-lg"
            to="/dashboard"
          >
            DashBoard
          </Link>
          <Link
            className="mr-3 text-white uppercase text-xs md:text-sm md:mr-5 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-lg"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="mr-3 text-white uppercase text-xs md:text-sm md:mr-5 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-lg"
            to="/register"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
