import Footer from '@/components/Footer'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>

  )
}

export default Home