"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MathCompetency() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
        Math Competency
      </h1>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl">
            Presentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            src="https://embed.figma.com/deck/xdrg5WmlOAqFEt3nHmZokT/Untitled?node-id=3-82&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
            allowFullScreen
            className="w-full aspect-[1.667] rounded-lg"
          />
          {/* Presentation goes here.  */}
          <embed
            src="https://cdn.prod.website-files.com/65f1d299b87bcc50550a6398/66a46f7b2a6137a25d3f69bb_Digital%20Education%20Council%20Global%20AI%20Student%20Survey%202024.pdf"
            width="100%"
            height="600"
            type="application/pdf"
          ></embed>
        </CardContent>
      </Card>
    </motion.div>
  );
}

