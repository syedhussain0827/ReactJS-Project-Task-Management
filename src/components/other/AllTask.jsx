import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { motion } from "framer-motion";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-emerald-700 mb-4">
        📋 Employee Task Overview
      </h2>

      <div className="max-h-[70vh] overflow-y-auto space-y-4">
        {userData.map((employee, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-5 border border-emerald-100 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {employee.firstName} 👤
            </h3>

            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="block text-sm text-gray-500">New</span>
                <span className="font-bold text-lg text-blue-600">
                  {employee.taskCounts.newTask}
                </span>
              </div>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="block text-sm text-gray-500">Active</span>
                <span className="font-bold text-lg text-yellow-600">
                  {employee.taskCounts.active}
                </span>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="block text-sm text-gray-500">Completed</span>
                <span className="font-bold text-lg text-green-600">
                  {employee.taskCounts.completed}
                </span>
              </div>
              <div className="p-2 bg-red-100 rounded-lg">
                <span className="block text-sm text-gray-500">Failed</span>
                <span className="font-bold text-lg text-red-600">
                  {employee.taskCounts.failed}
                </span>
              </div>
              <div className="p-2">
                {/* Optional: Add button to view details */}
                <button className="text-xs bg-emerald-600 text-white py-1 px-3 rounded hover:bg-emerald-700 transition">
                  View Tasks
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
