"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Bot, BarChart3, Cog, CheckCircle, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const TypedText = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return <span className="text-[#ff8e00]">{currentText}</span>
}

const CounterAnimation = ({ end, label, className }: { end: number; label: string; className?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const increment = end / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center">
      <div className={className || "text-4xl font-bold text-[#ff8e00]"}>{count}+</div>
      {label && <div className="text-gray-600">{label}</div>}
    </div>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [])

  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Business Process Automation",
      description:
        "Streamline operations and eliminate repetitive tasks with custom automation workflows using Make, Zapier, and n8n.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Optimization",
      description: "Design and implement efficient workflows that integrate various tools and platforms seamlessly.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Lead Generation & Management",
      description: "Automated lead enrichment, data synchronization, and CRM integration for enhanced sales processes.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description:
        "Leverage AI calling agents, content generation, and intelligent data processing for advanced automation.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Flutter development for cross-platform apps, Android & iOS solutions, and comprehensive mobile experiences.",
    },
  ]

  const benefits = [
    "Reduce operational costs by up to 70%",
    "Automate repetitive business tasks",
    "Seamless tool and platform integration",
    "Custom automation solutions",
    "Expert implementation and support",
    "Flutter mobile app development",
    "AI-powered web applications",
    "Healthcare & E-commerce solutions",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff8e00] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff8e00] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              don<span className="text-[#ff8e00]">dev</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">Gateway to Automation</p>
            <div className="text-xl md:text-2xl text-white mb-12 h-8">
              <TypedText
                texts={[
                  "Business Process Automation",
                  "Mobile App Development",
                  "Workflow Optimization",
                  "Lead Generation Systems",
                  "Social Media Automation",
                ]}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Get Started Button */}
              <Link href="/contact" className="button-container">
                <Button
                  size="lg"
                  className="bg-[#ff8e00] hover:bg-[#e67e00] text-white px-8 py-4 text-lg button-main relative overflow-hidden"
                >
                  <span className="button-text transition-all duration-300">Get Started</span>
                  <span className="button-slide absolute top-0 left-[-100%] w-full h-full bg-[#e67e00] transition-all duration-300 flex items-center justify-center">
                    <span className="go-text font-bold">Visit Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>

              {/* View Projects Button */}
              <Link href="/projects" className="button-container">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#ff8e00] text-[#ff8e00] hover:bg-[#ff8e00] hover:text-white px-8 py-4 text-lg bg-transparent button-main relative overflow-hidden"
                >
                  <span className="button-text transition-all duration-300">View Projects</span>
                  <span className="button-slide absolute top-0 left-[-100%] w-full h-full bg-[#ff8e00] transition-all duration-300 flex items-center justify-center text-white">
                    <span className="go-text font-bold">Go</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="text-[#ff8e00]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating intelligent automation solutions and mobile applications that transform how
              businesses operate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="holographic-card h-full border-0 shadow-lg">
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="text-[#ff8e00] mb-4 flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                Why Choose <span className="text-[#ff8e00]">dondev ?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#ff8e00] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff8e00]/5 via-transparent to-[#ff8e00]/10 rounded-3xl blur-xl"></div>
              
              <div className="relative grid grid-cols-2 gap-6 p-8 bg-gradient-to-br from-white via-gray-50/50 to-orange-50/30 rounded-2xl border border-[#ff8e00]/10 shadow-xl">
                {[
                  { end: 50, label: "Projects Completed", icon: "🚀" },
                  { end: 98, label: "Client Satisfaction", icon: "⭐" },
                  { end: 7, label: "Team Members", icon: "👥" },
                  { end: 24, label: "Support Hours", icon: "🕒" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="stats-card group relative overflow-hidden"
                  >
                    {/* Card background with hover effect */}
                    <div className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100 group-hover:border-[#ff8e00]/20 transition-all duration-300">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8e00]/5 via-transparent to-[#ff8e00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-xl"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <motion.div 
                          className="text-2xl mb-3"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {stat.icon}
                        </motion.div>
                        
                        {/* Counter */}
                        <div className="mb-2">
                          <CounterAnimation 
                            end={stat.end} 
                            label="" 
                            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8e00] to-[#e67e00] group-hover:from-[#e67e00] group-hover:to-[#ff8e00] transition-all duration-300"
                          />
                        </div>
                        
                        {/* Label */}
                        <p className="text-sm font-semibold text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                          {stat.label}
                        </p>
                        
                        {/* Decorative element */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#ff8e00]/20 to-[#ff8e00]/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff8e00]/5 via-transparent to-[#ff8e00]/5 animate-pulse"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#ff8e00]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#ff8e00]/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#ff8e00] rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#ff8e00] rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#ff8e00] rounded-full animate-bounce delay-1000"></div>
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
              <motion.div 
                className="w-2 h-2 bg-[#ff8e00] rounded-full mr-3"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#ff8e00] font-semibold text-sm uppercase tracking-wider">Transform Your Business</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Ready to{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8e00] via-[#ff8e00] to-[#e67e00]">
                  Automate
                </span>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-[#ff8e00] ml-2"
                >
                  ?
                </motion.span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your business with our{" "}
              <span className="text-[#ff8e00] font-semibold">cutting-edge automation solutions</span>{" "}
              and mobile applications. Let's discuss how we can help you achieve your goals.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact">
                  <button className="cta-button group relative overflow-hidden bg-gradient-to-r from-[#ff8e00] to-[#e67e00] text-white px-8 py-4 h-14 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 whitespace-nowrap">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#e67e00] to-[#ff8e00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      Get Free Consultation
                      <motion.svg 
                        className="ml-2 w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff8e00] to-[#e67e00] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300"></div>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm"
            >
              <div className="flex items-center w-full sm:w-auto justify-start">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span>100% Free Consultation</span>
              </div>
              <div className="flex items-center w-full sm:w-auto justify-start">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span>Quick 24hr Response</span>
              </div>
              <div className="flex items-center w-full sm:w-auto justify-start">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-r from-[#ff8e00] to-[#e67e00] rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <span>No Commitment Required</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
