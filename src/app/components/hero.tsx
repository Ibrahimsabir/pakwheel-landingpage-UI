import Image from "next/image";
import Top from "./top";
import { NavigationMenuDemo } from "./navigationmenu";
import Imagelogo from "./paklogo";
import { FaGreaterThan } from "react-icons/fa6";
import { FaSearch, FaCaretDown } from "react-icons/fa";


export default function Hero() {
  return (
    <div className="max-w-full h-[800px] flex flex-col bg-gradient-to-b from-black to-blue-900 gap-2">
    <Top/>
   <Imagelogo/>
    <NavigationMenuDemo/>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-gray-200 text-6xl">Find Used Cars in Pakistan</h1>
      <h2 className="text-gray-200 text-3xl">With thousands of cars, we have just the right one for you</h2>
    </div>
    <div className="grid grid-cols-[4fr_3fr_3fr_1fr] border-1 w-[80%] h-[80px] justify-center items-center bg-gray-200 border-1 border-gray-800 rounded-lg mt-6 mx-auto">
           <div className="flex justify-start text-[1.5rem] px-6 items-center border-r-2 text-gray-600 border-gray-300 h-full rounded">Car Make or Model</div>
           <div className="flex justify-between text-[1.5rem] px-6 items-center border-r-2 text-gray-600 border-gray-300 h-full">All Cities < FaCaretDown className="text-gray-700"/></div>
           <div className="flex justify-between text-[1.5rem] px-6 items-center border-r-2 text-gray-600 border-gray-300 h-full">Price Range < FaCaretDown className="text-gray-700"/></div>
           <button className="flex justify-center items-center bg-[#3eb549] hover:bg-green-600 h-full rounded-tr-lg rounded-br-lg text-center">
            <FaSearch className="text-white text-4xl  "/>
            </button>
    </div>
    <div className="">
      <button  className="flex text-xl justify-center items-center text-gray-200 m-auto mt-4 mb-32 border-2 gap-2 border-gray-200 rounded px-6 py-2">Advanced Filter <FaGreaterThan className="text-lg"/> </button>
    </div>
    </div>
  );
}
 