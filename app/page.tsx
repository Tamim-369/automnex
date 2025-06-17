import About from '@/components/sections/About'
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
    </>

  )
}

export default Home