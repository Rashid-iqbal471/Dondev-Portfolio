"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Filter,
  ArrowRight,
  Clock,
  Users,
  Star,
  Share2,
  BarChart3,
  FileText,
  Video,
  Phone,
  ShoppingCart,
  Globe,
  Smartphone,
  Bot,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  // Existing automation projects...
  {
    id: 1,
    title: "Social Media Automation Platform",
    category: "Social Media",
    description:
      "Comprehensive web application that streamlines posting workflows across multiple social media platforms with advanced scheduling, multi-account management, and detailed engagement analytics.",
    image: "/images/1751743358843.png",
    technologies: ["Make", "PHP", "HTML", "jQuery", "Bootstrap", "Social Media APIs"],
    results: "Automated posting across 15+ platforms, reduced manual effort by 85%, increased engagement by 40%",
    client: "Digital Marketing Agencies",
    duration: "5 weeks",
    teamSize: "3 developers",
    rating: 4.9,
    features: [
      "Multi-platform posting automation",
      "Advanced scheduling system",
      "Real-time analytics dashboard",
      "Account management interface",
      "Engagement tracking",
    ],
  },
  {
    id: 2,
    title: "GHL Lead Enrichment & Data Management",
    category: "Lead Generation",
    description:
      "End-to-end automated pipeline for lead enrichment that seamlessly integrates GoHighLevel, Clay, n8n, and NocoDB to create a comprehensive data management ecosystem.",
    image: "/images/compressed.jpg",
    technologies: ["GoHighLevel", "Clay", "n8n", "NocoDB", "Supabase", "Railway"],
    results: "95% improvement in lead data quality, automated processing of 10K+ leads monthly",
    client: "Sales & Marketing Teams",
    duration: "6 weeks",
    teamSize: "3 specialists",
    rating: 4.8,
    features: [
      "Automated lead data extraction",
      "AI-powered data enrichment",
      "Real-time data synchronization",
      "Custom data validation rules",
      "Advanced reporting dashboard",
    ],
  },
  {
    id: 3,
    title: "Aurora Solar to PandaDoc Integration Workflow",
    category: "Document Management",
    description:
      "Seamless integration workflow that automatically transfers solar project proposals from Aurora Solar to PandaDoc, enabling streamlined document generation and e-signature processes for solar installations.",
    image: "/images/compressed.jpg",
    technologies: ["n8n", "Aurora Solar API", "PandaDoc API", "Webhook Integration", "JSON Processing"],
    results: "95% reduction in manual document transfer time, automated proposal generation, seamless e-signature workflow",
    client: "Solar Energy Companies",
    duration: "3 weeks",
    teamSize: "2 developers",
    rating: 4.8,
    features: [
      "Automated project data transfer",
      "Dynamic document generation",
      "E-signature integration",
      "Real-time status updates",
      "Custom template management",
    ],
  },
  {
    id: 4,
    title: "Monday.com Monthly Invoice Automation",
    category: "Content Automation",
    description:
      "Automated invoicing system that generates monthly invoices from Monday.com project data, processes payment tracking, and integrates with accounting software for seamless financial management.",
    image: "/images/compressed.jpg",
    technologies: ["Monday.com API", "n8n", "QuickBooks Integration", "PDF Generation", "Email Automation"],
    results: "100% automated monthly invoicing, reduced billing errors by 98%, improved cash flow management",
    client: "Project Management & Consulting",
    duration: "6 weeks",
    teamSize: "3 developers",
    rating: 4.8,
    features: [
      "Automated invoice generation",
      "Project time tracking integration",
      "Payment status monitoring",
      "QuickBooks synchronization",
      "Client portal access",
    ],
  },
  {
    id: 5,
    title: "ShipStation to Monday.com Integration",
    category: "E-commerce",
    description:
      "Seamless integration workflow that automatically syncs ShipStation shipping data with Monday.com project boards, enabling real-time order tracking and team collaboration for e-commerce operations.",
    image: "/images/compressed.jpg",
    technologies: ["ShipStation API", "Monday.com API", "n8n", "Webhook Integration", "Real-time Sync"],
    results: "Real-time order tracking, 90% reduction in manual data entry, improved team collaboration",
    client: "E-commerce & Fulfillment",
    duration: "5 weeks",
    teamSize: "2 developers",
    rating: 4.8,
    features: [
      "Automated order synchronization",
      "Real-time tracking updates",
      "Team notification system",
      "Custom status mapping",
      "Performance analytics",
    ],
  },
  {
    id: 6,
    title: "Customer Feedback Response Automation",
    category: "Content Automation",
    description:
      "Intelligent automation system that monitors customer feedback across multiple platforms and generates personalized responses using AI, ensuring timely and professional customer engagement.",
    image: "/images/compressed.jpg",
    technologies: ["AI Response Generation", "Multi-platform Monitoring", "Sentiment Analysis", "Auto-Reply"],
    results: "24/7 customer response coverage, 95% faster response times, improved customer satisfaction",
    client: "Customer Service & Support",
    duration: "6 weeks",
    teamSize: "3 developers",
    rating: 4.9,
    features: [
      "Multi-platform monitoring",
      "AI-powered responses",
      "Sentiment analysis",
      "Escalation protocols",
      "Response analytics",
    ],
  },
  {
    id: 7,
    title: "WhatsApp Order Automation System",
    category: "E-commerce",
    description:
      "Innovative WhatsApp-based order management system that uses advanced NLP to process text and voice orders, creating seamless customer experiences with automated confirmations.",
    image: "/images/compressed.jpg",
    technologies: ["2Chat", "Make", "Trello", "NLP", "WhatsApp API", "Voice Processing"],
    results: "Streamlined order process, 65% faster order processing, 40% increase in customer satisfaction",
    client: "Restaurants & E-commerce",
    duration: "6 weeks",
    teamSize: "3 developers",
    rating: 4.8,
    features: [
      "Voice & text order processing",
      "NLP order extraction",
      "Automated order tracking",
      "Customer confirmations",
      "Inventory integration",
    ],
  },
  {
    id: 8,
    title: "Video Content Automation Platform",
    category: "Content Automation",
    description:
      "Advanced FastAPI-based automation service that intelligently downloads, segments, and merges video content with gameplay footage, creating engaging content for multiple social platforms.",
    image: "/images/compressed.jpg",
    technologies: ["Python", "FastAPI", "Cloudinary", "ChatGPT", "Make.com", "JSON2Video"],
    results: "Automated video content creation, multi-platform publishing, 80% reduction in editing time",
    client: "Content Creators & Gaming Channels",
    duration: "8 weeks",
    teamSize: "4 developers",
    rating: 4.7,
    features: [
      "Automated video segmentation",
      "Intelligent content merging",
      "AI-powered captions",
      "Multi-platform publishing",
      "Performance tracking",
    ],
  },
  {
    id: 9,
    title: "Web Automation Bot",
    category: "Web Automation",
    description:
      "Sophisticated Selenium-based automation bot with seamless Airtable integration, designed to handle complex web interactions and efficient data management across multiple platforms.",
    image: "/images/compressed.jpg",
    technologies: ["Python", "Selenium", "Airtable API", "Web Scraping", "Data Processing"],
    results: "Automated web interactions, 88% reduction in manual data entry, improved data accuracy by 95%",
    client: "Data Management Companies",
    duration: "5 weeks",
    teamSize: "2 developers",
    rating: 4.8,
    features: [
      "Automated web interactions",
      "Data extraction & processing",
      "Airtable synchronization",
      "Error handling & recovery",
      "Scheduled automation runs",
    ],
  },
  // New Web Applications
  {
    id: 10,
    title: "AI Slides Generator",
    category: "AI Solutions",
    description:
      "Transform articles and content into stunning presentations with AI assistance using ChatGPT and Google Slides API integration. Features intelligent content analysis and professional templates.",
    image: "/images/compressed.jpg",
    technologies: ["Python Flask", "OpenAI GPT API", "Google Slides API", "Bootstrap 5", "jQuery"],
    results: "AI-powered presentation creation, professional templates, direct Google Slides integration",
    client: "Content Creators & Businesses",
    duration: "4 weeks",
    teamSize: "3 developers",
    rating: 4.8,
    features: [
      "AI content processing",
      "Configurable slide count",
      "Template selection",
      "Real-time editing",
      "Google Slides export",
    ],
  },
  {
    id: 11,
    title: "AI Call Detector",
    category: "AI Solutions",
    description:
      "Advanced AI-powered system for detecting, analyzing, and monitoring phone calls with real-time processing capabilities and fraud detection features.",
    image: "/images/compressed.jpg",
    technologies: ["Python", "Machine Learning", "Audio Analysis APIs", "Zapier", "Real-time Processing"],
    results: "Real-time call analysis, fraud detection, comprehensive monitoring dashboard",
    client: "Call Centers & Security",
    duration: "8 weeks",
    teamSize: "4 specialists",
    rating: 4.9,
    features: [
      "Call detection & analysis",
      "Audio pattern recognition",
      "Analytics dashboard",
      "Security monitoring",
      "Real-time processing",
    ],
  },
  {
    id: 12,
    title: "Promise Pizza",
    category: "E-commerce",
    description:
      "Comprehensive online pizza ordering system with real-time tracking, customization options, and delivery management platform.",
    image: "/images/compressed.jpg",
    technologies: ["Web Framework", "Payment Gateway", "Order Management", "Zapier", "GPS Tracking"],
    results: "Complete pizza ordering solution, real-time tracking, customer management",
    client: "Food & Restaurant Industry",
    duration: "8 weeks",
    teamSize: "5 developers",
    rating: 4.7,
    features: [
      "Interactive menu customization",
      "Shopping cart management",
      "Payment processing",
      "Delivery tracking",
      "Customer profiles",
    ],
  },
  {
    id: 13,
    title: "Odeon Restaurant",
    category: "Web Development",
    description:
      "Elegant restaurant website featuring menu display, reservation system, and comprehensive customer management with event booking capabilities.",
    image: "/images/compressed.jpg",
    technologies: ["Frontend Framework", "Reservation System", "Customer Management", "Google Maps"],
    results: "Professional restaurant presence, online reservations, customer engagement",
    client: "Hospitality Industry",
    duration: "6 weeks",
    teamSize: "3 developers",
    rating: 4.8,
    features: [
      "Digital menu display",
      "Table reservations",
      "Chef profiles",
      "Event management",
      "Customer reviews",
    ],
  },
  {
    id: 14,
    title: "MD Appointment Booking",
    category: "Healthcare Solutions",
    description:
      "Comprehensive medical appointment booking system with patient management, doctor scheduling, and medical records integration. HIPAA-compliant healthcare platform.",
    image: "/images/compressed.jpg",
    technologies: ["Healthcare Framework", "HIPAA Compliance", "Database Security", "Billing Integration"],
    results: "Complete medical practice management, secure patient records, automated scheduling",
    client: "Healthcare Providers",
    duration: "10 weeks",
    teamSize: "5 specialists",
    rating: 4.9,
    features: [
      "Doctor profiles & scheduling",
      "Patient management",
      "Medical records",
      "Prescription management",
      "HIPAA compliance",
    ],
  },
  {
    id: 15,
    title: "AI Interactive Training",
    category: "AI Solutions",
    description:
      "Advanced AI-powered interactive training platform with voice synthesis, conversation agents, and personalized learning experiences for corporate and educational use.",
    image: "/images/compressed.jpg",
    technologies: ["AI Voice Synthesis", "Natural Language Processing", "Machine Learning", "Interactive UI"],
    results: "Personalized learning experiences, voice-powered training, adaptive skill assessment",
    client: "Educational & Corporate Training",
    duration: "12 weeks",
    teamSize: "5 specialists",
    rating: 4.8,
    features: [
      "Voice synthesis",
      "Conversational AI",
      "Personalized learning",
      "Skill assessment",
      "Multi-language support",
    ],
  }
  // Mobile App Projects
]

