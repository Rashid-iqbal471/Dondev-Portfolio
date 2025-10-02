"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Business Process Automation", href: null },
      { name: "Workflow Optimization", href: null },
      { name: "Mobile App Development", href: null },
      { name: "Lead Generation Systems", href: null },
      { name: "Social Media Automation", href: null },
    ],
    Company: [
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ],
    Resources: [
      { name: "Portfolio", href: "/projects" },
      { name: "Case Studies", href: null },
      { name: "Client Reviews", href: null },
      { name: "Support", href: null },
    ],
  }



  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/don-dev", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "", label: "Twitter" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/DrJamali", label: "GitHub" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-20 md:pb-16 lg:pb-12 relative min-h-fit w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 text-center sm:text-left"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">
                dondev
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto sm:mx-0">
                Transforming businesses through intelligent automation and innovative digital solutions. 
                We deliver excellence in every project.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4 max-w-md mx-auto sm:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-4 h-4 text-orange-500 fill-current" />
                  <span className="text-2xl font-bold text-orange-500 ml-1">4.9</span>
                </div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 max-w-md mx-auto sm:mx-0">
              <div className="flex items-center justify-center sm:justify-start text-gray-300">
                <Mail className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm">dondevofficial@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-300">
                <Phone className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm">+92 312 4174618</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-300">
                <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-lg font-semibold mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 group flex items-center justify-center sm:justify-start"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ) : (
                      <span className="text-gray-400 cursor-default block">
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800/50 pt-8 pb-16 md:pb-12 lg:pb-8 mt-6 mb-8"
        >
          <div className="flex flex-col gap-6 lg:gap-4 lg:flex-row justify-between items-center">
            {/* Left side - Company info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="text-gray-400">
                © {currentYear} <span className="text-orange-500 font-semibold">dondev</span>. All rights reserved.
              </div>
              
            </div>

            {/* Center - Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-sm text-gray-400 hidden md:block">Follow us:</span>
              <div className="flex justify-center sm:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-500/20 transition-all duration-300 group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <div className="flex space-x-6 text-gray-400">
                <Link 
                  href="#" 
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="#" 
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="#" 
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
