import React from "react";
import { AiFillFile } from "react-icons/ai";

function Suggested({files}) {
  return (
    <div className="">
      <div className="text-[#5f6368] text-sm font-semibold my-4">Suggested</div>
      <div className="flex suggetion">
      {files.map((file,ind)=>{
        return (
      <a href={file.data.fileURL} key={ind}  target='_blank'><div className="my-2 mx-2" >
      <div className="border border-gray-300 w-[16rem] h-[12rem] rounded">
        <img
          className="w-[16rem] h-[8rem] object-cover border-b-2 border-gray-300"
          src={file.data.fileURL}
        />
        <div className="flex items-center mt-2 mb-1 ml-3">
          <AiFillFile className="text-xl text-[#ea4335]" />
          <span className="text-sm font-semibold ml-3 text-[#5f6368]">
            {file.data.filename}
          </span>
        </div>
        <span className="text-sm font-semibold mx-3 text-[#5f6368]">
          Based on passed activity
        </span>
      </div>
    </div></a>
        )
      })}
      </div>
    </div>
  );
}

export default Suggested;
