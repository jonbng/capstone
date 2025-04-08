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
          <p className="text-lg">works cited goes here</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
