import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="flex-1 bg-[#f4f4f4] overflow-y-auto h-screen">
      {children}
    </div>
  );
};

export default MainContent;
