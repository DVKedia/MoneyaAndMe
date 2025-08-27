import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export default function Workshops() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-primary-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Money Mindset Workshops
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Transform together in a supportive community setting
          </p>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            Available Workshops
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                Money Breakthrough Weekend
              </h3>
              <p className="text-neutral-600 mb-6">
                Intensive 2-day workshop designed to identify and release your biggest money blocks. 
                Perfect for those ready to make rapid shifts in their financial mindset.
              </p>
              <ul className="text-sm text-neutral-600 mb-6 space-y-2">
                <li>• Deep money story exploration</li>
                <li>• Group breakthrough exercises</li>
                <li>• Personalized action planning</li>
                <li>• 30-day follow-up support</li>
              </ul>
              <div className="text-lg font-semibold text-teal-600 mb-4">Next Date: March 15-16, 2024</div>
              <div className="text-2xl font-bold text-neutral-800 mb-4">$497</div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">
                Abundance Activation Series
              </h3>
              <p className="text-neutral-600 mb-6">
                4-week progressive workshop series that builds your abundance mindset step by step. 
                Ideal for those who prefer gradual, sustainable transformation.
              </p>
              <ul className="text-sm text-neutral-600 mb-6 space-y-2">
                <li>• Weekly 3-hour sessions</li>
                <li>• Progressive skill building</li>
                <li>• Peer accountability groups</li>
                <li>• Take-home resources</li>
              </ul>
              <div className="text-lg font-semibold text-primary-600 mb-4">Starts: April 2, 2024</div>
              <div className="text-2xl font-bold text-neutral-800 mb-4">$897</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            What to Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Interactive Learning</h3>
              <p className="text-neutral-600 mb-6">
                Our workshops are highly interactive, combining teaching, group exercises, 
                and personal reflection time for maximum impact.
              </p>
              
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Safe Space</h3>
              <p className="text-neutral-600 mb-6">
                We create a judgment-free environment where you can explore your money 
                story openly and receive support from like-minded individuals.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Practical Tools</h3>
              <p className="text-neutral-600 mb-6">
                Leave with concrete tools, exercises, and strategies you can immediately 
                implement in your daily life.
              </p>
              
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Community Connection</h3>
              <p className="text-neutral-600 mb-6">
                Connect with others on similar journeys and build lasting relationships 
                that support your continued growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-12 text-center">
            Workshop Success Stories
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-teal-50 to-primary-50 rounded-xl p-6">
              <blockquote className="text-lg text-neutral-700 italic mb-4">
                "The Money Breakthrough Weekend completely shifted my relationship with money. 
                I finally understood why I was sabotaging my success and got the tools to change it. 
                Within 3 months, I doubled my income!"
              </blockquote>
              <div className="font-semibold text-neutral-800">- Lisa M., Entrepreneur</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-xl p-6">
              <blockquote className="text-lg text-neutral-700 italic mb-4">
                "The community aspect was incredible. Being surrounded by others working on 
                similar challenges made me feel less alone and more motivated. The group energy 
                was transformational."
              </blockquote>
              <div className="font-semibold text-neutral-800">- David K., Creative Professional</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform with Others?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our next workshop and experience breakthrough moments in community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-started" variant="secondary" size="large">
              Reserve Your Spot
            </CTAButton>
            <a 
              href="https://wa.me/1234567890" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-200"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
