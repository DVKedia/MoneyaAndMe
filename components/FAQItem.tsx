'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-200/30 to-teal-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
      
      <button
        className="relative z-10 w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-primary-50/30 hover:to-teal-50/30 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors duration-300 text-lg">
          {question}
        </span>
        <div className="relative">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-primary-200 to-teal-200' : ''}`}>
            <svg
              className={`w-5 h-5 text-primary-600 transition-all duration-300 ${
                isOpen ? 'transform rotate-180 text-primary-700' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`relative z-10 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-6">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mb-4"></div>
          <p className="text-neutral-700 leading-relaxed text-base">
            {answer}
          </p>
          
          {/* Decorative Icon */}
          <div className="flex justify-start mt-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
