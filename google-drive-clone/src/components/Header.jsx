import React from 'react'
import {AiOutlineSearch,AiOutlineCheckCircle,AiOutlineQuestionCircle} from 'react-icons/ai'
import {RiEqualizerLine} from 'react-icons/ri'
import {TbSettings} from 'react-icons/tb'
import {CgMenuGridO} from 'react-icons/cg'
import { MdMenu } from 'react-icons/md'

function Header({photoURL,opo}) {
  return (
    <div className='flex justify-between px-6 py-2 border-b-2 border-gray-200'>
      <div className='basis-[15%] flex flex-row h-12 items-center'>
        <img className='h-8 s:hidden' src='https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_256px.png'/>
        <span className='align-middle mb-1 text-neutral-500 ml-2 text-2xl font-semibold s:hidden' >Drive</span>
        <MdMenu onClick={opo} className='text-2xl text-[#5f6368] hidden s:block'/>
        </div>
      <div className='basis-[60%]'>
        <div className='bg-[#f1f3f4] flex flex-row items-center justify-between h-12 w-[45rem] sma:w-[25rem] s:w-[13rem] rounded-md px-4'>
        <AiOutlineSearch className='text-2xl text-[#5f6368]'/>
        <input className='w-[38rem] bg-[#f1f3f4] outline-0' type='text' placeholder='Search in Drive'/>
        <RiEqualizerLine className='text-2xl text-[#5f6368]'/>
        </div>
      </div>
      <div className='basis-[20%] flex flex-row justify-around '>
        <span className='flex flex-row items-center s:hidden'>
        <AiOutlineCheckCircle className='text-2xl text-[#5f6368]'/>
        <AiOutlineQuestionCircle className='text-2xl text-[#5f6368] mx-3'/>
        <TbSettings className='text-2xl text-[#5f6368]'/>
        </span>
        <span className='flex flex-row items-center '>
        <CgMenuGridO className='text-2xl text-[#5f6368]'/>
        <img className='h-8 ml-6 rounded-full' src={photoURL}/>
        </span>
      </div>
    </div>
  )
}

export default Header