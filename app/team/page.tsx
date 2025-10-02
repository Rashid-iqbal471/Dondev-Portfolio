"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
    {
        name: "Waliya Khan",
        role: "Co-Founder & CEO",
        expertise: ["Business Strategy", "Automation Solutions", "Team Leadership"],
        image: "/waliya_khan.jpg",
        bio: "Visionary co-founder driving dondev's mission to transform businesses through intelligent automation solutions.",
        social: {
            linkedin: "https://www.linkedin.com/in/waliyakhan",
            github: "https://github.com/WaliyaKhan882",
            email: "waliyashahkhan@gmail.com",
        },
    },
    {
        name: "H. Sibghat Ullah",
        role: "Co-Founder & CTO",
        expertise: ["Automation Engineering", "System Architecture", "Technical Strategy"],
        image: "/sibghat_ullah.jpg",
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
        expertise: ["Flutter Development", "Android & iOS Development", "Cross-platform Apps"],
        image: "/hafiz_muhammad_rehan.jpg",
        bio: "Lead Mobile App Developer with 6+ years of expertise in Flutter and Dart, specializing in creating high-performance mobile applications for startups and large organizations.",
        social: {
            linkedin: "https://www.linkedin.com/in/rehan-jutt/",
            github: "https://github.com/rehan-505",
            email: "rehan.attaullah@devsinc.com",
        },
    },
    {
        name: "Rashid Iqbal",
        role: "Automation Engineer",
        expertise: ["Process Automation", "Workflow Design", "Bubble.io"],
        image: "/rashid_iqbal.jpg",
        bio: "Specialist in workflow automation with expertise in Make, n8n, Zapier, and Bubble.io, helping businesses streamline processes and scale efficiently.",
        social: {
            linkedin: "https://www.linkedin.com/in/rashid-iqbal-wattoo-7bab12319",
            github: "https://github.com/Rashid-iqbal471",
            email: "rashidiqbalwrashidw@gmail.com",
        },
    },
    {
        name: "Waqas Ahmad",
        role: "Data Engineer",
        expertise: ["AWS", "PySpark", "Data Pipelines", "Big Data Technologies"],
        image: "/waqas_ahmad.jpg",
        bio: "Data Engineer with expertise in AWS and PySpark, experienced in building data pipelines, optimizing workflows, and delivering actionable insights.",
        social: {
            linkedin: "https://www.linkedin.com/in/im-waqas-ahmad",
            github: "https://github.com/waqas001-pu",
            email: "imwaqasahmad.pu@gmail.com",
        },
    },
    {
        name: "Abis Hussain",
        role: "AI Engineer",
        expertise: ["Artificial Intelligence", "Machine Learning", "AI Integration"],
        image: "/abis_hussain.jpg",
        bio: "AI Specialist developing intelligent automation solutions and AI-powered calling successful agents that streamline processes in industries.",
        social: {
            linkedin: "http://www.linkedin.com/in/abis-hussain",
            github: "https://github.com/AbisJaf",
            email: "abisjafry125@gmail.com",
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
        description:
            "We believe in creating solutions that maximize productivity and minimize waste across all platforms.",
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
        <div className="min-h-screen bg-white pt-16">
            {/* Header */}
            <section className="py-20 bg-gradient-to-r from-black to-gray-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-[#ff8e00]">Team</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Meet the experts behind dondev's innovative automation solutions and mobile applications
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section - keep only this section for the cards */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Our <span className="text-[#ff8e00]">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            What drives us to deliver exceptional automation solutions and mobile applications
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
                                <Card className="values-card h-full border p-8 text-center">
                                    <CardContent className="values-content p-0">
                                        <div className="values-icon mb-4">{value.icon}</div>
                                        <h3 className="values-title text-xl font-bold text-black mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="values-description text-gray-600">
                                            {value.description}
                                        </p>
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
                            Our diverse team brings together expertise from AI, automation, mobile development, and business
                            strategy
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
                                                        <a
                                                            href={member.social.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button
                                                                size="sm"
                                                                className="bg-[#ff8e00] hover:bg-[#e67e00]"
                                                            >
                                                                <Linkedin className="w-4 h-4" />
                                                            </Button>
                                                        </a>
                                                    )}
                                                    
                                                    {member.social.github && (
                                                        <a
                                                            href={member.social.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button
                                                                size="sm"
                                                                className="bg-[#ff8e00] hover:bg-[#e67e00]"
                                                            >
                                                                <Github className="w-4 h-4" />
                                                            </Button>
                                                        </a>
                                                    )}
                                                    {member.social.email && (
                                                        <a href={`mailto:${member.social.email}`}>
                                                            <Button
                                                                size="sm"
                                                                className="bg-[#ff8e00] hover:bg-[#e67e00]"
                                                            >
                                                                <Mail className="w-4 h-4" />
                                                            </Button>
                                                        </a>
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
                                                    <span
                                                        key={skill}
                                                        className="px-2 py-1 bg-orange-100 text-[#ff8e00] text-xs rounded-full"
                                                    >
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Join Our <span className="text-[#ff8e00]">Team</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Ready to be part of the automation and mobile development revolution? We're always looking for
                            talented individuals who share our passion for innovation and excellence.
                        </p>
                        <Link href="/careers">
                            <button
                                className="btn-border-animation"
                            >
                                View Open Positions
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
