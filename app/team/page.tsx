"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const teamMembers = [
  {
    name: "Waliya Shah Khan",
    role: "Co-Founder & CEO",
    expertise: ["Business Strategy", "Automation Solutions", "Team Leadership"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary co-founder driving DonDev's mission to transform businesses through intelligent automation solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "waliya@dondev.com",
    },
  },
  {
    name: "H. Sibghat Ullah",
    role: "Co-Founder & CTO",
    expertise: ["Automation Engineering", "System Architecture", "Technical Strategy"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technical co-founder specializing in automation workflows using Make, Zapier, n8n, and custom backend solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/sibghat-ullah-ba",
      github: "https://www.github.com/DrJamali",
      email: "usibghat670@gmail.com",
    },
  },
  {
    name: "Hafiz Muhammad Rehan",
    role: "Lead Mobile App Developer",
    expertise: ["Flutter Development", "Android Development", "iOS Development", "Cross-platform Apps"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "Lead mobile app developer with 6+ years of experience specializing in Flutter and Dart. Expert in building successful mobile applications for startups and large organizations.",
    social: {
      linkedin: "#",
      github: "#",
      email: "rehan.attaullah@devsinc.com",
    },
  },
  {
    name: "Syed Moiz Bukhari",
    role: "Business Developer Executive",
    expertise: ["Business Development", "Client Relations", "Market Strategy"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "Business development expert focused on expanding DonDev's reach and building strong client relationships.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "moiz@dondev.com",
    },
  },
  {
    name: "Wardah Tariq",
    role: "Business Developer",
    expertise: ["Sales Strategy", "Client Acquisition", "Market Analysis"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "Business developer specializing in identifying opportunities and driving growth through automation solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "wardah@dondev.com",
    },
  },
  {
    name: "Abis Hussain",
    role: "AI Engineer",
    expertise: ["Artificial Intelligence", "Machine Learning", "AI Integration"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "AI specialist developing intelligent automation solutions and AI-powered calling agents for various industries.",
    social: {
      linkedin: "#",
      github: "#",
      email: "abis@dondev.com",
    },
  },
  {
    name: "Rashid Iqbal",
    role: "Automation Engineer",
    expertise: ["Process Automation", "Workflow Design", "System Integration"],
    image: "/placeholder.svg?height=300&width=300",
    bio: "Automation engineer expert in designing and implementing efficient business process automation solutions.",
    social: {
      linkedin: "#",
      github: "#",
      email: "rashid@dondev.com",
    },
  },
]

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible with automation technology and mobile development.",
    icon: "🚀",
  },
  {
    title: "Efficiency",
    description: "We believe in creating solutions that maximize productivity and minimize waste across all platforms.",
    icon: "⚡",
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code to client service.",
    icon: "🏆",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#ff8e00]">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts behind DonDev's innovative automation solutions and mobile applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Our <span className="text-[#ff8e00]">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At DonDev, we're passionate about transforming businesses through intelligent automation and cutting-edge
              mobile applications. Our team of experts combines cutting-edge technology with deep industry knowledge to
              deliver solutions that drive real results. We believe that technology should empower people, not replace
              them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet the <span className="text-[#ff8e00]">Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise from AI, automation, mobile development, and business strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {member.social.linkedin && (
                            <Button size="sm" className="bg-[#ff8e00] hover:bg-[#e67e00]">
                              <Linkedin className="w-4 h-4" />
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button size="sm" className="bg-[#ff8e00] hover:bg-[#e67e00]">
                              <Twitter className="w-4 h-4" />
                            </Button>
                          )}
                          {member.social.github && (
                            <Button size="sm" className="bg-[#ff8e00] hover:bg-[#e67e00]">
                              <Github className="w-4 h-4" />
                            </Button>
                          )}
                          {member.social.email && (
                            <Button size="sm" className="bg-[#ff8e00] hover:bg-[#e67e00]">
                              <Mail className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                      <p className="text-[#ff8e00] font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-orange-100 text-[#ff8e00] text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join Our <span className="text-[#ff8e00]">Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to be part of the automation and mobile development revolution? We're always looking for talented
              individuals who share our passion for innovation and excellence.
            </p>
            <Button size="lg" className="bg-[#ff8e00] hover:bg-[#e67e00] text-white px-8 py-4 text-lg">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
