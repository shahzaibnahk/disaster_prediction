import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/auth/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        action=""
        className="w-[420px] p-4 bg-zinc-900 border border-zinc-800 flex flex-col gap-2 rounded-lg"
      >
        <div className="mb-2">
          <h2 className="text-3xl font-bricolage font-medium">Login</h2>
          <p>Enter Your Credentials</p>
        </div>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-4 rounded-lg outline-none border border-zinc-700 bg-zinc-800 text-white"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          className="w-full p-4 rounded-lg outline-none border border-zinc-700 bg-zinc-800 text-white"
        />
        <button className="w-full p-3 bg-red-500 rounded-lg hover:bg-red-800 transition-colors cursor-pointer">
          <span className="font-bricolage text-lg font-medium">Login</span>
        </button>

        <p className="text-center">
          New Here?{" "}
          <Link to={"/register"} className="text-red-400 font-bricolage">
            Register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
