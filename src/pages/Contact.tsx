import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, Clock, Users, Award } from 'lucide-react';
import SpaceBackground from '@/components/SpaceBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<string>('');  // To track submission status

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set initial status to "sending"
    setFormStatus('Sending...');

    // Send form data to Formspree
    const response = await fetch('https://formspree.io/f/xandyrno', {  // Replace with your Formspree endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Successful submission
      setFormStatus('Message sent! We will get back to you shortly.');  // Success message
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } else {
      // Handle error
      setFormStatus('Oops! Something went wrong, please try again.');  // Error message
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              Let's Build the Future of Your Business Together 🚀
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe great partnerships start with a conversation. Whether you're curious about ERP Extensions, AI automation, GST filing solutions, or just exploring possibilities — we're here to help.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">📞 Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
<p className="text-white">+91 9597343176</p>

                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
<p className="text-white">contact@velloratechnologies.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
<p className="text-white">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Clock className="w-5 h-5" />, text: "24-hour response time" },
                    { icon: <Users className="w-5 h-5" />, text: "Dedicated project team" },
                    { icon: <Award className="w-5 h-5" />, text: "Excellence, always guaranteed" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
<div className="text-white">
  {item.icon}
</div>
<span className="text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-to-b from-violet-900/40 to-violet-800/70 border-violet-600/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">📬 Drop Us a Message</CardTitle>
                <p className="text-black-400">We usually respond within 24 hours. Share your details and our team will connect with you.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
<label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                      Full Name ✨
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="bg-violet-950/20 border-violet-500/30 text-black placeholder-black focus:border-violet-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
<label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address 📧
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-violet-950/20 border-violet-500/30 text-black placeholder-black focus:border-violet-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
<label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number 📱
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-violet-950/20 border-violet-500/30 text-black placeholder-black focus:border-violet-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
<label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name 🏢 (optional)
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-violet-950/20 border-violet-500/30 text-black placeholder-black focus:border-violet-400"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
<label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message 💬
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-violet-950/20 border-violet-500/30 text-black placeholder-black focus:border-violet-400 resize-none"
                      placeholder="Tell us about your project or ask any questions..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message 🚀
                  </Button>

                  {/* Status message */}
                  {formStatus && (
                    <div className="mt-4 text-center text-gray-300">
                      {formStatus}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
