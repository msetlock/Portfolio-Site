import Image from "next/image";
import Link from "next/link";
import react from "react";
import React from "react";
import samp from "../public/assets/projects/sample.jpg";
import Projectcard from "./Projectcard";

const projects = () => {
  return (
    <div className="w-full">
      <div className="px-4 max-w-[1240px] mx-auto py-16">
        <p className="text-xl uppercase text-[#46b1c9] tracking-widest">
          Projects
        </p>
        <h2 className="py-4">What I've Made</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Projectcard title="Sample" backImg={samp} projectUrl="sample" />
          <Projectcard title="YelpCamp" backImg={samp} projectUrl="sample" />
          <Projectcard title="simulation" backImg={samp} projectUrl="sample" />
          <Projectcard title="Sample" backImg={samp} projectUrl="sample" />
        </div>
      </div>
    </div>
  );
};

export default projects;
