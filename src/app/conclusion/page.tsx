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
          <div className="space-y-4">
            <p className="text-lg">
              Schools need to stop treating AI like it's a threat or a shortcut. The best way to truly bring AI into schools is to focus on the new opportunities it opens up. You have to make sure students don't just think of AI as a tool that can do their homework for them, or speed up the process. Make them realize how powerful of a thinking partner and idea generator it is. That means just giving students access to AI isn't enough, we need dedicated units on showing how and when to use it.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">What students should learn about AI:</h3>
              <p className="text-sm text-muted-foreground mb-4">(based on research by Rachelle Dené Poth, Edutopia)</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>What AI actually is and where it's used</li>
                <li>The technology behind AI, like simple introductions to machine learning, algorithms and Generative AI</li>
                <li>How to spot misinformation/hallucinations and critically evaluate AI content</li>
                <li>The ethical part of AI, the biases, privacy concerns and how to ethically use it</li>
                <li>How not just to offload your critical thinking to AI, but use it like a tool</li>
              </ul>
            </div>
          </div>
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
