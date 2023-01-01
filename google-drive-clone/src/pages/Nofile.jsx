import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

function Nofile() {
  return (
    <div className='basis-[81%]'>
        <div className='flex justify-between py-2 border-b-2 border-gray-300 mb-8'>
            <div className='flex text-xl items-center'>
                <span className='pl-2'>No Service</span>
            </div>
            <div className='flex mx-8'>
                <AiOutlineInfoCircle className='text-2xl text-[#5f6368] mx-4'/>
            </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center mt-24'>
          <img className='w-[15rem]' src='https://img.freepik.com/free-vector/transfer-files-concept-landing-page_52683-24770.jpg?w=740&t=st=1672470676~exp=1672471276~hmac=8f1eeb82410cc66cd0c215f4932249890b8099e72720a03503e58022d3ed5990'/>
          <div className='text-[1.2rem]'>No file synced with Drive</div>
          <p className='text-sm'>This feature is not added to this web app<br/>yet.<a href='https://support.google.com/drive/answer/10838124?ref_topic=6069785&visit_id=638071450427714671-71446558&rd=1' target="_blank" className='text-[#53b0f2]'> Learn More</a></p>
        </div>
    </div>
  )
}

export default Nofile