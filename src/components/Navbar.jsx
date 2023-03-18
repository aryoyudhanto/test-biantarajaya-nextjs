import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const router = useRouter();

  function onLogout() {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        removeCookie("token");
        router.push("/");
      }
    });
  }
  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50">
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
          <li className="text-black font-semibold  ">
            <Link href="/home" className="active:bg-gray-500">Home</Link>
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
            {cookie.token ? (
              <p className="active:bg-gray-500" onClick={() => onLogout()}>
                Logout
              </p>
            ) : (
              <p
                className="active:bg-gray-500"
                onClick={() => router.push("/")}
              >
                Login
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
