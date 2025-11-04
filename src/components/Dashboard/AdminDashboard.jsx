import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import { motion } from "framer-motion";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Header changeUser={props.changeUser} />
      </motion.div>

      {/* Dashboard Content */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Create Task */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <CreateTask />
        </motion.div>

        {/* Right side - All Tasks */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <AllTask />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
