import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SocialLogin() {
  const [btnLoading, setBtnLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { google } = useContext(AuthContext);
  const googleLogin = async () => {
    setBtnLoading(true);
    try {
      await google();
      toast.success("Login Success!");
      setBtnLoading(false);
      if (location.state) {
        setBtnLoading(false);
        return navigate(location.state);
      }
      setBtnLoading(false);
      return navigate("/dashboard");
    } catch (error) {
      setBtnLoading(false);
      return toast.error("Login Failed!");
    }
  };
  return (
    <div>
      <div onClick={googleLogin}>
        <a
          className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300"
          href="#"
        >
          <img
            className="h-5 mr-2"
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
            alt=""
          />
          {btnLoading ? (
            <span className="loading loading-dots text-red-500 loading-md"></span>
          ) : (
            "Continue in with Google"
          )}
        </a>
      </div>
    </div>
  );
}
