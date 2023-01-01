import React, { useEffect } from "react";
import { AiFillFile } from "react-icons/ai";

function Table({files}) {
  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
  return (
    <div className="">
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell text-left font-semibold py-2">Name</div>
            <div className="table-cell text-left font-semibold py-2 s:hidden">Owner</div>
            <div className="table-cell text-left font-semibold py-2">Last modified</div>
            <div className="table-cell text-left font-semibold py-2">File size</div>
          </div>
        </div>
        <div className="table-row-group ">
          {files.map((file,ind)=>{
            return (
            <div className="table-row " key={ind}>
            <div className="table-cell border-y-2 py-2"><p className="flex break-all p-1"> <AiFillFile className="text-xl text-[#ea4335] mr-2" />{file.data.filename}</p></div>
            <div className="table-cell border-y-2 py-2 s:hidden">me</div>
            <div className="table-cell border-y-2 py-2">{new Date(file.data.timestamp?.seconds*1000).toUTCString()}</div>
            <div className="table-cell border-y-2 py-2">{formatBytes(file.data.size)}</div>
            </div>
            )
          }
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Table;
