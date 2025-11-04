import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { motion } from "framer-motion";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-x-hidden">
      <div className="p-4 sm:p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Header changeUser={props.changeUser} data={props.data} />
        </motion.div>

        {/* Task Stats - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-6"
        >
          <TaskListNumbers data={props.data} />
        </motion.div>

        {/* Task List - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mt-6"
        >
          <TaskList data={props.data} />
        </motion.div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;