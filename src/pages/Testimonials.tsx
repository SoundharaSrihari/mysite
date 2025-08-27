import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import SpaceBackground from '@/components/SpaceBackground';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Vellora transformed our ERP system completely. Manual data entry is now history, and our workflows run seamlessly. Their team's expertise and responsiveness exceeded expectations.",
      author: "Rajesh Kumar",
      position: "Operations Director",
      company: "TechFlow Industries",
      rating: 5
    },
    {
      content: "GST filing used to take us days. With Vellora's automation, it's just a matter of minutes. Zero errors, zero stress. Highly recommended!",
      author: "Priya Sharma",
      position: "Finance Manager", 
      company: "Digital Solutions Ltd",
      rating: 5
    },
    {
      content: "Their AI-driven CRM automation has changed how we handle leads. Our sales team is more productive and closing deals faster than ever.",
      author: "Amit Patel",
      position: "Sales Director",
      company: "Growth Dynamics",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              Trusted by Businesses, Powered by Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Vellora Technologies, we measure our success by the value we create for our clients. Here's what professionals say about us:
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-b from-violet-950/20 to-black border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group relative overflow-hidden"
              >
                {/* Floating quote icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-violet-400" />
                </div>
                
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="border-t border-violet-500/20 pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-violet-300 transition-colors duration-300">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "99.9%", label: "System Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SpaceBackground>
    </div>
  );
};

export default Testimonials;