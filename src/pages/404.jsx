import React from "react";
import Router from "next/router";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-gray-400 px-2 mb-16 text-sm text-black rounded rotate-12 absolute">Page Not Found</div>
      <div className="text-white text-xl text-center">
        <p>
          We re sorry, the page you are looking doesn t exist or an other error occurred. <br /> Please go back or contact us 08123456789.
        </p>
      </div>
      <button className="mt-5" onClick={() => Router.back()}>
        <p className="relative inline-block text-sm font-medium text-black group focus:outline-none focus:ring">
          <span className="relative block px-8 py-3 bg-white border-none rounded-lg hover:bg-gray-500">Go Back</span>
        </p>
      </button>
    </div>
  );
};

export default NotFound;
