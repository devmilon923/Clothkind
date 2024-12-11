export default function WorkStep() {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h1 className="md:text-3xl text-2xl font-bold">How It Works</h1>
        <p className="text-gray-600 md:text-md text-sm">
          Donating warm clothes has never been easier. Follow these simple steps
          to make a difference.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          className="border text-center p-12 space-y-2 bg-white rounded-md shadow-sm"
        >
          <i className="fa-solid fa-id-card text-5xl text-green-800"></i>
          <h1 className="text-2xl font-bold">Step 1</h1>
          <p className="text-gray-600 md:text-md text-sm">Create an account and log in.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          className="border text-center p-12 space-y-2 bg-white rounded-md shadow-sm"
        >
          <i className="fa-solid fa-map-location-dot text-5xl text-green-800"></i>
          <h1 className="text-2xl font-bold">Step 2</h1>
          <p className="text-gray-600 md:text-md text-sm">Browse donation campaigns.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          className="border text-center p-12 space-y-2 bg-white rounded-md shadow-sm"
        >
          <i className="fa-brands fa-wpforms text-5xl text-green-800"></i>
          <h1 className="text-2xl font-bold">Step 3</h1>
          <p className="text-gray-600 md:text-md text-sm">Fill out the donation form.</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
          className="border text-center p-12 space-y-2 bg-white rounded-md shadow-sm"
        >
          <i className="fa-solid fa-truck-pickup text-5xl text-green-800"></i>
          <h1 className="text-2xl font-bold">Step 4</h1>
          <p className="text-gray-600 md:text-md text-sm">Submit and await pickup details.</p>
        </div>
      </div>
      <div className="bg-white py-12 space-y-5 border px-4">
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold">Collection Points</h1>
          <p className="text-gray-600 md:text-md text-sm">
            Drop your donations at our nearest centers in Dhaka, Chattogram, and
            Sylhet.
          </p>
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold">Supported Divisions</h1>
          <p className="text-gray-600 md:text-md text-sm">
            Dhaka, Chattogram, Rajshahi, Khulna, Sylhet, Barishal
          </p>
        </div>
      </div>
    </div>
  );
}
