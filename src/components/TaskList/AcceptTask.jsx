import React from "react";
import { CheckCircle2, XCircle, Calendar } from "lucide-react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
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

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center gap-1 bg-green-100 text-green-600 hover:bg-green-200 rounded-lg font-medium py-1.5 px-3 text-xs transition">
          <CheckCircle2 size={14} /> Completed
        </button>
        <button className="flex items-center gap-1 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg font-medium py-1.5 px-3 text-xs transition">
          <XCircle size={14} /> Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