const categories = [
  { name: "All", icon: <Filter className="w-4 h-4" /> },
  { name: "Social Media", icon: <Share2 className="w-4 h-4" /> },
  { name: "Lead Generation", icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Document Management", icon: <FileText className="w-4 h-4" /> },
  { name: "Content Automation", icon: <Video className="w-4 h-4" /> },
  { name: "AI Solutions", icon: <Bot className="w-4 h-4" /> },
  { name: "E-commerce", icon: <ShoppingCart className="w-4 h-4" /> },
  { name: "Web Automation", icon: <Globe className="w-4 h-4" /> },
  { name: "Web Development", icon: <Globe className="w-4 h-4" /> },
  { name: "Healthcare Solutions", icon: <Heart className="w-4 h-4" /> },
  { name: "Mobile Development", icon: <Smartphone className="w-4 h-4" /> },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
    <section className="py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff8e00] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff8e00] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#ff8e00]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've transformed businesses through innovative automation solutions and mobile applications
              that drive real results
            </p>
            <div className="flex justify-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff8e00]">220+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff8e00]">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff8e00]">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-4 sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(category.name)}
                  className={`filter-button h-9 px-4 py-2 text-sm font-medium rounded-full ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#ff8e00] text-white font-semibold">{project.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold">{project.rating}</span>
                      </div>

                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#ff8e00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                      <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {project.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {project.teamSize}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-[#ff8e00] text-[#ff8e00]">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-600 mb-2">
                          <strong>Client:</strong> {project.client}
                        </p>
                        <Button
                          onClick={() => setSelectedProject(project)}
                          variant="outline"
                          className="w-full border-[#ff8e00] text-[#ff8e00] hover:bg-[#ff8e00] hover:text-white"
                        >
                          Learn More <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Proven <span className="text-[#ff8e00]">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automation solutions and mobile applications deliver measurable impact across all industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "85%", label: "Average Time Savings", icon: "⏱️" },
              { metric: "95%", label: "Data Accuracy Improvement", icon: "📊" },
              { metric: "60%", label: "Cost Reduction", icon: "💰" },
              { metric: "24/7", label: "Automated Operations", icon: "🔄" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:shadow-black/40 transition-shadow"              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#ff8e00] mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="bg-white/90 hover:bg-white text-black rounded-full w-10 h-10 p-0"
                  >
                    ×
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-[#ff8e00] text-white text-sm px-3 py-1">{selectedProject.category}</Badge>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedProject.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {selectedProject.teamSize}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                        {selectedProject.rating}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{selectedProject.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="text-[#ff8e00] mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} className="bg-[#ff8e00]/10 text-[#ff8e00] border-[#ff8e00]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-black mb-3">Results Achieved</h3>
                  <p className="text-gray-700">{selectedProject.results}</p>
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
