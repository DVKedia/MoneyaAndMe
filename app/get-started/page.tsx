'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    currentSituation: '',
    preferredProgram: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll be in touch within 24 hours to schedule your discovery call.')
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-teal-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Let's Start Your Financial Peace Journey
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Take the first step toward transforming your relationship with money
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
                Book Your Free Discovery Call
              </h2>
              <p className="text-neutral-600 mb-8">
                Tell us about your situation and goals so we can provide the most valuable guidance during our call.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="currentSituation" className="block text-sm font-medium text-neutral-700 mb-2">
                    What's your current situation with money? *
                  </label>
                  <textarea
                    id="currentSituation"
                    name="currentSituation"
                    required
                    rows={4}
                    value={formData.currentSituation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your current financial challenges, patterns, or concerns..."
                  />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-neutral-700 mb-2">
                    What would you like to achieve? *
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    required
                    rows={4}
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Describe your ideal relationship with money and what success looks like for you..."
                  />
                </div>

                <div>
                  <label htmlFor="preferredProgram" className="block text-sm font-medium text-neutral-700 mb-2">
                    Which program interests you most?
                  </label>
                  <select
                    id="preferredProgram"
                    name="preferredProgram"
                    value={formData.preferredProgram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a program</option>
                    <option value="mindset-coaching">Mindset Coaching</option>
                    <option value="workshops">Money Mindset Workshops</option>
                    <option value="one-on-one">1-on-1 Intensive Coaching</option>
                    <option value="not-sure">Not sure - help me decide</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Book My Free Discovery Call
                </button>

                <p className="text-sm text-neutral-500 text-center">
                  We'll contact you within 24 hours to schedule your complimentary 30-minute discovery call.
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  What to Expect on Your Call
                </h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Explore your unique money story and patterns
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Get clarity on your financial goals and vision
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Identify potential blocks and breakthrough opportunities
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Discover which program is the best fit for you
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Leave with actionable next steps
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  Prefer to Chat Directly?
                </h3>
                <p className="text-neutral-600 mb-6">
                  Have questions or want to discuss your situation before booking? 
                  We're here to help!
                </p>
                <a 
                  href="https://wa.me/9775679279" 
                  className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            You're One Step Away from Financial Freedom
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Taking this step shows incredible courage and commitment to your growth. 
            We're honored to be part of your transformation journey.
          </p>
          <div className="bg-white/20 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg italic">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
            <p className="text-sm mt-2 opacity-75">- Chinese Proverb</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
