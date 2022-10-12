import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from  "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center  items-center pb-16 md:pb-24 2xl:pb-48">
        <div>
          <p className="tracking-widest text-sm uppercase flex justify-center items-center text-violet-600/80">
            Stop in, say hi, stay a while
          </p>
          <h1 className="py-3 text-gray-700">I'm <span className="text-[#46b1c9]"> Michael</span></h1>
          <h1 className="py-1 text-gray-700">I Develop, Design, and Code</h1>
          <p className="text-sm py-4 tracking-wide max-w-[70%] m-auto font-semibold">
            I have a focus on web development and building responsive layouts that are pleasant on the eye. Is it working?
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-3">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
