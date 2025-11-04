import React from "react";
import { CheckCircle2, Calendar } from "lucide-react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium">
          {data.category}
        </span>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Calendar size={14} />
          {data.taskDate}
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Status */}
      <div className="mt-6">
        <button
          disabled
          className="w-full flex items-center justify-center gap-2 bg-green-100 text-green-700 font-medium py-2 px-3 text-sm rounded-lg border border-green-200"
        >
          <CheckCircle2 size={16} /> Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
