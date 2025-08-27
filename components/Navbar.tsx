'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      transparent && !scrolled 
        ? 'bg-transparent' 
        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/images/logo.jpg" 
                alt="Money & Me Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary-200 group-hover:border-primary-400 transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="relative">
              <span className="text-3xl font-serif font-bold bg-gradient-to-r from-primary-600 via-teal-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-primary-600 group-hover:to-teal-600 transition-all duration-500">
                Money & Me
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="group relative px-4 py-2 rounded-xl text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50/50">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 to-teal-100/0 group-hover:from-primary-100/50 group-hover:to-teal-100/50 rounded-xl transition-all duration-300"></div>
            </Link>
            <Link href="/about" className="group relative px-4 py-2 rounded-xl text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50/50">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 to-teal-100/0 group-hover:from-primary-100/50 group-hover:to-teal-100/50 rounded-xl transition-all duration-300"></div>
            </Link>
            <Link href="/services" className="group relative px-4 py-2 rounded-xl text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50/50">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 to-teal-100/0 group-hover:from-primary-100/50 group-hover:to-teal-100/50 rounded-xl transition-all duration-300"></div>
            </Link>
            <Link href="/testimonials" className="group relative px-4 py-2 rounded-xl text-neutral-700 hover:text-primary-600 transition-all duration-300 hover:bg-primary-50/50">
              <span className="relative z-10">Testimonials</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/0 to-teal-100/0 group-hover:from-primary-100/50 group-hover:to-teal-100/50 rounded-xl transition-all duration-300"></div>
            </Link>
            <Link href="/get-started" className="ml-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-teal-600 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-primary-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-neutral-700 hover:text-primary-600 focus:outline-none transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-sm border-t border-neutral-200/50 rounded-b-2xl shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link href="/" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-300">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-300">
                About
              </Link>
              <Link href="/services" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-300">
                Services
              </Link>
              <Link href="/testimonials" className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50 rounded-xl transition-all duration-300">
                Testimonials
              </Link>
              <Link href="/get-started" className="block mt-4 px-4 py-3 bg-gradient-to-r from-primary-500 to-teal-500 text-white font-semibold rounded-xl text-center hover:from-primary-600 hover:to-teal-600 transition-all duration-300 shadow-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
