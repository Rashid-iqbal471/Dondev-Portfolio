"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: " Get Started", href: "/contact" },
  ]

  // Update the theme-nav-link color based on scroll position and page
  const navLinkClass = `theme-nav-link ${
    isScrolled || !isHome ? "text-black" : "text-white"
  }`

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0">
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled || !isHome ? "text-black" : "text-white"
              }`}
            >
              don<span className="text-[#ff8e00]">dev</span>
            </span>
            <span
              className={`text-sm font-medium transition-colors ${
                isScrolled || !isHome ? "text-black" : "text-white"
              }`}
            >
              Gateway to Automation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${navLinkClass} ${pathname === item.href ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
           
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled || !isHome ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || !isHome ? "text-black" : "text-white"}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 transition-colors hover:text-[#ff8e00] ${
                    pathname === item.href ? "text-[#ff8e00]" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation
