import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div className="w-full lg:h-screen p-2 py-16">
      <div id="contact" className="max-w-[1240px] m-auto px-4 py-16 w-full">
        <p className="text-xl uppercase text-[#46b1c9] tracking-widest">
          Contact
        </p>
        <h2>Let's Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="">
                <img
                  className="rounded-xl hover:scale-105 ease-in-out duration-300"
                  src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className="py-2">
                <h2 className="py-2">Michael Setlock</h2>
                <p>Front end Dev</p>
                <p className="py-4">
                  Have an opportunity? Drop a line and contact me!
                </p>
              </div>
              <div>
                <p className="uppercase">Connect with me here</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-3">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*right*/}

          <div className="col-span-3 w-full m-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="https://getform.io/f/438a39d5-d9d0-4cb5-b0f7-aaf15f42d87d" method="POST" encType="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">Phone Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      name="phone number"
                    />
                  </div>
                  <div></div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm">Message</label>
                  <textarea className="border-2 rounded-lg p-3 flex border-gray-400" rows={'10'} name="message"></textarea>
                </div>
                <div>
                    <button className="my-5 w-full bg-gradient-to-r from-[#46b1c9] to-[#9fb7b9] p-4 text-gray-800">
                        Submit
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex justify-center py-12">
            <Link href={'/#main'}>
                <div className="rounded-full shadow-xl shadow-gray-400 p-4 m-auto cursor-pointer hover:scale-125 ease-in duration-300">
                    <HiOutlineChevronDoubleUp size={30} className="text-[#46b1c9]"/></div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
