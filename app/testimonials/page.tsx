import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import CTAButton from '@/components/CTAButton'

export default function Testimonials() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-teal-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Real transformations from people who've changed their money story
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Featured Story 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center mr-4">
                  <div className="text-lg font-semibold text-primary-700">SJ</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Sarah Johnson</h3>
                  <p className="text-primary-600">Entrepreneur • $45K → $150K</p>
                </div>
              </div>
              <blockquote className="text-lg text-neutral-700 italic mb-6">
                "I was trapped in a cycle of feast or famine in my business. Despite working 80-hour weeks, 
                I couldn't break through $45K annually. Through Money & Me's coaching, I discovered I had 
                deep beliefs about not deserving success. Within 8 months, I hit my first $150K year and 
                now work half the hours with triple the joy."
              </blockquote>
              <div className="text-sm text-neutral-600">
                <strong>Program:</strong> 6-Month Intensive Coaching
              </div>
            </div>

            {/* Featured Story 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center mr-4">
                  <div className="text-lg font-semibold text-teal-700">MC</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Michael Chen</h3>
                  <p className="text-teal-600">Business Owner • Broke Income Ceiling</p>
                </div>
              </div>
              <blockquote className="text-lg text-neutral-700 italic mb-6">
                "For three years, I was stuck at exactly $95K no matter what I tried. It was like hitting 
                an invisible wall. The mindset work we did together revealed generational patterns I never 
                knew existed. I broke through to $200K+ and finally feel worthy of the success I've created."
              </blockquote>
              <div className="text-sm text-neutral-600">
                <strong>Program:</strong> Money Breakthrough Weekend + Coaching
              </div>
            </div>
          </div>

          {/* More Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="The workshop completely shifted how I see money. I went from constant anxiety about finances to feeling empowered and in control."
              name="Emma Rodriguez"
              role="Creative Professional"
            />
            
            <Testimonial
              quote="I finally understand why I was sabotaging every financial opportunity. The coaching gave me tools to change patterns I've had for decades."
              name="David Kim"
              role="Software Engineer"
            />
            
            <Testimonial
              quote="Working with Richuta helped me heal my relationship with money at the deepest level. I feel free for the first time in my adult life."
              name="Lisa Thompson"
              role="Therapist"
            />
            
            <Testimonial
              quote="The group workshop was incredible. Being surrounded by others on similar journeys made the transformation feel possible and supported."
              name="James Wilson"
              role="Consultant"
            />
            
            <Testimonial
              quote="I doubled my rates and tripled my confidence. The money mindset work was the missing piece I didn't know I needed."
              name="Maria Garcia"
              role="Coach"
            />
            
            <Testimonial
              quote="From financial stress to financial peace - this program gave me tools I use every single day. Best investment I've ever made."
              name="Robert Lee"
              role="Real Estate Agent"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12">
            Transformation by the Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">94%</div>
              <div className="text-neutral-700 font-medium mb-2">Success Rate</div>
              <div className="text-sm text-neutral-600">Of clients report significant mindset shifts within 30 days</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-teal-600 mb-2">$85K</div>
              <div className="text-neutral-700 font-medium mb-2">Average Increase</div>
              <div className="text-sm text-neutral-600">In annual income within 12 months of program completion</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-neutral-700 font-medium mb-2">Would Recommend</div>
              <div className="text-sm text-neutral-600">Of clients would recommend our programs to others</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12">
            Hear Their Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-neutral-600">Sarah's Transformation Story</p>
                <p className="text-sm text-neutral-500 mt-2">From $45K to $150K in 8 months</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-neutral-600">Michael's Breakthrough</p>
                <p className="text-sm text-neutral-500 mt-2">Breaking through income ceilings</p>
              </div>
            </div>
          </div>
          
          <p className="text-neutral-600 mt-8">
            <em>Video testimonials coming soon - currently in production</em>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of others who've transformed their relationship with money
          </p>
          <CTAButton href="/get-started" variant="secondary" size="large">
            Start Your Journey
          </CTAButton>
        </div>
      </section>

      <Footer />
    </main>
  )
}
