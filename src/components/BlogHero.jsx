const BlogHero = () => {
  return (
    <div className='flex justify-between items-center bg-[#ffc017] py-10 mt-24 lg:py-0 border-y border-black xl:border-hidden xl:rounded-xl'>
      {/* Hero content */}
      <div className='px-10 space-y-5 lg:py-6'>
        <h1 className='text-6xl md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12'>
          <span className='underline decoration-black decoration-4'>
            Skill me too
          </span>{' '}
          is a place to write, read and connect.
        </h1>
        <h2 className='w-9/12 font-normal'>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
        <button className='border border-black bg-white px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100'>
          Start Writing
        </button>
      </div>
      {/* Hero image */}
      <img
        className='hidden sm:inline-flex h-40 lg:h-80 xl:h-full'
        src='https://shubh73-medium.vercel.app/M.png'
        alt=''
      />
    </div>
  )
}
export default BlogHero
