import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ExpertCard from '../components/ExpertCard'
import WorkflowStep from '../components/WorkflowStep'
import Testimonial from '../components/Testimonial'
import FAQItem from '../components/FAQItem'
import CTAButton from '../components/CTAButton'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import ParallaxElement from '../components/ParallaxElement'

export default function Home() {
  return (
    <main>
      <Navbar transparent />
      
      {/* Hero Section */}
      <HeroSection
        title="Unlock Abundance: Transform Your Money Mindset"
        subtitle="Break free from limiting beliefs about money and create the abundant life you deserve through mindful finance coaching and transformational workshops."
        ctaText="Get Started"
        ctaLink="/get-started"
      />

      {/* Our Story Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Parallax */}
        <ParallaxElement speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-primary-50/90 to-teal-50/95"></div>
          </div>
        </ParallaxElement>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed font-medium">
                For over two decades, we've been helping individuals transform their relationship with money. 
                Our mission is to guide you from financial stress to financial freedom through mindful awareness 
                and practical strategies.
              </p>
            </div>
          </AnimatedSection>

          {/* Enhanced Stats with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection animation="scaleIn" delay={0.4}>
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold gradient-text mb-3 floating-element">25+</div>
                  <div className="text-neutral-700 font-semibold text-lg">Years Experience</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={0.6}>
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold gradient-text mb-3 floating-element">5000+</div>
                  <div className="text-neutral-700 font-semibold text-lg">Lives Transformed</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mt-4 rounded-full"></div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={0.8}>
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold gradient-text mb-3 floating-element">50+</div>
                  <div className="text-neutral-700 font-semibold text-lg">Global Locations</div>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <ParallaxElement speed={0.2} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-yellow-200/30 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full"></div>
        </ParallaxElement>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
                Meet Your Guides
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our experienced coaches combine decades of financial expertise with mindfulness practices.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInLeft" delay={0.2}>
              <ExpertCard
                name="Richuta Agarwal"
                role="Founder & Lead Coach"
                image="/images/richuta-agarwal.jpeg"
                bio="With over 15 years in financial coaching and mindfulness practice, Richuta helps clients break through money blocks and create sustainable wealth."
              />
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <ExpertCard
                name="Jaz Bindra"
                role="Senior Money Coach"
                image="/images/jaz-bindra.jpeg"
                bio="Jaz specializes in helping entrepreneurs and professionals align their financial goals with their values for lasting abundance."
              />
            </AnimatedSection>
          </div>

          {/* Additional Features with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <AnimatedSection animation="bounceIn" delay={0.6}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Proven Methods</h3>
                <p className="text-neutral-600">Evidence-based techniques that create lasting change</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="bounceIn" delay={0.8}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Personalized Support</h3>
                <p className="text-neutral-600">Tailored coaching that fits your unique situation</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="bounceIn" delay={1.0}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Global Reach</h3>
                <p className="text-neutral-600">Serving clients across 6 continents</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values & Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Why Choose Money & Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">98% Interest Rate</h3>
              <p className="text-neutral-600">Client satisfaction and engagement in our programs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">12,000+ Attendees</h3>
              <p className="text-neutral-600">Participants in our workshops and programs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Global Reach</h3>
              <p className="text-neutral-600">Serving clients across 6 continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with Unsplash Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 via-purple-500/80 to-teal-500/90"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full floating-element"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full floating-element" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Your Journey to Financial Freedom
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our proven 3-step process helps you transform your money mindset and create lasting abundance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-16">
            <AnimatedSection animation="slideInUp" delay={0.2}>
              <WorkflowStep
                number={1}
                title="Get Clarity"
                description="Discover your unique money patterns and limiting beliefs through our comprehensive assessment."
              />
            </AnimatedSection>
            <AnimatedSection animation="slideInUp" delay={0.4}>
              <WorkflowStep
                number={2}
                title="Book Consultation"
                description="Connect with our expert coaches for a personalized strategy session tailored to your goals."
              />
            </AnimatedSection>
            <AnimatedSection animation="slideInUp" delay={0.6}>
              <WorkflowStep
                number={3}
                title="Take Action"
                description="Implement your custom plan with ongoing support and accountability from our team."
                isLast
              />
            </AnimatedSection>
          </div>

          <div className="text-center fade-in-up" style={{animationDelay: '0.6s'}}>
            <CTAButton href="/get-started" variant="secondary" size="large" className="glow-effect">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Your Journey Today
              </span>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with Unsplash Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-primary-900/70 to-teal-900/80"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full floating-element"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full floating-element" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full floating-element" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Real stories from people who've transformed their relationship with money.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center mt-8 space-x-8">
              <div className="flex items-center text-yellow-400">
                <span className="text-2xl font-bold mr-2">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-white/80">
                <span className="font-semibold">500+</span> Success Stories
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInLeft" delay={0.3}>
              <Testimonial
                quote="Working with Money & Me completely changed how I think about finances. I went from constant money stress to feeling confident and in control."
                name="Sarah Johnson"
                role="Marketing Director"
                image="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={0.5}>
              <Testimonial
                quote="The mindful approach to money management helped me break free from decades of limiting beliefs. I'm now building the wealth I always dreamed of."
                name="Michael Chen"
                role="Software Engineer"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.7}>
              <Testimonial
                quote="Their workshops opened my eyes to unconscious money patterns. For the first time, I feel aligned with my financial goals and values."
                name="Emma Rodriguez"
                role="Entrepreneur"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              />
            </AnimatedSection>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16 fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Money Story?</h3>
              <p className="text-white/90 mb-6">Join thousands who've already started their journey to financial freedom.</p>
              <CTAButton href="/get-started" variant="primary" size="large" className="glow-effect">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Get Your Free Consultation
                </span>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
