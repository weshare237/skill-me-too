import Blog from '../components/Blog'
import BlogHero from '../components/BlogHero'
import Footer from '../components/Footer'
import Header from '../components/Header'

const BlogPage = () => {
  return (
    <>
      <Header />

      <div className='max-w-7xl mx-auto'>
        <BlogHero />
        <Blog />
      </div>

      <Footer />
    </>
  )
}
export default BlogPage
