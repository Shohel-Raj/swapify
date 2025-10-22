import React from "react";

const Wrapper = ({ children,className = "" }) => {
  return (
    <div
      className={` w-full max-w-7xl mx-auto  flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100  transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
