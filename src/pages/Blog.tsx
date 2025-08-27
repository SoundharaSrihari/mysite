import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, TrendingUp, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpaceBackground from '@/components/SpaceBackground';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 7 Reasons Why Businesses Need ERP Customization in 2025",
      excerpt: "Discover why ERP customization is crucial for business success in 2025. Learn how tailored ERP boosts efficiency, automation, reporting, scalability, and competitiveness.",
      author: "Vellora Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "ERP Solutions",
      icon: <TrendingUp className="w-6 h-6 text-violet-400" />,
      slug: "erp-customization-2025"
    },
    {
      id: 2,
      title: "How GST Filing Automation Saves Time and Ensures Compliance",
      excerpt: "Learn how AI-powered GST filing automation can transform your compliance processes, reduce errors, and save countless hours of manual work.",
      author: "Vellora Team",
      date: "January 10, 2025", 
      readTime: "6 min read",
      category: "Automation",
      icon: <FileText className="w-6 h-6 text-violet-400" />,
      slug: "gst-filing-automation"
    },
    {
      id: 3,
      title: "The Power of CRM Automation: Transforming Customer Relationships",
      excerpt: "Explore how CRM automation is revolutionizing customer relationship management and driving business growth in the digital age.",
      author: "Vellora Team",
      date: "January 5, 2025",
      readTime: "7 min read", 
      category: "CRM Solutions",
      icon: <Users className="w-6 h-6 text-violet-400" />,
      slug: "crm-automation-power"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on ERP, automation, and digital transformation to help your business stay ahead.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="bg-gradient-to-b from-violet-950/20 to-black border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    {post.icon}
                    <span className="text-violet-400 text-sm font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-400 mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button 
                    asChild
                    variant="ghost" 
                    className="w-full text-violet-400 hover:text-white hover:bg-violet-500/10 transition-all duration-300 group-hover:bg-violet-500/15"
                  >
                    <Link to={`/blog/${post.slug}`} className="flex items-center justify-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights on ERP, automation, and digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-violet-950/20 border border-violet-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors"
              />
              <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </SpaceBackground>
    </div>
  );
};

export default Blog;