import React from "react";
import Images from "../Images";
import user from "/src/assets/user.jpg";
import { IoHomeSharp } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import logo from "/src/assets/logo2.png";
const Contact = ({ src, chatName, unread, btn }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-[20px]">
          <Images src={src} />
          <div className="">
            <h2 className="font-Poppins font-semibold text-[18px]">{chatName}</h2>
            <h2 className="font-Poppins font-light text-[14px] text-[#4D4D4D]">{unread}</h2>
          </div>
        </div>
        <button className="px-[22px] py-[8px] text-white bg-[#5F35F5] font-Poppins font-semibold text-[20px] cursor-pointer rounded-2xl">
          {btn}
        </button>
      </div>
    </>
  );
};

const Dashboard = () => {
  const groupName = ["Friends Reunion", "Friends Forever", "Crazy Cousins"];
  const unreadMsg = [
    "Hi Guys, Wassup!",
    "Good to see you",
    "What plans today?",
  ];

  return (
    <>
      <div className="flex items-center justify-center h-screen p-4 bg-white/20 gap-x-[30px]">
        <div className="flex flex-col py-[40px] px-[45px] bg-blue-600 items-center gap-y-[60px] gap-x-[20px] text-[50px] rounded-2xl">
          <Images
            src={user}
            className={"w-[100px] ml-[100px] md:ml-0 rounded-[50px]"}
          />
          <div className="gap-y-[60px] gap-x-[60px] flex flex-col">
            <IoHomeSharp className="cursor-pointer hover:px-2 hover:bg-white" />
            <LuMessageCircleMore className="cursor-pointer hover:px-2 hover:bg-white" />
            <IoIosNotifications className="cursor-pointer hover:px-2 hover:bg-white" />
            <IoSettingsOutline className="cursor-pointer hover:px-2 hover:bg-white" />
          </div>
          <div className="">
            <IoLogInOutline className="cursor-pointer hover:px-2 hover:bg-white text-[50px]" />
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-2xl p-[20px]">
          <div className="flex">
            <div className="flex flex-col">
              <input
                type="text"
                className="px-[22px] py-[20px] w-[427px] border-2 rounded-2xl placeholder:text-[#3D3D3D] font-Poppins font-medium text-[16px]"
                placeholder="Search"

              />
              <div className="flex flex-col gap-y-[20px]">
                <p className="my-[20px] font-Poppins font-semibold text-[20px]">Group List</p>
                {groupName.map((item, index) => (
                  <Contact
                    src={logo}
                    chatName={item}
                    unread={unreadMsg[index]}
                    btn={"Join"}
                  />
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
