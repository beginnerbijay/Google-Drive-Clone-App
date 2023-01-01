import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Table from '../components/Table'

function Recent({files}) {
  return (
    <div className='w-[100vw]'>
        <div className='flex justify-between py-2 border-b-2 border-gray-300 mb-8'>
            <div className='flex text-xl items-center'>
                <span className='pl-2'>Recent</span>
            </div>
            <div className='flex mx-8'>
                <AiOutlineInfoCircle className='text-2xl text-[#5f6368] mx-4'/>
            </div>
        </div>
        <Table files={files}/>
    </div>
  )
}

export default Recent