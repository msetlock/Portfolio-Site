import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full h-20 shadow-xl bg-gradient-to-b from-[#9fb7b9] to-[#f2e2d2] border-none shadow-none">
      <div className="flex justify-between items-center h-full w-full px-2  2xl:px-1">
      <Image src="/../public/code.png" width={75 } height={75} />
      </div>
    </div>
  );
};

export default Nav;
