import React from "react";
import yotr from "next/image";
import Image from "next/image";
import splash from "../public/aboutsplash.jpg"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center justify-center py-16">
      <div className="grid-cols- max-w-[1240px] m-auto md:grid grid-col grid-cols-3 gap-10 xl:gap-24">
        <div className="w-full h-auto m-auto shadow-md xl:shadow-xl shadow-gray-500 rounded-xl flec items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl " src={splash}/>
        </div>
        <div className="px-4 col-span-2">
          <h2 className="py-4  tracking-widest uppercase ">
            About Me <span className=" font-bold">&#123;</span>
          </h2>
          
          <p className="py-2 text-gray-900">I'm just a dude lmao</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            dolorum eos vel dolore. Odio laboriosam, expedita voluptas commodi,
            itaque qui error illo dignissimos quam vitae harum deleniti sequi
            eum tempore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fugiat obcaecati ipsum aliquam quisquam voluptas, sapiente
            temporibus quia, alias, ea ipsa accusamus enim doloribus sed fugit.
            Deleniti ut voluptas alias dignissimos? 
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            iusto eos laborum, similique tempore corporis magni fugiat culpa,
            cum et, laboriosam suscipit ipsa ipsum! Eum, fuga ullam. Modi, animi
            ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium sit quisquam sint quidem amet magni, cumque dolorem
            minus consequatur ipsum deserunt, odio molestiae animi eius
            dignissimos quasi fuga vel delectus.
          </p>
          <p>
            <span className="text-3xl font-bold">&#125;</span>
          </p>
          <p className="text-green-800/80">// Here's some of my work</p>
        </div>
      </div>
    </div>
  );

//   asdasdasda
};


export default About;
