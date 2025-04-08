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
          <CardTitle className="text-3xl">
            Conclusion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            conclusion here
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            Connection to Gladwell
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            eyyyyy
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
