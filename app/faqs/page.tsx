import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQItem from '@/components/FAQItem'
import CTAButton from '@/components/CTAButton'

export default function FAQs() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-teal-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Get answers to common questions about our approach and programs
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* About Our Approach */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8 text-center">
              About Our Approach
            </h2>
            <div className="space-y-4">
              <FAQItem
                question="How is money mindset coaching different from financial planning?"
                answer="While financial planning focuses on the technical aspects of money management (budgets, investments, etc.), money mindset coaching addresses the emotional and psychological patterns that drive your financial decisions. We help you identify and transform limiting beliefs, fears, and unconscious patterns that may be sabotaging your financial success, regardless of how much you know about money management."
              />
              <FAQItem
                question="What makes your approach unique?"
                answer="Our approach combines practical financial psychology with deep transformational work. We don't just give you tools and strategies—we help you understand and heal the root causes of your money challenges. Our coaches are trained in both financial therapy and energy healing, offering a holistic approach that addresses mind, body, and spirit in your relationship with money."
              />
              <FAQItem
                question="Do I need to have financial problems to benefit from this work?"
                answer="Not at all! Many of our most successful clients are high earners who feel stuck at certain income levels or struggle with money anxiety despite their success. This work is valuable for anyone who wants to improve their relationship with money, increase their earning potential, or feel more aligned and peaceful around financial decisions."
              />
              <FAQItem
                question="How long does it typically take to see results?"
                answer="Many clients experience shifts in their money mindset within the first few sessions—often reporting reduced anxiety and increased clarity around money decisions. However, lasting transformation typically occurs over 3-6 months of consistent work. The timeline varies based on individual circumstances, the depth of patterns being addressed, and commitment to the process."
              />
            </div>
          </div>

          {/* About the Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8 text-center">
              About the Process
            </h2>
            <div className="space-y-4">
              <FAQItem
                question="What can I expect in my first consultation?"
                answer="Your first consultation is a comprehensive discovery session where we explore your current relationship with money, identify your goals, and uncover any blocks or patterns that might be holding you back. We'll discuss your money history, current challenges, and desired outcomes. By the end of the session, you'll have clarity on your next steps and a personalized roadmap for transformation."
              />
              <FAQItem
                question="What techniques do you use in your coaching?"
                answer="We use a combination of proven techniques including cognitive behavioral therapy (CBT), neuro-linguistic programming (NLP), energy healing, guided visualization, journaling exercises, and practical action planning. Each client receives a customized approach based on their learning style, comfort level, and specific needs."
              />
              <FAQItem
                question="Will I need to share personal financial information?"
                answer="You'll only share what feels comfortable and relevant to your goals. We focus more on your relationship with money—your beliefs, patterns, and emotions—rather than specific financial details. However, some clients choose to share financial information when it helps us understand their situation better. Everything shared is completely confidential."
              />
              <FAQItem
                question="What if I'm skeptical about 'mindset work'?"
                answer="Skepticism is completely normal and welcome! We ground our work in proven psychological principles and practical strategies. You don't need to believe in anything mystical—just be open to exploring how your thoughts and beliefs might be influencing your financial reality. Many of our most skeptical clients become our biggest advocates once they experience the results."
              />
            </div>
          </div>

          {/* Programs & Booking */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8 text-center">
              Programs & Booking
            </h2>
            <div className="space-y-4">
              <FAQItem
                question="Which program is right for me?"
                answer="The best program depends on your goals, timeline, and preferred learning style. Our 1-on-1 coaching is ideal for personalized attention and rapid transformation. Group workshops are perfect if you enjoy community support and want to learn alongside others. We recommend booking a discovery call to discuss your specific situation and get a personalized recommendation."
              />
              <FAQItem
                question="Do you offer payment plans?"
                answer="Yes! We offer flexible payment plans for all our programs because we believe financial transformation shouldn't be limited by current financial circumstances. We can discuss payment options that work for your budget during your consultation call."
              />
              <FAQItem
                question="What if I'm not satisfied with the program?"
                answer="We stand behind our work with a satisfaction guarantee. If you attend all scheduled sessions and complete the assigned work but don't feel you've received value, we'll work with you to make it right. Our goal is your transformation and success, and we're committed to supporting you until you achieve your desired results."
              />
              <FAQItem
                question="Can I work with you if I live outside your area?"
                answer="Absolutely! We work with clients globally through video calls and online platforms. Many of our most successful transformations have happened with clients we've never met in person. All you need is a reliable internet connection and a private space for our sessions."
              />
            </div>
          </div>

          {/* Practical Questions */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-8 text-center">
              Practical Questions
            </h2>
            <div className="space-y-4">
              <FAQItem
                question="How much time will I need to commit?"
                answer="For individual coaching, plan on 60-90 minutes per week for sessions, plus 30-60 minutes for any exercises or homework. Group workshops typically run 3-4 hours. The key is consistency rather than huge time commitments—small, regular actions create the biggest transformations."
              />
              <FAQItem
                question="What if I miss a session?"
                answer="Life happens! We offer flexible rescheduling for individual sessions with 24-hour notice. For group workshops, we provide recordings when possible. Our goal is to support your success, so we'll work with you to ensure you get the full value of your program."
              />
              <FAQItem
                question="Will my information be kept confidential?"
                answer="Absolutely. We maintain strict confidentiality in accordance with professional coaching standards. Your personal information, session content, and any details you share are completely private and will never be shared without your explicit permission."
              />
              <FAQItem
                question="What happens after my program ends?"
                answer="Your transformation doesn't end when the program does! We provide ongoing resources, alumni community access, and optional follow-up sessions. Many clients choose to continue with maintenance sessions or join our advanced programs. We're committed to supporting your long-term success."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            We're here to help you feel completely confident about taking this important step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/get-started" variant="primary">
              Book a Discovery Call
            </CTAButton>
            <a 
              href="https://wa.me/1234567890" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors duration-200"
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
