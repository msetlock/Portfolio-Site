import React, {useEffect, useState}from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from  "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setshadow] = useState(false)

  useEffect(()=> {
    const handleShadow = () => {
      if (window.scrollY >= 90){
        setshadow(true)
      }else{
        setshadow(false)
      }

    }
    window.addEventListener('scroll', handleShadow)

  },[])

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className={shadow ? ' shadow-xl shadow-[#9fb7b9] fixed w-full h-20 z-[100] bg-gradient-to-b from-[#9fb7b9] to-[#f2e2d2]/90 border-none' : 'fixed w-full h-20 z-[100] bg-gradient-to-b from-[#9fb7b9] to-[#f2e2d2] border-none '}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:pr-14 2xl:pl-5">
        <Link href={'/#main'}>
        <Image className="cursor-pointer hover:animate-spin" src={"/../public/code.png"} width={70} height={70} />
        
        </Link>
        <div>
          <ul className="hidden md:flex mr-4">
            <Link href={"/#main"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden pr-5">
            <AiOutlineMenu size={30}/>
          </div>
        </div>
      </div>

      <div onClick={handleNav} className={ !nav ? 'md:hidden  fixed left-0 top-0 w-full h-screen bg-[#84c0c6]/70 ease-in duration-300' : ''}>

        <div className={!nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:-[45%] h-screen p-4 bg-[#e1e6df] ease-in duration-700' : 
      "fixed left-[-100%] top-0 p-4 bg-[#e1e6df] ease-in duration-700"}>
          <div className="">
            <div className="flex w-full items-center justify-between ">
              <Image src={"/../public/code.png"} 
              width={75} 
              height={75} />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-black/40 border-gray-800 p-3 cursor-pointer hover:bg-gray-300 ease-in duration-200">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-5">
              <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary together </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href={'/#main'}>
                <li className="font-semibold py-5 border-b border-gray-300 items-center">
                  Home
                </li>
              </Link>
              <Link href={'/#about'}>
                <li   className="font-semibold py-5 border-b border-gray-300 items-center">
                  About
                </li>
              </Link>
              <Link href={'/#skills'}>
                <li  className="font-semibold py-5 border-b border-gray-300 items-center">
                  My Skills
                </li>
              </Link>
              <Link href={'/#projects'}>
                <li className="font-semibold py-5 border-b border-gray-300 items-center ">
                  Projects
                </li>
              </Link>
              <Link href={'/#contact'}>
                <li className="font-semibold py-5 border-b border-gray-300 items-center">
                  Contact Me
                </li>
              </Link>
              
            </ul>
            <div className="pt-10 pb-20">
              <p className="uppercase tracking-widest text-[#46b1c9]">
                Connect with me
              </p>
              <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
