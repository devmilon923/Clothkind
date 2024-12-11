import { NavLink } from "react-router-dom";

export default function CampaignsCard({ campaign }) {
  return (
    <div>
      <div
        data-aos="flip-down"
        className="card rounded-md lg:card-side bg-base-100 shadow-sm border"
      >
        <figure>
          <img
            className="h-60 w-60 object-cover"
            src={campaign?.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl">{campaign?.title}</h2>
          <p>{campaign?.description}</p>

          <p className="font-semibold">
            City: <span className="font-normal">{campaign?.city}</span>
          </p>

          <p className="font-semibold">
            Division: <span className="font-normal">{campaign?.division}</span>
          </p>
          <div className="card-actions justify-end">
            <NavLink
              to={`/details/${campaign?.id}`}
              className="btn btn-neutral btn-sm px-5"
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
