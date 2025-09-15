import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, FileText, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpaceBackground from '@/components/SpaceBackground';

const Services = () => {
  const services = [
{
  icon: <Settings className="w-12 h-12 text-white" />,
  title: "ERP Add-ons",
  subtitle: "Transform the way your business operates.",
  description: "At Stayble, we don't just implement ERP systems — we tailor them to your workflows. From building custom modules and dashboards to automating approvals and integrating third-party applications, we ensure your ERP works exactly the way you need it.",
  highlights: [
    "Custom module & report development",
    "Workflow & process automation", 
    "API & third-party software integration",
    "Role-based dashboards & analytics",
    "Scalable architecture to grow with your business"
  ]
},
{
  icon: <FileText className="w-12 h-12 text-white" />,
  title: "GST Filing Automation & Report Generation",
  subtitle: "Simplify compliance. Maximize efficiency.",
  description: "Filing GST manually is tedious and error-prone. Our AI-powered solution extracts data from invoices (Excel, CSV, JSON, PDF), classifies transactions (B2B, B2C, Exports, Exempted), and generates ready-to-file reports (GSTR-1, 2A, 2B).",
  highlights: [
    "Multiple input formats supported (Excel, CSV, JSON, PDF invoices)",
    "AI-powered auto-classification of sales & purchase data",
    "Error-free GSTR preparation (1, 2A, 2B)",
    "Time-saving, reliable, and 100% compliant",
    "Built-in error detection & correction suggestions"
  ]
},
{
  icon: <Users className="w-12 h-12 text-white" />,
  title: "CRM Automation",
  subtitle: "Smarter customer management.",
  description: "Our CRM automation tools ensure that your sales, marketing, and support teams are always connected, always efficient. From automated lead assignment and follow-ups to personalized customer journeys, we help you scale relationships with precision.",
  highlights: [
    "Automated lead capturing & nurturing",
    "Integration with email, WhatsApp, and ERP",
    "Real-time dashboards for sales teams", 
    "Customer segmentation & AI-driven insights",
    "Increased efficiency with reduced manual work"
  ]
}
  ];

  const whyChooseUs = [
    "Tailored ERP & CRM solutions that adapt to your business",
    "AI-powered automations for smarter operations", 
    "Expertise in compliance & GST automation",
    "Scalable IT solutions for long-term growth",
    "A partner who believes in Excellence, Always"
  ];

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business operations with cutting-edge technology and intelligent automation.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <Card className="bg-gradient-to-b from-violet-900/40 to-violet-800/70 border-violet-600/50 hover:border-violet-500/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-6">
<div className="p-4 rounded-full bg-violet-700/30">
  {React.cloneElement(service.icon, { className: "w-12 h-12 text-violet-700" })}
</div>
                      </div>
                      <CardTitle className="text-3xl font-bold text-white mb-2">
                        {service.title}
                      </CardTitle>
<p className="text-black text-lg font-semibold">
  {service.subtitle}
</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3">
<h4 className="text-black font-semibold text-lg mb-4">✨ Key Highlights:</h4>
                        {service.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start space-x-3">
<CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
<span className="text-black">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vellora Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🌟 Why Choose Vellora?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => (
<div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-violet-700/30 border border-violet-700/50 hover:bg-violet-700/40 hover:border-violet-700/60 transition-all duration-300">
  <CheckCircle className="w-6 h-6 text-violet-700 flex-shrink-0" />
  <span className="text-white text-lg">{reason}</span>
</div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </SpaceBackground>
    </div>
  );
};

export default Services;