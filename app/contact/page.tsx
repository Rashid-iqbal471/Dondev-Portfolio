"use client"

import type React from "react"

import 'leaflet/dist/leaflet.css';

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dynamic from "next/dynamic"
import Link from "next/link"
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "dondevofficial@gmail.com",

    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+92 312 4174618",
    
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "Lahore, Pakistan",
    
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 24 hours",
    
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact  <span className="text-[#ff8e00]">US</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with automation? Let's discuss your project and explore how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 shadow-xl card-border-animation">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-black mb-8">
                    Get a Free <span className="text-ff8e00">Consultation</span>
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
                      <p className="text-gray-600">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 focus:border-[#ff8e00] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-gray-300 focus:border-[#ff8e00] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 focus:border-[#ff8e00] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                          <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                            <SelectTrigger className="border-gray-300 focus:outline-none focus:border-[#ff8e00] focus:ring-0 transition-colors outline-none">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-chatbot">AI Chatbot Development</SelectItem>
                              <SelectItem value="process-automation">Business Process Automation</SelectItem>
                              <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                              <SelectItem value="data-analytics">Data Analytics Automation</SelectItem>
                              <SelectItem value="workflow-optimization">Workflow Optimization</SelectItem>
                              <SelectItem value="custom-solution">Custom Solution</SelectItem>
                              <SelectItem value="consultation">Consultation Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                          <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                            <SelectTrigger className="border-gray-300 focus:outline-none focus:border-[#ff8e00] focus:ring-0 transition-colors outline-none">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-1k">Under $1,000</SelectItem>
                              <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                              <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                              <SelectItem value="5k-8k">$5,000 - $8,000</SelectItem>
                              <SelectItem value="over-8k">Over $8,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full border border-gray-300 focus:border-[#ff8e00] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#ff8e00] hover:bg-[#e67e00] text-white py-3 text-lg font-semibold transition-colors duration-300"
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            Send Message <Send className="ml-2 w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center bg-gradient-to-r from-[#ff8e00]/10 to-[#ff8e00]/5 rounded-full px-6 py-3 mb-6">
                  <span className="text-[#ff8e00] font-semibold text-sm uppercase tracking-wider">Contact</span>
                </div>
                <h2 className="text-3xl font-bold text-black mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help you transform your business with automation. Reach out to us through any of the
                  channels below, and let's start building something amazing together.
                </p>
              </motion.div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ x: 8 }}
                  >
                    <Card className="contact-info-card p-0 group cursor-pointer overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                      <CardContent className="p-0 relative">
                        {/* Animated Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff8e00]/5 via-transparent to-[#ff8e00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Left Orange accent bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff8e00] to-[#e67e00] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                        
                        <div className="p-6 relative z-10">
                          <div className="flex items-start space-x-4">
                            {/* Icon Container */}
                            <div className="relative">
                              <div className="bg-gradient-to-br from-[#ff8e00] to-[#e67e00] p-3 rounded-xl text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                {info.icon}
                              </div>
                              {/* Icon Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#ff8e00] to-[#e67e00] rounded-xl opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500 blur-md -z-10"></div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#ff8e00] transition-colors duration-300">
                                {info.title}
                              </h3>
                              <p className="text-[#ff8e00] font-semibold mb-2 text-lg group-hover:text-[#e67e00] transition-colors duration-300">
                                {info.details}
                              </p>
                              
                            </div>
                            

                          </div>
                          
                          {/* Decorative bottom element */}
                          <div className="absolute bottom-2 right-4 w-8 h-8 bg-gradient-to-br from-[#ff8e00]/20 to-[#ff8e00]/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Visit Our <span className="text-[#ff8e00]">Office</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Lahore, we're always ready to welcome you for an in-person consultation
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl card-border-animation">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8e00]/20 to-transparent pointer-events-none z-[1]"></div>
              <div className="w-full h-[600px] relative">
                <Map />
              </div>
              
              {/* Overlay Info Card */}
              <div className="absolute bottom-8 left-8 bg-white/95 map-overlay-card rounded-xl p-6 shadow-xl max-w-sm z-[2]">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff8e00] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">dondev Office</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Lahore, Punjab, Pakistan
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-[#ff8e00]/10 to-[#ff8e00]/5 rounded-full px-6 py-3 mb-6"
            >
              <span className="text-[#ff8e00] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked <span className="text-[#ff8e00]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical automation project take?",
                answer:
                  "Project timelines vary based on complexity, but most automation projects are completed within 4-12 weeks from initial consultation to deployment.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer:
                  "Yes, we offer comprehensive support packages including monitoring, updates, and optimization to ensure your automation solutions continue to perform optimally.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer:
                  "We specialize in creating seamless integrations with existing business systems, CRMs, databases, and third-party applications.",
              },
              {
                question: "What's the typical ROI for automation projects?",
                answer:
                  "Most clients see ROI within 6-12 months, with average cost savings of 40-60% in automated processes and significant productivity improvements.",
              },
              {
                question: "Do you work with small businesses or just enterprises?",
                answer:
                  "We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to your specific needs and budget.",
              },
              {
                question: "What happens if we need changes after deployment?",
                answer:
                  "We provide flexible maintenance and enhancement services. Minor adjustments are often included in support packages, while major changes are handled as separate projects.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
              >
                <Card className="faq-card h-full group cursor-pointer overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0 relative">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff8e00]/5 via-transparent to-[#ff8e00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Orange accent line */}
                    <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] group-hover:w-full transition-all duration-500"></div>
                    
                    <div className="p-8 relative z-10">
                      {/* Question Number Badge */}
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#ff8e00] to-[#e67e00] rounded-full text-white text-sm font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#ff8e00] transition-colors duration-300 leading-tight">
                        {faq.question}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {faq.answer}
                      </p>
                      
                      {/* Decorative element */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-[#ff8e00]/10 to-[#ff8e00]/5 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8e00]/5 via-transparent to-[#ff8e00]/5 animate-pulse"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ff8e00]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#ff8e00]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* CTA Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-flex items-center bg-gradient-to-r from-[#ff8e00]/20 to-[#ff8e00]/10 border border-[#ff8e00]/30 rounded-full px-6 py-3 mb-8"
            >
              <div className="w-2 h-2 bg-[#ff8e00] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#ff8e00] font-semibold text-sm uppercase tracking-wider">Let's Work Together</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8e00] to-[#e67e00] animate-pulse">Get Started ?</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Don't wait to transform your business. Schedule a free consultation today and discover how automation can
              <span className="text-[#ff8e00] font-semibold"> revolutionize your operations</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {/* Primary CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="cta-primary-button group relative overflow-hidden bg-gradient-to-r from-[#ff8e00] to-[#e67e00] text-white px-10 py-5 text-lg font-bold rounded-full shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e67e00] to-[#ff8e00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center">
                    Schedule Free Consultation
                    <motion.svg 
                      className="ml-3 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff8e00] to-[#e67e00] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
                </button>
              </motion.div>

              {/* Secondary CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/projects">
                  <button className="cta-secondary-button group relative overflow-hidden border-2 border-[#ff8e00] text-[#ff8e00] hover:text-white px-10 py-5 text-lg font-bold rounded-full bg-transparent transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative z-10 flex items-center">
                    View Our Work
                    <motion.svg 
                      className="ml-3 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </motion.svg>
                  </div>
                </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-gray-400 text-sm px-4"
            >
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3">Free Consultation</span>
              </div>
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3">24 Hour Response</span>
              </div>
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-3">No Long-term Contracts</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
