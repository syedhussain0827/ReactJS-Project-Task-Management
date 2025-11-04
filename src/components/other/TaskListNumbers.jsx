import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2, Clock, XCircle } from "lucide-react";

const TaskListNumbers = ({ data }) => {
  const stats = [
    {
      label: "New Task",
      value: data.taskCounts.newTask,
      color: "text-blue-600",
      bg: "bg-blue-100",
      icon: <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
    },
    {
      label: "Completed",
      value: data.taskCounts.completed,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
    },
    {
      label: "Active",
      value: data.taskCounts.active,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />,
    },
    {
      label: "Failed",
      value: data.taskCounts.failed,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />,
    },
  ];

  return (
    <div className="w-full px-4 mt-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-md border border-emerald-100 bg-white min-h-[100px] sm:min-h-[120px]"
          >
            <div className={`p-2 sm:p-3 rounded-full ${stat.bg} flex-shrink-0`}>
              {stat.icon}
            </div>
            <div className="text-center sm:text-left min-w-0 flex-1">
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${stat.color} leading-none`}>
                {stat.value}
              </h2>
              <h3 className="text-xs sm:text-sm lg:text-lg font-medium text-gray-600 mt-1 leading-tight">
                {stat.label}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskListNumbers;