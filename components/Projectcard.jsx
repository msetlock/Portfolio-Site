import Image from "next/image";
import Link from "next/link";
import React from "react";
import samp from "../public/assets/projects/sample.jpg";
const projectcard = ({ title, backImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl  group hover:bg-gradient-to-r from-[#46b1c9] to-[#9fb7b9]">
      <Image className="rounded-xl group-hover:opacity-10" src={backImg} />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-2xl tracking-widest text-white text-center">
          {title}
        </h2>
        <p className="pb-4 pt-2 text-white text-center">
          Smample project techs
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer">
            More information
          </p>
        </Link>
      </div>
    </div>
  );
};

export default projectcard;
