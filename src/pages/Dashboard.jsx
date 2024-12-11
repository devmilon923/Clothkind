import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import DonateHistory from "../components/DonateHistory";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | Clothkind";
  }, []);
  const { history, setHistory, user } = useContext(AuthContext);
  const clear = () => {
    setHistory([]);
    toast.success("History deleted");
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-sm border mb-6 mt-3">
        <div className="card-body">
          {/* Welcome Title and Profile Information */}
          <h2 className="card-title text-xl font-semibold">
            Welcome, {user.displayName}!
          </h2>
          <div className="flex items-center mt-4">
            <img
              src={user.photoURL || "default-profile-image.jpg"} // Replace with a fallback image
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-medium">{user?.displayName}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="mt-4">
            <NavLink
              to="/setting" // Ensure this route exists
              className="btn btn-sm md:btn-md text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Update Profile
            </NavLink>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-sm border">
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">Donation History</h2>
          <p className="text-sm text-gray-500">
            Here are the campaigns you have donated:
          </p>

          <div className="space-y-3 mt-4">
            {history.length > 0 ? (
              history.map((data) => <DonateHistory data={data}></DonateHistory>)
            ) : (
              <div>No Data Found</div>
            )}
          </div>

          <div className="card-actions justify-end mt-4">
            {history.length > 0 ? (
              <button
                onClick={clear}
                className="btn btn-sm md:btn-md text-xs text-white bg-red-800 hover:bg-red-900"
              >
                Clear History
              </button>
            ) : (
              <NavLink
                to={"/campaigns/dhaka"}
                className="btn btn-sm md:btn-md text-xs bg-emerald-600 hover:bg-emerald-700 text-white "
              >
                Donate Now
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
