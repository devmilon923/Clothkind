export default function Gallery() {
  return (
    <div className="space-y-4 bg-white p-6 lg:p-12 border rounded-md shadow-sm">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Our Gallery</h1>
      </div>

      <div className="grid lg:grid-cols-8 grid-cols-1 gap-4 justify-normal items-center">
        <div className="h-96 bg-gray-300 md:col-span-3 overflow-hidden cursor-pointer">
          <img
            src="./gallery/image-1.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>
        <div className="h-96 bg-gray-300 md:col-span-2 overflow-hidden">
          <img
            src="./gallery/image-2.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>
        <div className="h-96 bg-gray-300 lg:col-span-3 overflow-hidden">
          <img
            src="./gallery/image-3.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>

        <div className="h-96 bg-gray-300 md:col-span-2 overflow-hidden">
          <img
            src="./gallery/image-4.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>
        <div className="h-96 bg-gray-300 lg:col-span-2 overflow-hidden">
          <img
            src="./gallery/image-5.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>
        <div className="h-96  bg-gray-300 lg:col-span-2 overflow-hidden">
          <img
            src="./gallery/image-6.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>
        <div className="h-96  bg-gray-300 lg:col-span-2 overflow-hidden">
          <img
            src="./gallery/image-7.jpg"
            className="h-96 w-full object-cover rounded-md duration-200 transform hover:scale-105"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
