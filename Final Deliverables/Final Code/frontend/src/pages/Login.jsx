import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginUser(event) {
    event.preventDefault();
    const userDetails = {
      email,
      password,
    };
    // console.log(userDetails); // eslint-disable-line no-console
    if (userDetails && userDetails.email && userDetails.password) {
      axios
        .post("http://127.0.0.1:5000/login", userDetails)
        .then((response) => {
          sessionStorage.setItem("token", response.data.token);
          navigate("/predict");
        })
        .catch((ex) => {
          // console.log(ex); // eslint-disable-line no-console
          // const error = JSON.parse(ex);
          if (ex.response && ex.response.status && ex.response.status === 404) {
            alert("User not found"); // eslint-disable-line no-alert
          } else {
            console.log(ex); // eslint-disable-line no-console
          }
        });
    } else {
      alert("Please enter valid credentials"); // eslint-disable-line no-alert
    }
  }
  return (
    <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <a href="/">
          <h1 className="text-2xl font-bold text-white text-center uppercase">
            Login Page
          </h1>
        </a>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-xl">
            Welcome to Heart Disease Finding Web App
          </h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={loginUser}>
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
            <button
              className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 mb-1 rounded shadow-lg hover:shadow-xl transition duration-200 flex justify-center items-center text-center"
              type="submit"
            >
              Login In
            </button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold hover:underline">
            Register Now
          </Link>
          .
        </p>
      </div>

      <footer className="max-w-lg mx-auto flex justify-center text-white">
        <a href="/" className="hover:underline">
          Contact
        </a>
        <span className="mx-3">•</span>
        <a href="/" className="hover:underline">
          Privacy
        </a>
      </footer>
    </div>
  );
};

export default Login;
