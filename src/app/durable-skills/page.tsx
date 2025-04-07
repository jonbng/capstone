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
        Durable Skills
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Why I Chose These Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Communication and critical thinking are important for turning ideas
            into reality. Communication helped me interview people, and present
            my work in a way that made sense. Critical thinking allowed me to
            analyze data, solve problems quickly, and was used to develop my
            product.
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
            important insights into my topic. I also used communication for
            creating my website and presentation, making sure that my data was
            clear and easy to understand. Communication was important for
            writing my presentations and research writings in a way that
            effectively communcates my work in a way that makes sense to others.
            Throughout the project, I learned a lot about communication and how
            to effectively interview people and presenting my findings.
          </p>

          <Image
            src={"/presentation-screenshot.png"}
            alt="Presentation Screenshot"
            width={800}
            height={450}
            className="rounded-lg shadow-lg mt-4"
          />
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
            Critical thinking was important for the math part of my project and
            making sure my approach was logical and well structured. I had to
            use different solutions, and make sure everything worked as
            intended. It was also really important while I was developing my
            product. It hlped me think through challenges, analyze different
            options, and create something practical and effective. Last but not
            least, I used critical thinking while researching my topic. I had to
            judge different sources for credibility and relevance, and make sure
            the information was accurate.
          </p>

          <Image
            src={"/code-screenshot.png"}
            alt="Code Screenshot"
            width={800}
            height={450}
            className="rounded-lg shadow-lg mt-4"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
