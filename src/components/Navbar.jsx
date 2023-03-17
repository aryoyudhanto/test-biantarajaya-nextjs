import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="flex-1 ml-10">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
          }
          width={70}
          height={70}
        />
      </div>
      <div className="flex-none mr-5">
        <ul className="menu menu-horizontal p-0">
          <li className="text-blue-900 font-semibold">
            <a>Home</a>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end mr-10 ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-white rounded-box w-52"
        >
          <li className="text-black">
            <p>Settings</p>{" "}
          </li>
          <li className="text-black">
            <p>Logout</p>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
