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
            Strong communication and critical thinking are essential for turning
            ideas into reality. Communication helped me gather insights from
            experts, collaborate effectively, and present my work clearly.
            Critical thinking allowed me to analyze data, solve problems
            efficiently, and ensure my project was both practical and
            innovative.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            Communication Throughout My Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            I used communication to interview Ms. Lindblom, which gave me
            valuable insights that shaped my project. It was also crucial for
            creating my website and presentation, ensuring that my findings were
            clear and easy to understand. Writing, presenting, and explaining my
            work effectively helped me share my ideas in a way that made sense
            to others.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            Critical Thinking Throughout My Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Critical thinking was key in tackling the math part of my project
            and making sure my approach was logical and well-structured. I had
            to break down complex problems, test different solutions, and make
            sure everything worked as intended. It also played a role in
            developing my product, helping me think through challenges, analyze
            different options, and create something practical and effective.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

