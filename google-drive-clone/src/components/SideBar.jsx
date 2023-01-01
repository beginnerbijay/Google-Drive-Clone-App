import React from "react";
import { BsPlusLg, BsPersonLinesFill } from "react-icons/bs";
import { RiHardDrive2Line, RiDeleteBin6Line } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { AiOutlineStar, AiOutlineCloud } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import {FcGoogle} from 'react-icons/fc'
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModelBox from "./Model";
import { getAuth, signOut } from "firebase/auth";

function SideBar({setshow,side,opo}) {
  const [open, setOpen] = useState(false);
  const logout=()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  setshow(false)
}).catch((error) => {
  console.log(error.message)
});
  }
  return (
    <div className={`basis-[19%] p-4 ${side?"block":"s:hidden"}`}>
      <button className="flex h-12 shadow w-[8rem] justify-center items-center rounded-full" onClick={()=>setOpen(true)}>
        <img src="https://firebasestorage.googleapis.com/v0/b/drive-clone-f7218.appspot.com/o/addicon%20(1)%20(1).png?alt=media&token=f7c0dd1c-47cf-48a5-b54e-9e27485a5a73" className="text-2xl text-[#5f6368] mr-2 h-[3rem] rounded-full p-1" />
        <span>New</span>
      </button>
      <ModelBox open={open} setOpen={setOpen} opo={opo}/>
      <div className="mt-6 pb-3 border-b-2 border-gray-300" onClick={opo}> 
        <Link to='/'><Menu icon={<RiHardDrive2Line />} text={"My Drive"} /></Link>
        <Link to='/computers'><Menu icon={<MdDevices />} text={"Computers"} /></Link>
        <Link to='*'><Menu icon={<BsPersonLinesFill />} text={"Shared with me"} /></Link>
        <Link to='/recent'><Menu icon={<BiTimeFive />} text={"Recent"} /></Link>
        <Link to='*'><Menu icon={<AiOutlineStar />} text={"Starred"} /></Link>
        <Link to='*'><Menu icon={<RiDeleteBin6Line />} text={"Bin"} /></Link>
      </div>
      <div className="my-4">
        <Menu icon={<AiOutlineCloud />} text={"Storage"}/>
        <div className="bg-[#e0e0e0] mx-3 w-[11rem]">
          <div className="bg-indigo-500 h-[4px] w-[1.5rem] rounded-full border-r-2 border-white mt-5"></div>
        </div>
        <div className="text-sm mx-4 my-1 text-[#5f6368]">1.00 GB of 15 GB used</div>
        <button className="mx-4 my-2 h-[2.5rem] w-[8.5rem] border border-bg-[#e0e0e0]"><span className="text-[14px] text-blue-600/100 font-semibold">Buy Storage</span></button>
        <button className="mx-4 my-2 h-[2.5rem] w-[8.5rem] border border-bg-[#e0e0e0] flex items-center justify-center" onClick={logout}><FcGoogle /><span className="text-[14px] text-blue-600/100 font-semibold ml-2">Log Out</span></button>
      </div>
    </div>
  );
}

export default SideBar;
