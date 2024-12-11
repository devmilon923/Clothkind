import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SocialLogin from "./SocialLogin";

export default function Signin() {
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const email = e.target.email.value;

    const password = e.target.password.value;
    try {
      await signIn(email, password);
      toast.success("Account successfully signin");
      setBtnLoading(false);
      if (location.state) {
        setBtnLoading(false);
        return navigate(location.state);
      }
      setBtnLoading(false);
      return navigate("/dashboard");
    } catch (error) {
      setBtnLoading(false);

      if (error.code === "auth/invalid-credential") {
        return toast.error("Invalid credential");
      } else {
        return toast.error("Account signin failed");
      }
    }
  };

  useEffect(() => {
    document.title = "SignIn | Clothkind";
  }, []);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="px-3 mb-5 container flex flex-col py-10 mx-auto border shadow-sm bg-white rounded-md">
        <div className="max-w-96 mx-auto">
          <form
            onSubmit={handleSignIn}
            className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-md"
          >
            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
              Sign In
            </h3>

            <SocialLogin />
            <div className="flex items-center mb-3">
              <hr className="h-0 border-b border-solid border-grey-500 grow" />
              <p className="mx-4 text-grey-600">or</p>
              <hr className="h-0 border-b border-solid border-grey-500 grow" />
            </div>

            <label
              htmlFor="email"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Email*
            </label>
            <input
              id="email"
              required
              type="email"
              placeholder="mail@example.com"
              className="w-full border px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-100 placeholder:text-grey-700 bg-gray-50 text-gray-900 rounded-md"
            />
            <label
              htmlFor="password"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Password*
            </label>
          <div className="relative">
          <input
              id="password"
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter a password"
              className="w-full border px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-100 placeholder:text-grey-700 bg-gray-50 text-gray-900 rounded-md"
            />
              <div
        onClick={togglePasswordVisibility}
        className="ml-2 text-gray-500 absolute top-4 right-3"
      >
        {showPassword ? (
          <i className="fas fa-eye-slash"></i> // Eye-slash icon for hiding password
        ) : (
          <i className="fas fa-eye"></i> // Eye icon for showing password
        )}
      </div>
          </div>
            <div className="flex flex-row justify-between mb-8">
              <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                <input type="checkbox" className="checkbox checkbox-xs" />
                <span className="ml-3 text-sm font-normal text-grey-900">
                  Keep me logged in
                </span>
              </label>
              <NavLink
                to={'/forget-password'}
                className="mr-4 text-sm font-medium text-purple-blue-500"
              >
                Forget password?
              </NavLink>
            </div>
            <button className="w-full btn px-6 mb-5 text-sm font-bold text-white transition duration-300 md:w-96 rounded-md hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-600 bg-emerald-500">
              {btnLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Sign In"
              )}
            </button>
            <p className="text-sm leading-relaxed text-grey-900">
              Not registered yet?{" "}
              <NavLink to={"/auth/create"} className="font-bold text-grey-700">
                Create
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
