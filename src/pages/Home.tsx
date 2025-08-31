import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Rocket, Phone, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpaceBackground from '@/components/SpaceBackground';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-white to-violet-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
              ✨ Excellence, Always.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              At Vellora Technologies, we deliver ERP Extensions & Integrations, AI Automations, and IT Solutions built on innovation, precision, and trust.
              <br />
              <span className="text-violet-400">Our goal is simple — empower your business to work smarter, scale faster, and achieve excellence, always.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full border-2 border-violet-400/50 hover:border-violet-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <Link to="/services" className="flex items-center space-x-2">
                  <Rocket size={20} />
                  <span>Explore Our Solutions</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-violet-400 text-violet-400 hover:bg-violet-500/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Phone size={20} />
                  <span>Let's Connect</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SpaceBackground>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              Why Choose Vellora?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{[
{
  icon: <TrendingUp className="w-8 h-8 text-violet-700" />,
  title: "Tailored ERP Extensions",
  description: "ERP systems that grow with your business"
},
{
  icon: <Zap className="w-8 h-8 text-violet-700" />,
  title: "AI Automations",
  description: "Save time & cut errors with intelligent automation"
},
{
  icon: <Shield className="w-8 h-8 text-violet-700" />,
  title: "Secure Solutions",
  description: "Secure, scalable IT solutions you can trust"
},
{
  icon: <CheckCircle className="w-8 h-8 text-violet-700" />,
  title: "Excellence Driven",
  description: "Trusted by businesses aiming for excellence"
}
].map((item, index) => (
  <Card 
    key={index}
    className="bg-gradient-to-b from-violet-900/40 to-violet-800/70 border-violet-600/50 hover:border-violet-500/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group"
  >
    <CardContent className="p-8 text-center">
      <div className="mb-6 flex justify-center">
<div className="p-4 rounded-full bg-violet-700/30 group-hover:bg-violet-700/50 transition-colors duration-300">
  {item.icon}
</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-black group-hover:text-gray-300 transition-colors duration-300">
        {item.description}
      </p>
    </CardContent>
  </Card>
))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the businesses that have already embraced excellence with our cutting-edge solutions.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </SpaceBackground>
    </div>
  );
};

export default Home;