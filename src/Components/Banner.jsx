import { FaLeaf } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { TbPlant } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 ">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="bg-green-100   py-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-800 flex justify-center items-center gap-2"><FaLeaf/> Welcome to PlantTrackr</h2>
          <p className="text-lg mt-2 text-green-800 ">Your personal plant care assistant.</p>
        </div>
        <div className="bg-green-200 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-800 flex justify-center items-center gap-2"><IoWater /> Never Miss a Watering</h2>
          <p className="text-lg mt-2 text-green-800 ">Track your plant’s watering schedule easily.</p>
        </div>
        <div className="bg-green-300 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-800 flex justify-center items-center gap-2"><TbPlant /> Healthy Plants, Happy You</h2>
          <p className="text-lg mt-2 text-green-800 ">Get reminders & tips for better plant health.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
