import "./index.css";

export default function Banner() {
  return (
    <div className="banner flex justify-center flex-col xl:ml-96 lg:ml-72 md:ml-48 sm:ml-32 ml-4">
      <div className="text-white">
        <div className="text- sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Thejus Rajendran
        </div>
        <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin">
          user experience
        </div>
        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          designer
        </div>
      </div>
    </div>
  );
}
