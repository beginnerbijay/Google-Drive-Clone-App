import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

function Computes() {
  return (
    <div className='basis-[81%]'>
        <div className='flex justify-between py-2 border-b-2 border-gray-300'>
            <div className='flex text-xl items-center'>
                <span className='pl-2'>Computers</span>
            </div>
            <div className='flex mx-8'>
                <AiOutlineInfoCircle className='text-2xl text-[#5f6368] mx-4'/>
            </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center mt-24'>
          <img className='w-[15rem]' src='https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-image-laptop-with-small-human-characters-cloud-icon-vector-illustration_1284-65954.jpg?w=740&t=st=1671547776~exp=1671548376~hmac=451f468bdc62ea495850507ee0945102c49a668f536212f1f1bf11b3ea62ad4f'/>
          <div className='text-[1.2rem]'>No folder syncing with Drive</div>
          <p className='text-sm'>Folders on your computer that you sync with Drive using Drive for desktop will show up<br/>here.<a href='https://support.google.com/drive/answer/10838124?ref_topic=6069785&visit_id=638071450427714671-71446558&rd=1' target="_blank" className='text-[#53b0f2]'> Learn More</a></p>
        </div>
    </div>
  )
}

export default Computes