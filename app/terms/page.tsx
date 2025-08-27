import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Agreement to Terms</h2>
            <p className="text-neutral-600 mb-8">
              By accessing and using Money & Me's website and services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Services Description</h2>
            <p className="text-neutral-600 mb-8">
              Money & Me provides money mindset coaching, workshops, and related educational services. Our 
              services are designed to help individuals transform their relationship with money through 
              mindful awareness and practical strategies.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Client Responsibilities</h2>
            <p className="text-neutral-600 mb-4">As a client, you agree to:</p>
            <ul className="list-disc list-inside text-neutral-600 mb-8 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Attend scheduled sessions on time</li>
              <li>Complete assigned exercises and homework</li>
              <li>Communicate openly and honestly during sessions</li>
              <li>Take responsibility for your own decisions and actions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Payment Terms</h2>
            <p className="text-neutral-600 mb-4">
              Payment for services is due as specified in your service agreement. We accept various payment 
              methods and offer payment plans for qualifying clients. Refunds are handled according to our 
              satisfaction guarantee policy.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Confidentiality</h2>
            <p className="text-neutral-600 mb-8">
              We maintain strict confidentiality regarding all client information and session content. 
              Information will only be shared with your explicit written consent or as required by law.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Limitation of Liability</h2>
            <p className="text-neutral-600 mb-8">
              Our coaching services are not a substitute for professional financial, legal, or mental health 
              advice. We are not liable for any decisions you make based on our coaching or educational content.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Cancellation Policy</h2>
            <p className="text-neutral-600 mb-8">
              Sessions may be rescheduled with 24-hour notice. Cancellations with less than 24-hour notice 
              may be subject to charges. Please refer to your specific service agreement for detailed 
              cancellation terms.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Modifications</h2>
            <p className="text-neutral-600 mb-8">
              We reserve the right to modify these terms at any time. Changes will be posted on our website 
              and will become effective immediately upon posting.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Contact Information</h2>
            <p className="text-neutral-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-neutral-50 rounded-lg p-6">
              <p className="text-neutral-700">
                <strong>Money & Me</strong><br />
                Email: legal@moneyandme.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
