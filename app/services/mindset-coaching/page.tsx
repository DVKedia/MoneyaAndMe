import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export default function MindsetCoaching() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-teal-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Mindset Coaching
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Transform your limiting beliefs and unlock your natural abundance
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            What's Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Deep Money Assessment</h3>
              <p className="text-neutral-600">
                Comprehensive evaluation of your current money patterns, beliefs, and behaviors 
                to create a personalized transformation roadmap.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Weekly Coaching Sessions</h3>
              <p className="text-neutral-600">
                60-minute one-on-one sessions focused on identifying and transforming limiting 
                beliefs about money, wealth, and self-worth.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Custom Action Plans</h3>
              <p className="text-neutral-600">
                Personalized exercises, affirmations, and practices designed specifically 
                for your unique money story and goals.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">24/7 Support Access</h3>
              <p className="text-neutral-600">
                Direct access to your coach via WhatsApp for questions, breakthroughs, 
                and support between sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            Benefits You'll Experience
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Release Financial Anxiety
                </h3>
                <p className="text-neutral-600">
                  Transform worry and stress about money into confidence and peace of mind.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Break Through Income Ceilings
                </h3>
                <p className="text-neutral-600">
                  Identify and dissolve the unconscious blocks that keep you stuck at certain income levels.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Develop Abundance Mindset
                </h3>
                <p className="text-neutral-600">
                  Shift from scarcity thinking to naturally attracting and creating more opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Improve Financial Decision Making
                </h3>
                <p className="text-neutral-600">
                  Make money choices from a place of clarity and alignment rather than fear or impulse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              3-Month Transformation Program
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive mindset coaching with personalized support
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">12</div>
                <div className="text-sm">Weekly Sessions</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-sm">WhatsApp Support</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">Custom</div>
                <div className="text-sm">Action Plans</div>
              </div>
            </div>
            
            <div className="text-3xl font-bold mb-2">Investment: $2,997</div>
            <div className="text-lg opacity-90 mb-8">3-month payment plan available</div>
            
            <CTAButton href="/get-started" variant="secondary" size="large">
              Book Your Discovery Call
            </CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
