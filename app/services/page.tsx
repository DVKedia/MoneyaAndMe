import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export default function Services() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-teal-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Comprehensive programs designed to transform your relationship with money
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mindset Coaching */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
                Mindset Coaching
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Transform limiting beliefs about money through personalized one-on-one coaching sessions. 
                Uncover and heal deep-rooted patterns that keep you stuck in financial struggle.
              </p>
              <ul className="text-sm text-neutral-600 mb-8 space-y-2">
                <li>• Identify money blocks and limiting beliefs</li>
                <li>• Develop abundance mindset practices</li>
                <li>• Create personalized financial affirmations</li>
                <li>• Ongoing support and accountability</li>
              </ul>
              <CTAButton href="/services/mindset-coaching" variant="primary">
                Learn More
              </CTAButton>
            </div>

            {/* Workshops */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
                Money Mindset Workshops
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Join our transformational group workshops and connect with like-minded individuals 
                on similar journeys. Experience breakthrough moments in a supportive community setting.
              </p>
              <ul className="text-sm text-neutral-600 mb-8 space-y-2">
                <li>• Interactive group exercises</li>
                <li>• Peer support and networking</li>
                <li>• Live coaching demonstrations</li>
                <li>• Take-home resources and tools</li>
              </ul>
              <CTAButton href="/services/workshops" variant="secondary">
                Learn More
              </CTAButton>
            </div>

            {/* One-on-One */}
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
                1-on-1 Intensive Coaching
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Deep, personalized transformation through intensive one-on-one sessions. 
                Get customized strategies and accelerated results with dedicated coach support.
              </p>
              <ul className="text-sm text-neutral-600 mb-8 space-y-2">
                <li>• Personalized assessment and strategy</li>
                <li>• Weekly coaching sessions</li>
                <li>• Custom action plans and homework</li>
                <li>• Direct access to your coach</li>
              </ul>
              <CTAButton href="/services/one-on-one" variant="outline">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-8">
            Our Proven Process
          </h2>
          <p className="text-lg text-neutral-600 mb-12">
            Every program follows our time-tested methodology for lasting transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Discovery & Assessment</h3>
              <p className="text-neutral-600">
                We start by understanding your unique money story, current challenges, and desired outcomes 
                through comprehensive assessments and deep conversation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Pattern Recognition</h3>
              <p className="text-neutral-600">
                Together, we identify the unconscious patterns, beliefs, and behaviors that have been 
                shaping your financial reality.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Transformation Work</h3>
              <p className="text-neutral-600">
                Through targeted exercises, mindset shifts, and practical tools, we help you rewire 
                your relationship with money at the deepest level.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Integration & Action</h3>
              <p className="text-neutral-600">
                We support you in implementing new patterns and behaviors in your daily life, 
                ensuring lasting change and continued growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose the program that resonates with you, or book a consultation to find the perfect fit.
          </p>
          <CTAButton href="/get-started" variant="secondary" size="large">
            Get Started Today
          </CTAButton>
        </div>
      </section>

      <Footer />
    </main>
  )
}
