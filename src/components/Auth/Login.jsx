import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md p-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Welcome Back
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-xl outline-none text-gray-900 focus:ring-2 focus:ring-emerald-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-xl outline-none text-gray-900 focus:ring-2 focus:ring-emerald-500 transition"
          />
          <button
            type="submit"
            className="w-full py-3 mt-2 font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
