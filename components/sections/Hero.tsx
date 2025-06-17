'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import BookCallModal from '../BookCallModal'

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-[100dvh] items-center justify-center px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 bg-gradient-to-r from-white/20 to-white bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
                        Next-Gen AI Solutions
                    </h1>
                    <p className="mb-8 text-xl leading-relaxed text-white/70 md:text-2xl">
                        Transform your business with cutting-edge artificial intelligence technology.
                        Our premium AI solutions deliver exceptional results that drive growth and innovation.
                    </p>

                    {/* Demo CTAs */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            onClick={() => setIsModalOpen(true)}
                            className="flex rounded-xl bg-gradient-to-r from-white to-gray-300 px-7 py-6 font-bold text-base text-black shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Book A Call
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default Hero