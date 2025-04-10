"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Product() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary via-accent to-blue-600 text-transparent bg-clip-text">
        My Products
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src="/brainwave2.png"
          alt="Brainwave Banner"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h2 className="text-4xl font-bold text-black mb-2">Brainwave</h2>
          <p className="text-xl text-black/80">
            AI-powered educational platform
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <p className="mb-4 text-lg">
            Brainwave is an AI-powered tool designed for schools. It helps with
            learning, simplifies administrative tasks, and supports both
            students and teachers in the classroom.
          </p>
          <p className="text-lg mb-4">
            It's a ChatGPT-like assistant built for education, similar to
            MagicSchool but with added features to make it more useful in a
            school setting.
          </p>
          <p className="text-lg">
            This product relates to my capstone project as it addresses the need
            for a better way to integrate AI in schools.
          </p>
        </CardContent>
        <CardFooter className="bg-accent/10 p-6">
          <Button
            asChild
            size="lg"
            className="font-semibold bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link
              href="https://brainwave.jonathanb.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Brainwave
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Brainwave Brochure</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="Front.png"
            alt="Front brochure"
            width={1080}
            height={720}
            className="rounded-lg shadow-lg my-2 border border-zinc-600"
          />
          <Image
            src="Back.png"
            alt="Back brochure"
            width={1080}
            height={720}
            className="rounded-lg shadow-lg my-2 border border-zinc-600"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
