import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Users, Award } from 'lucide-react';
import SpaceBackground from '@/components/SpaceBackground';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              About Stayble
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey began with a simple yet powerful realization — transforming inefficiency into precision, and monotony into opportunity.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-300 prose-invert">
              <p className="text-xl leading-relaxed mb-6">
                At Stayble, our journey began with a simple yet powerful realization. During one of our many late-night discussions, my co-founder and I found ourselves reflecting on the monotony of routine tasks we were performing daily. These were not only repetitive but also mentally draining, stripping away the time and creativity we could have invested in building something meaningful.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                It was in that very moment that an idea crystallized — <span className="text-violet-400 font-semibold">what if the very tasks that consumed hours of human effort could be intelligently automated?</span> What if artificial intelligence could transform inefficiency into precision, and monotony into opportunity?
              </p>

              <p className="text-xl leading-relaxed mb-6">
                What started as a conversation soon evolved into a mission: to design and deliver intelligent solutions that free organizations from the shackles of manual, error-prone processes. Today, Vellora stands as a symbol of that mission — a company that blends the power of ERP Extensions, AI-driven automations, and advanced IT solutions to create systems that not only support businesses but also help them scale with resilience and confidence.
              </p>

              <p className="text-xl leading-relaxed mb-6">
                Our philosophy is rooted in the belief that <span className="text-violet-400 font-semibold">technology should not merely support businesses — it should elevate them.</span> We aim to craft solutions that operate silently in the background, streamlining workflows, reducing human dependency on mundane activities, and enabling teams to focus on innovation, strategy, and growth.
              </p>

              <p className="text-xl leading-relaxed">
                At Vellora, we don't just build technology — we reimagine how businesses work, freeing them from yesterday's burdens so they can embrace tomorrow's possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Pillars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every project we undertake is built on three core pillars that shape the way we design, build, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12 text-white" />,
                title: "Innovation",
                description: "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive edge."
              },
              {
                icon: <Target className="w-12 h-12 text-white" />,
                title: "Precision",
                description: "Every line of code, every process, and every solution is crafted with meticulous attention to detail. We believe that precision is the foundation of reliability and excellence."
              },
              {
                icon: <Users className="w-12 h-12 text-white" />,
                title: "Trust",
                description: "We build long-lasting relationships with our clients through transparency, integrity, and consistent delivery. Trust is the cornerstone of every successful partnership."
              }
            ].map((pillar, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-violet-900/40 to-violet-800/70 border-violet-600/50 hover:border-violet-500/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-violet-700/30 group-hover:bg-violet-700/50 transition-colors duration-300">
                      {React.cloneElement(pillar.icon, { className: "w-12 h-12 text-violet-700" })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-black group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SpaceBackground>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-full bg-gradient-to-r from-violet-700/30 to-purple-700/30 border-2 border-violet-700/50">
                <Award className="w-16 h-16 text-violet-700" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-8">
              Excellence, Always
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              From automating GST filings with near-zero errors, to crafting CRM applications that adapt seamlessly to a business's growth, we ensure that every solution we provide echoes our motto: <span className="text-violet-400 font-semibold">"Excellence, Always."</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;