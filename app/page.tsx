import Footer from '@/components/Footer'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import TestimonialsSection from '@/components/sections/Testemonials'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      <TestimonialsSection />
      <FAQ />
      <Contact />
      <Footer />
    </>

  )
}

export default Home