import React from "react";
import Image from "next/image";
import housepic from "../public/assets/projects/house.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function house() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full  h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          src={housepic}
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2">
          <h2 className="py-2">Real Estate Site</h2>
          <p>React JS / Bootstrap CSS </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  gap-8 pt-5">
        <div className="col-span-4">
          <p className="uppercase text-xltracking-widest text-[#5651e5] ">
            Project
          </p>
          <h2 className="py-2 text-gray-600">Overview</h2>
      
          <p>
            This is a house hunting real estate site. It is built with React JS
            and Bootstrap CSS. It has a filter system that allows users to
            choose the type of house they want to buy. It also has a system that
            allows users to save houses they like . It also has a video for each
            house that is displayed on the site.
          </p>
          <button className="px-8 py-2  mt-4 mr-8">
            <a
              href="https://trance-homes.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
           Live   Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/MICHAELMUNAVU83/my-house-hunter"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center  font-semibold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="flex items-center text-gray-600 md:text-md text-sm py-2 ">
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1  md:text-md text-sm" /> Bootstrap
              </p>
              <p className="flex items-center text-gray-600 py-2 ">
                <RiRadioButtonFill className="pr-1  md:text-md text-sm" /> JavaScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back </p>
        </Link>
      </div>
    </div>
  );
}

export default house;
