import React from "react";
import {
  RiArrowDownSFill,
  RiBardLine,
  RiChatAiLine,
  RiFile4Line,
  RiFolderUserLine,
  RiNotificationLine,
  RiShutDownLine,
} from "react-icons/ri";

const Navlinks = () => {
  return (
    <section className="sticky lg:static top-0 flex items-center lg:items-start lg:justify-start h-[7vh] lg:h-[100vh] w-full lg:w-[150px] py-8 lg:py-0 bg-[#01aa85]">
      <main className="flex lg:flex-col items-center lg:gap-10 justify-between lg:px-0 w-full">
        <div className="flex items-start justify-center lg:border-b border-b-1 border-b-gray-200 lg:w-full p-4">
          <span className="flex items-center justify-center bg-white w-[57px] h-[48px] rounded-lg p-2">
            <img
              src="/logo.png"
              className="w-[56px] h-[52px] object-contain"
              alt=""
            />
          </span>
        </div>

        <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-10 px-2 md:px-0">
          <li className="">
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiChatAiLine color="#fff" />
            </button>
          </li>
          <li className="">
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiFolderUserLine color="#fff" />
            </button>
          </li>
          <li className="">
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiNotificationLine color="#fff" />
            </button>
          </li>
          <li className="">
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiFile4Line color="#fff" />
            </button>
          </li>
          <li className="">
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiBardLine color="#fff" />
            </button>
          </li>
          <li className="">
            <button className="lg:text-[28px] text-[22px] cursor-pointer">
              <RiShutDownLine color="#fff" />
            </button>
          </li>
        </ul>

        <button className="block lg:hidden lg:text-[28px] text-[22px]">
          <RiArrowDownSFill color="#fff" />
        </button>
      </main>
    </section>
  );
};

export default Navlinks;
