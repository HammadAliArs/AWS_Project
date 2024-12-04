import { SiAmazonwebservices } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { IoTerminalOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function TopNav() {
  return (
    <div className="bg-gray-800 text-white px-6 py-2 grid grid-cols-12 items-center gap-4 sticky top-0">
      {/* Left Section */}
      <div className="col-span-6 flex items-center gap-6">
        <div className="relative flex items-center group">
          <SiAmazonwebservices className="text-lg group-hover:text-blue-300 transition" />
          <span className="absolute right-0 top-1/2 h-6 w-px bg-gray-600 transform -translate-y-1/2"></span>
          <div className="w-px h-5 bg-gray-600 ml-2"></div>
        </div>

        <div className="relative flex items-center group">
          <FiCodesandbox className="text-lg group-hover:text-blue-500 transition" />
        </div>

        <div className="relative col-span-6 w-full">
          <input
            type="text"
            placeholder="Search"
            className="text-sm px-10 py-1 w-full rounded-xl  bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="col-span-6 flex items-center justify-end gap-6">
        <div className="relative flex items-center group">
          <IoTerminalOutline className="text-lg group-hover:text-blue-500 transition" />
          <span className="absolute right-0 top-1/2 h-6 w-px bg-gray-600 transform -translate-y-1/2"></span>
          <div className="w-px h-5 bg-gray-600 ml-4"></div>
        </div>

        <div className="relative flex items-center group">
          <IoIosNotificationsOutline className="text-lg group-hover:text-blue-500 transition" />
          <span className="absolute right-0 top-1/2 h-6 w-px bg-gray-600 transform -translate-y-1/2"></span>
          <div className="w-px h-5 bg-gray-600 ml-4"></div>
        </div>

        <div className="relative flex items-center group">
          <FaQuestionCircle className="text-lg group-hover:text-blue-500 transition" />
          <span className="absolute right-0 top-1/2 h-6 w-px bg-gray-600 transform -translate-y-1/2"></span>
          <div className="w-px h-5 bg-gray-600 ml-4"></div>
        </div>

        <div className="relative flex items-center group">
          <IoSettingsOutline className="text-lg group-hover:text-blue-500 transition" />
          <span className="absolute right-0 top-1/2 h-6 w-px bg-gray-600 transform -translate-y-1/2"></span>
          <div className="w-px h-5 bg-gray-600 ml-4"></div>
        </div>

        <div className="relative flex items-center group gap-2">
          <span className="group-hover:text-blue-500 transition cursor-pointer">
            Stockholm
          </span>
          <IoMdArrowDropdown className="text-lg group-hover:text-blue-500 transition" />
          <span className="absolute right-0 top-1/2 h-6 w-px bg-gray-600 transform -translate-y-1/2"></span>
          <div className="w-px h-5 bg-gray-600 ml-2"></div>
        </div>

        <div className="relative flex items-center group gap-2">
          <span className="group-hover:text-blue-500 transition cursor-pointer">
            HammadAli
          </span>
          <IoMdArrowDropdown className="text-lg group-hover:text-blue-500 transition" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
