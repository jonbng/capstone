"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-accent to-blue-600 text-transparent bg-clip-text">
          Jonathan Bangert
        </h1>
        <p className="text-2xl text-muted-foreground">
          Capstone Portfolio: Students' Use of Generative AI in School
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="overflow-hidden w-full">
          <CardHeader className="pb-0">
            <CardTitle className="text-3xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-8 pt-6">
            <Image
              src="https://jonathanb.dk/pfp.jpg"
              alt="Jonathan Bangert"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col gap-2">
              <p className="flex-1 text-lg">
                I'm Jonathan Bangert, a 17-year-old exchange student from
                Denmark and a software engineer. I love building things that
                make technology more intuitive and impactful. I co-founded
                Akademia, work as a Software Engineer at Flimmer, and enjoy
                creating tools that last.
                <br />I am a Junior at Arvada West High School, and will be
                returning to Denmark this summer.
              </p>
              <Button
                onClick={() => window.open("https://jonathanb.dk", "_blank")}
              >
                Check out my personal website!
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl">
              My Interests and Future Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              I love creating, whether it’s software, games, or something
              entirely new. My goal is to build something that impacts millions
              of people. Beyond coding, I enjoy hiking, photography, and
              exploring new places, especially in the mountains.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl">My Topic</CardTitle>
            <CardDescription className="text-xl">
              Generative AI in Education
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg">
              AI is transforming education by making learning more personalized
              and effecient. It is here to stay, there is no way around it. But
              how do we integrate AI best into our education system? How do we
              preserve human creativity and critical thinking? I chose this
              topic because its something I am genuinely interested in, and I
              want to learn more about it.
            </p>
            {/* <div className="flex flex-wrap gap-2">
              <Badge className="text-base px-3 py-1">AI</Badge>
              <Badge className="text-base px-3 py-1">Education</Badge>
              <Badge className="text-base px-3 py-1">Technology</Badge>
              <Badge className="text-base px-3 py-1">Innovation</Badge>
            </div> */}
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
