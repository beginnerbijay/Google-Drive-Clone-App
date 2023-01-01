import React from 'react'

function Login({login}) {
  return (
    <div className='flex h-[100vh] items-center justify-center flex-col'>
        <img className='h-12' src='https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_256px.png'/>
        <button className='px-10 py-2 h-[2.5rem] border border-bg-[#e0e0e0] mt-4 bg-sky-600 rounded text-[#fff]' onClick={login}>Log In To Google Drive</button>
    </div>
  )
}

export default Login