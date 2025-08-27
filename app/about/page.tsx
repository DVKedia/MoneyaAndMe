import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import ExpertCard from '@/components/ExpertCard'

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-teal-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Transforming lives through the power of mindful money relationships
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Money & Me was born from a simple yet profound realization: most people's financial struggles 
              aren't really about money—they're about the deep-seated beliefs, fears, and patterns that 
              govern how we relate to abundance, security, and self-worth.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              After witnessing countless individuals trapped in cycles of financial stress despite having 
              all the "right" information about budgeting and investing, our founders knew there had to be 
              a different approach. One that honored the emotional, psychological, and even spiritual 
              dimensions of our relationship with money.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              What started as a small coaching practice has grown into a global movement, helping thousands 
              of people break free from limiting beliefs about money and step into their natural state of 
              abundance. We believe that financial freedom isn't just about having more money—it's about 
              feeling free, empowered, and aligned in how you create, manage, and enjoy your resources.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                To guide individuals in transforming their relationship with money from one of fear and 
                scarcity to one of empowerment and abundance, creating ripple effects of positive change 
                in their lives and communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                A world where every person feels worthy of abundance and has the tools to create financial 
                well-being that aligns with their deepest values and highest aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Our Values</h3>
              <p className="text-neutral-600 leading-relaxed">
                Compassion, authenticity, and empowerment guide everything we do. We believe in meeting 
                each person exactly where they are and supporting their unique journey to financial freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our coaches bring together decades of experience in finance, psychology, and transformational work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-200 to-teal-200 mb-6 flex items-center justify-center">
                  <div className="text-3xl font-serif font-bold text-primary-700">RA</div>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2">Richuta Agarwal</h3>
                <p className="text-primary-600 font-medium mb-4">Lead Money Mindset Coach & Co-Founder</p>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  With over 15 years in financial psychology and behavioral economics, Richuta has helped 
                  thousands of high-achievers break through income ceilings and create sustainable wealth. 
                  She combines deep psychological insight with practical financial strategies, specializing 
                  in working with entrepreneurs and executives who feel stuck despite their success.
                </p>
                <div className="text-sm text-neutral-500">
                  <p>• Certified Financial Therapist</p>
                  <p>• Master's in Behavioral Economics</p>
                  <p>• 3000+ coaching hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-primary-50 rounded-2xl p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-200 to-primary-200 mb-6 flex items-center justify-center">
                  <div className="text-3xl font-serif font-bold text-teal-700">JB</div>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2">Jaz Bindra</h3>
                <p className="text-teal-600 font-medium mb-4">Transformational Finance Coach & Co-Founder</p>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Jaz brings a unique blend of ancient wisdom and modern financial expertise to money coaching. 
                  With a background in both corporate finance and spiritual healing, she helps clients heal 
                  generational money patterns and step into their power as conscious creators of wealth. 
                  Her approach integrates mindfulness, energy work, and practical financial planning.
                </p>
                <div className="text-sm text-neutral-500">
                  <p>• Certified Money Coach</p>
                  <p>• Reiki Master & Energy Healer</p>
                  <p>• Former Investment Banker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Money Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of others who have discovered their path to financial freedom and abundance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-started" variant="secondary">
              Book Your Consultation
            </CTAButton>
            <a 
              href="https://wa.me/1234567890" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
