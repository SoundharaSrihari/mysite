import React from 'react';
import SpaceBackground from '@/components/SpaceBackground';

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              📜 Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              By using our website and services, you agree to the following terms.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-300 prose-invert max-w-none">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">1. Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  We provide ERP Add-ons & Integrations, GST filing automation, CRM solutions, and AI-driven business automation services. All services are subject to mutual agreement, scope definition, and timelines discussed with the client.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">2. Accuracy of Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree to provide accurate and up-to-date information (business data, GST details, invoices, etc.) to ensure the efficiency of our automation solutions. We are not liable for errors resulting from incorrect or incomplete data provided by clients.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">3. Intellectual Property</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>All website content, designs, logos, and solutions are owned by our company and protected under copyright law.</li>
                  <li>Clients retain ownership of their business data and documents shared with us.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">4. Payment & Refund Policy</h2>
                <ul className="space-y-3 text-gray-300">
                  <li>Payments for ERP/AI/GST services are due as per agreed terms.</li>
                  <li>Refunds, if any, are subject to the nature of the service and mutual discussion.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">5. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  We aim for 100% accuracy and compliance but cannot be held liable for indirect losses (e.g., penalties due to late GST filing caused by delays in client data submission).
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">6. Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to update this Privacy Policy and Terms & Conditions anytime. Updates will be posted on this page.
                </p>
              </div>

              <div className="border-t border-violet-500/20 pt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us at:
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

export default Terms;