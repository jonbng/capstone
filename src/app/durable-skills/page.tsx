"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DurableSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
        Durable Skills
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Why I Chose These Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Communication Throughout My Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Throughout my project, effective communication played a crucial role in its success. I consistently engaged
            with my peers, mentors, and stakeholders, ensuring that everyone was aligned with the project's goals and
            progress. This involved regular updates, clear documentation, and the ability to articulate complex ideas in
            an accessible manner. By fostering open dialogue and actively listening to feedback, I was able to refine my
            approach and deliver a more impactful final product.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Critical Thinking Throughout My Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Critical thinking was at the core of my project development process. I consistently analyzed problems from
            multiple angles, evaluated the pros and cons of different solutions, and made informed decisions based on
            evidence and logical reasoning. This skill was particularly valuable when facing unexpected challenges or
            when navigating the ethical implications of AI in education. By applying critical thinking, I was able to
            develop innovative solutions that addressed complex issues while considering long-term impacts and potential
            unintended consequences.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

