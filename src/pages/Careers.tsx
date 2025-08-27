"use client";

import { useRef, useState, ChangeEvent, FormEvent } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Clock, Rocket, Award, Lightbulb, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ApplicantForm = {
  name: string;
  email: string;
  mobile: string;
  address: string;
};

type Job = {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  openings: number;
};

const Careers = () => {
  // Refs
  const applySectionRef = useRef<HTMLDivElement | null>(null);
  const applyButtonRef = useRef<HTMLButtonElement | null>(null);

  // Modal state
  const [open, setOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState<ApplicantForm>({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  // Scroll and focus when clicking card-level Apply
  const scrollToApply = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => applyButtonRef.current?.focus(), 400);
  };

  // Change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit to Formspree
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/meolqyop", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("✅ Application submitted successfully!");
        setOpen(false);
        setFormData({ name: "", email: "", mobile: "", address: "" });
      } else {
        alert("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong. Please try again.");
    }
  };

  const jobOpenings: Job[] = [
    {
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Coimbatore, Tamil Nadu",
      experience: "1-3 years",
      description:
        "Work on AI-powered automation, data intelligence, and computer vision projects. Join us in building next-generation AI solutions that transform businesses.",
      requirements: [
        "Strong knowledge of Python, TensorFlow/PyTorch",
        "Experience with machine learning algorithms",
        "Knowledge of data preprocessing and feature engineering",
        "Familiarity with cloud platforms (AWS/Azure/GCP)",
      ],
      openings: 1,
    },
    {
      title: "AI/ML Engineer Internship",
      type: "Internship",
      location: "Coimbatore, Tamil Nadu",
      experience: "0-1 years",
      description:
        "Hands-on learning with live projects in AI, ERP, and automation. Perfect opportunity for fresh graduates to kickstart their career in AI/ML.",
      requirements: [
        "Basic knowledge of Python and machine learning concepts",
        "Strong analytical and problem-solving skills",
        "Eagerness to learn and work on real-world projects",
        "Good communication skills",
      ],
      openings: 5,
    },
    {
      title: "Sales Executive",
      type: "Full-time",
      location: "Coimbatore, Tamil Nadu",
      experience: "1-3 years",
      description:
        "Engage with clients, understand their needs, and drive business growth. Be the bridge between our innovative solutions and businesses that need them.",
      requirements: [
        "Experience in B2B sales, preferably in tech/software",
        "Strong communication and presentation skills",
        "Ability to understand technical solutions and explain them to clients",
        "Self-motivated with a results-driven approach",
      ],
      openings: 2,
    },
  ];

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6 text-violet-400" />,
      title: "Future-Driven Projects",
      description: "Work on ERP, AI/ML, automation, and next-gen business tech",
    },
    {
      icon: <Zap className="w-6 h-6 text-violet-400" />,
      title: "Impact That Matters",
      description: "Solve real business challenges with smart automation",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-violet-400" />,
      title: "Innovative Culture",
      description: "We value curiosity, bold ideas, and out-of-the-box thinking",
    },
    {
      icon: <Award className="w-6 h-6 text-violet-400" />,
      title: "Growth & Learning",
      description: "From live projects to mentorship, we grow together",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-6">
              Join Us on a Mission to Automate the Universe 🚀
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a journey to transform businesses with ERP Extensions & Integrations, AI-driven automation, and intelligent solutions. If you want to work on cutting-edge projects that make real impact, this is the place where innovation meets opportunity.
            </p>
          </div>
        </div>
      </SpaceBackground>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-b from-black to-violet-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">✨ Why Work With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-violet-950/20 to-black border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/20 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <SpaceBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🚀 Current Openings</h2>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-violet-950/20 to-black border-violet-500/30 hover:border-violet-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/20"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">🔹 {job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                          {job.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-violet-500/20 text-violet-300 border-violet-500/30">
                          {job.openings} {job.openings === 1 ? "Opening" : "Openings"}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-gray-300">
                          <span className="text-violet-400 mt-1.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={scrollToApply}
                    className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SpaceBackground>

      {/* How to Apply */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-black">
        <div ref={applySectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">📬 How to Apply?</h2>

            <div className="bg-gradient-to-b from-violet-950/20 to-black border border-violet-500/30 rounded-lg p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2 text-violet-400 mb-4">
                  <Mail className="w-6 h-6" />
                  <span className="text-xl font-semibold">careers@velloratechnologies.com</span>
                </div>

                <div className="text-gray-300">
                  <p className="mb-4">Send your resume + portfolio to:</p>
                  <p className="text-violet-400 font-semibold">✨ Subject Line: "Application – [Role] – [Your Name]"</p>
                </div>

                <div className="border-t border-violet-500/20 pt-6">
                  <p className="text-gray-400 text-sm">
                    We review applications on a rolling basis and will get back to you within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>

            <Button
              ref={applyButtonRef}
              size="lg"
              onClick={() => setOpen(true)}
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
            >
              <Mail className="w-5 h-5" />
              <span>Apply Now 🚀</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">Apply for a Position</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile No</Label>
              <Input id="mobile" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <DialogFooter>
              <Button type="submit" className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
