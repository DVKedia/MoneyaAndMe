import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import AnimatedSection from '@/components/AnimatedSection'
import Testimonial from '@/components/Testimonial'

export default function Testimonials() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-teal-500/80 to-neutral-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Client Success Stories
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Real transformations from real people who changed their relationship with money
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-200/20 to-teal-200/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-primary-200/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-neutral-200/20 to-primary-200/20 rounded-full"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Featured Success Story */}
            <AnimatedSection animation="scaleIn" delay={1.0}>
              <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-800 mb-4">
                    Featured Success Story
                  </h3>
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                      alt="Lisa Rodriguez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-neutral-800 mb-2">Lisa Rodriguez</h4>
                  <p className="text-neutral-600">Entrepreneur & Mother of Two</p>
                </div>
                
                <blockquote className="text-lg md:text-xl text-neutral-700 leading-relaxed text-center italic mb-8">
                  "I was drowning in debt and felt like a failure as a provider for my family. 
                  The shame was overwhelming. Through this program, I not only cleared my debt 
                  but launched a successful business that now supports my family comfortably. 
                  More importantly, I learned to forgive myself and believe I deserve abundance. 
                  My children now see a confident, empowered mother who models healthy money habits."
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-2xl font-bold text-primary-600 mb-2">$45K</div>
                    <div className="text-sm text-neutral-600">Debt Eliminated</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-2xl font-bold text-teal-600 mb-2">$8K/mo</div>
                    <div className="text-sm text-neutral-600">New Business Income</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-2xl font-bold text-neutral-600 mb-2">6 months</div>
                    <div className="text-sm text-neutral-600">Transformation Time</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection animation="fadeInLeft" delay={0.2}>
              <Testimonial 
                quote="Working with Money & Me completely transformed my relationship with money. I went from living paycheck to paycheck to building a 6-month emergency fund and investing for my future. The mindset work was life-changing."
                name="Sarah Johnson"
                role="Marketing Manager"
                image="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <Testimonial 
                quote="I used to have so much anxiety around money that I couldn't even look at my bank account. Now I feel confident and in control of my finances. The coaching helped me heal deep wounds I didn't even know I had."
                name="Michael Chen"
                role="Software Developer"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInLeft" delay={0.6}>
              <Testimonial 
                quote="The workshop opened my eyes to patterns I'd been repeating for years. I finally understand why I self-sabotage when things get good financially. Now I'm breaking those cycles and creating real abundance."
                name="Jennifer Martinez"
                role="Business Owner"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight" delay={0.8}>
              <Testimonial 
                quote="I doubled my income within 6 months of working with this program. But more importantly, I feel worthy of abundance now. The inner work was just as important as the practical strategies."
                name="David Thompson"
                role="Consultant"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
          </div>

          {/* More Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/95 via-primary-50/90 to-teal-50/95"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral-600 mb-12">
              The results speak for themselves
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-neutral-600">Client Satisfaction Rate</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.4}>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">$2.3M</div>
                <div className="text-neutral-600">Total Debt Eliminated</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.6}>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-600 mb-2">500+</div>
                <div className="text-neutral-600">Lives Transformed</div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scaleIn" delay={0.8}>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
                <span className="text-yellow-400 text-2xl">★★★★★</span>
                <span className="text-yellow-400 text-2xl">★★★★★</span>
              </div>
              <p className="text-lg text-neutral-700 italic mb-4">
                "The most comprehensive and transformational money program I've ever experienced. 
                The results have been life-changing for me and my family."
              </p>
              <div className="text-neutral-600">
                - Average client review
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-teal-200/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-teal-200/20 to-primary-200/20 rounded-full"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of others who have transformed their relationship with money
            </p>
            <CTAButton href="/get-started" variant="outline" className="bg-white text-primary-600 border-white hover:bg-primary-50">
              Start Your Transformation
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
