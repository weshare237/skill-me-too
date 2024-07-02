import Blog from '../components/Blog'
import CallToAction from '../components/CallToAction'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <Services />
      <Stats />
      <Team />
      <Blog />
      <Testimonial />
      <LogoCloud />
      <Faq />
      <Footer />
    </>
  )
}
export default Home
