import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import SpaceBackground from '@/components/SpaceBackground';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    'erp-customization-2025': {
      title: "Top 7 Reasons Why Businesses Need ERP Customization in 2025",
      author: "Vellora Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "ERP Solutions",
      content: [
        {
          type: "intro",
          content: "In today's fast-paced business landscape, Enterprise Resource Planning (ERP) systems are no longer optional—they're the backbone of operational efficiency. However, generic, one-size-fits-all ERP solutions often fall short of meeting the unique needs of modern businesses. That's where ERP customization comes in. By tailoring ERP systems to align with specific workflows, businesses can unlock unparalleled efficiency, scalability, and growth potential."
        },
        {
          type: "intro",
          content: "In 2025, companies that fail to embrace ERP customization risk being outpaced by their competitors. Here are the top 7 reasons why ERP customization is a must for businesses this year."
        },
        {
          type: "section",
          title: "1. Tailored Workflows for Unique Business Needs",
          content: "No two businesses operate the same way. Off-the-shelf ERP systems often force companies to adapt to rigid templates, leading to inefficiencies. ERP customization allows businesses to design modules that align perfectly with their workflows.",
          example: "Example:\n• Logistics → streamline inventory tracking\n• Retail → integrate point-of-sale systems"
        },
        {
          type: "section",
          title: "2. Automation of Repetitive Tasks",
          content: "Manual processes are error-prone and time-consuming. Customized ERP systems introduce automation for:\n• Sales order generation\n• Payroll processing\n• GST filing & report preparation\n\nThis reduces mistakes, saves time, and lets employees focus on strategic business growth."
        },
        {
          type: "section",
          title: "3. Enhanced Reporting and Analytics",
          content: "Custom ERP dashboards provide real-time insights into:\n• Sales performance\n• Inventory management\n• Financial health\n\nWith data-driven decision-making, leaders can make faster, smarter choices."
        },
        {
          type: "section",
          title: "4. Seamless Integration with Third-Party Tools",
          content: "Businesses often use tools like CRM, accounting, and GST filing platforms. Customized ERP ensures seamless integration, eliminating silos and creating a connected ecosystem.",
          example: "Examples:\n• ERP + CRM → streamline customer data\n• ERP + GST filing → automate compliance"
        },
        {
          type: "section",
          title: "5. Scalability for Business Growth",
          content: "As companies expand, so do their needs. Custom ERP systems are built to scale with new markets, products, and teams. Instead of being locked into rigid systems, customization enables smooth adaptation."
        },
        {
          type: "section",
          title: "6. Cost Savings and Long-Term Efficiency",
          content: "Though customization needs initial investment, it:\n• Cuts manual errors\n• Reduces dependency on external tools\n• Saves long-term costs\n\nThis delivers a higher ROI compared to generic ERP systems."
        },
        {
          type: "section",
          title: "7. Competitive Advantage in a Dynamic Market",
          content: "Agility = Competitiveness. A tailored ERP system helps businesses adapt quickly to market changes, customer demands, and industry trends. Companies that invest in ERP customization gain a decisive edge."
        },
        {
          type: "conclusion",
          title: "Conclusion: Unlock Your Business Potential",
          content: "The benefits of ERP customization are clear:",
          benefits: [
            "Tailored workflows",
            "Automation",
            "Real-time analytics",
            "Seamless integrations",
            "Scalability",
            "Cost efficiency",
            "Competitive edge"
          ],
          finalNote: "In 2025, businesses that invest in ERP customization will streamline operations and achieve sustainable growth."
        }
      ]
    },
    'gst-filing-automation': {
      title: "How GST Filing Automation Saves Time and Ensures Compliance",
      author: "Vellora Team",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Automation",
      content: [
        {
          type: "intro",
          content: "GST filing is a critical compliance requirement for businesses in India, but manual processes often lead to errors, delays, and unnecessary stress. With the complexity of tax regulations and the volume of transactions businesses handle today, automation has become not just helpful—but essential."
        },
        {
          type: "intro",
          content: "GST filing automation transforms this tedious process into a streamlined, error-free operation that saves time and ensures complete compliance. Here's how automation is revolutionizing GST management for businesses."
        },
        {
          type: "section",
          title: "The Problem with Manual GST Filing",
          content: "Manual GST filing involves:\n• Hours of data entry from invoices\n• Complex classification of transactions\n• Risk of human errors\n• Missed deadlines due to time constraints\n• Difficulty in reconciling purchase and sales data"
        },
        {
          type: "section",
          title: "How Automation Solves These Challenges",
          content: "AI-powered GST automation tools address these issues by:\n• Automatically extracting data from multiple formats (Excel, CSV, JSON, PDF)\n• Classifying transactions accurately (B2B, B2C, Exports, Exempted)\n• Generating error-free GSTR reports (1, 2A, 2B)\n• Providing real-time compliance monitoring"
        },
        {
          type: "section",
          title: "Key Benefits of GST Filing Automation",
          content: "Time Savings: What used to take days now takes minutes\nAccuracy: Eliminates human errors in calculations and classifications\nCompliance: Ensures all filings meet regulatory requirements\nCost Reduction: Reduces the need for dedicated GST personnel\nPeace of Mind: Automated alerts prevent missed deadlines"
        },
        {
          type: "conclusion",
          title: "The Future is Automated",
          content: "GST filing automation is no longer a luxury—it's a necessity for businesses that want to stay compliant while focusing on growth. By embracing automation, companies can transform their tax processes from a burden into a competitive advantage."
        }
      ]
    },
    'crm-automation-power': {
      title: "The Power of CRM Automation: Transforming Customer Relationships",
      author: "Vellora Team",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "CRM Solutions",
      content: [
        {
          type: "intro",
          content: "In the digital-first era of 2025, businesses can no longer afford to manage customer relationships manually. Customer expectations are higher than ever — they want faster responses, personalized interactions, and seamless service. That's where CRM automation comes into play."
        },
        {
          type: "intro",
          content: "By automating repetitive customer management tasks, businesses can save time, reduce human error, and focus on building meaningful relationships with their clients. Here's why CRM automation is becoming a non-negotiable growth strategy this year."
        },
        {
          type: "section",
          title: "1. Faster Lead Management & Response Time",
          content: "Speed matters in sales. Research shows that responding to a lead within the first hour increases conversion chances by more than 60%. CRM automation tools ensure that every lead from your website, email, or social media is automatically captured, categorized, and assigned to the right salesperson."
        },
        {
          type: "section",
          title: "2. Personalized Customer Experiences",
          content: "Customers don't want generic emails or robotic replies. With AI-powered CRM automation, businesses can segment customers based on behavior, purchase history, or engagement. This allows you to send personalized offers, targeted emails, and curated recommendations."
        },
        {
          type: "section",
          title: "3. Automated Follow-ups & Reminders",
          content: "Manual follow-ups are often inconsistent and prone to errors. CRM systems with automation handle routine tasks like sending thank-you emails, scheduling meeting reminders, or re-engaging dormant leads."
        },
        {
          type: "conclusion",
          title: "CRM Automation = Smarter Customer Relationships",
          content: "In 2025, CRM automation is more than a trend — it's a business necessity. From faster lead responses to personalized customer journeys and real-time analytics, automated CRM systems empower businesses to grow smarter, not harder."
        }
      ]
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-violet-400 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild variant="outline" className="border-violet-400 text-violet-400 hover:bg-violet-500/10">
            <Link to="/blog">← Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-violet-400 hover:text-white hover:bg-violet-500/10">
              <Link to="/blog" className="flex items-center space-x-2">
                <ArrowLeft size={20} />
                <span>Back to Blog</span>
              </Link>
            </Button>
          </div>
          
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-violet-500/20 text-violet-300 text-sm font-semibold rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </SpaceBackground>

      {/* Article Content */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg text-gray-300 prose-invert max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === 'intro' && (
                  <p className="text-xl leading-relaxed text-gray-300">
                    {section.content}
                  </p>
                )}
                
                {section.type === 'section' && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                    {section.example && (
                      <div className="mt-4 p-4 bg-violet-500/10 border border-violet-500/20 rounded-lg">
                        <p className="text-violet-300 whitespace-pre-line">
                          {section.example}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                {section.type === 'conclusion' && (
                  <div className="bg-gradient-to-r from-violet-950/20 to-purple-950/20 border border-violet-500/30 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {section.content}
                    </p>
                    {section.benefits && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {section.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                            <span className="text-white">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.finalNote && (
                      <p className="text-violet-300 font-semibold">
                        {section.finalNote}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </article>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-violet-950/20 to-purple-950/20 border border-violet-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?🚀
              </h3>
              <p className="text-gray-300 mb-6">
                Let's build a smarter future together with our cutting-edge solutions.
              </p>
              <Button asChild className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;