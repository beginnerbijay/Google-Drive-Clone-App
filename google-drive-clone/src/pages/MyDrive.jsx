import React from 'react'
import {BsGrid3X2} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import Table from '../components/Table'
import Suggested from '../components/Suggested'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from 'react'

function MyDrive({files,setfiles}) {
    useEffect(()=>{
      const q = query(collection(db, "myfiles"),orderBy("timestamp", "desc"));
      onSnapshot(q, (querySnapshot) => {
        setfiles(querySnapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      });
    },[])
  return (
    <div className='basis-[81%]'>
        <div className='flex justify-between py-2 border-b-2 border-gray-300'>
            <div className='flex text-xl items-center'>
                <span className='pl-2'>My Drive</span>
                <span className='mt-1 mx-2'><IoMdArrowDropdown/></span>
            </div>
            <div className='flex mx-8'>
                <BsGrid3X2 className='text-2xl text-[#5f6368] mx-4'/>
                <AiOutlineInfoCircle className='text-2xl text-[#5f6368] mx-4'/>
            </div>
        </div>
        <div className='my-4 w-[80vw] s:w-[95vw] sma:[79vw]'>
            <Suggested files={files}/>
        </div>
        <div className='my-8'>
            <Table files={files}/>
        </div>
    </div>
  )
}

export default MyDrive