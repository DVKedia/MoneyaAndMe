import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export default function OneOnOne() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 via-primary-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            1-on-1 Intensive Coaching
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Accelerated transformation with dedicated personal support
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-8 text-center">
            Premium Transformation Experience
          </h2>
          <p className="text-lg text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
            Our most comprehensive program designed for high-achievers ready to make quantum leaps 
            in their financial reality. Get personalized attention and accelerated results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Intensive Focus</h3>
              <p className="text-neutral-600">Deep, concentrated work on your specific money blocks and goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Rapid Results</h3>
              <p className="text-neutral-600">Accelerated transformation with measurable outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Full Support</h3>
              <p className="text-neutral-600">Complete access to your coach throughout the journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            Complete Transformation Package
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Comprehensive Money Assessment
                </h3>
                <p className="text-neutral-600">
                  In-depth analysis of your financial patterns, beliefs, and unconscious blocks using our proprietary assessment tools.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Weekly 90-Minute Sessions
                </h3>
                <p className="text-neutral-600">
                  Extended coaching sessions allowing for deep work and breakthrough moments with your dedicated coach.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Custom Transformation Plan
                </h3>
                <p className="text-neutral-600">
                  Personalized roadmap with specific exercises, practices, and milestones tailored to your unique situation and goals.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Unlimited WhatsApp Support
                </h3>
                <p className="text-neutral-600">
                  Direct access to your coach for questions, breakthroughs, and support throughout your transformation journey.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Bonus Resources & Tools
                </h3>
                <p className="text-neutral-600">
                  Access to our complete library of guided meditations, worksheets, and exclusive content worth $500+.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            Investment Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border-2 border-neutral-200">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                6-Month Intensive
              </h3>
              <div className="text-3xl font-bold text-neutral-800 mb-2">$7,997</div>
              <div className="text-neutral-600 mb-6">Complete transformation program</div>
              <ul className="text-sm text-neutral-600 space-y-2 mb-8">
                <li>• 24 weekly sessions (90 minutes each)</li>
                <li>• Unlimited WhatsApp support</li>
                <li>• Custom transformation plan</li>
                <li>• All bonus resources included</li>
                <li>• 6-month guarantee</li>
              </ul>
              <CTAButton href="/get-started" variant="outline" className="w-full">
                Choose This Option
              </CTAButton>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-teal-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                3-Month Accelerated
              </h3>
              <div className="text-3xl font-bold mb-2">$4,997</div>
              <div className="opacity-90 mb-6">Rapid transformation program</div>
              <ul className="text-sm space-y-2 mb-8 opacity-90">
                <li>• 12 weekly sessions (90 minutes each)</li>
                <li>• Unlimited WhatsApp support</li>
                <li>• Custom transformation plan</li>
                <li>• All bonus resources included</li>
                <li>• 3-month guarantee</li>
              </ul>
              <CTAButton href="/get-started" variant="secondary" className="w-full">
                Start Now
              </CTAButton>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-neutral-600 mb-4">Payment plans available • 100% satisfaction guarantee</p>
            <p className="text-sm text-neutral-500">
              All programs include a money-back guarantee if you don't see measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
                Success Story: From $50K to $250K
              </h2>
              <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-lg font-semibold text-primary-700">AM</div>
              </div>
            </div>
            
            <blockquote className="text-lg text-neutral-700 italic text-center mb-6">
              "When I started working with Money & Me, I was stuck at a $50K income ceiling for three years. 
              Through our intensive work together, I uncovered deep beliefs about not deserving success that 
              were sabotaging every opportunity. Within 6 months of our program, I had launched my consulting 
              business and hit my first $250K year. The transformation was profound and lasting."
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-neutral-800">Alexandra M.</div>
              <div className="text-neutral-600">Business Consultant</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-700 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready for Your Breakthrough?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Limited spots available. Book your discovery call to see if this program is right for you.
          </p>
          <CTAButton href="/get-started" variant="primary" size="large">
            Book Discovery Call
          </CTAButton>
        </div>
      </section>

      <Footer />
    </main>
  )
}
