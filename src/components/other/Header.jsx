import React from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  const username = props.data ? props.data.firstName : "Admin";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between bg-white shadow-md rounded-2xl px-6 py-4 border border-emerald-100"
    >
      {/* Greeting */}
      <div>
        <h1 className="text-xl font-medium text-gray-700">
          Hello,
          <br />
          <span className="text-2xl font-bold text-emerald-600">
            {username} 👋
          </span>
        </h1>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2 rounded-xl shadow-md transition"
      >
        Log Out
      </button>
    </motion.header>
  );
};

export default Header;
