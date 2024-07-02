import { Link } from 'react-router-dom'
import forgotPasswordStory from '../assets/forgotPassword.svg'

const ForgotPassword = () => {
  return (
    <section className='bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
        <div className='relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <img
              className='object-cover object-top w-full h-full'
              src={forgotPasswordStory}
              alt=''
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
        </div>

        <div className='flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24'>
          <div className='xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl'>
              Forgot password
            </h2>
            <p className='mt-2 text-base text-gray-600'>
              Don’t have an account?{' '}
              <Link
                to='/register'
                title=''
                className='font-medium text-green-600 transition-all duration-200 hover:text-green-700 focus:text-blue-700 hover:underline'
              >
                Create a free account
              </Link>
            </p>

            <form action='#' method='POST' className='mt-8'>
              <div className='space-y-5'>
                <div>
                  <label
                    htmlFor=''
                    className='text-base font-medium text-gray-900'
                  >
                    {' '}
                    Email address{' '}
                  </label>
                  <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        className='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                        />
                      </svg>
                    </div>

                    <input
                      type='email'
                      name=''
                      id=''
                      placeholder='Enter email to get started'
                      className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-green-600 focus:bg-white caret-green-600'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md   focus:outline-none hover:opacity-80 focus:opacity-80  bg-green-400 hover:bg-green-300 focus:bg-green-300'
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ForgotPassword
