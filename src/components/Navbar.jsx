import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        className="btn bg-emerald-50 hover:bg-emerald-100 text-gray-700 border btn-sm text-xs rounded-md"
        to={"/"}
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        className="btn bg-emerald-50 hover:bg-emerald-100 text-gray-700 border btn-sm text-xs rounded-md"
        to={"/dashboard"}
      >
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        className="btn bg-emerald-50 hover:bg-emerald-100 text-gray-700 border btn-sm text-xs rounded-md"
        to={"/campaigns/dhaka"}
      >
        <span>Donation Campaigns</span>
      </NavLink>
      <NavLink
        className="btn bg-emerald-50 hover:bg-emerald-100 text-gray-700 border btn-sm text-xs rounded-md"
        to={"/help"}
      >
        <span>How to Help</span>
      </NavLink>
    </>
  );
  return (
    <div className="fixed z-40 border bg-base-100 top-0 w-full">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn pl-0 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-xl !bg-transparent cursor-pointer">
            <img
              className="h-14 object-contain"
              src="https://i.ibb.co.com/z77FjzL/Colorful-Illustration-Foundation-Logo-1-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 ring-emerald-500 ring-offset-base-100 rounded-full ring ring-offset-2">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to={"/profile"} className="justify-between">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/setting"}>Settings</NavLink>
                  </li>
                  <li onClick={() => logout()}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => logout()}
                className="btn bg-red-700 transition-all duration-300 hover:bg-red-500 text-white  btn-sm text-xs rounded-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to={"/auth/login"}
              className="btn bg-emerald-800 transition-all duration-300 hover:bg-emerald-300 text-white hover:text-gray-700 btn-sm text-xs rounded-md"
            >
              Get Started
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */
}
