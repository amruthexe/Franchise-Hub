import Video1 from "../assets/Video1.mp4";
import Video3 from "../assets/Video3.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center">
        Your Gateway to Franchise Success
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Discover, Connect, and Grow
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Franchise Hub is your ultimate platform for franchise success. Discover
        top opportunities, connect with industry leaders, and access resources
        to fuel your growth. Join us and elevate your franchise journey today!
      </p>
      {/* Adjusted button container for mobile responsiveness */}
      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-4">
        <a
          href="https://wa.me/918500384820"
          target="_blank"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white text-center w-full sm:w-auto hover:bg-orange-600 transition"
        >
          Book a Demo
        </a>
        <a
          href="https://drive.google.com/file/d/1lTcusRZmBYzCUQncR199F3XXzEM0_W5P/view?usp=sharing"
          target="_blank"
          className="py-3 px-6 rounded-md border text-center w-full sm:w-auto hover:bg-gray-100 transition"
        >
          Franchise Bible
        </a>
        <a
          href="https://t.me/franchisehub369"
          target="_blank"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white text-center w-full sm:w-auto hover:bg-orange-600 transition"
        >
          Join Telegram
        </a>
      </div>
      {/* Video section remains the same */}
      <div className="flex flex-col sm:flex-row mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={Video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

