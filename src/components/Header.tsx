"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/math-competency", label: "Math Competency" },
    { href: "/product", label: "Product" },
    { href: "/professional-skills", label: "Professional Skills" },
    { href: "/durable-skills", label: "Durable Skills" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-accent">
          Jonathan Bangert
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-accent",
                pathname === item.href ? "text-accent font-semibold" : "text-foreground/60",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 ml-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden px-4 py-2 bg-background border-t border-border/40">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block py-2 transition-colors hover:text-accent",
                pathname === item.href ? "text-accent font-semibold" : "text-foreground/60",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </motion.header>
  )
}

export default Header

