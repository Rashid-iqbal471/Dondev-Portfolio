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

const CounterAnimation = ({ end, label }: { end: number; label: string }) => {
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
      <div className="text-4xl font-bold text-[#ff8e00]">{count}+</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
              <Button size="lg" className="bg-[#ff8e00] hover:bg-[#e67e00] text-white px-8 py-4 text-lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#ff8e00] text-[#ff8e00] hover:bg-[#ff8e00] hover:text-white px-8 py-4 text-lg bg-transparent"
                >
                  View Projects
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
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
                Why Choose <span className="text-[#ff8e00]">DonDev</span>?
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
              className="grid grid-cols-2 gap-8"
            >
              <CounterAnimation end={220} label="Projects Completed" />
              <CounterAnimation end={98} label="Client Satisfaction" />
              <CounterAnimation end={7} label="Team Members" />
              <CounterAnimation end={24} label="Support Hours" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to <span className="text-[#ff8e00]">Automate</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your business with our cutting-edge automation solutions and mobile applications. Let's discuss
              how we can help you achieve your goals.
            </p>

            <div className="max-w-md mx-auto space-y-4">
              <Input
                placeholder="Your Email"
                className="bg-white/10 border-[#ff8e00] text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-[#ff8e00] hover:bg-[#e67e00] text-white py-3">Get Free Consultation</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
