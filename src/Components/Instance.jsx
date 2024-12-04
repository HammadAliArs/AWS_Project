import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiLogoAws } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

function Instance() {
  return (
    <div className="container mx-auto mt-5 ml-4">
      <div className="grid grid-cols-12 gap-5 ml-2">
        {/* Left Section */}
        <div className="col-span-8">
          <div>
            <h2 className=" text-2xl font-bold text-gray-800 flex items-center gap-2">
              Launch an instance
              <a href="" className="text-blue-500 text-xs hover:text-blue-800">
                info
              </a>
            </h2>
            <p className="text-sm text-black mt-2">
              Amazon EC2 dolor sit amet consectetur adipisicing elit. Ex velit
              ipsum dolore ea laboriosam ipsam qui pariatur voluptates debitis.
              Magni debitis reiciendis unde odio.
            </p>
          </div>
          <div className="mt-5 rounded-xl border-2 border-gray-400 p-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              Name and tags
              <a href="" className="text-blue-500 text-xs hover:text-blue-800">
                info
              </a>
            </h2>
            <h4 className="mt-3 text-gray-700 text-sm font-bold">Name</h4>

            <div className="mt-2">
              <input
                type="text"
                placeholder="   eg. my web server"
                className="w-[500px] mt-2 p-0 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <a
                href=""
                className="ml-4 text-blue-500 text-sm font-bold hover:text-blue-800"
              >
                Add additional tags
              </a>
            </div>
          </div>

          <div className="mt-5 pb-10 rounded-xl border-2 border-gray-400 p-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <IoMdArrowDropdown className="text-3xl font-bold text-gray-700" />
              Applications and OS Images (Amazon Machine Image)
              <a href="" className="text-blue-500 text-xs hover:text-blue-800">
                info
              </a>
            </h2>
            <p className="mt-2 text-black text-sm">
              Amazon EC2 dolor sit amet consectetur adipisicing elit. Ex velit
              ipsum dolore ea laboriosam ipsam qui pariatur voluptates debitis.
              Magni debitis reiciendis unde odio.Amazon EC2 dolor sit amet
              consectetur adipisicing elit.
            </p>

            <div className="mt-2">
              <input
                type="text"
                placeholder="   Amazon EC2 dolor sit amet consectetur adipisicing elit ex velit  lorem. "
                className="w-full mt-2 p-0 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mt-8">
              <a
                href=""
                className=" text-blue-500 text-lg font-bold hover:underline"
              >
                Quick Start
              </a>
            </div>

            <hr />

            <div className="grid grid-cols-12 mt-5">
              <div className="col-span-9 bg-white overflow-x-auto">
                <div className="flex space-x-4 mb-5">
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    CiSearch{" "}
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-3">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                  <div className="border-2 border-black/30 p-4 text-center">
                    <h3 className="text-lg font-bold">Amazon</h3>
                    <h4 className="text-sm mt-1">Linux</h4>
                    <div className="mt-4">
                      <BiLogoAws className="mx-auto text-blue-800 text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 mt-5 ml-5 h-[130px] hover:bg-blue-200 rounded-md flex justify-center items-center">
                <div className="flex items-center">
                  <div className="w-px h-[120px] bg-gray-400 ml-4 mr-4"></div>
                  <div className="items-center">
                    <div className="flex justify-center items-center mb-2">
                      <CiSearch className="text-3xl text-gray-400 font-bold" />
                    </div>
                    <div className="text-center">
                      <a className="text-xs font-bold text-blue-500" href="">
                        Browse More AMIs
                      </a>
                      <p className="text-xs">
                        Including AMIs from <br /> AWS, Marketplace and <br />{" "}
                        the community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-black">
                <h6 className="mb-2">Amazon Machine Images (AMI)</h6>
              </div>
              <div className="rounded-md border-2 border-gray-400">
                <div className="m-2 text-sm flex justify-between text-black">
                  <h6>Amazon Machine Images (AMI)</h6>
                  <h6>Free tier eligible</h6>
                </div>
                <div className="m-2 text-sm flex justify-between text-black">
                  <p className="text-xs text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit ut quos error suscipit cum! b <br /> Quibusdam velit in
                    autem temporibus.
                  </p>
                  <h6>
                    {" "}
                    <IoMdArrowDropdown className="text-blue-600 text-3xl" />
                  </h6>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-black">
                <h6 className="mb-2">Description</h6>
              </div>
              <div className="">
                <div className=" text-sm flex  text-black">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit ut quos error suscipit cum! Quibusdam velit in autem
                    temporibus. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Odit ut quos error suscipit cum. Odit ut
                    quos error suscipit cum! Quibusdam velit in autem
                    temporibus.
                  </p>
                </div>
                <div className="text-sm mt-5 mb-5 ">
                  <p>
                    Amazon Linux 2023 AMI, amet consectetur adipisicing elit.
                    Odit ut quos error suscipit cum!{" "}
                  </p>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-5 gap-6 text-sm font-bold text-black mb-4">
                  <h6 className="text-left">Architecture</h6>
                  <h6 className="text-left">Boot mode</h6>
                  <h6 className="text-left">AMI id</h6>
                  <h6 className="text-left">Username | &</h6>
                  <h6 className="text-left"></h6>{" "}
                </div>

                <div className="grid grid-cols-5 gap-6 items-center text-sm text-black">
                  <button className="flex items-center justify-between border-2 border-gray-400 rounded-md px-4 py-2">
                    64-bit (x86)
                    <IoMdArrowDropdown className="text-blue-600 text-xl" />
                  </button>

                  <p className="text-left">uefi-preferred</p>

                  <h6 className="text-left">
                    ami- <br /> 21ewfwrtr313rd
                  </h6>

                  <h6 className="text-left">ec2-user</h6>

                  <p className="text-sm text-white bg-green-500 rounded-md px-2 py-1 text-left">
                    Verified Provider
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md border-2 border-gray-400 mt-5 mb-5 p-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                <IoMdArrowDropdown className="text-3xl font-bold text-gray-700" />
                Instance type
                <a
                  href=""
                  className="text-blue-500 text-xs hover:text-blue-800"
                >
                  info
                </a>
                |
                <a
                  href=""
                  className="text-blue-500 text-xs hover:text-blue-800"
                >
                  Get advice
                </a>
              </h2>
            </div>
            <div className="text-sm font-bold text-black">
              <h6 className="ml-2">Instance type</h6>
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 rounded-md border-2 border-gray-400 m-2">
                <div className="m-2 mb-0 text-sm flex justify-between text-black">
                  <h6>t3.micro</h6>
                  <h6>Free tier eligible</h6>
                </div>
                <div className="grid grid-cols-4 ">
                  <div className="col-span-3 ml-3 mb-2">
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio minus
                    </p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio minus
                    </p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio minus
                    </p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio minus
                    </p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio minus
                    </p>
                  </div>
                  <div className="col-span-1 mt-5 ml-[100px]">
                    <IoMdArrowDropdown className="text-2xl text-blue-500" />
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-7 ml-4 space-y-2">
                <div className="flex gap-2">
                  <FaHeartCircleCheck />
                  <h6>All generations</h6>
                </div>
                <div>
                  <a
                    href=""
                    className="block text-blue-500 text-sm font-bold hover:text-blue-800"
                  >
                    Compare instance types
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a
                href=""
                className="block ml-2 text-blue-500 text-sm font-bold hover:text-blue-800"
              >
                Additional costs apply for AMIs with pre-installed software(AMI)
              </a>
            </div>
          </div>

          <div className="rounded-md border-2 border-gray-400 mt-5 mb-5 p-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
                <IoMdArrowDropdown className="text-3xl font-bold text-gray-700" />
                Key pair (login)
                <a
                  href=""
                  className="text-blue-500 text-xs hover:text-blue-800"
                >
                  info
                </a>
              </h2>
            </div>
            <div>
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, commodi sit iste nesciunt saepe ab error nisi
                fugiat ipsam minima!
              </p>
            </div>
            <div className="text-sm font-bold text-black">
              <h6 className="ml-2 mt-4">key pair name - required</h6>
            </div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 rounded-lg border-2 border-gray-400 m-2">
                <div className="grid grid-cols-4 ">
                  <div className="col-span-3 ml-3 mb-2">
                    <p>Select</p>
                  </div>
                  <div className="col-span-1  ml-[100px]">
                    <IoMdArrowDropdown className="text-2xl text-blue-500" />
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-4 ml-4 space-y-2">
                <div className="flex gap-2">
                  <IoReload />
                  <a
                    href=""
                    className="block text-blue-500 text-sm font-bold hover:text-blue-800"
                  >
                    Create new key pair
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="sticky w-[400px] ">
          <div
            className="mr-2 col-span-4 rounded-xl border-2 border-gray-400 p-3 space-y-4 
        sticky top-28 "
          >
            <div className="flex items-center gap-2">
              <IoMdArrowDropdown className="text-3xl font-bold text-gray-700" />
              <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
            </div>

            <div>
              <div className="flex items-center ">
                <h4 className="text-sm font-bold text-gray-700">
                  Number of Instances
                </h4>
                <a
                  href=""
                  className="ml-3 text-xs text-blue-500 font-bold hover:text-blue-800"
                >
                  info
                </a>
              </div>
              <input
                type="text"
                className="w-full mt-2 p-0 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <hr />

            <div className="overflow-y-auto h-64 pr-2 space-y-3">
              <div>
                <a
                  href=""
                  className="block text-blue-500 text-sm font-bold hover:text-blue-800"
                >
                  Add additional tags (AMI)
                </a>
                <p className="text-sm text-gray-600">
                  Amazon Linux 2023 AMI 2023.6.2....
                  <a href="" className="ml-1 text-blue-500 hover:text-blue-800">
                    read more
                  </a>
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="block text-blue-500 text-sm font-bold hover:text-blue-800"
                >
                  Add additional tags (AMI)
                </a>
                <p className="text-sm text-gray-600">
                  Amazon Linux 2023 AMI 2023.6.2....
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="block text-blue-500 text-sm font-bold hover:text-blue-800"
                >
                  Add additional tags (AMI)
                </a>
                <p className="text-sm text-gray-600">
                  Amazon Linux 2023 AMI 2023.6.2....
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="block text-blue-500 text-sm font-bold hover:text-blue-800"
                >
                  Add additional tags (AMI)
                </a>
                <p className="text-sm text-gray-600">
                  Amazon Linux 2023 AMI 2023.6.2....
                </p>
              </div>

              <div className="relative border-2 border-blue-500 rounded-md bg-blue-100 p-4">
                <IoMdArrowDropdown className="absolute top-2 left-2 text-gray-700" />
                <IoMdArrowDropdown className="absolute top-2 right-2 text-gray-700" />
                <p className="text-sm text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos reiciendis accusamus ratione, alias sit libero
                  inventore, dolorem earum tenetur voluptas, autem blanditiis
                  saepe. Maxime ut ad odio, omnis pariatur impedit molestiae.
                </p>
              </div>
            </div>

            <hr />

            <div className="flex  justify-between items-center ">
              <div className="grid grid-cols-2 mt-2 mb-1">
                <div>
                  <a
                    href=""
                    className="text-sm font-bold text-blue-500 px-3 py-1 rounded-md hover:bg-blue-200 hover:text-blue-700"
                  >
                    Cancel
                  </a>
                </div>
                <div>
                  <button className="ml-10 mb-2 bg-yellow-500 text-black font-bold text-xs px-4 py-2 rounded-full shadow-md hover:bg-yellow-700">
                    Launch Instance
                  </button>
                  <a
                    href=""
                    className="ml-10 text-sm font-bold text-blue-500 mt-2 px-3 py-1 rounded-full hover:bg-blue-200 hover:text-blue-700"
                  >
                    Preview Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instance;
