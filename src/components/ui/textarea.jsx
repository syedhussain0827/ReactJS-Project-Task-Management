// src/components/ui/textarea.jsx
import React from "react";

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-gray-900 ${className}`}
    />
  );
};
