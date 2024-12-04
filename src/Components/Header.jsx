import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoReload, IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { LuSquare } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [SecdropdownOpen, setSecDropdownOpen] = useState(false);

  const toggleSecDropdown = () => {
    setSecDropdownOpen(!SecdropdownOpen);
  };

  return (
    <>
      <div className="grid grid-cols-12 items-center gap-4 bg-white p-4">
        {/* Header Section */}
        <h2 className="col-span-12 ml-4 text-2xl font-bold text-gray-800 md:col-span-4">
          Instance
        </h2>
        <div className="col-span-12 flex flex-col justify-between gap-4 md:col-span-8 md:flex-row md:items-center md:justify-end">
          <p className="text-sm text-gray-600">
            Last updated <br /> less than a minute ago
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full border-2 border-blue-700 px-3 py-1 font-bold transition hover:border-blue-900">
              <IoReload className="text-blue-700 hover:text-blue-900" />
            </button>
            <button className="rounded-full border-2 border-gray-500 px-4 py-1 font-semibold text-gray-500 transition hover:bg-gray-200">
              Connect
            </button>
            <div className="relative">
              <button
                className="flex items-center gap-2 rounded-full border-2 border-blue-700 px-4 py-1 font-semibold text-blue-700 transition hover:border-blue-900 hover:text-blue-900"
                onClick={toggleSecDropdown}
              >
                Instance State
                <IoMdArrowDropdown
                  className={`transition-transform ${
                    SecdropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {SecdropdownOpen && (
                <div className="absolute top-full z-10 mt-1 w-60 rounded-xl border border-gray-400 bg-white text-black shadow-lg">
                  <ul className="py-1">
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Stop instance
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Start instance
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Reboot instance
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Hibernate instance
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Terminate (Delete) instance
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button className="flex items-center gap-2 rounded-full border-2 border-blue-700 px-4 py-1 font-semibold text-blue-700 transition hover:border-blue-900 hover:text-blue-900">
              Actions <IoMdArrowDropdown />
            </button>
            <div className="flex gap-0.5">
              <Link to="/Instance">
                <button className="rounded-full rounded-r-none border border-orange-400 bg-orange-400 px-4 py-1 transition hover:bg-orange-600">
                  Launch Instances
                </button>
              </Link>
              <Link>
                <button className="rounded-full rounded-l-none border border-orange-400 bg-orange-400 px-2 py-2 transition hover:bg-orange-600">
                  <IoMdArrowDropdown className="" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Input and Navigation Section */}
        <div className="col-span-12 grid grid-cols-12 items-center gap-4">
          {/* Left Section */}
          <div className="col-span-8 flex items-center gap-4">
            <div className="relative flex-grow">
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Find instance by attributes and tag (case-sensitive)"
                className="w-full rounded-xl border-2 border-gray-500 px-10 py-1 text-sm placeholder-gray-400 focus:border-gray-700 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-2 rounded-xl border-2 border-gray-500 px-4 py-1 text-sm font-semibold"
                onClick={toggleDropdown}
              >
                All States
                <IoMdArrowDropdown
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="z-2 absolute top-full mt-1 w-40 rounded-xl border border-gray-300 bg-white text-black">
                  <ul className="py-1">
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      All States
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Running
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Stopped
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Terminated Deleted
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Pending
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Shutting Down
                    </li>
                    <li className="cursor-pointer rounded-xl px-4 py-1 text-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      Stopping
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Right Section */}
          <div className="col-span-4 flex items-center justify-end gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <FaLessThan className="text-gray-600" />
            </button>
            <h6 className="text-sm font-semibold text-gray-600">1</h6>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <FaGreaterThan className="text-gray-600" />
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <IoSettingsOutline className="text-gray-600" />
            </button>
          </div>
        </div>
        {/* table section  */}
        <div className="col-span-12 overflow-x-auto">
          <table className="w-full min-w-[2800px] table-auto">
            <thead>
              <tr className="flex">
                <th className="flex items-center space-x-2 whitespace-nowrap px-4 py-2">
                  <LuSquare />
                  <div className="h-6 w-px bg-gray-300"></div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Name</span>
                    <GoPencil />
                  </div>
                  <IoMdArrowDropdown />
                  <div className="h-6 w-px bg-gray-300"></div>
                </th>
                <th className="flex items-center space-x-2 whitespace-nowrap px-4 py-2">
                  <span>Instance ID</span>
                  <div className="h-6 w-px bg-gray-300"></div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Instance State</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Instance Type</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center space-x-2 whitespace-nowrap px-4 py-2">
                  <span>Status Check</span>
                  <div className="h-6 w-px bg-gray-300"></div>
                </th>
                <th className="flex items-center space-x-2 whitespace-nowrap px-4 py-2">
                  <span>Alarm Status</span>
                  <div className="h-6 w-px bg-gray-300"></div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Availability Zone</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Public IPv4 DNS</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Public IPv4...</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Elastic Type</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>IPv6 IPs</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Monitoring</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Security Group Name</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Key Name</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Launch Time</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Platform...</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Managed</span>
                    <IoMdArrowDropdown />
                    <div className="h-6 w-px bg-gray-300"></div>
                  </div>
                </th>
                <th className="flex items-center justify-between space-x-2 whitespace-nowrap px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <span>Operator</span>
                    <IoMdArrowDropdown />
                  </div>
                </th>
              </tr>
              <tr>
                <th colSpan="20" className="border-t border-gray-300"></th>
              </tr>
            </thead>
          </table>
          <div className="mb-5 mt-5 flex flex-col items-center justify-center space-y-2">
            <h6 className="text-sm font-semibold text-gray-600">No Instaces</h6>
            <p className="text-sm text-gray-500">
              you do not have any instances in this region
            </p>
            <button className="flex items-center gap-2 rounded-full border-2 border-blue-700 px-3 py-1 text-sm font-semibold text-blue-700 transition hover:border-blue-900 hover:text-blue-900">
              Launch instances
            </button>
          </div>
        </div>
      </div>

      {/* last */}

      <div>
        <div className="relative mb-2 h-px w-full bg-gray-400">
          <span className="flex items-center justify-center text-gray-500">
            {" "}
            ={" "}
          </span>
        </div>
        <div className="flex items-center justify-between px-4">
          <h2 className="font-bold">Select an instance</h2>
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <IoIosArrowDropdown className="text-gray-600" />
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <IoSettingsOutline className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
