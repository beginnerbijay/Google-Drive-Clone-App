import React from 'react'

function Menu({icon,text}) {
  return (
    <div className='flex items-center m-3'>
        <span className='text-2xl text-[#5f6368] mr-4'>{icon}</span>
        <span className='text-sm text-[#5f6368] font-medium'>{text}</span>
    </div>
  )
}

export default Menu