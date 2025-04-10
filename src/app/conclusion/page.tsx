"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function DurableSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
        Conclusion & Connection to Gladwell
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">conclusion here</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Connection to Gladwell</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            In ‘Outliers’, Gladwell talks about how success isn’t just about
            being smart or working hard. He emphasizes how important roles
            opportunities play for an individual's success. One idea I really
            resonated with was the term “Accumulative Advantage”. The idea that
            a small headstart early on can grow into something much bigger.
            Someone's education is probably the most important and early
            opportunity one gets in life, and right now, the entire field of
            education is being reshaped by a new technology, AI. Right now, many
            students are learning to use AI, but some aren't, and many again are
            using the technology to cheat and therefore jeopardise their own
            education. Therefore I wanted to look into, and truly understand how
            we can really integrate AI correctly, while preserving authentic
            learning and creativity.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
