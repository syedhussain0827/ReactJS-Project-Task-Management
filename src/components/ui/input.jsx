// src/components/ui/input.jsx
import React from "react";

export const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-gray-900 ${className}`}
    />
  );
};
