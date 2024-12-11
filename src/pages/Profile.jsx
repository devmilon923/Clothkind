import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile | Clothkind";
  }, []);
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="">
      <div className="max-w-sm mx-auto mt-5 mb-12 lg:mt-28 bg-white shadow-sm border rounded-lg p-6">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className=" bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
              <img
                src={user?.photoURL}
                className="w-20 h-20 rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
          <p className="mt-2 text-lg font-medium">{user?.displayName}</p>
          <p className="text-gray-500">{user?.email}</p>
          <div>
            <NavLink
              to={"/forget-password"}
              className="text-sm font-medium text-purple-blue-500"
            >
              Reset password?
            </NavLink>
          </div>
          <div className="mt-6 flex space-x-4">
            <div
              onClick={() => logout()}
              className="bg-red-500 text-white btn btn-sm px-8 rounded-full shadow-md hover:bg-red-600"
            >
              Logout
            </div>
            <NavLink
              to={"/setting"}
              className="bg-neutral text-white btn btn-sm px-8 rounded-full shadow-md hover:bg-slate-600"
            >
              Setting
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
