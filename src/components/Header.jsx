import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center bg-black'>

      <img 
      className='w-32'
      src='logo-rmbg.png'
      alt='Gambit Flix Logo'
      />

      <h1 className='text-2xl font-bold font- text-white '>Gambit Flix</h1>
    </div>
  )
}

export default Header