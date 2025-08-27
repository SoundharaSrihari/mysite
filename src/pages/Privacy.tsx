import React from 'react';
import SpaceBackground from '@/components/SpaceBackground';

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              🔒 Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We value your trust and are committed to protecting your personal information.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-300 prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-gray-300">
              This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website, products, and services.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
                <ul className="space-y-3 text-gray-300">
                  <li><strong>Personal Details:</strong> Name, email address, phone number, and business information you provide through contact forms, career applications, or service inquiries.</li>
                  <li><strong>Usage Data:</strong> Browser type, IP address, device information, and interactions with our website (collected via cookies/analytics).</li>
                  <li><strong>Business Data:</strong> Invoices, GST-related files, ERP/CRM data shared voluntarily for automation or customization projects.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Data</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>To provide and improve our ERP, AI, and automation services.</li>
                  <li>To respond to inquiries, support requests, and career applications.</li>
                  <li>To send important updates, reports, or service-related communications.</li>
                  <li>To ensure compliance with legal and tax-related obligations (e.g., GST filing support).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">3. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use encryption, secure servers, and strict access controls to protect your data from unauthorized access, misuse, or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">4. Data Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell or trade your information. Data is shared only with:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>Trusted partners (for payment, hosting, or analytics).</li>
                  <li>Regulatory authorities, if required by law.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">5. Your Rights</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>Request access, update, or deletion of your personal data.</li>
                  <li>Opt-out of promotional emails anytime.</li>
                  <li>Contact us directly for any privacy concerns.</li>
                </ul>
              </div>

              <div className="border-t border-violet-500/20 pt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-violet-400 mt-4">
                  Email: contact@velloratechnologies.com<br />
                  Phone: +91 9597343176
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;