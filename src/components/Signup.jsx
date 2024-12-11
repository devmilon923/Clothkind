import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SocialLogin from "./SocialLogin";

export default function Signup() {
  const location = useLocation();
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp, update, setUser, auth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    const email = e.target.email.value.trim();
    const name = e.target.name.value.trim();
    const password = e.target.password.value.trim();
    const url = e.target.url.value.trim();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!name || !email || !password) {
      setBtnLoading(false);
      return toast.error("Empty field not allowed");
    }

    if (!passwordRegex.test(password)) {
      setBtnLoading(false);
      return toast.error(
        "Password must be at least 6 characters long and include uppercase, lowercase and number"
      );
    }

    try {
      const create = await signUp(email, password);
      if (create) {
        const obj = {
          displayName: name,
          photoURL: url,
        };
        await update(obj);
        setUser(auth.currentUser);
        setBtnLoading(false);
        toast.success("Account successfully created");
        if (location.state) {
          setBtnLoading(false);
          return navigate(location.state);
        }
        setBtnLoading(false);
        return navigate("/dashboard");
      } else {
        setBtnLoading(false);
        throw new Error("Profile not updated");
      }
    } catch (error) {
      setBtnLoading(false);

      if (error.code === "auth/email-already-in-use") {
        return toast.error("Email already in use");
      } else {
        return toast.error("Account creation failed");
      }
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.title = "SignUp | Clothkind";
  }, []);
  return (
    <div>
      <div className=" mb-5 container flex flex-col py-10 mx-auto border shadow-sm bg-white rounded-md px-3">
        <div className="max-w-96 mx-auto">
          <form
            onSubmit={handleSignUp}
            className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-md"
          >
            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
              Sign Up
            </h3>

            <SocialLogin />
            <div className="flex items-center mb-3">
              <hr className="h-0 border-b border-solid border-grey-500 grow" />
              <p className="mx-4 text-grey-600">or</p>
              <hr className="h-0 border-b border-solid border-grey-500 grow" />
            </div>
            <label
              htmlFor="name"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Name*
            </label>
            <input
              id="name"
              required
              type="text"
              placeholder="Your Name"
              className="w-full border px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-100 placeholder:text-grey-700 bg-gray-50 text-gray-900 rounded-md"
            />
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
              htmlFor="photo"
              className="mb-2 text-sm text-start text-grey-900"
            >
              Photo URL*
            </label>
            <input
              id="photo"
              required
              type="url"
              name="url"
              placeholder="Photo URL"
              className="w-full border px-5 py-4 mb-7 text-sm font-medium outline-none focus:bg-gray-100 placeholder:text-grey-700 bg-gray-50 text-gray-900 rounded-md"
            />
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
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mb-8">
              <label className="relative inline-flex items-center mr-3 cursor-pointer select-none ">
                <input
                  required
                  type="checkbox"
                  className="checkbox checkbox-xs"
                />

                <span className="ml-2 text-xs md:text-sm font-normal text-grey-900">
                  Accept terms & conditions
                </span>
              </label>
            </div>

            <button className="w-full btn px-6 mb-5 text-sm font-bold text-white transition duration-300 md:w-96 rounded-md hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-600 bg-emerald-500">
              {btnLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="text-sm leading-relaxed text-grey-900">
              Already registered ?{" "}
              <NavLink to={"/auth/login"} className="font-bold text-grey-700">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
