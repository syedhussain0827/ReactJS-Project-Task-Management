// src/components/ui/button.jsx
import React from "react";

export const Button = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-xl font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
