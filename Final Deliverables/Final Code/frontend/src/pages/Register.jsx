import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  function registerUser(event) {
    event.preventDefault();

    const userDetails = {
      fullName: name,
      email,
      password,
    };

    if (
      userDetails &&
      userDetails.fullName &&
      userDetails.password &&
      userDetails.email
    ) {
      // console.log('Hi'); // eslint-disable-line no-console
      axios
        .post("http://127.0.0.1:5000/register", userDetails)
        .then(() => {
          // console.log(response.json); // eslint-disable-line no-console
          navigate("/login");
        })
        .catch((ex) => console.log(ex)); // eslint-disable-line no-console
    }
  }

  return (
    <div className="body-bg min-h-screen pt-10 md:pt-5 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <a href="/">
          <h1 className="text-2xl font-bold text-white text-center uppercase">
            Register In
          </h1>
        </a>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-xl">
            Welcome to Heart Disease Finding Web App
          </h3>
          <p className="text-gray-600 pt-2">Sign Up to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={registerUser}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="conf-password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-cyan-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <button
              className="bg-cyan-600 mb-1 hover:bg-cyan-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 flex justify-center items-center text-center"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">
          Already have an account?
          <Link to="/login" className="font-bold hover:underline">
            {" "}
            Login In
          </Link>
          .
        </p>
      </div>

      <footer className="max-w-lg mx-auto flex justify-center text-white">
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <span className="mx-3">•</span>
        <Link to="/" className="hover:underline">
          Privacy
        </Link>
      </footer>
    </div>
  );
};

export default Register;
