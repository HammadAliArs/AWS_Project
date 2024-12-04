import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegMinusSquare } from "react-icons/fa";
import { SiAmazonecs } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

function SecondNav() {
  return (
    <div className="bg-white text-gray-800 px-4 py-2 grid grid-cols-12 items-center border-b border-gray-300 sticky top-11">
      <div className="col-span-1 flex items-center justify-center cursor-pointer ">
        <div className=" rounded-full p-2 hover:bg-blue-600 transition">
          <HiOutlineBars3 className="text-gray-500 text-lg" />
        </div>
      </div>

      <div className="col-span-11 flex justify-end gap-6 cursor-pointer">
        <div className=" rounded-full p-2 hover:bg-blue-600 transition">
          <FaRegMinusSquare className="text-gray-500 text-lg" />
        </div>

        <div className="w-px h-8 bg-gray-600"></div>

        <div className="p-2 rounded-full hover:bg-gray-400 transition">
          <SiAmazonecs className="text-gray-800 text-lg" />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-400 transition">
          <FaLaptopCode className="text-gray-800 text-lg" />
        </div>
      </div>
    </div>
  );
}

export default SecondNav;
