"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background shadow-md"
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/math-competency" className="hover:text-primary transition-colors">
              Math Competency
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-primary transition-colors">
              Product
            </Link>
          </li>
          <li>
            <Link href="/professional-skills" className="hover:text-primary transition-colors">
              Professional Skills
            </Link>
          </li>
          <li>
            <Link href="/durable-skills" className="hover:text-primary transition-colors">
              Durable Skills
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

