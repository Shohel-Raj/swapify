import React from "react";

const Wrapper = ({ children,className = "" }) => {
  return (
    <div
      className={` w-11/12 md:w-10/12 mx-auto  flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100  transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
