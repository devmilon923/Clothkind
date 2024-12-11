export default function About() {
  return (
    <div id="about" className="flex flex-col-reverse md:flex-row md:gap-12 gap-6 items-center">
      <div className="md:flex-1">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          className="h-96 rounded-md w-full object-cover"
          src="./about.jpg"
          alt=""
        />
      </div>
      <div
        className="space-y-2 md:flex-1 text-center md:text-start px-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="font-extrabold text-xl text-gray-700">About us-</h1>
        <h2 className="font-semibold md:text-3xl text-2xl ">
          Your Support is Really Powerful.​
        </h2>
        <p>
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused and
          the helpless.
        </p>
      </div>
    </div>
  );
}
