// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-2xl p-6 border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};
