import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            Privacy Policy
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
            
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Introduction</h2>
            <p className="text-neutral-600 mb-8">
              Money & Me ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Personal Information</h3>
            <p className="text-neutral-600 mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-neutral-600 mb-6 space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Payment information for our services</li>
              <li>Information shared during coaching sessions</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-800 mb-3">Automatically Collected Information</h3>
            <p className="text-neutral-600 mb-6">
              When you visit our website, we may automatically collect certain information about your device 
              and usage, including IP address, browser type, operating system, and pages visited.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">How We Use Your Information</h2>
            <p className="text-neutral-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-neutral-600 mb-8 space-y-2">
              <li>Provide and improve our coaching services</li>
              <li>Communicate with you about our services</li>
              <li>Process payments and manage your account</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Information Sharing</h2>
            <p className="text-neutral-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without 
              your consent, except as described in this policy. We may share information with trusted service 
              providers who assist us in operating our website and conducting our business, provided they agree 
              to keep this information confidential.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Data Security</h2>
            <p className="text-neutral-600 mb-8">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Your Rights</h2>
            <p className="text-neutral-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-neutral-600 mb-8 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Contact Us</h2>
            <p className="text-neutral-600 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-neutral-50 rounded-lg p-6">
              <p className="text-neutral-700">
                <strong>Money & Me</strong><br />
                Email: privacy@moneyandme.com<br />
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
