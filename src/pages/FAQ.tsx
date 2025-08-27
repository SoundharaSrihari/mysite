import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SpaceBackground from '@/components/SpaceBackground';

const FAQ = () => {
  const faqs = [
    {
      question: "What is ERP customization and why does my business need it?",
      answer: "ERP customization means tailoring your ERP software to match your unique workflows, departments, and industry requirements. Instead of using rigid, one-size-fits-all solutions, customization ensures the system adapts to how your business actually works. This reduces inefficiencies, increases productivity, and prevents employees from struggling with unnecessary features. For growing businesses, it becomes the backbone of smooth and scalable operations."
    },
    {
      question: "How can automation improve GST filing for my business?",
      answer: "GST filing is often repetitive, error-prone, and time-consuming if done manually. Automation ensures invoices are classified correctly (B2B, B2C, exempt, export, etc.) and returns are prepared with accuracy. It also matches purchase and sales invoices with GSTR-2A and GSTR-2B to prevent mismatches. This saves hours of manual effort, reduces penalties, and gives peace of mind."
    },
    {
      question: "Is AI really useful for small and medium businesses?",
      answer: "Yes. AI is not just for large corporations—it helps SMEs gain efficiency without hiring large teams. With AI, businesses can automate customer interactions, predict sales trends, and analyze data instantly. This reduces costs and gives small teams the same power as enterprise-level organizations. In short, AI levels the playing field for growing companies."
    },
    {
      question: "Can your ERP system integrate with my existing tools?",
      answer: "Absolutely. Our ERP systems are designed with flexibility and can integrate with accounting software, CRMs, GST portals, and even HR/payroll tools. This ensures businesses don't have to abandon their existing investments. Integration creates a centralized hub where data flows seamlessly between departments. As a result, decision-making becomes faster and more accurate."
    },
    {
      question: "What industries benefit most from ERP and automation?",
      answer: "ERP and automation benefit nearly every industry, but the biggest improvements are seen in manufacturing, retail, logistics, healthcare, and services. For example, manufacturers can automate inventory tracking, while healthcare can streamline patient data and compliance. Retailers can manage billing, taxation, and customer loyalty with ease. Any business that faces repetitive tasks or scaling issues will benefit greatly."
    },
    {
      question: "Do you provide post-deployment support?",
      answer: "Yes, we don't just set up ERP systems and walk away—we ensure long-term success. Post-deployment support includes bug fixing, performance monitoring, and regular updates. We also provide training sessions to make sure employees are comfortable using the system. Ongoing support guarantees that your business keeps running without disruptions."
    },
    {
      question: "How secure is the data in ERP and automation tools?",
      answer: "Data security is a top priority. Our ERP systems use advanced encryption, role-based access controls, and regular security patches to safeguard sensitive information. Additionally, we follow compliance standards to ensure data protection is maintained across all levels. With automated backups and monitoring, your business data remains safe and accessible at all times."
    },
    {
      question: "What is the typical timeline for ERP implementation?",
      answer: "The timeline depends on business size and complexity. Small businesses can see ERP deployment in 4–6 weeks, while large enterprises may take 3–6 months. Key factors include the number of modules, level of customization, and integrations required. A phased rollout ensures minimal disruption and allows employees to adapt gradually."
    },
    {
      question: "How much does ERP customization cost?",
      answer: "The cost varies depending on the scope of work, required modules, and complexity of your workflows. Basic ERP setups are affordable for SMEs, while advanced customizations may require larger investments. However, the ROI is typically high because of the savings in time, reduced errors, and improved efficiency. We always tailor pricing to ensure maximum value for your business."
    },
    {
      question: "What is the ROI of ERP and AI automation?",
      answer: "The return on investment is significant because automation reduces manual errors, prevents delays, and saves countless working hours. Many businesses recover their costs within the first year of implementation. Beyond monetary savings, ROI also comes in the form of better decision-making and improved employee productivity. It transforms ERP from a cost into a growth engine."
    },
    {
      question: "Can I start with only a few ERP modules and expand later?",
      answer: "Yes, ERP systems are modular, meaning you can begin with only the essentials such as finance, HR, or sales. As your business scales, more modules like inventory, manufacturing, or CRM can be added. This reduces upfront investment while still giving you room to grow. It's a flexible approach that adapts as your business evolves."
    },
    {
      question: "Do you offer cloud-based ERP solutions?",
      answer: "Yes, we provide both cloud-based and on-premise ERP solutions. Cloud ERP offers accessibility from anywhere, lower infrastructure costs, and automatic updates. On-premise solutions, on the other hand, provide greater control and are ideal for industries with strict compliance needs. You can choose whichever model fits your business strategy best."
    },
    {
      question: "Will ERP automation replace my employees?",
      answer: "No, ERP automation is not designed to replace people—it's meant to enhance their efficiency. By eliminating repetitive and mundane tasks, employees can focus on strategic decision-making and customer relationships. Instead of doing data entry or manual GST checks, staff can contribute to business growth. In essence, ERP makes people more valuable, not redundant."
    },
    {
      question: "How does AI-powered ERP improve decision-making?",
      answer: "AI-powered ERP analyzes large volumes of data and presents actionable insights instantly. For example, it can forecast demand, detect unusual patterns in expenses, and suggest optimal inventory levels. It also provides real-time dashboards with visual analytics for managers. This reduces guesswork and empowers leaders to make data-driven decisions quickly and confidently."
    },
    {
      question: "Can ERP help with GST compliance specifically in India?",
      answer: "Yes, our ERP systems are designed with GST compliance at the core. They automate return filing like GSTR-1, 2A, 2B, and 3B while classifying invoices into B2B, B2C, exempt, and exports. The system also prevents mismatches by reconciling purchase and sales data. This ensures businesses stay compliant, avoid penalties, and reduce stress during tax filing."
    },
    {
      question: "Do you provide training for employees after ERP implementation?",
      answer: "Yes, we conduct detailed training programs for employees at every level. These sessions include live demonstrations, user manuals, and video tutorials. Our goal is to ensure employees feel confident in using the system from day one. With proper training, the ERP system becomes a natural part of daily operations."
    },
    {
      question: "What happens if I already use accounting software like Tally or Zoho?",
      answer: "No problem—we can integrate ERP with existing accounting tools like Tally, QuickBooks, or Zoho. This ensures all financial data flows smoothly without requiring duplicate entries. Integration helps retain your current investments while still upgrading to a smarter ERP system. It's the best of both worlds: familiar tools with advanced automation."
    },
    {
      question: "Can ERP customization help in scaling globally?",
      answer: "Yes, ERP customization supports multi-currency transactions, multiple warehouses, and international tax rules. Businesses expanding to global markets can manage compliance for each region without separate systems. It also provides consolidated reporting across all branches. This makes scaling internationally smoother and less resource-intensive."
    },
    {
      question: "What is the difference between ERP implementation and ERP customization?",
      answer: "ERP implementation is the process of setting up and configuring a system for your business. ERP customization, on the other hand, involves modifying and adapting it to match your workflows and specific industry needs. Implementation gives you a working system, but customization ensures it works exactly how you want it to. Both go hand in hand for maximum efficiency."
    },
    {
      question: "Why should I choose your team for ERP and automation?",
      answer: "Because we combine deep expertise in ERP customization, AI-driven automation, and GST compliance—all under one roof. Our solutions are tailored, scalable, and future-ready, ensuring businesses of all sizes can benefit. We focus on building long-term relationships by offering support even after deployment. The result is a reliable partner committed to your growth."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              ❓ Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our ERP, automation, and AI solutions.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-b from-violet-950/20 to-black border border-violet-500/30 rounded-lg px-6 hover:border-violet-400/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-violet-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;