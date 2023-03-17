import React from "react";

const Layout = ({children}) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto bg-white">
      <div className="h-screen overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
