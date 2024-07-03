import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='fixed top-0 w-full z-10'>
      {/* <!-- lg+ --> */}
      <div className='relative bg-black'>
        <div className='absolute inset-0'>
          <img
            className='object-cover w-full h-full'
            src='https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg'
            alt=''
          />
        </div>

        <div className='absolute inset-0 bg-black/30'></div>

        <div className='relative px-4 mx-auto sm:px-6 lg:px-8'>
          <nav className='flex items-center justify-between h-16 lg:h-20'>
            <div className='flex-shrink-0'>
              <Link to='/' title='' className='flex'>
                <img className='w-auto h-8 lg:h-16' src={logo} alt='' />
              </Link>
            </div>

            <button
              type='button'
              className='inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800'
              onClick={toggleMenu}
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>

              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            <div className='hidden lg:flex lg:items-center lg:space-x-10'>
              <Link
                to='/about-us'
                title=''
                className='text-base font-medium text-white'
              >
                About us
              </Link>

              <Link
                to='/contact-us'
                title=''
                className='text-base font-medium text-white'
              >
                Contact us
              </Link>

              <a
                href='/blog'
                title=''
                className='text-base font-medium text-white'
              >
                Blog
              </a>

              <Link
                to='/donate'
                title=''
                className='text-base font-medium text-white'
              >
                Donate
              </Link>
            </div>

            <Link
              to='/register'
              title=''
              className='items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500'
            >
              Join Now
            </Link>
          </nav>
        </div>
      </div>

      {/* <!-- xs to lg --> */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col justify-between w-full max-w-xs min-h-screen px-4 py-10 bg-black sm:px-6 lg:hidden`}
      >
        <button
          type='button'
          className='inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800'
          onClick={toggleMenu}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <div className='flex flex-col flex-grow h-full'>
          <nav className='flex flex-col flex-1 mt-10 space-y-2'>
            <Link
              to='/about-us'
              title=''
              className='flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70'
            >
              About us
            </Link>

            <Link
              to='/contact-us'
              title=''
              className='flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70'
            >
              Contact us
            </Link>

            <Link
              to='/blog'
              title=''
              className='flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70'
            >
              Blog
            </Link>

            <Link
              to='/donate'
              title=''
              className='flex w-full py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70'
            >
              Donate
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Header
