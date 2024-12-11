import { useEffect } from "react";

export default function Help() {
  useEffect(() => {
    document.title = "How to help | Clothkind";
  }, []);
  return (
    <div className="grid lg:mt-24 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center justify-center bg-white border shadow-sm p-6 lg:p-12">
      <div
        data-aos="flip-right"
        className="border p-6 bg-gray-50 shadow-sm space-y-3 h-60"
      >
        <p className="text-5xl">🧥</p>
        <h1 className="lg:text-2xl text-lg  font-extrabold text-emerald-500">
          Donate Items
        </h1>
        <p className="text-gray-500 md:text-md text-sm">
          Contribute warm clothes like blankets, jackets, and sweaters to
          support those in need during the winter season.
        </p>
      </div>

      <div
        data-aos="flip-right"
        className="border p-6 bg-gray-50 shadow-sm space-y-3 h-60"
      >
        <p className="text-5xl">🙋‍♂️</p>
        <h1 className="lg:text-2xl text-lg  font-extrabold text-emerald-500">
          Volunteer with Us
        </h1>
        <p className="text-gray-500 md:text-md text-sm">
          Help us collect, sort, and distribute donations. Your time can make a
          difference in someone's life.
        </p>
      </div>

      <div
        data-aos="flip-right"
        className="border p-6 bg-gray-50 shadow-sm space-y-3 h-60"
      >
        <p className="text-5xl">📣</p>
        <h1 className="lg:text-2xl text-lg  font-extrabold text-emerald-500">
          Spread the Word
        </h1>
        <p className="text-gray-500 md:text-md text-sm">
          Share our mission on social media and encourage your friends and
          family to contribute to our campaigns.
        </p>
      </div>

      <div
        data-aos="flip-right"
        className="border p-6 bg-gray-50 shadow-sm space-y-3 h-60"
      >
        <p className="text-5xl">💵</p>
        <h1 className="lg:text-2xl text-lg  font-extrabold text-emerald-500">
          Fund Contribution
        </h1>
        <p className="text-gray-500 md:text-md text-sm">
          Support us financially to cover operational costs and expand our reach
          to more underprivileged communities.
        </p>
      </div>
    </div>
  );
}
