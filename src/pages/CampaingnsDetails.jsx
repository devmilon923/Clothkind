import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function CampaingnsDetails() {
  useEffect(() => {
    document.title = "Campaigns Details | Clothkind";
  }, []);
  const { campaignID } = useParams();
  const [details, setDetails] = useState();
  const { history, setHistory } = useContext(AuthContext);
  useEffect(() => {
    fetch("../data/campaign.json")
      .then((res) => res.json())
      .then((data) => {
        const id = parseInt(campaignID);
        const singelCampaign = data.find((singel) => singel.id === id);
        setDetails(singelCampaign);
      });
  }, [campaignID]);
  const handleDonateSubmit = async (e) => {
    e.preventDefault();
    const donationData = {
      name: details.title,
      quantity: e.target.quantity.value,
      clothing: e.target.clothing.value,
      notes: e.target.notes.value,
      location: e.target.location.value,
    };
   
    try {
      const newData = [...history, donationData];
      await setHistory(newData);
      document.getElementById("my_modal_1").showModal();
      e.target.reset();
      return toast.success("Thanks for your donation");
    } catch (error) {
      return toast.error("Donation failed");
    }
  };

  return (
    <div>
      <div className=" min-h-screen lg:p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-sm border rounded-lg p-6 flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <img
              src={details?.image}
              alt="Campaign"
              className="rounded-lg w-full"
            />
            <h1 className="text-2xl font-bold mt-4">{details?.title}</h1>
            <p className="mt-2">
              <strong>Description:</strong> {details?.description}
            </p>
            <p className="mt-1">
              <strong>Division:</strong> {details?.division}
            </p>
            <p className="mt-1">
              <strong>City:</strong> {details?.city}
            </p>
            <p className="mt-1">
              <strong>Status:</strong>{" "}
              {details?.status === "Active" && (
                <span className="text-emerald-600 font-semibold">Active</span>
              )}
            </p>
            <p className="mt-1">
              <strong>Contact Info:</strong> {details?.contact}
            </p>
          </div>

          {/* Donation Form */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4">
              Donate to This Campaign
            </h2>
            <form onSubmit={handleDonateSubmit} className="space-y-4">
              <div className="form-control">
                <label htmlFor="quantity" className="label">
                  <span className="label-text">Quantity of Items:</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="input input-bordered"
                  placeholder="e.g., 2"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pick the clothing types</span>
                </label>
                <select
                  defaultValue=""
                  name="clothing"
                  className="select select-bordered"
                >
                  <option value="" disabled selected>
                    Pick one
                  </option>
                  <option value="Saris">Saris</option>
                  <option value="Suits">Suits</option>
                  <option value="T-shirts">T-shirts</option>
                  <option value="Pants">Pants</option>
                  <option value="Sweater">Sweater</option>
                </select>
              </div>

              <div className="form-control">
                <label htmlFor="pickup-location" className="label">
                  <span className="label-text">Pickup Location:</span>
                </label>
                <input
                  type="text"
                  id="pickup-location"
                  name="location"
                  className="input input-bordered"
                  placeholder="House No, Road No, Area"
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="notes" className="label">
                  <span className="label-text">
                    Additional Notes (Optional):
                  </span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  className="textarea textarea-bordered h-28"
                  placeholder="Write any additional notes..."
                ></textarea>
              </div>

              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="btn btn-wide bg-neutral hover:bg-slate-900 text-white"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div>
            {" "}
            <img
              className="h-60 mx-auto"
              src="https://assets-v2.lottiefiles.com/a/539bfca2-1161-11ee-b51b-1320215f9715/qVyJRkFdMG.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Thanks for your donate!</h1>
            <p>Thank you ! We will reach your destination soon</p>
          </div>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <NavLink
                to={"/dashboard"}
                className="btn bg-emerald-200 hover:bg-emerald-300"
              >
                View
              </NavLink>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
