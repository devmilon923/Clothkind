import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ForgetPassword() {
  const [btnLoading, setBtnLoading] = useState(false);
  const { forgetPasswordEmail, user } = useContext(AuthContext);
  const resetPassword = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    const email = e.target.email.value;
    try {
      await forgetPasswordEmail(email);
      setBtnLoading(false);
      return toast.success("Verification email send");
    } catch (error) {
      setBtnLoading(false);
      return toast.success("Failed to send verification email");
    }
  };
  useEffect(() => {
    document.title = "Reset Password | Clothkind";
  }, []);
  return (
    <div className="flex items-center justify-center mt-24 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password
        </h2>
        <form onSubmit={resetPassword}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              disabled={user?.email}
              defaultValue={user?.email}
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-wide bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {btnLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Send Reset Email"
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <NavLink
            to="https://mail.google.com/"
            className="text-sm text-emerald-900 hover:text-indigo-800"
          >
            Open Gmail
          </NavLink>
        </div>
      </div>
    </div>
  );
}
