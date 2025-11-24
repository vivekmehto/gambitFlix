import React from 'react'

const Header = () => {
  return (
    <div className=' w-full absolute bg-linear-to-b from-black to-transparent p-4 space-x-2 z-10'>
      <div className='flex items-center gap-0'>
  {/* <img 
      className='w-32 cursor-pointer m-0'
      src='logo-rmbg.png'
      alt='Gambit Flix Logo'
      /> */}

      <h1 className='text-4xl p-2 font-bold text-red-700 '>♞ GambitFlix</h1>
    
      </div>
    </div>
  )
}

export default Header