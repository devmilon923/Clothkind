import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import CampaignsCard from "../components/CampaignsCard";

export default function Campaigns() {
  useEffect(() => {
    document.title = "Campaigns | Clothkind";
  }, []);
  const data = useLoaderData();
  const { division } = useParams();
  const [dataState, setDataState] = useState(data);
  useEffect(() => {
    if (division) {
      const filter = data.filter(
        (singel) => singel.division.toLowerCase() === division
      );
      setDataState(filter);
    }
  }, [division]);

  return (
    <div>
      <div className="flex items-center justify-center gap-6 mb-6">
        <NavLink
          to={"/campaigns/dhaka"}
          className="btn rounded-md px-7 btn-sm text-xs"
        >
          Dhaka
        </NavLink>
        <NavLink
          to={"/campaigns/sylhet"}
          className="btn rounded-md px-7 btn-sm text-xs"
        >
          Sylhet
        </NavLink>
        <NavLink
          to={"/campaigns/chittagong"}
          className="btn rounded-md px-7 btn-sm text-xs"
        >
          Chittagong
        </NavLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center   gap-4 items-center justify-center">
        {dataState.map((campaign) => (
          <CampaignsCard key={campaign.id} campaign={campaign}></CampaignsCard>
        ))}
      </div>
    </div>
  );
}
