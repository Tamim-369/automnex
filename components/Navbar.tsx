"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Background with floating orbs */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-800 to-black" />
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 20s infinite ease-in-out',
            animationDelay: '0s'
          }} />
        <div className="absolute top-[60%] right-[10%] w-48 h-48 bg-gray-300/20 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 20s infinite ease-in-out',
            animationDelay: '-10s'
          }} />
        <div className="absolute bottom-[20%] left-[10%] w-36 h-36 bg-white/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 20s infinite ease-in-out',
            animationDelay: '-5s'
          }} />
      </div>

      {/* Navbar */}
      <nav className={`fixed  left-1/2 -translate-x-1/2 z-50 transition-all duration-500  ${isScrolled ? 'w-full sm:w-[95%] xl:w-10/12 top-0 sm:top-3' : 'top-3 md:top-6 w-[95%] max-w-[1440px] xl:w-9/12'}`}>
        <div className="mx-auto w-full">
          <div className={`group relative overflow-hidden ${isScrolled ? "rounded-none sm:rounded-2xl" : "rounded-2xl"}  border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10`}>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img src={"/logo.png"} className="h-10 w-10 text-black" />

                <span className="text-xl md:hidden font-bold tracking-tight text-white uppercase">Automnex</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center flex-wrap gap-4 py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`text-sm sm:text-base font-medium ${activeLink === link.name ? 'text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden md:flex">
                <Button
                  size="lg"
                  className="rounded-xl bg-gradient-to-r from-white to-gray-300 px-6 sm:px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book A Call
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="text-white p-2 flex justify-center items-center hover:bg-white/10 rounded-md">
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-80 border-l border-white/10 bg-black/95 backdrop-blur-2xl"
                  >
                    <div className="flex flex-col space-y-6 pt-16">
                      {/* Mobile Logo */}
                      <div className="flex items-center space-x-3 px-6">
                        <div className="rounded-lg bg-gradient-to-br from-white to-gray-400 p-2">
                          <Zap className="h-5 w-5 text-black" />
                        </div>
                        <span className="text-xl font-bold text-white">NeuralAI</span>
                      </div>

                      {/* Mobile Navigation Links */}
                      <div className="flex flex-col space-y-2 px-6">
                        {navLinks.map((link, index) => (
                          <Link
                            href={link.href}
                            key={link.name}
                            onClick={() => setActiveLink(link.name)}
                            className={`justify-start rounded-xl px-8 py-4 text-left transition-all duration-300 ${activeLink === link.name
                              ? 'bg-gradient-to-r from-white/20 to-gray-300/20 text-white border border-white/30'
                              : 'text-white/80 hover:text-white'
                              }`}
                            style={{
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>

                      {/* Mobile CTA */}
                      <div className="px-6">
                        <Button className="w-full rounded-xl bg-gradient-to-r from-white to-gray-300 py-5 font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-xl border-0">
                          <span className="flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(-20px, 20px) rotate(180deg); }
          75% { transform: translate(-30px, -10px) rotate(270deg); }
        }
      `}</style>
    </>
  );
};

export default Navbar;