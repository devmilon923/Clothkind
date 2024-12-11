import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";

export default function Setting() {
  useEffect(() => {
    document.title = "Setting | Clothkind";
  }, []);
  const { user, logout, update, auth, setUser } = useContext(AuthContext);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const url = e.target.url.value;
    if (!name || !url) return toast.error("Empty field not allowed");
    try {
      const obj = {
        displayName: name,
        photoURL: url,
      };
      await update(obj);
      const newData = { ...auth.currentUser };
      setUser(newData);
      return toast.success("Profile updated");
    } catch (error) {
     
      return toast.error("Profile updated failed");
    }
  };
  return (
    <div>
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
          <form onSubmit={handleUpdate} className="mt-4 grid gap-3">
            <label className="input input-bordered flex items-center gap-2">
              <i className="fa-regular fa-circle-user text-gray-600"></i>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="grow border-none input-sm"
                placeholder="Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <i className="fa-regular fa-image text-gray-600"></i>
              <input
                type="url"
                className="grow border-none input-sm"
                placeholder="Photo URL"
                name="url"
                defaultValue={user?.photoURL}
              />
            </label>
            <div className="mt-3 flex space-x-4 justify-center">
              <div
                onClick={() => logout()}
                className="bg-red-500 text-white btn btn-sm px-8 rounded-full shadow-md hover:bg-red-600"
              >
                Logout
              </div>
              <button
                type="submit"
                to={"/setting"}
                className="bg-neutral text-white btn btn-sm px-8 rounded-full shadow-md hover:bg-slate-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
