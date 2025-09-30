"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true)
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
    { name: "Get Started", href: "/contact" },
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
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 w-full">
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
          <div className="hidden md:flex items-center justify-end space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  ${navLinkClass} 
                  ${pathname === item.href ? "active" : ""}
                `}
              >
                {item.name.trim()}
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="md:hidden bg-white border-l border-t border-gray-200 shadow-[-5px_5px_15px_rgba(0,0,0,0.1)] fixed top-16 right-0 max-w-[80%] w-[80%] z-50 rounded-bl-lg"
            >
              <div className="py-4 px-2 space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      block py-1 px-4 transition-all duration-200 text-lg
                      ${pathname === item.href 
                        ? "text-[#ff8e00] font-medium" 
                        : "text-gray-700 hover:text-[#ff8e00] hover:translate-x-1"
                      }
                      ${index === 0 && pathname !== "/" ? "" : (index === 0 ? "text-[#ff8e00] font-medium" : "")}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name.trim()}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation