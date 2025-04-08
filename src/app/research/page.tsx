"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DurableSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
        Research
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Research Writeup</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">writeup here</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Works Cited</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <p className="text-lg">
                Poth, Rachelle Dené. "Guiding Students to Develop AI Literacy." <em>Edutopia</em>, George Lucas Educational Foundation, 13 May 2024.
              </p>
              <a href="https://www.edutopia.org/article/ai-literacy-students/" className="text-blue-600 hover:underline">www.edutopia.org/article/ai-literacy-students/</a>
            </div>
            
            <div className="border-b pb-3">
              <p className="text-lg">
                Roose, Kevin. "Don't Ban ChatGPT in Schools. Teach With It." <em>The New York Times</em>, 12 Jan. 2023.
              </p>
              <a href="https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html" className="text-blue-600 hover:underline">www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html</a>
            </div>
            
            <div className="border-b pb-3">
              <p className="text-lg">
                Nagelhout, Ryan. "Students Are Using AI Already. Here's What They Think Adults Should Know." <em>Harvard Graduate School of Education</em>. Accessed 1 Apr. 2025.
              </p>
              <a href="https://www.gse.harvard.edu/ideas/usable-knowledge/24/09/students-are-using-ai-already-heres-what-they-think-adults-should-know" className="text-blue-600 hover:underline">www.gse.harvard.edu/ideas/usable-knowledge/24/09/students-are-using-ai-already-heres-what-they-think-adults-should-know</a>
            </div>
            
            <div>
              <p className="text-lg">
                Lindblom, Leah. Interview by Jonathan Bangert, March 3rd 2025. Full transcript available at <Link href="/professional-skills" className="text-blue-600 hover:underline">capstone.jonathanb.dk/professional-skills</Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
