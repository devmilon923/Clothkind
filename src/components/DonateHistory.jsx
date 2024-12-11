import React from "react";

export default function DonateHistory({ data }) {
  return (
    <div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="md:text-lg text-md font-bold">
          Campaign: <span className="font-normal">{data?.name}</span>
        </h3>
        <p className="text-sm text-gray-600 font-bold">
          Clothing type: <span className="font-normal">{data?.clothing}</span>
        </p>
        <p className="text-sm text-gray-600 font-bold">
          Clothing quantity:{" "}
          <span className="font-normal">{data?.quantity}</span>
        </p>
        <p className="text-sm text-gray-600 font-bold">
          Pickup Location: <span className="font-normal">{data?.location}</span>
        </p>
        <p className="text-sm text-gray-600 font-bold">
          Notes: <span className="font-normal">{data?.notes}</span>
        </p>
      </div>
    </div>
  );
}
