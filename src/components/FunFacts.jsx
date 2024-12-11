import React from "react";

export default function FunFacts() {
  return (
    <div className="space-y-5 grid lg:grid-cols-2 pb-6 border lg:p-12 bg-white grid-cols-1 items-center justify-between gap-6 lg:gap-24">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center">
        <div
          data-aos="zoom-out-right"
          data-aos-delay="200"
          className="border text-center p-12 space-y-3 bg-gray-50 rounded-md shadow-sm"
        >
          <i className="fa-solid fa-people-robbery text-6xl text-green-800"></i>
          <h1 className="text-3xl font-bold">4597+</h1>
          <p className="text-gray-600 md:text-md text-sm">People rised</p>
        </div>

        <div
          data-aos="zoom-out-left"
          data-aos-delay="200"
          className="border text-center p-12 space-y-3 bg-gray-50 rounded-md shadow-sm"
        >
          <i className="fa-solid fa-handshake-angle text-6xl text-green-800"></i>
          <h1 className="text-3xl font-bold">8945+</h1>
          <p className="text-gray-600 md:text-md text-sm">Volunteer</p>
        </div>

        <div
          data-aos="zoom-out-down"
          data-aos-delay="200"
          className="border text-center p-12 space-y-3 bg-gray-50 rounded-md shadow-sm"
        >
          <i className="fa-solid fa-hands-holding-child text-6xl text-green-800"></i>
          <h1 className="text-3xl font-bold">10M+</h1>
          <p className="text-gray-600 md:text-md text-sm">Poor People Saved</p>
        </div>

        <div
          data-aos="zoom-out-down"
          data-aos-delay="200"
          className="border text-center p-12 space-y-3 bg-gray-50 rounded-md shadow-sm"
        >
          <i className="fa-solid fa-globe text-6xl text-green-800"></i>
          <h1 className="text-3xl font-bold">100+</h1>
          <p className="text-gray-600 md:text-md text-sm">Country Member</p>
        </div>
      </div>
      <div className="space-y-3 text-center lg:text-start">
        <p className="font-semibold">Our Fun Facts</p>
        <h1 className="font-bold md:text-3xl text-xl">
          We Believe that We can Save <br />
          More Lifes with you
        </h1>
        <p className="text-gray-500 lg:px-0 px-4 md:text-md text-sm">
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused and
          the helpless.
        </p>
        <div className="flex gap-3 justify-center lg:justify-start">
          <button className="btn btn-sm md:btn-md bg-emerald-800 text-white md:px-7 text-xs border hover:bg-emerald-900">
            Donate now
          </button>
          <button className="btn btn-sm md:btn-md md:px-7 text-xs border hover:bg-gray-800 hover:text-white">
            know about us
          </button>
        </div>
      </div>
    </div>
  );
}
